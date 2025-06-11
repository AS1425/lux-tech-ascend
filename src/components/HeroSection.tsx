
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Badge */}
        <div className={`inline-flex items-center glass px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
          mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.1s' }}>
          <Sparkles className="w-4 h-4 text-primary mr-2" />
          <span className="text-sm font-medium text-muted-foreground">
            Leading AI & Digital Solutions Agency
          </span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold font-manrope mb-6 transition-all duration-700 ${
          mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.3s' }}>
          <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent bg-300% animate-gradient">
            Transform Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Digital Future
          </span>
        </h1>

        {/* Subheading */}
        <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-700 ${
          mounted ? 'animate-fade-left opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.5s' }}>
          We architect intelligent solutions that push the boundaries of possibility. 
          From AI automation to cutting-edge web applications, we deliver results that matter.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
          mounted ? 'animate-scale-in opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.7s' }}>
          <button className="group glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg hover:scale-105 transition-all duration-300 pulse-glow flex items-center">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="glass px-8 py-4 rounded-full text-foreground border border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-semibold text-lg">
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-700 ${
          mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.9s' }}>
          {[
            { number: '250+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'AI Solutions Built' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 font-manrope">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
