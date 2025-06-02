
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop" 
          alt="Coding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-pink-500">D</span>ev
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#" className="hover:text-pink-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-pink-500 transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-pink-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-pink-500">Developer</span>
        </h1>
        <p className="text-xl md:text-2xl mb-2 text-gray-300">
          Full Stack Developer & Creative Professional
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-400">
          Software Engineer
        </p>
        
        <Button 
          onClick={scrollToProjects}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-none text-lg font-semibold transition-all duration-300"
        >
          HIRE ME
        </Button>
        
        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
