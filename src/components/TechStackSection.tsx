import React, { useState } from 'react';
import { Server, Brain, Monitor, Database, Smartphone } from 'lucide-react';

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState('infrastructure');

  const tabs = [
    { id: 'infrastructure', label: 'Infrastructure', icon: Server },
    { id: 'ai', label: 'AI', icon: Brain },
    { id: 'frontend', label: 'Frontend', icon: Monitor },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone }
  ];

  const techStacks = {
    infrastructure: [
      { name: 'Kubernetes', logo: '/lovable-uploads/a99581ab-b412-4024-a334-6ed024dea9dc.png' },
      { name: 'AWS', logo: '/lovable-uploads/c5869668-2ca0-4d98-ae87-121d3c2a2e51.png' },
      { name: 'Google Cloud', logo: '/lovable-uploads/719f62e6-2285-4fb4-8f44-d5a748250c0d.png' },
      { name: 'Azure', logo: '/lovable-uploads/5180df42-3881-438e-ab8b-d4c4ecddcc74.png' }
    ],
    ai: [
      { name: 'Open AI', logo: '/lovable-uploads/bcbeadd9-d309-495a-9d0b-ac56c3eadad1.png' },
      { name: 'Google Vertex', logo: '/lovable-uploads/6b6204b6-2cd0-456e-83e6-7e3c444c37c8.png' },
      { name: 'LLama', logo: '/lovable-uploads/789edca0-4ca1-4514-916b-a86fc6baf585.png' },
      { name: 'Lang Chain', logo: '/lovable-uploads/9c6d2551-374c-4c38-b727-b8da53aba70a.png' },
      { name: 'Streamlit', logo: '/lovable-uploads/d23fcf19-80ad-4991-a51d-314794899af2.png' }
    ],
    frontend: [
      { name: 'JavaScript', logo: '🟨' },
      { name: 'TypeScript', logo: '📘' },
      { name: 'Next.js', logo: '▲' },
      { name: 'Nuxt.js', logo: '💚' },
      { name: 'React', logo: '⚛️' },
      { name: 'Vue.js', logo: '💚' },
      { name: 'Angular', logo: '🅰️' }
    ],
    backend: [
      { name: 'Node.js', logo: '💚' },
      { name: 'Nest.js', logo: '🐱' },
      { name: 'Express', logo: '🚂' },
      { name: 'Fastify', logo: '⚡' },
      { name: 'Python', logo: '🐍' },
      { name: 'Go', logo: '🔵' },
      { name: 'Java', logo: '☕' },
      { name: '.NET Core', logo: '🔷' },
      { name: 'Ruby', logo: '💎' }
    ],
    mobile: [
      { name: 'Swift', logo: '🍎' },
      { name: 'SwiftUI', logo: '🎨' },
      { name: 'Kotlin', logo: '🟣' },
      { name: 'Jetpack Compose', logo: '🚀' },
      { name: 'React Native', logo: '📱' },
      { name: 'Flutter', logo: '🦋' }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powering innovation with our technology stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to craft exceptional solutions. Discover the tools and frameworks 
            that fuel our development process and ensure your project's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                        : 'bg-muted/30 hover:bg-muted/50 text-foreground'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tech Icons */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStacks[activeTab as keyof typeof techStacks].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 shadow-md">
                      {tech.logo.startsWith('/') ? (
                        <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain" />
                      ) : (
                        <span className="text-3xl">{tech.logo}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;