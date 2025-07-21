
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Brain, 
  Target, 
  Lightbulb, 
  Users, 
  Cog, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Settings,
  Bot,
  MessageSquare,
  Headphones,
  Sparkles,
  Palette,
  Workflow,
  BarChart,
  Gauge,
  TrendingDown,
  Megaphone
} from 'lucide-react';

const AIConsulting = () => {
  // Neural network animation component
  const NeuralNetwork = () => (
    <div className="neural-network">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="neural-node"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`
          }}
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="neural-connection"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${20 + Math.random() * 60}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 6}s`
          }}
        />
      ))}
    </div>
  );

  const services = [
    {
      icon: Target,
      title: "AI Strategy Development",
      description: "We help define your AI roadmap, aligning your business objectives with AI-driven solutions."
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "We develop and implement custom AI solutions such as machine learning models, automation tools, and AI-driven analytics."
    },
    {
      icon: Settings,
      title: "AI Implementation",
      description: "We provide end-to-end support in deploying AI systems, integrating them seamlessly with your existing infrastructure."
    },
    {
      icon: Users,
      title: "AI Training & Knowledge Transfer",
      description: "We equip your team with the knowledge and skills needed to manage and scale AI solutions effectively."
    },
    {
      icon: TrendingUp,
      title: "AI Optimization & Maintenance",
      description: "We monitor and optimize the performance of AI solutions to ensure they deliver continuous value."
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Strategic AI Expertise",
      description: "Leverage years of AI experience to make informed decisions"
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven Solutions",
      description: "Transform your business with cutting-edge AI technologies"
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description: "Achieve tangible business outcomes with data-driven AI strategies"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Fast-track your AI journey with proven methodologies"
    }
  ];

  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <NeuralNetwork />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Empower your business with cutting-edge AI strategies and expertise from industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple hover:scale-105 transition-all duration-300">
                  Get Started with AI Consulting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-right">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  What is AI Consulting?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AI consulting involves providing expert advice to businesses on how to implement and leverage artificial intelligence technologies to solve complex business problems. From selecting the right AI tools to developing custom AI models, our consulting services guide businesses through every step of their AI journey, ensuring alignment with their strategic goals and delivering tangible outcomes.
                </p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Expert guidance through your complete AI transformation journey
                  </p>
                </div>
              </div>
              <div className="animate-fade-left">
                <div className="relative">
                  <div className="glass p-8 rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[Brain, Target, Lightbulb, Users].map((Icon, index) => (
                        <div
                          key={index}
                          className="glass-dark p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                        >
                          <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">AI Expertise</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Consulting Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose AI Consulting for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                AI can be a game-changer for your business, but implementing AI solutions can be complex. Our AI consulting services help you identify the right AI strategies for your needs, build the necessary capabilities, and ensure you achieve measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass card-hover">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Consulting Services Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our AI Consulting Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a range of AI consulting services tailored to your specific business needs
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <Card key={index} className="glass card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-right">
                <div className="relative">
                  <div className="glass p-8 rounded-2xl">
                    <div className="text-center">
                      <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">AI Excellence</h3>
                      <p className="text-muted-foreground">
                        Industry-leading expertise in AI strategy and implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-left">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Why Choose Us for AI Consulting?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With years of experience in AI technology and deep industry expertise, our consulting team is uniquely positioned to help your business leverage AI. We combine technical expertise with strategic insights to deliver practical AI solutions that align with your goals. Our hands-on approach ensures that you receive personalized service every step of the way, driving tangible, measurable business outcomes.
                </p>
                <div className="space-y-4">
                  {[
                    "Years of AI expertise across industries",
                    "Proven track record of successful implementations",
                    "Strategic approach with measurable outcomes",
                    "Personalized service and ongoing support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solve Real Business Challenges with AI */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Solve Real Business Challenges with AI
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Tabs */}
              <div className="lg:col-span-1">
                <Tabs defaultValue="ai-agents" orientation="vertical" className="w-full">
                  <TabsList className="flex flex-col h-auto w-full bg-background/50 p-2">
                    <TabsTrigger value="ai-agents" className="w-full justify-start py-3 px-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Bot className="mr-2 h-4 w-4" />
                      AI Agents
                    </TabsTrigger>
                    <TabsTrigger value="conversational-bots" className="w-full justify-start py-3 px-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Conversational Bots
                    </TabsTrigger>
                    <TabsTrigger value="customer-support" className="w-full justify-start py-3 px-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Headphones className="mr-2 h-4 w-4" />
                      Customer Support Strategy
                    </TabsTrigger>
                    <TabsTrigger value="generative-ai" className="w-full justify-start py-3 px-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generative AI Solutions
                    </TabsTrigger>
                    <TabsTrigger value="conversational-design" className="w-full justify-start py-3 px-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Palette className="mr-2 h-4 w-4" />
                      Conversational AI & Design
                    </TabsTrigger>
                    <TabsTrigger value="ai-copilot" className="w-full justify-start py-3 px-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Workflow className="mr-2 h-4 w-4" />
                      AI Copilot
                    </TabsTrigger>
                    <TabsTrigger value="conversational-analytics" className="w-full justify-start py-3 px-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <BarChart className="mr-2 h-4 w-4" />
                      Conversational Analytics
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="ai-agents" orientation="vertical" className="w-full">
                  <TabsContent value="ai-agents" className="mt-0">
                    <Card className="glass rounded-2xl shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">AI Agents</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Supercharge productivity with autonomous tools that think, learn, and act. From optimizing workflows to making real-time decisions, we build agents that handle complexity, reduce manual effort, and scale across departments—so your team can focus on impact.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="conversational-bots" className="mt-0">
                    <Card className="glass rounded-2xl shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">Conversational Bots</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Transform customer interactions with intelligent bots that understand context, sentiment, and intent. Our conversational solutions provide 24/7 support, streamline operations, and deliver personalized experiences at scale.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="customer-support" className="mt-0">
                    <Card className="glass rounded-2xl shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">Customer Support Strategy</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Revolutionize your support operations with AI-powered strategies that reduce response times, improve resolution rates, and enhance customer satisfaction through intelligent routing and automated assistance.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="generative-ai" className="mt-0">
                    <Card className="glass rounded-2xl shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">Generative AI Solutions</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Unlock creative potential with generative AI that produces content, designs, and solutions tailored to your brand. From automated content creation to personalized recommendations, boost efficiency and innovation.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="conversational-design" className="mt-0">
                    <Card className="glass rounded-2xl shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">Conversational AI & Design</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Craft seamless conversational experiences with human-centered design principles. We create intuitive dialogue flows, natural language understanding, and engaging interactions that feel genuinely helpful.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="ai-copilot" className="mt-0">
                    <Card className="glass rounded-2xl shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">AI Copilot</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Empower your workforce with intelligent AI assistants that work alongside teams, providing real-time insights, automating routine tasks, and enhancing decision-making capabilities across all business functions.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="conversational-analytics" className="mt-0">
                    <Card className="glass rounded-2xl shadow-lg">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">Conversational Analytics</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Gain deep insights from every conversation with advanced analytics that reveal customer patterns, sentiment trends, and optimization opportunities to continuously improve your AI solutions.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Consulting Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                AI Consulting Advantages to Your Company's Efficiency
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="operational-efficiency" className="border rounded-lg px-6 bg-background/50">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Gauge className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Operational Efficiency</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 text-muted-foreground text-base leading-relaxed">
                  By analyzing your workflow system, AI consultants can pinpoint specific areas where digital automation could significantly boost productivity, reduce costs, and organize operations, setting the stage for a more efficient business model.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data-driven-decisions" className="border rounded-lg px-6 bg-background/50">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Data-Driven Decision Making</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 text-muted-foreground text-base leading-relaxed">
                  Transform your decision-making process with AI-powered analytics that provide real-time insights, predictive modeling, and actionable intelligence to drive strategic business choices with confidence and precision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="marketing-optimization" className="border rounded-lg px-6 bg-background/50">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Megaphone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">Marketing Strategy Optimization</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 text-muted-foreground text-base leading-relaxed">
                  Revolutionize your marketing approach with AI-driven strategies that personalize customer experiences, optimize campaign performance, and maximize ROI through intelligent targeting and automated optimization.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Our Step-by-Step Consulting Process */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Enjoy the Journey to AI Excellence with Our Step-by-Step Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Join us on a strategic journey where your business aspirations meet our expertise. Our AI consulting services help take the complexity out of technology implementation, providing a clear and concise roadmap that transforms your strategic vision into an innovative reality.
              </p>
            </div>

            {/* Desktop/Tablet: Horizontal Steps */}
            <div className="hidden md:grid md:grid-cols-6 gap-4 mb-8">
              {[
                { title: "Project Initiation", step: "01" },
                { title: "Discovery and Planning", step: "02" },
                { title: "Business Strategy and Change Management", step: "03" },
                { title: "Implementation Planning", step: "04" },
                { title: "Handover and Knowledge Transfer", step: "05" },
                { title: "Post-launch Support and Evaluation", step: "06", highlighted: true }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                    item.highlighted 
                      ? 'bg-primary text-primary-foreground shadow-lg animate-pulse' 
                      : 'bg-background/50 border border-border hover:shadow-md'
                  }`}
                >
                  <div className={`text-2xl font-bold mb-2 ${item.highlighted ? 'text-primary-foreground' : 'text-primary'}`}>
                    {item.step}
                  </div>
                  <h3 className={`text-sm font-semibold leading-tight ${item.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {item.title}
                  </h3>
                  {index < 5 && (
                    <ArrowRight className="absolute top-1/2 -right-2 transform -translate-y-1/2 h-4 w-4 text-primary bg-background rounded-full p-0.5 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: Vertical Steps */}
            <div className="md:hidden space-y-4">
              {[
                { title: "Project Initiation", step: "01" },
                { title: "Discovery and Planning", step: "02" },
                { title: "Business Strategy and Change Management", step: "03" },
                { title: "Implementation Planning", step: "04" },
                { title: "Handover and Knowledge Transfer", step: "05" },
                { title: "Post-launch Support and Evaluation", step: "06", highlighted: true }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg transition-all duration-300 ${
                    item.highlighted 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'bg-background/50 border border-border'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-2xl font-bold ${item.highlighted ? 'text-primary-foreground' : 'text-primary'}`}>
                      {item.step}
                    </div>
                    <h3 className={`text-lg font-semibold ${item.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule your AI consulting session today and discover how AI can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple pulse-glow">
                Schedule Your AI Consulting Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Contact Our AI Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default AIConsulting;
