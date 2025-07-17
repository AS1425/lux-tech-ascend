
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create particle background
    const createParticles = () => {
      const container = document.querySelector('.particle-background');
      if (!container) return;

      // Clear existing particles
      container.innerHTML = '';

      // Create particles
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Particle Background */}
      <div className="particle-background absolute inset-0 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-manrope mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                AI Development
              </span>
              <br />
              <span className="text-foreground">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your business with intelligent AI solutions that automate processes, 
              enhance decision-making, and drive unprecedented growth.
            </p>

            <button className="group cta-ripple glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 pulse-glow flex items-center relative overflow-hidden">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Robot Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 ${
            mounted ? 'animate-fade-left opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src="/lovable-uploads/d993ef25-1f88-4dc9-b383-55b7eb8a1010.png" 
                alt="AI Robot with neural network connections" 
                className="w-full max-w-lg h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
