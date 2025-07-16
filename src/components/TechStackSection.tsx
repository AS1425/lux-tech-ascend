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
      { name: 'JavaScript', logo: '/lovable-uploads/8b71c982-5eaa-436a-9a9e-30789aa114a8.png' },
      { name: 'TypeScript', logo: '/lovable-uploads/7d68d6c0-e4a6-4ab1-97af-feea948bfdf4.png' },
      { name: 'Next.js', logo: '/lovable-uploads/f9054897-c6b5-4787-af4c-22d3b5d2684f.png' },
      { name: 'Nuxt.js', logo: '/lovable-uploads/91dc40c8-e8ff-4314-9217-028055c705e2.png' },
      { name: 'React', logo: '/lovable-uploads/4398f4ce-d943-48ee-8a03-e8d3a088c4f4.png' },
      { name: 'Vue.js', logo: '/lovable-uploads/fe3b2ca3-2b7a-4051-8af9-710281ad732b.png' },
      { name: 'Angular', logo: '/lovable-uploads/c99a3bbf-42b8-48ec-9465-f87b7e90d87a.png' }
    ],
    backend: [
      { name: 'Node.js', logo: '/lovable-uploads/d1ed50a8-d579-4145-a703-8aaae17ce75a.png' },
      { name: 'Nest.js', logo: '/lovable-uploads/a173058e-3970-41d7-b03f-5faa92936b71.png' },
      { name: 'Express', logo: '/lovable-uploads/7a5056ee-8476-4c03-bf0c-ff52e1cd9c5d.png' },
      { name: 'Fastify', logo: '/lovable-uploads/3e75f1ff-fe76-43af-a565-c4c548b31789.png' },
      { name: 'Python', logo: '/lovable-uploads/75ccf48e-fd5c-4d2b-9720-d64f0b797c12.png' },
      { name: 'Go', logo: '/lovable-uploads/0fc2a63d-aba7-4125-97eb-a367544e3e0a.png' },
      { name: 'Java', logo: '/lovable-uploads/656039c0-0ed3-4ae0-8e29-1fdf3c2f0a62.png' },
      { name: '.NET Core', logo: '/lovable-uploads/2398c5c6-b13a-4b5b-8542-917971eb6e00.png' },
      { name: 'Ruby', logo: '/lovable-uploads/4c5ac427-24c4-4b95-9209-2489fa46956a.png' }
    ],
    mobile: [
      { name: 'Swift', logo: '/lovable-uploads/85089fbb-e881-40d5-99bb-882a78c92ec9.png' },
      { name: 'SwiftUI', logo: '/lovable-uploads/dc83a1d5-eb63-4b82-b5b9-11211fbdfbae.png' },
      { name: 'Kotlin', logo: '/lovable-uploads/3ca4aae6-c8a7-447f-824c-a746d863e63c.png' },
      { name: 'Jetpack Compose', logo: '/lovable-uploads/91a208ed-fa9c-4b69-a41f-6287b353a14e.png' },
      { name: 'React Native', logo: '/lovable-uploads/b949ede3-3d1d-44f3-8c0c-1b9ed36d34e2.png' },
      { name: 'Flutter', logo: '/lovable-uploads/548dfabd-a77b-47df-bd08-a1e8f0b6f0d3.png' }
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