import { Briefcase, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    title: 'Nodejs Web, API Developer, React, Next.js & Bigcommerce Developer',
    company: 'DIT Interactive Pvt. Ltd, Ahmedabad',
    period: '2022 - 15th Dec 2025',
    description: 'Creating cross-platform websites and developing robust Node.js APIs. Expertise in building e-commerce solutions with BigCommerce integration and custom checkout implementations.',
    achievements: [
      'Developed 10+ Node.js APIs with MySQL, MongoDB, and DynamoDB databases',
      'Built React admin panels for multiple clients with real-time functionality',
      'Integrated Stripe and Juspay payment gateways for multiple projects',
      'Implemented BigCommerce custom checkouts and GA4 event tracking',
    ],
  },
  {
    title: 'Nodejs Web and API Developer',
    company: 'EbizzInfotech Pvt. Ltd, Surat',
    period: '2021 - 2022',
    description: 'Developed cross-platform websites and high-performance APIs using Node.js and MySQL. Built scalable backend solutions for multiple client projects.',
    achievements: [
      'Built RESTful APIs for 5+ production applications',
      'Implemented Socket.io for real-time chat and notifications',
      'Integrated MongoDB and MySQL databases for different projects',
      'Collaborated with frontend teams for seamless API integration',
    ],
  },
  {
    title: 'Nodejs Developer, Flutter Developer, CI (Codeigniter)',
    company: 'Send me Technologies, Vapi',
    period: '2019 - 2021',
    description: 'Developed Node.js APIs with AWS services and Flutter mobile applications. Converted legacy Codeigniter APIs to modern serverless Node.js architecture.',
    achievements: [
      'Built SLS APIs using Node.js with AWS DynamoDB and S3',
      'Converted all legacy CI APIs to serverless Node.js architecture',
      'Designed responsive UI and developed Flutter cross-platform applications',
      'Implemented AWS Lambda functions for scalable backend solutions',
    ],
  },
];

export function Experience() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional journey and key accomplishments in full-stack development
          </p>
        </div>

        <div ref={ref as any} className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pl-8 pb-12 last:pb-0 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950"></div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-medium">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 sm:mt-0">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-200">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
