import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.12 });
  return (
    <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div ref={ref as any} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 reveal ${visible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities
          </p>
        </div>

        <div className={`max-w-4xl mx-auto reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/15">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 border border-blue-500/30 p-3 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a
                      href="mailto:anvikahar94@gmail.com"
                      className="text-slate-200 font-medium hover:text-cyan-400 transition-colors"
                    >
                      anvikahar94@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 border border-green-500/30 p-3 rounded-lg">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a
                      href="tel:+919316206566"
                      className="text-slate-200 font-medium hover:text-cyan-400 transition-colors"
                    >
                      +91 9316206566
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/20 border border-orange-500/30 p-3 rounded-lg">
                    <MapPin className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Location</p>
                    <p className="text-slate-200 font-medium">
                      Navsari, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-400 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/anvi-kahar-401b63216/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-blue-600/40 p-3 rounded-lg transition-colors border border-slate-700 hover:border-blue-500"
                  >
                    <Linkedin className="text-slate-300 hover:text-blue-400" size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/15">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl border border-white/15">
            <p className="text-slate-300">
              © 2024 Anviben Kahar. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
