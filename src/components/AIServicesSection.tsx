import React, { useEffect, useState } from 'react';
import { Brain, MessageSquare, TrendingUp, Cog, FileText, Eye, Lightbulb, Settings } from 'lucide-react';

const AIServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const services = [
    {
      icon: Brain,
      title: "Custom AI Model Development",
      description: "We design and train models tailored to your data, goals, and industry-specific use cases."
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Virtual Assistants",
      description: "Engage users with smart, conversational AI agents for websites, apps, and enterprise tools."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Extract future-ready insights from historical data to improve decision-making and outcomes."
    },
    {
      icon: Cog,
      title: "AI-Powered Automation",
      description: "Streamline internal workflows, customer support, and operations using intelligent automation."
    },
    {
      icon: FileText,
      title: "Natural Language Processing (NLP)",
      description: "Build NLP-based tools that analyze, understand, and generate human language data."
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Enable your systems to see, detect, and process visual content using powerful vision models."
    },
    {
      icon: Lightbulb,
      title: "AI Strategy Consulting",
      description: "Define the right roadmap for adopting AI within your organization, from idea to execution."
    },
    {
      icon: Settings,
      title: "Model Optimization & Integration",
      description: "Fine-tune, scale, and deploy AI models across cloud, edge, and on-prem infrastructure."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.ai-service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Solutions Tailored
            </span>
            <br />
            <span className="text-foreground">for Your Business Goals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of AI services designed to help startups and enterprises 
            accelerate innovation and automate intelligently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`ai-service-card glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 card-hover ${
                  visibleCards.includes(index) ? 'animate-fade-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 pulse-glow">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;