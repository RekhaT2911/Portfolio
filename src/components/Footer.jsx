import React from 'react';
import {
  Heart,
  ArrowUp,
  Sparkles,
  Code,
  Brain,
  Trophy,
  Database,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-900 border-t border-secondary-700/50">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="space-y-4 sm:space-y-6 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="text-2xl sm:text-3xl font-bold font-display bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Tatikonda Kyathi Rekha
                </div>
                <Sparkles className="text-warning-400 animate-pulse" size={18} />
              </div>
              <p className="text-secondary-400 leading-relaxed text-sm sm:text-base">
                AI Engineering student passionate about building intelligent systems and 
                creating real-world impact through full stack development and machine learning.
              </p>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1">
              <h4 className="text-white font-semibold font-display text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-secondary-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold font-display text-base sm:text-lg mb-4 sm:mb-6">Expertise</h4>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {[
                  { name: 'AI & Machine Learning', icon: Brain },
                  { name: 'Full Stack Development', icon: Code },
                  { name: 'Deep Learning', icon: Brain },
                  { name: 'Database Management', icon: Database },
                  { name: 'Problem Solving', icon: Trophy },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center text-secondary-400 hover:text-accent-400 transition-colors duration-300"
                  >
                    <skill.icon size={14} className="mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-secondary-700/50">
            <div className="flex items-center text-secondary-400 mb-4 sm:mb-0 text-sm sm:text-base">
              <span>Built with</span>
              <Heart size={14} className="mx-2 text-accent-500 fill-current animate-pulse" />
              <span>by Tatikonda Kyathi Rekha</span>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <span className="text-secondary-400 text-sm sm:text-base">
                © {new Date().getFullYear()} All rights reserved.
              </span>
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-2.5 sm:p-3 bg-secondary-800/50 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 text-secondary-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25 border border-secondary-700 hover:border-primary-500"
              >
                <ArrowUp size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
