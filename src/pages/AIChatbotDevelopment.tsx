
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { MessageCircle, Clock, Users, BarChart3, Zap, Brain, Globe, Shield, ChevronDown, Settings, Bot, Lightbulb, Palette, Monitor, Database, TrendingUp, MessageSquare } from 'lucide-react';

const AIChatbotDevelopment = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const chatbotServices = [
    {
      title: "Chatbot Fine-Tuning & Optimization",
      description: "We continuously refine chatbot logic and models based on user behavior and feedback, ensuring consistent performance and responsiveness.",
      icon: Settings
    },
    {
      title: "Generative AI Integration",
      description: "Leverage the power of LLMs like GPT-4 to create intelligent, context-aware, dynamic chatbot experiences.",
      icon: Bot
    },
    {
      title: "Conversational UX & Flow Design",
      description: "Build natural, intuitive user interactions that feel human, reduce drop-offs, and improve satisfaction.",
      icon: Palette
    },
    {
      title: "AI Chatbot Strategy & Consulting",
      description: "We guide you through architecture, use-case planning, and cost optimization to align AI with business goals.",
      icon: Lightbulb
    },
    {
      title: "Multi-Platform Chatbot Integration",
      description: "Seamlessly deploy across web, mobile, Slack, WhatsApp, Facebook Messenger, and more.",
      icon: Monitor
    },
    {
      title: "Custom Chatbot Architecture",
      description: "Tailored backend systems to support NLP, API calls, integrations, and modular business logic.",
      icon: Database
    },
    {
      title: "Analytics & Data-Driven Insights",
      description: "Track performance, feedback loops, conversation quality, and optimize using real data.",
      icon: TrendingUp
    },
    {
      title: "Natural Language Understanding (NLU)",
      description: "Train your bot to truly understand user intent, context, and extract meaning from complex queries.",
      icon: MessageSquare
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Chatbots are available round-the-clock to engage with customers, answer their queries, and assist them at any time."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Our chatbots can be integrated with multiple communication channels, including websites, mobile apps, social media, and messaging platforms like Facebook Messenger and WhatsApp."
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Powered by NLP, our chatbots understand and engage in human-like conversations, enhancing user experience."
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "Easily scale your chatbot to handle increasing customer interactions without compromising on performance."
    },
    {
      icon: BarChart3,
      title: "Analytics and Insights",
      description: "Track and analyze conversations to gain insights into customer behavior, preferences, and pain points."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security and reliability to protect your data and ensure consistent performance."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Customer Support",
      description: "AI chatbots provide automated support to customers, answering frequently asked questions, resolving issues, and guiding users through product/service queries."
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Capture leads through engaging chatbot conversations, qualifying prospects, and scheduling appointments or demos."
    },
    {
      icon: BarChart3,
      title: "Sales Assistance",
      description: "Chatbots can assist with upselling, cross-selling, and helping customers find the right products, driving more sales."
    },
    {
      icon: Brain,
      title: "HR and Recruitment",
      description: "Automate the recruitment process by screening resumes, scheduling interviews, and answering job-related questions through AI chatbots."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We begin by understanding your goals, industry requirements, and customer pain points to create a customized chatbot solution."
    },
    {
      step: "02",
      title: "AI Model Design",
      description: "Our team designs AI models using advanced NLP and ML techniques to ensure the chatbot delivers high-quality interactions."
    },
    {
      step: "03",
      title: "Development and Integration",
      description: "The chatbot is developed with a focus on seamless integration with your existing systems, such as CRMs and communication platforms."
    },
    {
      step: "04",
      title: "Testing and Optimization",
      description: "Before deployment, we rigorously test the chatbot to ensure it works flawlessly across different scenarios and optimize its performance."
    },
    {
      step: "05",
      title: "Deployment and Monitoring",
      description: "After deployment, we provide ongoing monitoring and support to ensure the chatbot continues to perform effectively and evolve with your business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Animated Particle Background */}
        <div className="ai-particle-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="ai-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Chatbot Development Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Build intelligent, conversational AI chatbots that enhance user experience, automate support, and drive business efficiency.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                  Get in Touch
                </Button>
              </div>
            </div>
            
            {/* Right Side - 3D Robot Image */}
            <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/b7e6617b-9a85-47ac-bdaf-a469bd5fb993.png" 
                alt="AI Chatbot 3D Robot with Speech Bubble"
                className="w-full max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Services Accordion Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our AI Chatbot Services Include
              </h2>
            </div>
            
            <div className="space-y-4">
              {chatbotServices.map((service, index) => (
                <div key={index} className="glass rounded-lg overflow-hidden">
                  <Collapsible
                    open={openAccordion === index}
                    onOpenChange={(isOpen) => setOpenAccordion(isOpen ? index : null)}
                  >
                    <CollapsibleTrigger className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors">
                      <div className="flex items-center gap-4">
                        <service.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                          openAccordion === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-6 pt-0 text-muted-foreground leading-relaxed">
                      {service.description}
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What are AI Chatbots?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              AI chatbots are intelligent tools designed to communicate with users through natural language. They automate responses, provide customer support, assist with sales, and drive engagement, all while leveraging advanced AI technologies like Natural Language Processing (NLP) and Machine Learning (ML) to understand and respond to human inquiries effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AI Chatbots Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why AI Chatbots are Essential for Your Business</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              AI-powered chatbots bring efficiency, scalability, and personalization to business operations. They help businesses reduce response time, handle customer queries 24/7, and provide consistent answers across multiple channels. By integrating AI chatbots, businesses can improve customer experience, increase engagement, and streamline internal processes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our AI Chatbots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass card-hover">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Chatbot Development Process</h2>
          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((process, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Chatbot Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass card-hover">
                <CardHeader>
                  <useCase.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Partner with Us for AI Chatbot Development?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              Our team has years of experience in developing intelligent chatbots that enhance customer interactions. We use cutting-edge technologies and a tailored approach to deliver bots that meet your business needs, whether it's for customer support, lead generation, or improving operational efficiency. With our focus on AI, we ensure that your chatbot not only solves problems but also provides a seamless experience for users.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Customer Interactions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build an intelligent AI chatbot that will revolutionize how you connect with your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Get Started with AI Chatbot Development
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChatbotDevelopment;
