import { Github, Linkedin, Mail, FileText, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600">Anvi Kahar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-700 mb-6">
              Node.js, React & MySQL Developer
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Creative web and API developer dedicated to building high-performance, user-centric applications. Expertise in creating dynamic APIs, admin panels, and scalable solutions for national and global companies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="mailto:anvikahar94@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-slate-800 border-2 border-slate-800 px-6 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="/anvi_cv.docx (1) (1).pdf"
                download
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <FileText size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-slate-200">
                <img
                  src="/profilr.jpg"
                  alt="Anviben Kahar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl text-slate-400">👤</div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                <Globe size={18} />
                <p className="text-sm font-semibold">Available for remote work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
