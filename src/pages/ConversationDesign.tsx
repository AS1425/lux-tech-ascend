
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Users, Target, Zap, BarChart3, Shield, Clock, Globe, Brain, Cog, Bot, Mic, Palette, Search, Settings, Cpu, Headphones, GraduationCap, RefreshCw, Map, UserCheck, Workflow, Heart, Key } from 'lucide-react';

const ConversationDesign = () => {
  const [activeTab, setActiveTab] = useState("customer-support");

  // Accordion services data
  const services = [
    {
      id: "chatbot-development",
      title: "Chatbot Development",
      icon: Bot,
      content: "We design and develop intelligent chatbots that provide seamless customer interactions across multiple platforms. Our chatbots are built with advanced NLP capabilities to understand context, intent, and sentiment, delivering personalized responses that enhance user experience and drive business outcomes."
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
      icon: Palette,
      content: "Craft human-like conversational flows and scripts using NLU/NLP to ensure intuitive, accurate, and emotionally intelligent responses."
    },
    {
      id: "ai-consulting",
      title: "Conversational AI Consulting",
      icon: Search,
      content: "Expert-led strategy and technical guidance on implementing scalable Conversational AI that aligns with your operational and CX goals."
    },
    {
      id: "ai-integration",
      title: "Conversational AI Integration",
      icon: Settings,
      content: "Seamless integration with CRM, ERP, contact centers, websites, and apps—empowering unified, AI-driven user interactions."
    },
    {
      id: "optimization",
      title: "Chatbot Fine-Tuning and Optimization",
      icon: RefreshCw,
      content: "Continuous monitoring, training, and enhancement of your chatbot performance using user behavior data and LLMs."
    },
    {
      id: "generative-ai",
      title: "Generative AI Integration",
      icon: Cpu,
      content: "Deploy advanced LLM-based agents to handle complex inquiries, content generation, and context-aware responses."
    },
    {
      id: "managed-services",
      title: "Managed Services",
      icon: Headphones,
      content: "Full-service management of your AI assistants including training, updates, analytics, and performance improvement."
    },
    {
      id: "training",
      title: "Conversation Design Training",
      icon: GraduationCap,
      content: "Upskill your in-house team with tailored training on conversation design, persona creation, and user journey mapping."
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: RefreshCw,
      title: "Full-cycle Conversational AI",
      description: "We plan, design, develop, deploy, and manage AI-powered assistants from end to end."
    },
    {
      icon: Globe,
      title: "Omnichannel Approach",
      description: "Deploy bots on web, mobile, WhatsApp, Messenger, Slack, voice platforms, and more."
    },
    {
      icon: Settings,
      title: "Integration Capabilities",
      description: "Seamless API-based and plug-in integrations with enterprise tools and cloud platforms."
    },
    {
      icon: MessageCircle,
      title: "Flexible Communication",
      description: "Supports multi-lingual, voice, and text-based interactions across time zones and devices."
    },
    {
      icon: Shield,
      title: "Data Privacy and Security",
      description: "Enterprise-grade encryption and compliance with GDPR, HIPAA, and other standards."
    }
  ];

  // Use cases data for tabs
  const useCasesData = {
    "customer-support": [
      "FAQ bots",
      "Agent assist bots", 
      "Ticket generation bots",
      "Escalation workflows",
      "Voice support AI",
      "24/7 multilingual support"
    ],
    "business-automation": [
      "Knowledge base integration",
      "Notification/chat alerts",
      "Appointment scheduling", 
      "Invoice and billing automation",
      "Employee onboarding",
      "Inventory sync"
    ],
    "marketing-sales": [
      "Lead qualification bots",
      "Conversational landing pages",
      "Personalized upselling bots",
      "Newsletter bots",
      "WhatsApp and SMS campaigns",
      "Generative content agents"
    ]
  };

  // New design process steps
  const designProcess = [
    { step: "01", title: "Discovery" },
    { step: "02", title: "Data Analysis" },
    { step: "03", title: "Use Case Prioritization" },
    { step: "04", title: "User Persona Identification" },
    { step: "05", title: "User Journey Mapping" },
    { step: "06", title: "Bot Persona Development" },
    { step: "07", title: "Flow Chart Creation & Dialog Development" },
    { step: "08", title: "AI Design Development/Tuning" },
    { step: "09", title: "User Testing" },
    { step: "10", title: "AI Optimization Post-Launch" }
  ];

  // Conversation design offerings
  const offerings = [
    {
      id: "consulting",
      title: "Conversation Design Consulting",
      icon: Search,
      content: "Strategic guidance on implementing conversational AI solutions that align with your business objectives.",
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
      icon: Palette,
      content: "End-to-end design of conversational flows, persona blueprints, and NLU structures for chat and voice-based agents."
    },
    {
      id: "training-services",
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
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Conversational Design Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Craft seamless, human-like conversations with our expert conversational design solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/c0dfdb39-5392-4fa4-b163-7df42d5aadd3.png" 
                alt="Conversational AI Robot"
                className="max-w-full h-auto animate-fade-up"
                style={{ animationDelay: '0.6s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Our Conversational AI Services Include */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Conversational AI Services Include</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="chatbot-development" className="space-y-4">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id} className="border rounded-lg glass">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold text-left">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">{service.content}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 2: Key Benefits */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Benefits of Our Conversational AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass card-hover text-center">
                <CardHeader>
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

      {/* Section 3: Use Cases for Conversational AI */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases for Conversational Artificial Intelligence</h2>
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="customer-support">Customer Support</TabsTrigger>
                <TabsTrigger value="business-automation">Business Process Automation</TabsTrigger>
                <TabsTrigger value="marketing-sales">Marketing & Sales</TabsTrigger>
              </TabsList>
              
              {Object.entries(useCasesData).map(([key, cases]) => (
                <TabsContent key={key} value={key} className="space-y-6">
                  <Card className="glass">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          {cases.map((useCase, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                              <span className="text-lg">{useCase}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <MessageCircle className="h-24 w-24 text-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 text-center">
                        <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                          Request a Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Section 4: Our Proven Conversation Design Process */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Proven Conversation Design Process</h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-primary/20 hidden lg:block"></div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {designProcess.map((process, index) => (
                  <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <Card className="glass card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                              {process.step}
                            </div>
                            <h3 className="text-xl font-semibold">{process.title}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Conversation Design Offerings */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Conversation Design Offerings</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {offerings.map((offering) => (
                <AccordionItem key={offering.id} value={offering.id} className="border rounded-lg glass">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <offering.icon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold text-left">{offering.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                          <offering.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">{offering.content}</p>
                        {offering.expectations && (
                          <div>
                            <h4 className="font-semibold mb-2">What You Can Expect:</h4>
                            <ul className="space-y-2">
                              {offering.expectations.map((expectation, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                                  <span className="text-muted-foreground">{expectation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Customer Conversations?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's design intelligent conversations that will enhance your customer experience and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Designing Your Conversation Today
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConversationDesign;
