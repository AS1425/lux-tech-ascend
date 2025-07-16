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
      { name: 'Kubernetes', logo: 'K8s' },
      { name: 'AWS', logo: 'AWS' },
      { name: 'Google Cloud', logo: 'GCP' },
      { name: 'Azure', logo: 'AZ' },
      { name: 'Docker', logo: 'DOC' },
      { name: 'Terraform', logo: 'TF' }
    ],
    ai: [
      { name: 'TensorFlow', logo: 'TF' },
      { name: 'PyTorch', logo: 'PT' },
      { name: 'OpenAI', logo: 'AI' },
      { name: 'Hugging Face', logo: 'HF' },
      { name: 'LangChain', logo: 'LC' },
      { name: 'NVIDIA', logo: 'NV' }
    ],
    frontend: [
      { name: 'React', logo: 'RE' },
      { name: 'Next.js', logo: 'NX' },
      { name: 'Vue.js', logo: 'VU' },
      { name: 'Angular', logo: 'NG' },
      { name: 'TypeScript', logo: 'TS' },
      { name: 'Tailwind', logo: 'TW' }
    ],
    backend: [
      { name: 'Node.js', logo: 'JS' },
      { name: 'Python', logo: 'PY' },
      { name: 'Java', logo: 'JA' },
      { name: 'PostgreSQL', logo: 'PG' },
      { name: 'MongoDB', logo: 'MG' },
      { name: 'Redis', logo: 'RD' }
    ],
    mobile: [
      { name: 'React Native', logo: 'RN' },
      { name: 'Flutter', logo: 'FL' },
      { name: 'iOS Swift', logo: 'SW' },
      { name: 'Android', logo: 'AD' },
      { name: 'Expo', logo: 'EX' },
      { name: 'Ionic', logo: 'IO' }
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 mb-4">
                      {tech.logo}
                    </div>
                    <h3 className="font-semibold text-foreground">{tech.name}</h3>
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