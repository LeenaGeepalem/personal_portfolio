
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-500 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop" 
                alt="Developer at work"
                className="relative w-full h-96 object-cover"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-pink-500 text-white p-6 text-center">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm">Years<br />Experience</div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Introduction About Me
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating innovative digital solutions through competitive programming, 
              hackathon participation, and cutting-edge software development.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I bring ideas 
              to life through clean, efficient code and exceptional user experiences. My journey 
              includes winning multiple hackathons and speaking at tech conferences.
            </p>
            
            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="font-semibold text-pink-500 mb-2">Frontend</h4>
                <p className="text-sm text-gray-300">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="font-semibold text-pink-500 mb-2">Backend</h4>
                <p className="text-sm text-gray-300">Node.js, Python, PostgreSQL</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="font-semibold text-pink-500 mb-2">Mobile</h4>
                <p className="text-sm text-gray-300">React Native, Flutter</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="font-semibold text-pink-500 mb-2">DevOps</h4>
                <p className="text-sm text-gray-300">Docker, AWS, CI/CD</p>
              </div>
            </div>
            
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-none">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
