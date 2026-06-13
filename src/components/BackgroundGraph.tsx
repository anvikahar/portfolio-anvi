import { useEffect, useRef } from 'react';
import { lerp } from '../utils/smoothScroll';

const SECTION_IDS = ['home', 'skills', 'projects', 'experience', 'contact'] as const;

interface Point {
  x: number;
  y: number;
}

interface Waypoint extends Point {
  id: string;
  label: string;
}

export function BackgroundGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let smoothProgress = 0;

    const labels: Record<(typeof SECTION_IDS)[number], string> = {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    };

    function loop() {
      draw();
      if (!prefersReduced) rafRef.current = requestAnimationFrame(loop);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /** Place nodes inside each section — zigzag across the page */
    function getWaypoints(): Waypoint[] {
      const isMobile = width < 768;

      return SECTION_IDS.map((id, i) => {
        const el = document.getElementById(id);
        if (!el) {
          return { x: width * 0.5, y: height * 0.5, id, label: labels[id] };
        }

        const rect = el.getBoundingClientRect();
        const xRatios = isMobile
          ? [0.5, 0.28, 0.72, 0.35, 0.65]
          : [0.28, 0.72, 0.32, 0.68, 0.5];
        const yRatio = isMobile ? 0.32 : 0.38;

        return {
          x: rect.left + rect.width * xRatios[i],
          y: rect.top + rect.height * yRatio,
          id,
          label: labels[id],
        };
      });
    }

    function getSectionProgress() {
      const scrollY = window.scrollY + window.innerHeight * 0.38;
      const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      if (sections.length < 2) return 0;

      const anchors = sections.map((el) => el.offsetTop + el.offsetHeight * 0.4);
      if (scrollY <= anchors[0]) return 0;
      if (scrollY >= anchors[anchors.length - 1]) return 1;

      for (let i = 0; i < anchors.length - 1; i++) {
        if (scrollY >= anchors[i] && scrollY < anchors[i + 1]) {
          const local = (scrollY - anchors[i]) / (anchors[i + 1] - anchors[i]);
          return (i + local) / (anchors.length - 1);
        }
      }
      return 1;
    }

    function getActiveIndex() {
      const marker = window.scrollY + window.innerHeight * 0.42;
      let active = 0;
      SECTION_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const mid = el.offsetTop + el.offsetHeight * 0.5;
        if (marker >= mid - window.innerHeight * 0.22) active = i;
      });
      return active;
    }

    function buildPath(waypoints: Waypoint[]): Point[] {
      const points: Point[] = [];
      if (waypoints.length < 2) return points;

      const steps = width < 768 ? 32 : 48;

      for (let i = 0; i < waypoints.length - 1; i++) {
        const a = waypoints[i];
        const b = waypoints[i + 1];

        for (let s = 0; s <= steps; s++) {
          if (i > 0 && s === 0) continue;
          const t = s / steps;
          const u = 1 - t;
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const wobble =
            Math.sin(t * Math.PI * 2.5 + i * 1.2) * (width < 768 ? 12 : 20);

          points.push({
            x: u * u * a.x + 2 * u * t * midX + t * t * b.x + wobble,
            y: u * u * a.y + 2 * u * t * midY + t * t * b.y,
          });
        }
      }

      return points;
    }

    function strokePath(points: Point[], end: number, w: number, color: string) {
      if (end < 1 || points.length < 2) return;
      const slice = points.slice(0, end + 1);

      ctx.beginPath();
      slice.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else {
          const prev = slice[i - 1];
          const mx = (prev.x + p.x) / 2;
          const my = (prev.y + p.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
        }
      });
      ctx.lineWidth = w;
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }

    function interpolatePoint(a: Point, b: Point, t: number): Point {
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
    }

    function drawPointer(from: Point, to: Point, active: boolean) {
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.lineWidth = active ? 2.5 : 1.5;
      ctx.strokeStyle = active ? 'rgba(0, 255, 200, 0.7)' : 'rgba(0, 255, 200, 0.25)';
      ctx.setLineDash(active ? [] : [6, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      const size = width < 768 ? 10 : 14;
      const tipX = to.x - Math.cos(angle) * 16;
      const tipY = to.y - Math.sin(angle) * 16;

      ctx.beginPath();
      ctx.moveTo(tipX + Math.cos(angle) * size, tipY + Math.sin(angle) * size);
      ctx.lineTo(tipX + Math.cos(angle + 2.4) * size, tipY + Math.sin(angle + 2.4) * size);
      ctx.lineTo(tipX + Math.cos(angle - 2.4) * size, tipY + Math.sin(angle - 2.4) * size);
      ctx.closePath();
      ctx.fillStyle = active ? 'rgba(0, 255, 200, 0.95)' : 'rgba(0, 255, 200, 0.4)';
      ctx.fill();
    }

    function drawNode(wp: Waypoint, state: 'past' | 'active' | 'future') {
      if (wp.y < -80 || wp.y > height + 80) return;

      const isMobile = width < 768;
      const r = state === 'active' ? 10 : 7;

      ctx.beginPath();
      ctx.arc(wp.x, wp.y, r + 8, 0, Math.PI * 2);
      ctx.fillStyle =
        state === 'active'
          ? 'rgba(255, 100, 255, 0.35)'
          : state === 'past'
            ? 'rgba(0, 255, 200, 0.22)'
            : 'rgba(148, 163, 184, 0.1)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(wp.x, wp.y, r, 0, Math.PI * 2);
      ctx.fillStyle =
        state === 'active'
          ? 'rgba(0, 255, 200, 1)'
          : state === 'past'
            ? 'rgba(0, 255, 200, 0.7)'
            : 'rgba(100, 116, 139, 0.45)';
      ctx.fill();

      if (state !== 'future') {
        ctx.beginPath();
        ctx.arc(wp.x, wp.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }

      ctx.font = `600 ${isMobile ? 10 : 12}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillStyle =
        state === 'active'
          ? 'rgba(255, 255, 255, 0.95)'
          : state === 'past'
            ? 'rgba(203, 213, 225, 0.7)'
            : 'rgba(148, 163, 184, 0.4)';
      ctx.fillText(wp.label, wp.x, wp.y - r - 10);
    }

    function drawProgressDot(tip: Point) {
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 16, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 200, 0.18)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 200, 1)';
      ctx.fill();
    }

    function draw() {
      if (!ctx) return;

      const waypoints = getWaypoints();
      const path = buildPath(waypoints);
      if (path.length < 2) return;

      const targetProgress = getSectionProgress();
      smoothProgress = prefersReduced
        ? targetProgress
        : lerp(smoothProgress, targetProgress, 0.09);

      const activeIndex = getActiveIndex();
      const targetIndex = Math.min(activeIndex + 1, waypoints.length - 1);

      const floatIndex = (0.04 + smoothProgress * 0.96) * (path.length - 1);
      const revealIndex = Math.max(2, Math.floor(floatIndex));
      const tipT = floatIndex - revealIndex;
      const tip =
        revealIndex >= path.length - 1
          ? path[path.length - 1]
          : interpolatePoint(path[revealIndex], path[revealIndex + 1], tipT);

      const isMobile = width < 768;

      ctx.clearRect(0, 0, width, height);

      strokePath(path, path.length - 1, isMobile ? 2 : 3, 'rgba(148, 163, 184, 0.15)');
      strokePath(path, revealIndex, isMobile ? 18 : 26, 'rgba(0, 255, 200, 0.14)');
      strokePath(path, revealIndex, isMobile ? 7 : 9, 'rgba(0, 255, 200, 0.5)');
      strokePath(path, revealIndex, isMobile ? 3 : 4, 'rgba(0, 255, 200, 1)');

      drawProgressDot(tip);

      const activeWp = waypoints[activeIndex];
      const targetWp = waypoints[targetIndex];
      if (activeWp && targetWp && activeIndex < waypoints.length - 1) {
        drawPointer(tip, targetWp, true);
      }

      waypoints.forEach((wp, i) => {
        const state = i < activeIndex ? 'past' : i === activeIndex ? 'active' : 'future';
        drawNode(wp, state);
      });
    }

    function start() {
      resize();
      smoothProgress = getSectionProgress();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (prefersReduced) draw();
      else loop();
    }

    window.addEventListener('resize', start);
    resize();
    const boot = setTimeout(start, 120);
    window.addEventListener('load', start);

    return () => {
      window.removeEventListener('resize', start);
      window.removeEventListener('load', start);
      clearTimeout(boot);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-graph" aria-hidden />;
}
