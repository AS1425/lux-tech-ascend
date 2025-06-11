
import React, { useEffect, useRef, useState } from 'react';
import { Brain, Code, Rocket, Shield, Zap, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Brain,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI that understands context and provides human-like responses for customer support.',
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Custom Training']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models that forecast trends and optimize business decisions with data-driven insights.',
      features: ['Trend Forecasting', 'Risk Assessment', 'Performance Optimization', 'Real-time Insights']
    },
    {
      icon: Zap,
      title: 'AI Agents',
      description: 'Autonomous AI systems that perform complex tasks, automate workflows, and integrate seamlessly with existing tools.',
      features: ['Workflow Automation', 'Task Orchestration', 'System Integration', 'Smart Decision Making']
    },
    {
      icon: Shield,
      title: 'AI Consulting',
      description: 'Strategic guidance and implementation support to transform your business with cutting-edge AI solutions.',
      features: ['Strategy Development', 'Implementation Planning', 'Team Training', 'Ongoing Support']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored AI solutions built specifically for your business needs with modern frameworks and best practices.',
      features: ['Custom Models', 'API Development', 'Cloud Integration', 'Scalable Architecture']
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul services to modernize your business processes and stay ahead of competition.',
      features: ['Process Modernization', 'Legacy Migration', 'Cloud Solutions', 'Change Management']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background" ref={sectionRef}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-manrope mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI and digital solutions designed to accelerate your business growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 card-hover ${
                  isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with enhanced animation */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 glow-mint">
                    <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-all duration-500 group-hover:scale-125" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 group-hover:bg-secondary transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-primary hover:text-secondary transition-colors duration-300 font-medium flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-3xl border border-primary/20 max-w-2xl mx-auto card-hover">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our AI and digital solutions can drive your next breakthrough.
            </p>
            <button className="cta-ripple glass px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-all duration-300 pulse-glow">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
