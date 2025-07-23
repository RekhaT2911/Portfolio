import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Star, Code, Brain } from 'lucide-react';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tatikonda_Kyathi_Rekha_Resume.pdf';
    link.download = 'Tatikonda_Kyathi_Rekha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Profile Bubble */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 sm:mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 via-accent-400 to-teal-400 p-1 shadow-2xl shadow-primary-500/30 animate-glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary-800 to-secondary-900 flex items-center justify-center border-2 border-secondary-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30"></div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent relative z-10">
                  KR
                </span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-success-400 to-teal-400 rounded-full p-2 shadow-lg animate-bounce-slow">
              <Sparkles size={14} className="text-white sm:w-4 sm:h-4" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-warning-400 to-orange-400 rounded-full p-2 shadow-lg">
              <Star size={14} className="text-white sm:w-4 sm:h-4" />
            </div>
          </div>

          {/* Name & Role */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-teal-400 bg-clip-text text-transparent">
                Tatikonda Kyathi Rekha
              </span>
            </h1>

            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light font-display">
              <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-teal-300 bg-clip-text text-transparent">
                AI Engineer & Full Stack Developer
              </span>
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              <span className="flex items-center bg-gradient-to-r from-primary-500/20 to-primary-600/20 backdrop-blur-sm border border-primary-400/30 text-primary-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Brain size={14} className="mr-1 sm:mr-2" />
                AI/ML Expert
              </span>
              <span className="flex items-center bg-gradient-to-r from-accent-500/20 to-accent-600/20 backdrop-blur-sm border border-accent-400/30 text-accent-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Code size={14} className="mr-1 sm:mr-2" />
                Full Stack Dev
              </span>
              <span className="flex items-center bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm border border-teal-400/30 text-teal-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                <Star size={14} className="mr-1 sm:mr-2" />
                CGPA 8.53
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg md:text-xl text-secondary-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-body px-4">
            B.Tech in Artificial Intelligence and Machine Learning student with expertise in AI, 
            full-stack development, and innovative problem-solving. Passionate about creating 
            intelligent solutions and contributing to cutting-edge technology projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold font-display shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 text-sm sm:text-base">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <button
              onClick={downloadResume}
              className="group flex items-center justify-center border-2 border-teal-400 text-teal-300 hover:bg-teal-500 hover:text-white hover:border-teal-500 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold font-display transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <Download size={16} className="mr-2 transition-transform group-hover:scale-110 sm:w-4 sm:h-4" />
              <span className="text-sm sm:text-base">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
            <a
              href="https://github.com/RekhaT2911"
              className="group p-3 sm:p-4 bg-secondary-800/50 backdrop-blur-sm rounded-2xl text-secondary-400 hover:text-primary-400 hover:bg-primary-500/20 border border-secondary-700 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-primary-500/25"
              aria-label="GitHub"
            >
              <Github size={20} className="transition-transform group-hover:rotate-12 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/kyathi-tatikonda"
              className="group p-3 sm:p-4 bg-secondary-800/50 backdrop-blur-sm rounded-2xl text-secondary-400 hover:text-primary-400 hover:bg-primary-500/20 border border-secondary-700 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-primary-500/25"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="transition-transform group-hover:rotate-12 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:kyathirekha2004@gmail.com"
              className="group p-3 sm:p-4 bg-secondary-800/50 backdrop-blur-sm rounded-2xl text-secondary-400 hover:text-accent-400 hover:bg-accent-500/20 border border-secondary-700 hover:border-accent-500/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent-500/25"
              aria-label="Email"
            >
              <Mail size={20} className="transition-transform group-hover:rotate-12 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="group text-secondary-400 hover:text-primary-400 transition-all duration-300">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs sm:text-sm font-display opacity-75 group-hover:opacity-100">Scroll Down</span>
            <ChevronDown size={24} className="animate-bounce group-hover:text-primary-400 sm:w-8 sm:h-8" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
