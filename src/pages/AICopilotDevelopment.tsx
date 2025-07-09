
import React, { useEffect, useRef, useState } from 'react';
import { Brain, Bot, Zap, Users, BarChart3, Settings, CheckCircle, ArrowRight, Lightbulb, Target, Workflow, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AICopilotDevelopment = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
            setVisibleSections(prev => [...new Set([...prev, sectionIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Enhanced Productivity',
      description: 'AI copilots can automate repetitive tasks, allowing your team to focus on high-value activities that drive business growth.'
    },
    {
      icon: Lightbulb,
      title: 'Improved Decision-Making',
      description: 'With real-time insights and actionable recommendations, AI copilots empower users to make informed decisions faster.'
    },
    {
      icon: Workflow,
      title: 'Seamless Integration',
      description: 'Our AI copilots are built to seamlessly integrate with your existing workflows, ensuring a smooth user experience and enhancing your current processes.'
    },
    {
      icon: BarChart3,
      title: 'Scalability',
      description: 'AI copilots can easily scale as your business grows, providing ongoing support across different tasks and departments.'
    },
    {
      icon: Target,
      title: 'Cost Efficiency',
      description: 'By automating time-consuming tasks and reducing human error, AI copilots help lower operational costs and improve overall efficiency.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Requirements Gathering',
      description: 'We begin by understanding your specific business needs, tasks, and workflows that can benefit from AI assistance.'
    },
    {
      step: '02',
      title: 'AI Design & Architecture',
      description: 'Our team designs a custom AI copilot tailored to your goals, integrating with your existing tools and systems.'
    },
    {
      step: '03',
      title: 'AI Model Training',
      description: 'Using machine learning and NLP, we train the AI model to understand your business\'s unique context, ensuring it delivers accurate and valuable insights.'
    },
    {
      step: '04',
      title: 'Development & Integration',
      description: 'We develop the copilot, ensuring it is secure, scalable, and seamlessly integrates with your infrastructure.'
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'The AI copilot undergoes rigorous testing to ensure it performs accurately across different use cases and continuously improves through feedback.'
    },
    {
      step: '06',
      title: 'Deployment & Support',
      description: 'We deploy the AI copilot into your live environment and provide ongoing support to ensure it continues to perform optimally.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={addToRefs}
              data-section="0"
              className={`transition-all duration-1000 ${
                visibleSections.includes(0) ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-manrope mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI Copilot
                </span>
                <br />
                Development Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your business operations with advanced AI copilots that enhance productivity, streamline workflows, and improve decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cta-ripple glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-all duration-300 pulse-glow">
                  Start Your AI Copilot Project
                </button>
                <button className="glass px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300">
                  Contact Our Experts
                </button>
              </div>
            </div>
            <div 
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.includes(0) ? 'animate-fade-left opacity-100' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                <div className="glass p-8 rounded-3xl border border-primary/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">AI Assistant</h3>
                        <p className="text-sm text-muted-foreground">Intelligent Support</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                        <Workflow className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Automation</h3>
                        <p className="text-sm text-muted-foreground">Streamlined Tasks</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Analytics</h3>
                        <p className="text-sm text-muted-foreground">Real-time Insights</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Performance</h3>
                        <p className="text-sm text-muted-foreground">Enhanced Efficiency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={addToRefs}
              data-section="1"
              className={`transition-all duration-1000 ${
                visibleSections.includes(1) ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="glass p-8 rounded-3xl border border-primary/20">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                  <div className="h-3 bg-gradient-to-r from-secondary/30 to-transparent rounded-full w-4/5"></div>
                  <div className="h-3 bg-gradient-to-r from-primary/20 to-transparent rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
            <div 
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.includes(1) ? 'animate-fade-left opacity-100' : 'opacity-0 translate-x-8'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  What is AI Copilot Development?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI Copilot development involves the creation of intelligent assistants that work alongside human users to help them complete tasks more efficiently. By leveraging advanced artificial intelligence, machine learning, and natural language processing (NLP), AI copilots can provide real-time suggestions, automate processes, and make recommendations that improve productivity and decision-making. Our AI Copilot development services focus on building customized copilots that integrate seamlessly with your existing workflows, providing your team with the support they need to work smarter and faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Copilot Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={addToRefs}
            data-section="2"
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.includes(2) ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why AI Copilot is Crucial for Your Business?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              As businesses seek to automate repetitive tasks and optimize decision-making processes, AI copilots play a vital role in enhancing human productivity. AI copilots can assist users by providing real-time insights, automating data analysis, recommending actions, and enabling more efficient task execution. By adopting AI copilots, businesses can improve operational efficiency, reduce human error, and empower their teams to focus on more strategic activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isVisible = visibleSections.includes(2);
              
              return (
                <div
                  key={index}
                  className={`glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 card-hover transition-all duration-1000 ${
                    isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={addToRefs}
            data-section="3"
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.includes(3) ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our AI Copilot Development Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We follow a step-by-step approach to design and develop AI copilots that integrate seamlessly into your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const isVisible = visibleSections.includes(3);
              
              return (
                <div
                  key={index}
                  className={`glass p-8 rounded-2xl border border-primary/20 card-hover transition-all duration-1000 ${
                    isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm mr-4">
                      {step.step}
                    </div>
                    <div className="h-0.5 bg-gradient-to-r from-primary/50 to-transparent flex-1"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={addToRefs}
              data-section="4"
              className={`transition-all duration-1000 ${
                visibleSections.includes(4) ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Why Choose Us for Your AI Copilot Development?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With years of experience in AI and machine learning, our team specializes in developing AI copilots that enhance productivity and streamline operations. We focus on creating intelligent, intuitive systems that work seamlessly with your existing tools and processes. Our expertise in NLP, machine learning, and automation ensures that we deliver AI copilots that truly understand your business's needs and provide tangible value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced AI & Machine Learning Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Custom Integration Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Ongoing Support & Maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Proven Track Record</span>
                </div>
              </div>
            </div>
            <div 
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.includes(4) ? 'animate-fade-left opacity-100' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="glass p-8 rounded-3xl border border-primary/20">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">AI Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground italic">
                    "Trusted by leading businesses worldwide for AI copilot solutions"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={addToRefs}
            data-section="5"
            className={`transition-all duration-1000 ${
              visibleSections.includes(5) ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              Ready to Transform Your Business with 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}AI Copilots?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how our AI copilot development services can enhance your productivity and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-ripple glass px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-all duration-300 pulse-glow">
                Start Your AI Copilot Project Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="glass px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AICopilotDevelopment;
