import React from 'react';
import { ExternalLink, Github, ArrowRight, Calendar, Star, Trophy } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Certificate Management System',
      description:
        'Developed a certificate management system for improved accessibility and reduced errors. Implemented organized storage for efficient certificate retrieval and review.',
      image:
        'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['CSS', 'React.js', 'Node.js', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: 'November–December 2024',
      category: 'Full Stack',
      status: 'Completed',
    },
    {
      title: 'Event Management System',
      description:
        'Created an event management system displaying detailed event information, including dates, venues, and descriptions. Integrated with the college website for seamless updates.',
      image:
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Tkinter', 'SQLite3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: 'September–October 2023',
      category: 'Desktop App',
      status: 'Completed',
    },
    {
      title: 'ChatBot AI',
      description:
        'Developed an interactive chatbot using React and MongoDB for real-time communication. Included data storage, feedback collection, and analysis features.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'MongoDB', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/TriKoduri/chatbot',
      featured: false,
      date: 'October–December 2024',
      category: 'AI/ML',
      status: 'Completed',
    },
    {
      title: 'Credit Card Fraud Detection',
      description:
        'Built a Credit Card Fraud Detection model using supervised learning and handled imbalanced data with SMOTE. Evaluated Logistic Regression and Random Forest using F1-score.',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Imbalanced-learn'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RekhaT2911/Credit-Card-Fraud-Detection',
      featured: false,
      date: 'May–June 2025',
      category: 'AI/ML',
      status: 'Completed',
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-primary-100 text-primary-700 border-primary-200';
      case 'AI/ML':
        return 'bg-accent-100 text-accent-700 border-accent-200';
      case 'Desktop App':
        return 'bg-success-100 text-success-700 border-success-200';
      default:
        return 'bg-secondary-100 text-secondary-700 border-secondary-200';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-white via-accent-50/30 to-primary-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-secondary-800 mb-4 sm:mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-secondary-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
              A showcase of my academic and personal projects, demonstrating technical expertise and problem-solving abilities.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden border-2 border-secondary-100 hover:border-primary-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      project.featured ? 'h-48 sm:h-64' : 'h-40 sm:h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/20 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
                    {project.featured && (
                      <span className="flex items-center bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        <Star size={12} className="mr-1" />
                        Featured
                      </span>
                    )}
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-secondary-700 px-3 py-1.5 rounded-full text-xs flex items-center border border-secondary-200">
                      <Calendar size={12} className="mr-1" />
                      {project.date}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.liveUrl}
                      className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-secondary-700 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-110 border border-secondary-200"
                      aria-label="Live Project"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-secondary-700 hover:bg-accent-500 hover:text-white hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 transform hover:scale-110 border border-secondary-200"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold font-display text-secondary-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-xs font-medium border border-success-200">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-secondary-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-secondary-50 text-secondary-700 px-3 py-1.5 rounded-full text-xs border border-secondary-200 hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-accent-500/10 hover:text-primary-700 hover:border-primary-300 transition-all duration-300 transform hover:scale-105 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-semibold font-display transition-all duration-300 group/link hover:from-accent-600 hover:to-primary-600 text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <a
              href="https://github.com/RekhaT2911"
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-semibold font-display shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
            >
              <Trophy size={18} className="mr-2 sm:mr-3" />
              View All Projects on GitHub
              <ArrowRight size={18} className="ml-2 sm:ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
