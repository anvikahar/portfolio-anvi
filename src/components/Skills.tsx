import { Code2, Database, Server, Layout, GitBranch, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    color: 'bg-blue-500',
  },
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
    title: 'DevOps & Cloud',
    icon: Wrench,
    skills: ['AWS', 'S3', 'Lambda', 'Git', 'GitHub', 'Serverless', 'Postman'],
    color: 'bg-slate-600',
  },
  {
    title: 'Payment & Integration',
    icon: GitBranch,
    skills: ['Stripe', 'Juspay', 'BigCommerce', 'Google Maps API', 'CleverTap', 'Third-party APIs'],
    color: 'bg-red-500',
  },
  {
    title: 'Other',
    icon: Code2,
    skills: ['Flutter', 'Codeigniter', 'PHP', 'EJS', 'API Testing', 'Admin Panels'],
    color: 'bg-teal-500',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${category.color} p-3 rounded-lg text-white`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200 hover:border-slate-400 transition-colors"
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
