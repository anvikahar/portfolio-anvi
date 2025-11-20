import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-slate-800">Portfolio</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 text-base font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 text-base font-medium transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 text-base font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 text-base font-medium transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 text-base font-medium transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
