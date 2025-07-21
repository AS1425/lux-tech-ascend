
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, Cpu, Palette, Music, FileText, Image, Zap, BarChart3, Cog, Brain, Globe, Target, MessageCircle, Bot, Settings, Code, Shield, TestTube, Wrench, Clock, Users, BookOpen, HeadphonesIcon, Briefcase, TrendingUp, Phone, Lightbulb, Search } from 'lucide-react';

const GenerativeAIDevelopment = () => {
  const [activeServiceTab, setActiveServiceTab] = useState("llm-chatbots");
  const [activeProcessStep, setActiveProcessStep] = useState(1); // First step highlighted by default

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
      icon: MessageCircle,
      emoji: "🧠",
      description: "Deliver intelligent, real-time responses to users across platforms. These chatbots understand user context, remember previous interactions, and answer naturally, revolutionizing customer support, onboarding, and internal communication."
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      icon: Bot,
      emoji: "🤖",
      description: "Autonomous digital workers that execute tasks, make decisions, and interact with systems or people using generative intelligence. Ideal for automating repetitive workflows, scheduling, research, and more—with minimal human intervention."
    },
    {
      id: "model-development",
      title: "Gen AI Model Development",
      icon: Code,
      emoji: "🧬",
      description: "Build tailored generative models trained on your proprietary datasets. This service includes architecture selection, model training, and optimization for accuracy, speed, and real-world business use."
    },
    {
      id: "model-replication",
      title: "Gen AI Model Replication",
      icon: Settings,
      emoji: "⚙️",
      description: "Deliver instant, intelligent support to every client—anytime, anywhere. Modern Gen AI bots break away from scripted replies. They understand intent, follow conversations, and respond clearly—boosting satisfaction and reducing manual workload."
    },
    {
      id: "gpt-integration",
      title: "GPT Integration",
      icon: Cpu,
      emoji: "🔌",
      description: "Seamlessly embed OpenAI's GPT into your tools, platforms, or workflows. Enable smart automation, content generation, and human-like interaction in your apps, CRM, knowledge bases, and more."
    },
    {
      id: "ai-consulting",
      title: "Gen AI Consulting",
      icon: Lightbulb,
      emoji: "🧭",
      description: "Unlock the true potential of generative AI in your business with expert-led strategy sessions, use case discovery, ROI analysis, and roadmap planning tailored to your industry."
    },
    {
      id: "llm-grounding",
      title: "Large Language Model Grounding",
      icon: Target,
      emoji: "🏗️",
      description: "Enhance accuracy and reliability by anchoring LLMs to your internal knowledge. Prevent hallucinations and ensure factual correctness using retrieval-augmented generation (RAG) techniques."
    },
    {
      id: "llm-testing",
      title: "LLM Testing & Fine-Tuning",
      icon: TestTube,
      emoji: "🛠️",
      description: "Improve your model's performance through rigorous A/B testing, bias detection, response evaluation, and iterative fine-tuning for tone, context awareness, and task specificity."
    },
    {
      id: "ai-maintenance",
      title: "Generative AI Maintenance",
      icon: Wrench,
      emoji: "🔧",
      description: "Ensure your Gen AI systems remain optimized and up-to-date. Includes continuous learning, prompt updates, performance audits, and integration management for long-term success."
    },
    {
      id: "llm-security",
      title: "LLM Security Services",
      icon: Shield,
      emoji: "🔒",
      description: "Safeguard your models and data with enterprise-grade AI security. Services include threat monitoring, prompt injection protection, compliance checks (GDPR, HIPAA), and role-based access controls."
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

  const processSteps = [
    {
      id: 1,
      title: "Data Collection & Requirements",
      description: "We gather domain-specific data and define project objectives to shape a successful Gen AI strategy.",
      icon: BarChart3
    },
    {
      id: 2,
      title: "Planning & Determining Technologies",
      description: "Our team selects the right models, frameworks, and infrastructure for seamless AI solution development.",
      icon: Settings
    },
    {
      id: 3,
      title: "Model Training",
      description: "Train large-scale generative models using curated datasets, optimized for accuracy and efficiency.",
      icon: Brain
    },
    {
      id: 4,
      title: "Fine-tuning",
      description: "Refine the model with real-world data and use case feedback to improve contextual response and control.",
      icon: Target
    },
    {
      id: 5,
      title: "Deployment & Maintenance",
      description: "Deploy to your environment and provide ongoing support, updates, and performance monitoring.",
      icon: Wrench
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
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceTab(service.id)}
                  className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 ${
                    activeServiceTab === service.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-muted-foreground hover:bg-muted border border-border'
                  }`}
                >
                  <service.icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{service.title}</span>
                </button>
              ))}
            </div>
            
            <Card className="glass min-h-[300px] transition-all duration-500 ease-in-out">
              <CardContent className="p-8">
                <div className="text-center animate-fade-in">
                  <div className="mb-6 transition-all duration-500">
                    <div className="text-6xl mb-4 animate-scale-in">
                      {services.find(s => s.id === activeServiceTab)?.emoji}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 transition-all duration-500">
                    {services.find(s => s.id === activeServiceTab)?.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto transition-all duration-500">
                    {services.find(s => s.id === activeServiceTab)?.description}
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

      {/* Our Generative AI Solutions Development Process Section */}
      <section className="py-16 lg:py-24 bg-muted/50 relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Generative AI Solutions Development Process</h2>
          
          {/* Desktop Horizontal Scroll */}
          <div className="hidden lg:block">
            <div className="overflow-x-auto scrollbar-hide pb-8">
              <div className="flex gap-6 justify-start px-4" style={{ minWidth: 'max-content' }}>
                {processSteps.map((step) => (
                  <div
                    key={step.id}
                    onClick={() => setActiveProcessStep(step.id)}
                    className={`cursor-pointer transition-all duration-300 rounded-xl p-6 w-[280px] flex-shrink-0 ${
                      activeProcessStep === step.id
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                        : 'bg-card text-card-foreground hover:bg-muted/80'
                    }`}
                    style={{
                      boxShadow: activeProcessStep === step.id 
                        ? '0 8px 24px rgba(0, 0, 0, 0.15)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold ${
                        activeProcessStep === step.id
                          ? 'bg-primary-foreground text-primary'
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {step.id}
                      </div>
                      <step.icon className={`h-8 w-8 mx-auto mb-4 ${
                        activeProcessStep === step.id
                          ? 'text-primary-foreground'
                          : 'text-primary'
                      }`} />
                      <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                      <p className={`text-sm leading-relaxed ${
                        activeProcessStep === step.id
                          ? 'text-primary-foreground/90'
                          : 'text-muted-foreground'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {processSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveProcessStep(step.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProcessStep === step.id
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile Vertical Stack */}
          <div className="lg:hidden space-y-4">
            {processSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveProcessStep(activeProcessStep === step.id ? 0 : step.id)}
                className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${
                  activeProcessStep === step.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-card-foreground'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeProcessStep === step.id
                        ? 'bg-primary-foreground text-primary'
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {step.id}
                    </div>
                    <step.icon className={`h-6 w-6 ${
                      activeProcessStep === step.id
                        ? 'text-primary-foreground'
                        : 'text-primary'
                    }`} />
                    <h3 className="text-lg font-semibold flex-1">{step.title}</h3>
                  </div>
                  
                  <div className={`mt-4 transition-all duration-300 ${
                    activeProcessStep === step.id
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className={`text-sm leading-relaxed ${
                      activeProcessStep === step.id
                        ? 'text-primary-foreground/90'
                        : 'text-muted-foreground'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
