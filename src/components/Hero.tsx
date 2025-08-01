import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import myPhoto from '../assets/myphoto.jpg';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="pt-24 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500 opacity-10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={myPhoto}
              alt="My Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Sambit Subhasish Sahu
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-8 font-medium">
            AI/ML Developer, Trainer & Research Enthusiast
          </div>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about advancing artificial intelligence through innovative machine learning solutions, 
            deep learning research, and cutting-edge technology applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              View My Work <ExternalLink size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get In Touch <Mail size={20} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/SambitSahuIT" target="_blank" rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-transform duration-300 hover:scale-110">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/sambit-subhasish-sahu" target="_blank" rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-transform duration-300 hover:scale-110">
              <Linkedin size={32} />
            </a>
            <a href="mailto:sambit.sahuit@gmail.com"
              className="text-blue-200 hover:text-white transition-transform duration-300 hover:scale-110">
              <Mail size={32} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
