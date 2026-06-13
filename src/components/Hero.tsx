import { useEffect, useState } from 'react';
import { Mail, FileText, ArrowDown, Code2, Terminal, Braces } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { scrollToSection } from '../utils/smoothScroll';

const roles = [
  'Full-Stack Developer',
  'Node.js Engineer',
  'React Specialist',
  'API Architect',
];

const techStack = ['React', 'Node.js', 'TypeScript', 'MySQL', 'Next.js', 'AWS'];

const codeLines = [
  { indent: 0, tokens: [{ t: 'const', c: 'keyword' }, { t: ' developer', c: 'plain' }, { t: ' =', c: 'plain' }, { t: ' {', c: 'plain' }] },
  { indent: 1, tokens: [{ t: 'name', c: 'prop' }, { t: ': ', c: 'plain' }, { t: '"Anvi Kahar"', c: 'string' }, { t: ',', c: 'plain' }] },
  { indent: 1, tokens: [{ t: 'role', c: 'prop' }, { t: ': ', c: 'plain' }, { t: '"Full-Stack"', c: 'string' }, { t: ',', c: 'plain' }] },
  { indent: 1, tokens: [{ t: 'stack', c: 'prop' }, { t: ': [', c: 'plain' }, { t: '"React"', c: 'string' }, { t: ', ', c: 'plain' }, { t: '"Node.js"', c: 'string' }, { t: ', ', c: 'plain' }, { t: '"MySQL"', c: 'string' }, { t: '],', c: 'plain' }] },
  { indent: 1, tokens: [{ t: 'available', c: 'prop' }, { t: ': ', c: 'plain' }, { t: 'true', c: 'bool' }] },
  { indent: 0, tokens: [{ t: '};', c: 'plain' }] },
];

const tokenColors: Record<string, string> = {
  keyword: 'text-violet-400',
  prop: 'text-cyan-300',
  string: 'text-emerald-400',
  bool: 'text-amber-400',
  plain: 'text-slate-400',
};

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '80+', label: 'APIs Built' },
  { value: '16+', label: 'Projects Delivered' },
];

