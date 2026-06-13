import { useEffect, useRef } from 'react';
import { lerp } from '../utils/smoothScroll';

export function BackgroundAnimation() {
  const layer1 = useRef<HTMLDivElement | null>(null);
  const layer2 = useRef<HTMLDivElement | null>(null);
  const layer3 = useRef<HTMLDivElement | null>(null);
  const layer4 = useRef<HTMLDivElement | null>(null);
  const layer5 = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement | null>(null);
  const meteorsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const layers = [layer1, layer2, layer3, layer4, layer5];
    const speeds = [-0.1, -0.06, -0.04, -0.08, -0.05];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let smoothY = window.scrollY;

    const tick = () => {
      smoothY = prefersReduced ? window.scrollY : lerp(smoothY, window.scrollY, 0.1);
      layers.forEach((ref, i) => {
        if (ref.current) {
          ref.current.style.transform = `translateY(${smoothY * speeds[i]}px)`;
        }
      });
      if (!prefersReduced) raf = requestAnimationFrame(tick);
    };

    smoothY = window.scrollY;
    if (prefersReduced) tick();
    else raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const colors = [
      'rgba(34,211,238,0.7)',
      'rgba(59,130,246,0.6)',
      'rgba(167,139,250,0.55)',
      'rgba(52,211,153,0.5)',
      'rgba(244,114,182,0.45)',
    ];

    const docH = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    container.style.height = `${docH}px`;

    for (let i = 0; i < 70; i++) {
      const particle = document.createElement('div');
      particle.className = 'animated-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.boxShadow = `0 0 ${Math.random() * 14 + 6}px ${color}`;
      const duration = Math.random() * 12 + 10;
      particle.style.animation = `float-particle ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * duration}s`;
      container.appendChild(particle);
    }

    const ro = new ResizeObserver(() => {
      const h = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      container.style.height = `${h}px`;
    });
    ro.observe(document.body);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const container = meteorsRef.current;
    if (!container) return;

    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'bg-meteor';
      meteor.style.left = `${Math.random() * 80 + 10}%`;
      meteor.style.top = `${Math.random() * 30}%`;
      meteor.style.animationDuration = `${Math.random() * 2 + 2}s`;
      meteor.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(meteor);

      meteor.addEventListener('animationend', () => meteor.remove());
    };

    const interval = setInterval(createMeteor, 2800);
    for (let i = 0; i < 3; i++) createMeteor();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-animated" aria-hidden>
      <div className="bg-aurora" />
      <div className="bg-aurora bg-aurora--secondary" />
      <div className="bg-mesh" />
      <div className="bg-beams" />
      <div ref={meteorsRef} className="meteors-container" />
      <div ref={layer1} className="bg-layer bg-layer--1" />
      <div ref={layer2} className="bg-layer bg-layer--2" />
      <div ref={layer3} className="bg-layer bg-layer--3" />
      <div ref={layer4} className="bg-layer bg-layer--4" />
      <div ref={layer5} className="bg-layer bg-layer--5" />
      <div ref={particlesRef} className="particles-container" />
      <div className="bg-vignette" />
    </div>
  );
}
