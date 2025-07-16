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
      { name: 'Kubernetes', logo: '☸️' },
      { name: 'AWS', logo: '☁️' },
      { name: 'Google Cloud', logo: '🌐' },
      { name: 'Azure', logo: '☁️' }
    ],
    ai: [
      { name: 'Open AI', logo: '🤖' },
      { name: 'Google Vertex', logo: '🔬' },
      { name: 'LLama', logo: '🦙' },
      { name: 'Lang Chain', logo: '🔗' },
      { name: 'Streamlit', logo: '⚡' }
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
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 mb-4 shadow-md">
                      {tech.logo}
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