
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, Cpu, Palette, Music, FileText, Image, Zap, BarChart3, Cog, Brain, Globe, Target, MessageCircle, Bot, Settings, Code, Shield, TestTube, Wrench, Clock, Users, BookOpen, HeadphonesIcon, Briefcase, TrendingUp, Phone, Lightbulb, Search } from 'lucide-react';

const GenerativeAIDevelopment = () => {
  const [activeServiceTab, setActiveServiceTab] = useState("llm-chatbots");

  const features = [
    {
      icon: FileText,
      title: "Content Generation",
      description: "Create new, high-quality content automatically, such as images, videos, audio, and text."
    },
    {
      icon: Target,
      title: "Personalization",
      description: "Tailor generative AI models to create personalized experiences for your customers, improving engagement and customer loyalty."
    },
    {
      icon: Sparkles,
      title: "Creativity at Scale",
      description: "Automate the creation of creative assets at scale, from marketing materials to product designs, saving time and resources."
    },
    {
      icon: Brain,
      title: "Advanced Learning",
      description: "Our AI models learn from vast amounts of data, enabling them to create highly realistic and accurate outputs."
    },
    {
      icon: Cog,
      title: "Flexible and Customizable",
      description: "Our generative AI solutions can be customized to suit your specific business needs, from marketing to product development and beyond."
    },
    {
      icon: Clock,
      title: "Real-Time Decision Making",
      description: "Leverage GenAI for quick data-driven decisions, automating real-time responses across operations, marketing, and sales."
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Content Creation",
      description: "Automate the generation of marketing copy, blogs, and social media posts to enhance your content marketing efforts."
    },
    {
      icon: Palette,
      title: "Design Generation",
      description: "Use AI to generate product designs, logos, or even architectural plans, allowing for faster design iterations and innovative solutions."
    },
    {
      icon: Music,
      title: "Music and Audio Generation",
      description: "Create original music and sound effects for your media projects, advertisements, or games."
    },
    {
      icon: Image,
      title: "Text-to-Image Generation",
      description: "Generate images from descriptive text inputs, perfect for visualizing ideas, advertising campaigns, and creative assets."
    },
    {
      icon: BarChart3,
      title: "Synthetic Data Generation",
      description: "Produce realistic data for training AI models, particularly useful in fields like healthcare, finance, and research."
    },
    {
      icon: HeadphonesIcon,
      title: "Voice AI Assistants",
      description: "Build conversational AI tools with speech recognition to power call center agents, virtual assistants, and voice-based UX."
    }
  ];

  const services = [
    {
      id: "llm-chatbots",
      title: "LLM-powered Chatbots",
      icon: MessageCircle
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      icon: Bot
    },
    {
      id: "model-development",
      title: "Gen AI Model Development",
      icon: Code
    },
    {
      id: "model-replication",
      title: "Gen AI Model Replication",
      icon: Settings
    },
    {
      id: "gpt-integration",
      title: "GPT Integration",
      icon: Cpu
    },
    {
      id: "ai-consulting",
      title: "Gen AI Consulting",
      icon: Lightbulb
    },
    {
      id: "llm-grounding",
      title: "Large Language Model Grounding",
      icon: Target
    },
    {
      id: "llm-testing",
      title: "LLM Testing & Fine-Tuning",
      icon: TestTube
    },
    {
      id: "ai-maintenance",
      title: "Generative AI Maintenance",
      icon: Wrench
    },
    {
      id: "llm-security",
      title: "LLM Security Services",
      icon: Shield
    }
  ];

  const businessUseCases = [
    {
      icon: MessageCircle,
      title: "Internal/FAQ Chatbot",
      description: "Streamline internal communications and provide instant answers to employee queries with intelligent FAQ automation."
    },
    {
      icon: Cpu,
      title: "Mobile App Development",
      description: "Build AI-powered mobile applications with advanced generative capabilities for enhanced user experiences."
    },
    {
      icon: BookOpen,
      title: "Knowledge Base Automation",
      description: "Automatically generate and maintain comprehensive knowledge bases from your existing documentation and data."
    },
    {
      icon: Users,
      title: "HR Automation",
      description: "Automate recruitment, onboarding, and employee support processes with intelligent AI-driven solutions."
    },
    {
      icon: TrendingUp,
      title: "Marketing Boost",
      description: "Enhance marketing campaigns with AI-generated content, personalized messaging, and automated customer insights."
    },
    {
      icon: Phone,
      title: "Customer Service Assistant",
      description: "Deploy intelligent customer service solutions that provide 24/7 support with human-like interactions."
    },
    {
      icon: Search,
      title: "Recommendation Systems",
      description: "Build sophisticated recommendation engines that understand user preferences and deliver personalized experiences."
    },
    {
      icon: Bot,
      title: "Gen AI Agents",
      description: "Create autonomous AI agents that can perform complex tasks and make decisions across various business processes."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Data Collection & Requirements",
      description: "Understand goals, data sources, and constraints."
    },
    {
      step: "02",
      title: "Planning & Determining Technologies",
      description: "Select tools, models, and project structure."
    },
    {
      step: "03",
      title: "Model Training",
      description: "Train foundational or fine-tuned AI models."
    },
    {
      step: "04",
      title: "LOFT",
      description: "Experts speed up delivery with our framework for efficient Generative AI development.",
      highlighted: true
    },
    {
      step: "05",
      title: "Fine-tuning",
      description: "Customize model performance to user-specific data."
    },
    {
      step: "06",
      title: "Deployment & Maintenance",
      description: "Final testing, deployment, and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 neural-network">
          {[...Array(20)].map((_, i) => (
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
              AI-First Digital Solutions by Foreignerds
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-up text-foreground" style={{ animationDelay: '0.1s' }}>
              Empowering Your Business with Generative AI
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Unlock smarter automation, content creation, and customer service with our custom-built GenAI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                Get a Free AI Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is Generative AI?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Generative AI is a subset of artificial intelligence that focuses on creating new content, such as images, text, music, and even code, from existing data. Using advanced machine learning algorithms and neural networks, generative AI models can produce original content that is indistinguishable from human-generated output. From deep learning models like GANs (Generative Adversarial Networks) to transformer-based models, we harness the power of generative AI to bring your business ideas to life through automation, creativity, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Generative AI Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Generative AI is Transforming Industries</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Generative AI is revolutionizing industries by enabling businesses to automate content creation, generate high-quality designs, and produce realistic simulations for training, marketing, and product development. With its ability to understand patterns, learn from vast datasets, and generate new data, generative AI is driving efficiency and creativity across fields such as entertainment, e-commerce, healthcare, and more. By incorporating generative AI into your processes, you can unlock new business opportunities, enhance creativity, and reduce time spent on repetitive tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our Generative AI Solutions</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Generative AI Development Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Generative AI Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Our Generative AI Development Services Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Generative AI Development Services Include</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-4xl mx-auto">
            Deliver instant, intelligent support to every client—anytime, anywhere. Modern Gen AI bots break away from scripted replies. They understand intent, follow conversations, and respond clearly—boosting satisfaction and reducing manual workload.
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceTab(service.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeServiceTab === service.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <service.icon className="h-4 w-4" />
                  {service.title}
                </button>
              ))}
            </div>
            
            <Card className="glass">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="mb-4">
                    {(() => {
                      const activeService = services.find(s => s.id === activeServiceTab);
                      const IconComponent = activeService?.icon || MessageCircle;
                      return <IconComponent className="h-16 w-16 text-primary mx-auto" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {services.find(s => s.id === activeServiceTab)?.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Deliver instant, intelligent support to every client—anytime, anywhere. Modern Gen AI bots break away from scripted replies. They understand intent, follow conversations, and respond clearly—boosting satisfaction and reducing manual workload.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases of Generative AI Solutions for Businesses */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases of Generative AI Solutions for Businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUseCases.map((useCase, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Partner with Us for Generative AI Solutions?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              With deep expertise in AI and machine learning, we specialize in developing custom generative AI solutions that unlock new possibilities for your business. Whether you're looking to automate content creation, enhance product design, or improve customer engagement, we provide scalable, innovative solutions that align with your business goals. Our team ensures that each generative AI model we develop is finely tuned, highly accurate, and delivers real value for your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business with Generative AI?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's harness the power of generative AI to unlock new creative possibilities and drive innovation in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Building with Generative AI
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Get in Touch with Our AI Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerativeAIDevelopment;
