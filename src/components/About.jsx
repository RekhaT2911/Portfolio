import React from 'react';
import {
  Award,
  Coffee,
  Globe,
  Users,
  GraduationCap,
  Code,
  Target,
  Lightbulb,
  BookOpen,
  Trophy,
} from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: GraduationCap,
      label: 'CGPA',
      value: '8.53',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Code,
      label: 'Projects Completed',
      value: '3+',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
    },
    {
      icon: Award,
      label: 'Certifications',
      value: '3+',
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-50',
    },
    {
      icon: Coffee,
      label: 'Coding Hours',
      value: '1000+',
      color: 'from-warning-500 to-warning-600',
      bgColor: 'bg-warning-50',
    },
    // Optional: Add coding challenges solved from LeetCode/CodeChef/HackerRank
    // {
    //   icon: Trophy,
    //   label: 'Coding Challenges Solved',
    //   value: '300+',
    //   color: 'from-pink-500 to-pink-600',
    //   bgColor: 'bg-pink-50',
    // },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-secondary-800 mb-4 sm:mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-secondary-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Passionate about bridging artificial intelligence with real-world solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 px-4 lg:px-0">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold font-display text-secondary-800">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    AI Engineering Student & Aspiring Developer
                  </span>
                </h3>

                <div className="space-y-4 sm:space-y-6 text-secondary-700 leading-relaxed">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mt-1 flex-shrink-0">
                      <Target size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                    <p className="text-sm sm:text-base">
                      Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at
                      Shri Vishnu Engineering College For Women, maintaining a strong CGPA of 8.53.
                      My academic journey has been complemented by hands-on experience through
                      internships and practical projects.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-accent-100 hover:shadow-xl transition-all duration-300">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mt-1 flex-shrink-0">
                      <Lightbulb size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                    <p className="text-sm sm:text-base">
                      During my AI Virtual Internship at Skilldzire, I gained valuable experience in
                      machine learning algorithms, neural networks, and deep learning applications.
                      I've developed practical skills in AI model building and deployment for real-world
                      business scenarios.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl mt-1 flex-shrink-0">
                      <Globe size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                    <p className="text-sm sm:text-base">
                      I'm passionate about creating innovative solutions that bridge the gap between
                      artificial intelligence and practical applications. Currently seeking opportunities
                      to contribute to cutting-edge projects where I can apply my skills in AI,
                      full-stack development, and problem-solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 px-4 lg:px-0">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group ${stat.bgColor} p-6 sm:p-8 rounded-2xl border-2 border-transparent hover:border-primary-200 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      <div
                        className={`p-3 sm:p-4 bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={24} className="text-white sm:w-7 sm:h-7" />
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-2xl sm:text-3xl font-bold font-display bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-secondary-600 text-xs sm:text-sm font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
