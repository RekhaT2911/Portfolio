import React from 'react';
import {
  Code,
  Database,
  Globe,
  Server,
  Brain,
  Zap,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'C', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      hoverColor: 'hover:border-primary-400',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['Neural Networks', 'Deep Learning', 'Machine Learning', 'Model Building', 'TensorFlow'],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
      hoverColor: 'hover:border-accent-400',
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Database Design'],
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-50',
      borderColor: 'border-success-200',
      hoverColor: 'hover:border-success-400',
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
      color: 'from-warning-500 to-warning-600',
      bgColor: 'bg-warning-50',
      borderColor: 'border-warning-200',
      hoverColor: 'hover:border-warning-400',
    },
    {
      icon: Database,
      title: 'ML Libraries & Frameworks',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Flask'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      hoverColor: 'hover:border-teal-400',
    },
    {
      icon: Zap,
      title: 'Development Tools',
      skills: ['VS Code', 'GitHub', 'GitLab', 'DB Browser', 'Jupyter Notebook'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:border-orange-400',
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-secondary-800 mb-4 sm:mb-6">
              Technical{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-secondary-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
              A comprehensive skill set developed through academic projects, internships, and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`group ${category.bgColor} p-6 sm:p-8 rounded-2xl border-2 ${category.borderColor} ${category.hoverColor} transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`p-4 sm:p-5 bg-gradient-to-r ${category.color} rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent size={28} className="text-white sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold font-display text-secondary-800 mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-white/80 text-secondary-700 px-3 py-2 rounded-full text-xs sm:text-sm border border-secondary-200 hover:bg-white hover:text-primary-600 hover:border-primary-300 transition-all duration-300 transform hover:scale-105 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
