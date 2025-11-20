import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Send Me App',
    description: 'Developed API using PHP Codeigniter with MySQL backend and Flutter frontend. Converted legacy CI APIs to serverless Node.js APIs with AWS S3 and DynamoDB integration.',
    technologies: ['Node.js', 'PHP', 'MySQL', 'Flutter', 'AWS S3', 'DynamoDB']
    
  },
  {
    title: 'Baradari App',
    description: 'Instagram-like social platform with communities, chatting functionality, and media sharing. Real-time updates using Socket.io with token-based authentication.',
    technologies: ['Node.js', 'MongoDB', 'Socket.io', 'React', 'JWT']
  },
  {
    title: 'Vove Dating App',
    description: 'Location-based dating application with real-time chat functionality and in-app subscriptions. Integrated IAP for both Android and iOS platforms.',
    technologies: ['Node.js', 'MySQL', 'Socket.io', 'React Native', 'JWT']
  },
  {
    title: 'RV Service Provider App',
    description: 'Service marketplace where users request items and providers assign tasks to agents. Integrated Stripe for secure payment and payout management.',
    technologies: ['Node.js', 'MySQL', 'Stripe API', 'Express', 'Socket.io']
  },
  {
    title: 'Hunter Home - BigCommerce Store',
    description: 'BigCommerce storefront with custom checkout, GA4 event tracking, and webhook integrations for product and customer operations.',
    technologies: ['React', 'BigCommerce', 'Next.js', 'MySQL', 'AWS Lambda']
  },
  {
    title: 'DIT Academy Admin Panel',
    description: 'Comprehensive admin panel for educational platform with React frontend and custom Node.js APIs. User and content management with MySQL database.',
    technologies: ['React', 'Node.js', 'MySQL', 'Express', 'JWT Auth']
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
