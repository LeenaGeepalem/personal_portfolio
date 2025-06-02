
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Database, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution with modern design and robust functionality.",
      longDescription: "Built with React, Node.js, and MongoDB, this platform features secure payment processing, real-time inventory management, admin dashboard, and responsive design. Includes user authentication, shopping cart functionality, order tracking, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Socket.io"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      category: "Full Stack",
      icon: <Code className="h-6 w-6" />,
      stats: { users: "10K+", features: "50+", uptime: "99.9%" }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Mobile-first project management solution with real-time collaboration features.",
      longDescription: "React Native application with Redux state management, offline support, and real-time synchronization. Features include drag-and-drop interfaces, team collaboration, time tracking, file attachments, and push notifications.",
      technologies: ["React Native", "Redux", "Firebase", "TypeScript", "Expo"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      stats: { downloads: "25K+", rating: "4.8/5", teams: "500+" }
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Enterprise-grade analytics platform with interactive visualizations and real-time insights.",
      longDescription: "Built with D3.js for custom visualizations and Python Flask backend. Features include custom query builder, automated reporting, role-based access control, and integration with multiple data sources.",
      technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      category: "Data Science",
      icon: <Database className="h-6 w-6" />,
      stats: { dataPoints: "1M+", queries: "10K/day", clients: "50+" }
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-pink-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge development work
          </p>
        </div>
        
        {/* Featured Project */}
        <div className="mb-16">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative h-64 lg:h-96">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-pink-500 text-white">{project.category}</Badge>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-400 text-sm mb-6">{project.longDescription}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-pink-500">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-pink-500 text-pink-500">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4">
                  <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button className="bg-pink-500 hover:bg-pink-600">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={prevProject}
                className="text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={nextProject}
                className="text-white hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Project indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-pink-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <Card key={proj.id} className="bg-gray-900 border-gray-800 hover:border-pink-500 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {proj.icon}
                  <Badge variant="outline" className="border-pink-500 text-pink-500">
                    {proj.category}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:text-pink-500 transition-colors">
                  {proj.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {proj.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {proj.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-400">
                      {tech}
                    </Badge>
                  ))}
                  {proj.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                      +{proj.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
