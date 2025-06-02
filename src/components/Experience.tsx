
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Calendar, Users, Award, Code, Zap, Star, Target } from 'lucide-react';

const Experience = () => {
  const hackathons = [
    {
      id: 1,
      name: "TechCrunch Disrupt Hackathon 2024",
      position: "🥇 1st Place Winner",
      project: "AI-Powered Learning Assistant",
      description: "Developed an intelligent tutoring system using machine learning algorithms to personalize learning experiences. Featured natural language processing and adaptive learning paths.",
      technologies: ["Python", "TensorFlow", "React", "Flask", "PostgreSQL"],
      date: "March 2024",
      participants: "500+",
      achievement: "Winner",
      prize: "$50,000",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />
    },
    {
      id: 2,
      name: "NASA Space Apps Challenge",
      position: "🚀 Regional Finalist",
      project: "Mars Terrain Analyzer",
      description: "Created a web application analyzing Mars terrain data using satellite imagery and machine learning to identify potential landing sites for future missions.",
      technologies: ["JavaScript", "Three.js", "Python", "OpenCV", "NASA APIs"],
      date: "October 2023",
      participants: "1000+",
      achievement: "Regional Finalist",
      prize: "$10,000",
      icon: <Zap className="h-6 w-6 text-blue-500" />
    },
    {
      id: 3,
      name: "HackMIT 2023",
      position: "🏆 Top 10 Finalist",
      project: "EcoTrack - Carbon Footprint Tracker",
      description: "Built a comprehensive platform for tracking and reducing personal carbon footprints through gamification and community challenges.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express", "Socket.io"],
      date: "September 2023",
      participants: "800+",
      achievement: "Top 10",
      prize: "$5,000",
      icon: <Award className="h-6 w-6 text-green-500" />
    }
  ];

  const events = [
    {
      id: 1,
      name: "Google Developer Conference 2024",
      role: "Keynote Speaker",
      topic: "Future of Web Development",
      description: "Delivered a keynote presentation on modern web development trends to 300+ developers, covering React patterns, TypeScript integration, and performance optimization.",
      date: "June 2024",
      audience: "300+",
      type: "Keynote",
      impact: "Featured in Tech Weekly",
      icon: <Code className="h-6 w-6 text-red-500" />
    },
    {
      id: 2,
      name: "University Tech Symposium",
      role: "Workshop Leader",
      topic: "Machine Learning Fundamentals",
      description: "Led comprehensive workshops teaching ML concepts to undergraduate students, covering supervised learning, neural networks, and practical Python implementation.",
      date: "April 2024",
      audience: "150+",
      type: "Workshop",
      impact: "98% satisfaction rate",
      icon: <Users className="h-6 w-6 text-purple-500" />
    },
    {
      id: 3,
      name: "Developer Community Meetup",
      role: "Founder & Organizer",
      topic: "Monthly Tech Talks",
      description: "Founded and organized monthly meetups creating a community of 200+ tech enthusiasts. Coordinated speakers, presentations, and networking events.",
      date: "2023 - Present",
      audience: "200+",
      type: "Community",
      impact: "200+ active members",
      icon: <Target className="h-6 w-6 text-indigo-500" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-pink-500">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through competitive programming, hackathons, and community leadership
          </p>
        </div>

        <Tabs defaultValue="hackathons" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-800">
            <TabsTrigger value="hackathons" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              🏆 Hackathons
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              🎤 Speaking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hackathons" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {hackathons.map((hackathon, index) => (
                <Card 
                  key={hackathon.id} 
                  className="group bg-gray-800 border-gray-700 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {hackathon.icon}
                      <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500">
                        {hackathon.achievement}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-pink-500 transition-colors">
                      {hackathon.name}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-green-400">
                      {hackathon.position} • {hackathon.project}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {hackathon.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {hackathon.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="h-4 w-4" />
                        {hackathon.participants}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Trophy className="h-4 w-4" />
                        {hackathon.achievement}
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Star className="h-4 w-4" />
                        {hackathon.prize}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs border-pink-500/30 text-pink-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card 
                  key={event.id} 
                  className="group bg-gray-800 border-gray-700 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {event.icon}
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500">
                        {event.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-pink-500 transition-colors">
                      {event.name}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-green-400">
                      {event.role} • {event.topic}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="h-4 w-4" />
                        {event.audience}
                      </div>
                      <div className="flex items-center gap-2 text-purple-400 col-span-2">
                        <Star className="h-4 w-4" />
                        {event.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
