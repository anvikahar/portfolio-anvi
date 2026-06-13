import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/smoothScroll';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      const dark = saved === 'dark';
      setIsDark(dark);
      document.documentElement.classList.toggle('dark', dark);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const goToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/50 shadow-sm z-50 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">Portfolio</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => goToSection('home')}
                className="text-slate-100 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => goToSection('skills')}
                className="text-slate-100 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => goToSection('projects')}
                className="text-slate-100 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => goToSection('experience')}
                className="text-slate-100 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => goToSection('contact')}
                className="text-slate-100 hover:text-cyan-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              {/* <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-cyan-300 bg-transparent"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button> */}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-100 hover:text-cyan-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-slate-800/60">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => goToSection('home')}
              className="block w-full text-left text-slate-100 hover:text-cyan-300 hover:bg-slate-900/60 px-3 py-2 text-base font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => goToSection('skills')}
              className="block w-full text-left text-slate-100 hover:text-cyan-300 hover:bg-slate-900/60 px-3 py-2 text-base font-medium transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => goToSection('projects')}
              className="block w-full text-left text-slate-100 hover:text-cyan-300 hover:bg-slate-900/60 px-3 py-2 text-base font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => goToSection('experience')}
              className="block w-full text-left text-slate-100 hover:text-cyan-300 hover:bg-slate-900/60 px-3 py-2 text-base font-medium transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => goToSection('contact')}
              className="block w-full text-left text-slate-100 hover:text-cyan-300 hover:bg-slate-900/60 px-3 py-2 text-base font-medium transition-colors"
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-full inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-cyan-300 bg-transparent"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                <span className="ml-2">Theme</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
