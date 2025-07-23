import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles, Home, User, Code, FolderOpen, Mail, Award } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tatikonda_Kyathi_Rekha_Resume.pdf';
    link.download = 'Tatikonda_Kyathi_Rekha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-primary-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-teal-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">KR</span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-warning-400 animate-pulse" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-display">
              <span className={`${isScrolled ? 'text-secondary-800' : 'text-white'} transition-colors duration-300`}>
                Tatikonda
              </span>
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent ml-1">
                Kyathi Rekha
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-white/90 hover:text-primary-300'
                } transition-all duration-300 font-medium relative group font-display text-sm xl:text-base`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={downloadResume}
              className="flex items-center bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-2xl font-semibold font-display shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 transform hover:scale-105 text-sm xl:text-base"
            >
              <Download size={16} className="mr-2" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                : 'text-white/90 hover:text-primary-300 hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 bg-white/98 backdrop-blur-xl rounded-3xl border-2 border-primary-100 shadow-2xl animate-slide-down overflow-hidden">
            <div className="px-2 py-4">
              <div className="flex items-center justify-center mb-6 pb-4 border-b border-primary-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">KR</span>
                  </div>
                  <div className="text-lg font-bold font-display text-secondary-800">Navigation</div>
                </div>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center py-4 px-6 text-secondary-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all duration-300 rounded-2xl font-display font-medium mb-2 border border-transparent hover:border-primary-200 hover:shadow-lg transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="p-2.5 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl mr-4 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300 group-hover:scale-110 shadow-sm">
                    <item.icon size={18} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  {item.name}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                  </div>
                </a>
              ))}

              <button
                onClick={() => {
                  downloadResume();
                  setIsMenuOpen(false);
                }}
                className="group flex items-center justify-center w-full mx-2 mt-6 bg-gradient-to-r from-primary-600 via-accent-600 to-teal-600 hover:from-primary-500 hover:via-accent-500 hover:to-teal-500 text-white px-6 py-4 rounded-2xl font-semibold font-display shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105 border border-primary-500/20"
              >
                <div className="p-2 bg-white/20 rounded-xl mr-3 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <Download size={16} className="text-white" />
                </div>
                <span className="text-base">Download Resume</span>
                <div className="p-2 bg-white/20 rounded-xl ml-3 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <Award size={16} className="text-white" />
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
