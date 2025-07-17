
import React, { useState, useCallback, useMemo } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Bot, Clock, Users, BarChart3, Zap, Brain, Globe, Shield, Cog, Target, ChevronDown, Settings, UserCheck, Lightbulb, TrendingUp, Headphones, Building, BarChart } from 'lucide-react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

const AIAgentDevelopment = () => {
  const [init, setInit] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [openIndustryAccordion, setOpenIndustryAccordion] = useState<string | null>(null);

  // Initialize particles engine
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: ["#8b5cf6", "#f97316"],
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: 0.15,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 2,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const aiServices = [
    {
      title: "Expert AI Advisory for Strategic Advantage",
      content: "Not sure where to begin? Our AI Agent specialists help you choose the right LLMs, architecture, and orchestration framework. We align AI initiatives with your business goals while ensuring efficiency, security, and scalability from day one."
    },
    {
      title: "Frictionless Embedding into Existing System",
      content: "Our integration services ensure seamless compatibility with your current software environment—without costly reengineering."
    },
    {
      title: "Custom AI Agent Engineering",
      content: "Build AI agents tailored to your workflows, data structure, and user needs with scalable architecture."
    },
    {
      title: "Intelligent Virtual Assistants",
      content: "Develop virtual assistants capable of smart dialogue management, contextual understanding, and continuous learning."
    },
    {
      title: "Human-Like Capabilities",
      content: "Add advanced NLP, speech synthesis, and real-time response systems that make your AI feel natural and intuitive."
    },
    {
      title: "In-depth Audit & Enhancement",
      content: "Optimize existing agents with performance tuning, analytics, and retraining based on real user data."
    },
    {
      title: "Agent Assist Systems",
      content: "Equip your teams with AI copilots and workflow enhancers that boost productivity and customer service."
    },
    {
      title: "Enterprise AI Agents",
      content: "Create and manage scalable, secure AI agent deployments across departments and touchpoints."
    }
  ];

  const industries = [
    {
      id: "retail",
      title: "Retail and eCommerce",
      icon: BarChart,
      content: "Deliver hyper-personalized shopping journeys with AI agents offering dynamic product recommendations, pricing models, and style assistants for eCommerce.",
      bullets: ["Smart product search", "Real-time promotions", "Style & gift recommendation engines"]
    },
    {
      id: "finance",
      title: "Finance and Banking",
      icon: TrendingUp,
      content: "Help customers navigate complex financial services via AI agents offering advisory, fraud alerts, and account management.",
      bullets: ["Fraud detection", "Account management", "Financial advisory"]
    },
    {
      id: "insurance",
      title: "Insurance",
      icon: Shield,
      content: "Automate claims processing and customer support with intent-driven AI agents trained in insurance lingo.",
      bullets: ["Claims automation", "Policy guidance", "Risk assessment"]
    },
    {
      id: "automotive",
      title: "Automotive",
      icon: Cog,
      content: "AI agents assist in virtual showrooms, customer service automation, and predictive maintenance scheduling.",
      bullets: ["Virtual showrooms", "Service scheduling", "Maintenance alerts"]
    },
    {
      id: "telecom",
      title: "Telecom",
      icon: Globe,
      content: "Streamline support tickets, onboarding, and plan upgrades through AI-powered virtual agents.",
      bullets: ["Support automation", "Plan optimization", "Network troubleshooting"]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: Headphones,
      content: "Enable virtual assistants for patient triage, appointment scheduling, and medical FAQ handling.",
      bullets: ["Patient triage", "Appointment booking", "Medical information"]
    }
  ];

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
      
      {/* Particles Background */}
      {init && (
        <Particles
          id="particles-background"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Agent Development Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Enhance customer interactions with intelligent, autonomous AI agents built for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative lg:block hidden">
              <div className="relative">
                <img 
                  src="/lovable-uploads/7f4f9140-16e6-4d2a-b775-4df6a962bf40.png"
                  alt="AI Agent Development"
                  className="w-full h-auto max-w-md mx-auto animate-fade-up"
                  style={{ animationDelay: '0.3s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your One-Stop Shop Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Your One-Stop Shop for AI Agent Development Services</h2>
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <div className="flex flex-col space-y-3">
                {aiServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveServiceTab(index)}
                    className={`text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md ${
                      activeServiceTab === index
                        ? 'bg-primary text-primary-foreground shadow-lg transform scale-[1.02]'
                        : 'bg-background hover:bg-muted border border-border hover:border-primary/20'
                    }`}
                  >
                    <span className="font-medium text-sm leading-tight">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <Card className="h-full shadow-lg border-0 bg-background/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{aiServices[activeServiceTab].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {aiServices[activeServiceTab].content}
                  </p>
                </CardContent>
              </Card>
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

      {/* AI Agent Solutions for Industries */}
      <section className="py-16 lg:py-24 relative">
        {/* Particle Background for this section */}
        {init && (
          <Particles
            id="industry-particles"
            options={{
              ...particlesOptions,
              particles: {
                ...particlesOptions.particles,
                number: {
                  density: {
                    enable: true,
                  },
                  value: 30,
                },
                opacity: {
                  value: 0.1,
                },
              },
            }}
            className="absolute inset-0 z-0"
          />
        )}
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">AI Agent Solutions for Industries</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {industries.map((industry) => (
              <Collapsible
                key={industry.id}
                open={openIndustryAccordion === industry.id}
                onOpenChange={() => setOpenIndustryAccordion(openIndustryAccordion === industry.id ? null : industry.id)}
              >
                <CollapsibleTrigger className="w-full">
                  <Card className="glass card-hover cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div className="flex items-center gap-4">
                        <industry.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl text-left">{industry.title}</CardTitle>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                        openIndustryAccordion === industry.id ? 'rotate-180' : ''
                      }`} />
                    </CardHeader>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent className="transition-all duration-300">
                  <Card className="mt-2 bg-background/95 backdrop-blur shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <industry.icon className="h-12 w-12 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {industry.content}
                          </p>
                          <ul className="space-y-2">
                            {industry.bullets.map((bullet, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-sm text-muted-foreground">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
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
