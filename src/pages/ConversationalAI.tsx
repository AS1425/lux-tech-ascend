
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
      content: "Build intelligent chatbots that understand context, handle complex conversations, and integrate seamlessly with your business systems."
    },
    {
      id: "voice-assistant",
      title: "Voice Assistant Development", 
      icon: Mic,
      content: "Create voice-powered AI assistants that respond to natural speech patterns and provide hands-free customer experiences."
    },
    {
      id: "conversation-design",
      title: "Conversation Design",
      icon: MessageCircle,
      content: "Design natural conversation flows that guide users effectively while maintaining engagement and achieving business goals."
    },
    {
      id: "consulting",
      title: "Conversational AI Consulting",
      icon: Lightbulb,
      content: "Strategic guidance on implementing conversational AI solutions that align with your business objectives and technical requirements."
    },
    {
      id: "integration",
      title: "Conversational AI Integration",
      icon: Link,
      content: "Seamlessly integrate conversational AI with your existing CRM, helpdesk, and business systems for unified operations."
    },
    {
      id: "optimization",
      title: "Chatbot Fine-Tuning and Optimization",
      icon: Settings,
      content: "Continuously improve chatbot performance through data analysis, user feedback, and advanced optimization techniques."
    },
    {
      id: "generative-ai",
      title: "Generative AI Integration",
      icon: Sparkles,
      content: "Integrate cutting-edge generative AI capabilities to create more dynamic, creative, and contextually aware responses."
    },
    {
      id: "managed-services",
      title: "Managed Services",
      icon: Wrench,
      content: "End-to-end management of your conversational AI systems including monitoring, updates, and performance optimization."
    },
    {
      id: "training",
      title: "Conversation Design Training",
      icon: GraduationCap,
      content: "Train your team in conversation design principles, AI implementation strategies, and best practices for ongoing success."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Full-cycle Conversational AI",
      description: "We are a full-cycle development company that plans, designs, builds, and maintains conversational AI solutions."
    },
    {
      icon: Globe,
      title: "Omnichannel Approach", 
      description: "Our solutions span across chat, voice, apps, and devices to deliver seamless customer experiences."
    },
    {
      icon: Link,
      title: "Integration Capabilities",
      description: "Easily connect with CRMs, help desks, analytics tools, and internal APIs."
    },
    {
      icon: Languages,
      title: "Flexible Communication",
      description: "Support for multiple languages, contexts, intents, and personalized responses."
    },
    {
      icon: Lock,
      title: "Data Privacy and Security",
      description: "Enterprise-grade security protocols and compliance with global privacy standards."
    }
  ];

  const tabContent = {
    "customer-support": {
      title: "Customer Support",
      items: [
        "24/7 Automated Customer Service",
        "Intelligent Ticket Routing",
        "FAQ and Knowledge Base Integration", 
        "Escalation to Human Agents",
        "Multi-language Support",
        "Customer Satisfaction Tracking"
      ]
    },
    "business-automation": {
      title: "Business Process Automation",
      items: [
        "Knowledge Base Integration",
        "Appointment Scheduling",
        "Notification Chatbots",
        "Automated Billing and Invoicing",
        "Inventory Management",
        "Employee Onboarding"
      ]
    },
    "marketing-sales": {
      title: "Marketing and Sales",
      items: [
        "Lead Generation and Qualification",
        "Product Recommendations",
        "Sales Funnel Automation",
        "Customer Feedback Collection",
        "Promotional Campaign Management",
        "Cross-selling and Upselling"
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
      title: "Consultation and Requirement Analysis",
      description: "Understanding your goals and customer needs to define the scope of the AI solution."
    },
    {
      step: "02",
      title: "AI Design and Development",
      description: "We create the AI models, develop conversational flows, and ensure natural language understanding through advanced NLP techniques."
    },
    {
      step: "03",
      title: "Integration with Systems",
      description: "Our team integrates conversational AI with your existing systems, including CRMs, customer support tools, and communication platforms."
    },
    {
      step: "04",
      title: "Testing and Quality Assurance",
      description: "Comprehensive testing to ensure the AI performs as expected in real-world scenarios."
    },
    {
      step: "05",
      title: "Deployment and Continuous Optimization",
      description: "Post-deployment support and continuous improvement based on performance analytics and user feedback."
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
                src="/lovable-uploads/dc9c8990-8b64-4b46-a506-f5eee530e06f.png" 
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
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id} className="border rounded-lg bg-background shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-primary" />
                      <span className="text-lg font-semibold text-left">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{service.content}</p>
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

      {/* Development Process Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Conversational AI Development Process</h2>
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
                      <Button className="glass px-8 py-3 cta-ripple hover:scale-105 transition-transform">
                        🟧 Request a Quote
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
