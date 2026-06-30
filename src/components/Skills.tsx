import { Code2, Database, Server, Layout, GitBranch, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io', 'JWT', 'JWT Auth', 'Serverless APIs'],
    color: 'bg-green-500',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'DynamoDB', 'S3', 'Database Design', 'Query Optimization'],
    color: 'bg-orange-500',
  },
  {
    title: 'Payment & Integration',
    icon: GitBranch,
    skills: ['Stripe', 'Juspay', 'BigCommerce', 'Google Maps API', 'CleverTap', 'Third-party APIs'],
    color: 'bg-red-500',
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    color: 'bg-blue-500',
  },

  {
    title: 'DevOps & Cloud',
    icon: Wrench,
    skills: ['AWS', 'S3', 'Lambda', 'Git', 'GitHub', 'Serverless', 'Postman'],
    color: 'bg-slate-600',
  },

  {
    title: 'Other',
    icon: Code2,
    skills: ['PHP', 'EJS', 'API Testing', 'Admin Panels'],
    color: 'bg-teal-500',
  },
];

export function Skills() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div ref={ref as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow border border-white/10 reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${category.color} p-3 rounded-lg text-white shadow-lg shadow-${category.color.split('-')[1]}-500/20`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-900/60 px-3 py-1 rounded-full text-sm text-slate-200 border border-slate-600 hover:border-slate-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
