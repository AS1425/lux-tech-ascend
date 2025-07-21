import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  MessageSquare, 
  Settings, 
  Search, 
  Target, 
  Code, 
  Rocket, 
  Users, 
  ShoppingCart, 
  Heart, 
  Monitor, 
  CreditCard, 
  Plane, 
  GraduationCap,
  Play,
  Calendar,
  CheckCircle
} from 'lucide-react';

const AIGuide = () => {
  const frameworkSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "Understand customer behavior and expectations through deep analytics and user research."
    },
    {
      icon: Target,
      title: "Define", 
      description: "Identify use cases and communication style that align with your brand voice."
    },
    {
      icon: Code,
      title: "Develop",
      description: "Train AI using brand tone, logic, and workflows tailored to your business needs."
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Integrate into channels (chat, voice, web, apps) for seamless user experience."
    }
  ];

  const uniqueFeatures = [
    {
      icon: Brain,
      title: "Conversational Intelligence",
      description: "Advanced NLP that understands context, intent, and emotional nuance in every interaction."
    },
    {
      icon: Zap,
      title: "Real-time Learning", 
      description: "Our AI adapts as it learns from user behavior and interaction patterns continuously."
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Integration",
      description: "Seamlessly connect across all touchpoints - web, mobile, voice, and social platforms."
    },
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Tailor every aspect from personality to functionality to match your unique requirements."
    }
  ];

  const industries = [
    { name: "E-commerce", icon: ShoppingCart, color: "from-blue-500 to-cyan-500" },
    { name: "Healthcare", icon: Heart, color: "from-red-500 to-pink-500" },
    { name: "SaaS", icon: Monitor, color: "from-purple-500 to-violet-500" },
    { name: "Fintech", icon: CreditCard, color: "from-green-500 to-emerald-500" },
    { name: "Travel", icon: Plane, color: "from-orange-500 to-amber-500" },
    { name: "Education", icon: GraduationCap, color: "from-indigo-500 to-blue-500" }
  ];

  const benefits = [
    "24/7 intelligent customer support",
    "Automated lead qualification",
    "Personalized user experiences",
    "Reduced operational costs",
    "Scalable interaction handling",
    "Data-driven insights"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-accent text-white">
              Welcome to the Future of Engagement
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Meet Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Guide
              </span>{' '}
              to a Smarter Business Future
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Unlock the power of intelligent agents tailored to your customers, business, and goals.
              Transform every interaction into an opportunity for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg">
                Start Your AI Journey
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg group">
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What is the AI Guide?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Foreignerds' AI Guide provides tailored, adaptive, intelligent agent experiences that improve customer experience, 
              automate decisions, and integrate seamlessly with your existing business tools. It's not just a chatbot – 
              it's your intelligent business companion that grows smarter with every interaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our AI Guide Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your AI implementation delivers real business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Makes Our AI Guide Unique?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities that set our AI solutions apart from traditional chatbots
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Industries Benefiting from the AI Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming customer experiences across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Experience the AI Guide in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how our intelligent agents can transform your customer interactions
            </p>
            
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 mb-6">
                <Users className="w-16 h-16 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">Interactive AI Experience</h3>
                <p className="text-muted-foreground">
                  Our AI Guide adapts to user preferences, provides contextual responses, 
                  and learns from every interaction to deliver increasingly personalized experiences.
                </p>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                <Play className="w-5 h-5 mr-2" />
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our AI Guide implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border/50 h-fit">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    How long does it take to implement an AI Guide?
                  </h3>
                  <p className="text-muted-foreground">
                    Implementation typically takes 4-8 weeks depending on complexity, integrations required, and the scope of your AI agent's capabilities.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border/50 h-fit">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Can the AI Guide integrate with our existing systems?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, our AI Guide is designed to seamlessly integrate with popular CRM, helpdesk, e-commerce, and communication platforms through APIs and webhooks.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border/50 h-fit">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    What kind of training data is needed?
                  </h3>
                  <p className="text-muted-foreground">
                    We work with your existing customer conversations, FAQs, product documentation, and brand guidelines to train your AI Guide effectively.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border/50 h-fit">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Is ongoing maintenance required?
                  </h3>
                  <p className="text-muted-foreground">
                    We provide ongoing monitoring, updates, and improvements to ensure your AI Guide continues to perform optimally and learns from new interactions.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border/50 h-fit">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    What security measures are in place?
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI solutions comply with industry standards including GDPR, SOC 2, and use enterprise-grade encryption for all data processing and storage.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border/50 h-fit">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Can we customize the AI's personality and responses?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely! We tailor the AI's tone, personality, and responses to match your brand voice and specific business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Design Your AI Guide Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              From design to deployment, we'll help you every step of the way. 
              Transform your customer experience with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90 px-8 py-6 text-lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIGuide;