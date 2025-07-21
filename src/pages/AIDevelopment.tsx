
import React, { useEffect, useState } from 'react';
import { ArrowRight, Brain, Network, Zap, Target, TrendingUp, Shield, CheckCircle, Bot, MessageSquare, BarChart3, Cog, Eye, Lightbulb, Settings, ChevronDown } from 'lucide-react';
import Layout from '@/components/Layout';
import FloatingChatbot from '../components/FloatingChatbot';

const AIDevelopment = () => {
  const [mounted, setMounted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

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

  const aiServices = [
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
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Extract future-ready insights from historical data to improve decision-making and outcomes."
    },
    {
      icon: Cog,
      title: "AI-Powered Automation",
      description: "Streamline internal workflows, customer support, and operations using intelligent automation."
    },
    {
      icon: Network,
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

  const strategicAdvantages = [
    {
      title: "Profound AI Consulting Insights",
      content: "We don't just build solutions; we provide expert guidance to help you navigate the complexities of digital adoption. Our seasoned consultants bring a wealth of knowledge and experience, offering strategic insights that align with your business goals and unlock the full potential of AI. From assessing your readiness to AI strategy consulting, we're your trusted advisors on the journey to intelligent transformation."
    },
    {
      title: "Seasoned AI Developers",
      content: "Our development team comprises top-tier AI engineers with proven experience in building scalable, production-grade AI applications using technologies like Python, TensorFlow, PyTorch, OpenAI APIs, and more."
    },
    {
      title: "Diverse Niche Expertise",
      content: "Whether you're in healthcare, finance, retail, logistics, or real estate — our AI solutions are tailored to industry-specific challenges, enabling faster deployment and higher ROI."
    },
    {
      title: "Security and Ethical AI",
      content: "We follow strict ethical AI practices and embed enterprise-grade security protocols in every solution to ensure your systems are safe, compliant, and bias-free."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20">

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className={`lg:pr-8 transition-all duration-700 ${
              mounted ? 'animate-fade-up opacity-100' : 'opacity-0'
            }`} style={{ animationDelay: '0.3s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-manrope mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent bg-300% animate-gradient">
                  AI Development Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Transform your business with intelligent AI solutions that automate processes, 
                enhance decision-making, and drive unprecedented growth.
              </p>

              <button className={`group cta-ripple glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 transition-all duration-300 pulse-glow flex items-center relative overflow-hidden ${
                mounted ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`} style={{ animationDelay: '0.7s' }}>
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Right Column - 3D Robot Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-700 ${
              mounted ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`} style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/d6b03295-4c8e-4590-9476-2ae8c6c42cc9.png" 
                  alt="3D AI Robot" 
                  className="w-full max-w-lg h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services We Provide Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Solutions Tailored for Your Business Goals
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We offer a wide range of AI services designed to help startups and enterprises accelerate innovation and automate intelligently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {aiServices.map((service, index) => (
              <div key={index} className="glass p-8 rounded-xl card-hover group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="glass px-8 py-4 rounded-full text-primary border border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-semibold text-lg">
              Explore All Services →
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Advantage Accordion Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The Advantage of Partnering with Us for AI Development
            </h2>
          </div>

          <div className="space-y-4">
            {strategicAdvantages.map((advantage, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden shadow-lg">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openAccordion === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  <h3 className="text-xl font-semibold pr-4">{advantage.title}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  id={`accordion-content-${index}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openAccordion === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-border mb-6"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.content}
                    </p>
                  </div>
                </div>
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

      <FloatingChatbot />
    </Layout>
  );
};

export default AIDevelopment;
