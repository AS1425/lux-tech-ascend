
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Clock, Globe, Brain, BarChart3, Users, Target, Zap, Shield, Cog, Bot, Mic, Settings, Lightbulb, Link, Wrench, Sparkles, HeadphonesIcon, GraduationCap, CheckCircle, Languages, Database, Lock, Building, School, ShoppingCart, Phone, Plane, Heart, Film, Fuel, Palette, BadgeDollarSign } from 'lucide-react';

const ConversationalAI = () => {
  const [activeTab, setActiveTab] = useState("customer-support");

  const services = [
    {
      id: "chatbot-development",
      title: "Chatbot Development",
      icon: Bot,
      content: "Provide an overview of chatbot use cases and applications. We build intelligent chatbots that understand context, handle complex conversations, and integrate seamlessly with your business systems to enhance customer interactions and automate support processes."
    },
    {
      id: "voice-assistant",
      title: "Voice Assistant Development", 
      icon: Mic,
      content: "Design and build Alexa, Google Assistant, or custom voice interfaces for smart devices, enhancing customer accessibility and user experience."
    },
    {
      id: "conversation-design",
      title: "Conversation Design",
      icon: MessageCircle,
      content: "Craft human-like conversational flows and scripts using NLU/NLP to ensure intuitive, accurate, and emotionally intelligent responses."
    },
    {
      id: "consulting",
      title: "Conversational AI Consulting",
      icon: Lightbulb,
      content: "Expert-led strategy and technical guidance on implementing scalable Conversational AI that aligns with your operational and CX goals."
    },
    {
      id: "integration",
      title: "Conversational AI Integration",
      icon: Link,
      content: "Seamless integration with CRM, ERP, contact centers, websites, and apps—empowering unified, AI-driven user interactions."
    },
    {
      id: "optimization",
      title: "Chatbot Fine-Tuning and Optimization",
      icon: Settings,
      content: "Continuous monitoring, training, and enhancement of your chatbot performance using user behavior data and LLMs."
    },
    {
      id: "generative-ai",
      title: "Generative AI Integration",
      icon: Sparkles,
      content: "Deploy advanced LLM-based agents to handle complex inquiries, content generation, and context-aware responses."
    },
    {
      id: "managed-services",
      title: "Managed Services",
      icon: Wrench,
      content: "Full-service management of your AI assistants including training, updates, analytics, and performance improvement."
    },
    {
      id: "training",
      title: "Conversation Design Training",
      icon: GraduationCap,
      content: "Upskill your in-house team with tailored training on conversation design, persona creation, and user journey mapping."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Full-cycle Conversational AI",
      description: "We plan, design, develop, deploy, and manage AI-powered assistants from end to end."
    },
    {
      icon: Globe,
      title: "Omnichannel Approach", 
      description: "Deploy bots on web, mobile, WhatsApp, Messenger, Slack, voice platforms, and more."
    },
    {
      icon: Link,
      title: "Integration Capabilities",
      description: "Seamless API-based and plug-in integrations with enterprise tools and cloud platforms."
    },
    {
      icon: Languages,
      title: "Flexible Communication",
      description: "Supports multi-lingual, voice, and text-based interactions across time zones and devices."
    },
    {
      icon: Lock,
      title: "Data Privacy and Security",
      description: "Enterprise-grade encryption and compliance with GDPR, HIPAA, and other standards."
    }
  ];

  const tabContent = {
    "customer-support": {
      title: "Customer Support",
      items: [
        "FAQ bots",
        "Agent assist bots",
        "Ticket generation bots",
        "Escalation workflows",
        "Voice support AI",
        "24/7 multilingual support"
      ]
    },
    "business-automation": {
      title: "Business Process Automation",
      items: [
        "Knowledge base integration",
        "Notification/chat alerts",
        "Appointment scheduling",
        "Invoice and billing automation",
        "Employee onboarding",
        "Inventory sync"
      ]
    },
    "marketing-sales": {
      title: "Marketing & Sales",
      items: [
        "Lead qualification bots",
        "Conversational landing pages",
        "Personalized upselling bots",
        "Newsletter bots",
        "WhatsApp and SMS campaigns",
        "Generative content agents"
      ]
    }
  };

  const industries = [
    { name: "Finance", icon: BadgeDollarSign },
    { name: "Education", icon: School },
    { name: "Retail", icon: ShoppingCart },
    { name: "Telco", icon: Phone },
    { name: "Airport", icon: Plane },
    { name: "Healthcare", icon: Heart },
    { name: "Media", icon: Film },
    { name: "Energy", icon: Fuel },
    { name: "Beauty", icon: Palette },
    { name: "Insurance", icon: Shield }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI solutions are available round-the-clock to support your customers at any time, ensuring no conversation is missed."
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "We integrate AI with multiple platforms like websites, mobile apps, social media, and messaging services, offering consistent support across all channels."
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Our AI agents engage in seamless, human-like conversations using advanced NLP, understanding user intent and context."
    },
    {
      icon: Users,
      title: "Personalization",
      description: "Our AI adapts to individual users, personalizing conversations based on their preferences and previous interactions."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Access detailed analytics and reports to track AI performance, customer behavior, and identify areas for optimization."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security to protect your data and ensure consistent performance across all interactions."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Customer Support",
      description: "Automate responses to frequently asked questions, help desk inquiries, and product/service questions, improving efficiency and reducing response times."
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Engage potential customers, qualify leads, and schedule follow-up actions automatically, increasing conversion rates."
    },
    {
      icon: Zap,
      title: "E-commerce Assistance",
      description: "Guide users through the shopping journey, recommend products, and handle transactions, making the online shopping experience more intuitive."
    },
    {
      icon: Cog,
      title: "HR and Recruitment",
      description: "Automate the recruitment process, from candidate screening to scheduling interviews, all through a conversational interface."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your business goals, customer needs, and technical requirements to define the scope of the AI solution."
    },
    {
      step: "02",
      title: "Data Analysis",
      description: "Analyzing existing customer data, conversation patterns, and business processes to inform AI design."
    },
    {
      step: "03",
      title: "Use Case Prioritization",
      description: "Identifying and prioritizing the most impactful conversational AI use cases for your business."
    },
    {
      step: "04",
      title: "User Persona Identification",
      description: "Defining target user personas and their specific needs, preferences, and communication styles."
    },
    {
      step: "05",
      title: "User Journey Mapping",
      description: "Mapping customer journey touchpoints and conversation flows to optimize user experience."
    },
    {
      step: "06",
      title: "Bot Persona Development",
      description: "Creating a consistent AI personality that aligns with your brand voice and customer expectations."
    },
    {
      step: "07",
      title: "Flow Chart Creation & Dialog Development",
      description: "Designing conversation flows and developing natural language processing capabilities."
    },
    {
      step: "08",
      title: "AI Design Development/Tuning",
      description: "Building and fine-tuning AI models using advanced machine learning and NLP techniques."
    },
    {
      step: "09",
      title: "User Testing",
      description: "Comprehensive testing with real users to ensure the AI performs as expected in real-world scenarios."
    },
    {
      step: "10",
      title: "AI Optimization Post-Launch",
      description: "Continuous improvement and optimization based on performance analytics and user feedback."
    }
  ];

  const conversationDesignOfferings = [
    {
      id: "consulting",
      title: "Conversation Design Consulting",
      icon: Lightbulb,
      content: "Strategic consultation on conversation design best practices, AI implementation strategies, and user experience optimization.",
      expectations: [
        "AI strategy development",
        "Training & workshops", 
        "Persona-based flow creation",
        "Business process optimization"
      ]
    },
    {
      id: "services",
      title: "Conversation Design Services",
      icon: MessageCircle,
      content: "End-to-end design of conversational flows, persona blueprints, and NLU structures for chat and voice-based agents."
    },
    {
      id: "training",
      title: "Conversation Design Training",
      icon: GraduationCap,
      content: "Interactive sessions, custom training kits, and platform-specific tutorials to empower internal teams to create better AI experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 neural-network">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Conversational AI Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Revolutionize your customer interactions with intelligent conversational AI that understands and responds naturally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/a76869f7-65d2-4e13-9b9a-6d18a319c0d7.png" 
                alt="AI Robot Assistant" 
                className="w-80 h-80 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Conversational AI Services Include</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="chatbot-development" className="space-y-4">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id} className="border rounded-lg bg-background shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-primary" />
                      <span className="text-lg font-semibold text-left">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">{service.content}</p>
                      </div>
                      <div className="flex-shrink-0 w-16 h-16 bg-muted/20 rounded-lg flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Benefits of our Conversational AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass card-hover text-center">
                <CardHeader className="pb-4">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is Conversational AI?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Conversational AI refers to the use of natural language processing (NLP), machine learning, and speech recognition technologies to enable machines to engage in human-like conversations. By leveraging conversational AI, businesses can automate customer interactions, improve user engagement, and streamline communication processes. From chatbots to voice assistants, conversational AI creates personalized, real-time interactions that drive better customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Conversational AI Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">The Importance of Conversational AI for Your Business</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Conversational AI solutions provide businesses with the ability to connect with customers in more meaningful ways. They offer enhanced efficiency, reduced response times, and the capability to manage high volumes of interactions simultaneously. Whether through chatbots or voice assistants, conversational AI helps businesses offer 24/7 support, improve customer satisfaction, and enable seamless communication across platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our Conversational AI Solutions</h2>
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

      {/* Our Proven Conversation Design Process Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Proven Conversation Design Process</h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Semi-circular timeline layout */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {developmentProcess.map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                        {process.step}
                      </div>
                      {index < developmentProcess.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-primary/30"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Conversation Design Offerings Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Conversation Design Offerings</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {conversationDesignOfferings.map((offering) => (
                <AccordionItem key={offering.id} value={offering.id} className="border rounded-lg bg-background shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <offering.icon className="h-6 w-6 text-primary" />
                      <span className="text-lg font-semibold text-left">{offering.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed mb-4">{offering.content}</p>
                        {offering.expectations && (
                          <div>
                            <h4 className="font-semibold mb-2">What You Can Expect:</h4>
                            <ul className="space-y-1">
                              {offering.expectations.map((expectation, index) => (
                                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                  {expectation}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0 w-16 h-16 bg-muted/20 rounded-lg flex items-center justify-center">
                        <offering.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Use Cases with Tabs Section */}
      <section className="py-16 lg:py-24 relative">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-pulse" style={{ top: '20%', left: '80%', animationDelay: '1s' }}></div>
          <div className="absolute w-3 h-3 bg-primary/10 rounded-full animate-pulse" style={{ top: '60%', left: '15%', animationDelay: '2s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-secondary/20 rounded-full animate-pulse" style={{ top: '80%', left: '70%', animationDelay: '3s' }}></div>
          <div className="absolute w-2 h-2 bg-primary/15 rounded-full animate-pulse" style={{ top: '40%', left: '90%', animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases for Conversational Artificial Intelligence</h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="customer-support">Customer Support</TabsTrigger>
              <TabsTrigger value="business-automation">Business Process Automation</TabsTrigger>
              <TabsTrigger value="marketing-sales">Marketing and Sales</TabsTrigger>
            </TabsList>
            
            {Object.entries(tabContent).map(([key, content]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{content.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {content.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Request a Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Solutions Applicable for the Following Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="glass card-hover text-center cursor-pointer group">
                <CardHeader className="pb-4">
                  <industry.icon className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Us for Conversational AI Development?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              With years of experience in AI development, we specialize in building powerful conversational AI solutions tailored to your unique business challenges. Our AI experts use the latest technologies to create scalable, secure, and intelligent conversational agents that deliver superior results. Whether you're looking to enhance customer service, generate leads, or automate business processes, we have the expertise to build the perfect solution for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Customer Interactions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build intelligent conversational AI solutions that will revolutionize how you connect with your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Get Started with Conversational AI
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Speak to Our AI Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConversationalAI;
