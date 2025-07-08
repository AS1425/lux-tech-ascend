
import React, { useEffect, useState } from 'react';
import { ArrowRight, Brain, Network, Zap, Target, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingChatbot from '../components/FloatingChatbot';

const AIDevelopment = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Update scroll progress
    const updateScrollProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Custom ML models that learn from your data to automate decision-making and predict outcomes."
    },
    {
      icon: Network,
      title: "Natural Language Processing",
      description: "Enable your applications to understand, interpret, and generate human language naturally."
    },
    {
      icon: Zap,
      title: "AI Model Training",
      description: "Train sophisticated AI models tailored to your specific business requirements and data."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage AI to forecast trends, behaviors, and outcomes to stay ahead of the competition."
    },
    {
      icon: Target,
      title: "AI-powered Automation",
      description: "Streamline your operations with intelligent automation that adapts and improves over time."
    }
  ];

  const benefits = [
    "Improved operational efficiency by up to 40%",
    "Reduced costs through intelligent automation",
    "Enhanced decision-making with data-driven insights",
    "24/7 automated customer support capabilities",
    "Predictive maintenance reducing downtime",
    "Personalized user experiences at scale"
  ];

  const caseStudies = [
    {
      title: "E-commerce Recommendation Engine",
      description: "Increased sales by 35% through personalized product recommendations using machine learning algorithms.",
      impact: "35% Sales Increase"
    },
    {
      title: "Predictive Maintenance System",
      description: "Reduced equipment downtime by 50% for manufacturing client using IoT sensors and AI predictions.",
      impact: "50% Less Downtime"
    },
    {
      title: "Customer Service Chatbot",
      description: "Automated 80% of customer inquiries while maintaining 95% satisfaction rates using NLP.",
      impact: "80% Automation"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20">
        {/* Neural Network Background */}
        <div className="neural-network"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Badge */}
          <div className={`inline-flex items-center glass px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            <Brain className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-muted-foreground">
              Leading AI Development Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold font-manrope mb-6 transition-all duration-700 ${
            mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent bg-300% animate-gradient">
              AI Development
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-700 ${
            mounted ? 'animate-fade-right opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.5s' }}>
            Transform your business with intelligent AI solutions that automate processes, 
            enhance decision-making, and drive unprecedented growth.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            mounted ? 'animate-scale-in opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.7s' }}>
            <button className="group cta-ripple glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 pulse-glow flex items-center relative overflow-hidden">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="glass px-8 py-4 rounded-full text-foreground border border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-semibold text-lg card-hover">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our AI Development Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass p-8 rounded-xl card-hover">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our AI implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass p-8 rounded-xl card-hover">
                <div className="text-3xl font-bold text-primary mb-4 font-manrope">
                  {study.impact}
                </div>
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business operations with cutting-edge AI technology that delivers measurable results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-xl">
              <div className="text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Enterprise-Grade Security</h3>
                <p className="text-muted-foreground mb-6">
                  Our AI solutions are built with security-first architecture, ensuring your data remains protected while delivering powerful insights.
                </p>
                <button className="glass px-6 py-3 rounded-full text-primary border border-primary/30 hover:bg-primary/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive growth and efficiency for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group cta-ripple glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 pulse-glow flex items-center relative overflow-hidden">
              Contact Our AI Experts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="glass px-8 py-4 rounded-full text-foreground border border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-semibold text-lg card-hover">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default AIDevelopment;
