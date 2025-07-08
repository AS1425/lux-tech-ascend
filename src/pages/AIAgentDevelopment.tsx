
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Clock, Users, BarChart3, Zap, Brain, Globe, Shield, Cog, Target } from 'lucide-react';

const AIAgentDevelopment = () => {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Operations",
      description: "Our AI agents operate independently, handling tasks and interactions without manual intervention."
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "AI agents can work across various platforms such as websites, mobile apps, social media, and messaging systems like WhatsApp or Facebook Messenger."
    },
    {
      icon: Brain,
      title: "Learning & Adaptation",
      description: "Powered by machine learning, our AI agents improve over time, becoming more efficient and accurate in their interactions."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Get valuable insights into user behavior, preferences, and interaction history with built-in analytics tools."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI agents are available round-the-clock, ensuring uninterrupted service for customers, no matter the time zone."
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
      description: "AI agents handle customer queries, resolve issues, and provide instant responses, improving customer satisfaction and reducing wait times."
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "AI agents assist in qualifying leads by engaging in conversations, gathering information, and scheduling follow-up actions."
    },
    {
      icon: Zap,
      title: "Sales Assistance",
      description: "AI agents guide customers through product selections, answer questions, and drive conversions."
    },
    {
      icon: Cog,
      title: "Internal Operations",
      description: "AI agents automate internal tasks such as scheduling, reminders, data entry, and document management, boosting productivity."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business requirements, challenges, and goals to ensure the AI agent addresses your unique needs."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team designs the AI agent architecture, mapping out the workflows and decision-making processes."
    },
    {
      step: "03",
      title: "Development & Training",
      description: "The AI agent is developed using cutting-edge AI models and trained using real-world data to ensure it delivers optimal performance."
    },
    {
      step: "04",
      title: "Integration",
      description: "We integrate the AI agent seamlessly with your existing systems, such as CRM tools, messaging platforms, and websites."
    },
    {
      step: "05",
      title: "Testing & Deployment",
      description: "Rigorous testing is conducted to ensure the AI agent performs flawlessly in different scenarios before it goes live."
    },
    {
      step: "06",
      title: "Continuous Monitoring & Optimization",
      description: "Post-launch, we monitor the AI agent's performance and provide regular updates and improvements based on user feedback and evolving business requirements."
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Agent Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Enhance customer interactions with intelligent, autonomous AI agents built for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Are AI Agents?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              AI agents are advanced autonomous systems that use artificial intelligence to perform tasks, make decisions, and interact with customers in a human-like manner. These agents can handle complex customer queries, automate business workflows, and enhance the overall customer experience. Powered by Natural Language Processing (NLP), Machine Learning (ML), and Deep Learning (DL), AI agents can be customized to suit a variety of business applications, including customer support, sales, and internal operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AI Agents Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why AI Agents are Crucial for Your Business Success</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              AI agents offer businesses the ability to automate repetitive tasks, enhance customer engagement, and improve decision-making. By integrating AI agents into your processes, you can increase efficiency, provide personalized customer experiences, and handle a higher volume of interactions without increasing costs. These intelligent agents continuously learn and adapt, improving their performance over time.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Features of Our AI Agents</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our AI Agent Development Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">AI Agent Use Cases</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Partner with Us for AI Agent Development?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              With years of expertise in AI and automation, we specialize in building intelligent AI agents that solve real business problems. Whether you're looking to improve customer service, streamline operations, or generate more leads, our AI agents are designed to deliver measurable results. We focus on delivering custom, scalable, and secure AI solutions that align with your business objectives and seamlessly integrate with your existing systems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business with AI Agents?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build intelligent AI agents that will revolutionize how you engage with customers and automate your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Building Your AI Agent Today
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Talk to Our AI Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgentDevelopment;