export function Hero() {
  const role = useTypewriter(roles, 70, 40, 2200);
  const [mounted, setMounted] = useState(false);
  const [codeVisible, setCodeVisible] = useState(0);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (codeVisible >= codeLines.length) return;
    const timer = setTimeout(() => setCodeVisible((n) => n + 1), 320);
    return () => clearTimeout(timer);
  }, [mounted, codeVisible]);

  const scrollToProjects = () => scrollToSection('projects');

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center px-4 pb-12 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-14">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="hero-glow hero-glow--cyan absolute -left-20 -top-20 h-80 w-80 rounded-full" />
            <div className="hero-glow hero-glow--violet absolute -bottom-16 right-0 h-72 w-72 rounded-full" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Left — copy */}
            <div className="space-y-7">
              <div
                className={`hero-enter ${mounted ? 'hero-enter--visible' : ''}`}
                style={{ transitionDelay: '0ms' }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
                  <span className="hero-pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
                  Available for remote work
                </span>
              </div>

              <div
                className={`hero-enter ${mounted ? 'hero-enter--visible' : ''}`}
                style={{ transitionDelay: '100ms' }}
              >
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  Hello, world —
                </p>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  I&apos;m{' '}
                  <span className="hero-gradient-text">Anvi Kahar</span>
                </h1>
              </div>

              <div
                className={`hero-enter ${mounted ? 'hero-enter--visible' : ''}`}
                style={{ transitionDelay: '200ms' }}
              >
                <h2 className="flex min-h-[2.5rem] items-center text-xl font-semibold text-slate-300 sm:text-2xl">
                  <Terminal size={22} className="mr-2 shrink-0 text-cyan-400" />
                  <span>{role}</span>
                  <span className="hero-cursor ml-0.5 inline-block h-6 w-0.5 bg-cyan-400" />
                </h2>
              </div>

              <p
                className={`hero-enter max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg ${mounted ? 'hero-enter--visible' : ''}`}
                style={{ transitionDelay: '300ms' }}
              >
                I build high-performance web applications, scalable REST APIs, and
                real-time systems for startups and enterprises. Passionate about
                clean architecture, developer experience, and shipping products
                that scale.
              </p>

              {/* Tech stack */}
              <div
                className={`hero-enter flex flex-wrap gap-2 ${mounted ? 'hero-enter--visible' : ''}`}
                style={{ transitionDelay: '400ms' }}
              >
                {techStack.map((tech, i) => (
                  <span
                    key={tech}
                    className="hero-tech-pill rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                    style={{ animationDelay: `${500 + i * 80}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div
                className={`hero-enter flex flex-wrap gap-3 ${mounted ? 'hero-enter--visible' : ''}`}
                style={{ transitionDelay: '500ms' }}
              >
                <a
                  href="mailto:anvikahar94@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 hover:shadow-cyan-400/30"
                >
                  <Mail size={18} />
                  Get In Touch
                </a>
                <a
                  href="/Anvi_Kahar_Resume2026.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
                >
                  <FileText size={18} />
                  Download Resume
                </a>
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  <Code2 size={18} />
                  View Projects
                </button>
              </div>

              {/* Stats */}
              <div
                className={`hero-enter grid grid-cols-3 gap-4 border-t border-white/10 pt-6 ${mounted ? 'hero-enter--visible' : ''}`}
                style={{ transitionDelay: '600ms' }}
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                    <p className="text-xs text-slate-500 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — profile + code terminal */}
            <div
              className={`hero-enter flex flex-col items-center gap-6 ${mounted ? 'hero-enter--visible' : ''}`}
              style={{ transitionDelay: '250ms' }}
            >
              {/* Profile */}
              <div className="relative">
                <div className="hero-orbit-ring absolute inset-0 rounded-full" />
                <div className="hero-orbit-ring hero-orbit-ring--reverse absolute inset-2 rounded-full" />
                <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-white/20 bg-slate-800 shadow-2xl sm:h-64 sm:w-64">
                  <img
                    src="/profilr.jpg"
                    alt="Anvi Kahar"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML =
                        '<div class="flex h-full w-full items-center justify-center text-6xl text-slate-500">👤</div>';
                    }}
                  />
                </div>
                <div className="hero-float-badge absolute -left-2 top-8 flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/90 px-3 py-2 text-xs font-medium text-cyan-300 shadow-lg backdrop-blur-sm">
                  <Braces size={14} />
                  TypeScript
                </div>
                <div
                  className="hero-float-badge absolute -right-2 bottom-16 flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/90 px-3 py-2 text-xs font-medium text-emerald-300 shadow-lg backdrop-blur-sm"
                  style={{ animationDelay: '1.5s' }}
                >
                  <Terminal size={14} />
                  Node.js
                </div>
              </div>

              {/* Code terminal */}
              <div className="w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-slate-900/90 shadow-xl">
                <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800/80 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-slate-500">developer.ts</span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 sm:text-sm">
                  {codeLines.map((line, i) => (
                    <div
                      key={i}
                      className={`transition-opacity duration-300 ${i < codeVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                    >
                      {line.tokens.map((tok, j) => (
                        <span key={j} className={tokenColors[tok.c]}>
                          {tok.t}
                        </span>
                      ))}
                    </div>
                  ))}
                  {codeVisible >= codeLines.length && (
                    <span className="hero-cursor inline-block h-4 w-0.5 bg-cyan-400" />
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className={`hero-enter mt-8 flex justify-center ${mounted ? 'hero-enter--visible' : ''}`}
          style={{ transitionDelay: '900ms' }}
        >
          <button
            onClick={() => scrollToSection('skills')}
            className="flex flex-col items-center gap-1 text-slate-500 transition hover:text-cyan-400"
            aria-label="Scroll to skills"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ArrowDown size={18} className="hero-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
