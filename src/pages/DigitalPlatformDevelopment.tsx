
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Cloud, 
  Settings, 
  Shield, 
  BarChart3, 
  Zap, 
  Users,
  Database,
  Globe,
  Layers,
  CheckCircle,
  ArrowRight,
  Monitor
} from 'lucide-react';

const DigitalPlatformDevelopment = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Scalability & Flexibility",
      description: "Our digital platforms are designed to scale with your business as it grows, offering the flexibility to adapt to changing market needs."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Seamless Integration",
      description: "We integrate your platform with existing business tools and third-party services, creating a unified ecosystem that streamlines operations."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Enhanced Customer Experience",
      description: "Deliver a seamless, personalized experience to your customers, regardless of the device or channel they use to interact with your business."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data-Driven Insights",
      description: "Our platforms enable you to collect and analyze data, providing actionable insights that drive smarter decisions."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security & Compliance",
      description: "We ensure that your platform adheres to the highest security standards and complies with relevant industry regulations."
    }
  ];

  const processSteps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consultation & Discovery",
      description: "We begin by understanding your business challenges, audience needs, and goals for the platform."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Platform Design & Architecture", 
      description: "Our experts design a scalable and flexible architecture that integrates your existing systems and supports future growth."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Development & Coding",
      description: "We develop the platform using the latest technologies, ensuring it is secure, high-performing, and tailored to your specific needs."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Integration",
      description: "We integrate your digital platform with third-party services, CRMs, APIs, and other business tools to streamline your operations."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Testing & QA",
      description: "Our team ensures the platform is thoroughly tested for performance, security, and functionality across all devices and use cases."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Deployment & Maintenance",
      description: "We deploy the platform into your live environment, offering continuous maintenance and support to ensure its optimal performance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Digital Platform Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Build scalable, innovative, and future-proof digital platforms tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Start Your Digital Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Digital Platform Development?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Digital platform development involves the creation of scalable and flexible platforms that enable businesses to deliver services, connect with users, and integrate multiple systems seamlessly. These platforms provide the foundation for building and deploying digital services such as e-commerce solutions, mobile apps, and cloud-based applications.
              </p>
              <p className="text-lg text-muted-foreground">
                Our digital platform development services ensure that your business has a robust and secure digital foundation, enabling you to innovate, scale, and stay ahead of the competition in a digital-first world.
              </p>
            </div>
            <div className="animate-fade-left">
              <div className="glass p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <Globe className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Global Reach</h3>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Database className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Data Integration</h3>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Cloud className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Cloud Architecture</h3>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Layers className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Scalable Systems</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOCG End-to-End Digital Platform Development Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              MOCG End-to-End Digital Platform Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development services covering every aspect of your digital platform journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              <AccordionItem value="item-0" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Settings className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Project Blueprint Creation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Every great digital platform begins with a meticulously crafted roadmap. During the discovery phase, we conduct in-depth stakeholder interviews, client research, and holistic evaluations to define precise requirements and scope. With this helps us determine a full MVP scope and the right approach to validate the idea and gather early feedback. The result? A cycle-precise proposal that aligns with your strategic vision, mitigating risks and securing a successful launch.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Layers className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Platform Architecture & UX Design</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    We create scalable, high-performing architectures and intuitive UX that meets user expectations and drives platform engagement.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Monitor className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Development of Framework's Core Functionality</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    We build custom backend and frontend components tailored to your platform needs using robust frameworks and technologies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">System Interoperability & API Integration</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Seamlessly connect your platform to external systems and third-party services with our deep API integration capabilities.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Database className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Advanced Data Engineering & Storage Solutions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Utilize secure and scalable data pipelines, warehouses, and analytics tools to drive platform intelligence.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Compliance & Security Fortification</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Ensure GDPR, HIPAA, and other compliance standards through robust security protocols and architecture.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Optimization & Automation of IT Infrastructure</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Automate platform deployment and monitoring using DevOps best practices to ensure high availability and performance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Cloud className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Legacy Ecosystem Modernization & Improvement</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Upgrade outdated infrastructure and refactor monolithic code to adopt microservices, cloud, and agile development.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Continuous Support & Platform Management</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Maintain platform health post-launch with proactive support, monitoring, and optimization.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Digital Platform Development Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Digital Platform Development is Vital for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              In today's fast-paced digital landscape, businesses need agile, scalable platforms to meet evolving customer needs, streamline operations, and stay competitive. A well-built digital platform integrates various services and data sources, enabling businesses to deliver a unified experience to their customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="h-8 w-8" />, title: "Enhanced Efficiency", description: "Streamline operations and automate processes" },
              { icon: <Users className="h-8 w-8" />, title: "Better Customer Engagement", description: "Deliver personalized user experiences" },
              { icon: <BarChart3 className="h-8 w-8" />, title: "Data-Driven Decisions", description: "Make informed choices with analytics" }
            ].map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="flex justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Digital Platform Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a comprehensive, agile approach to deliver digital platforms that meet your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold">Step {index + 1}</div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Benefits of Digital Platform Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your business with platforms that deliver measurable value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {benefit.icon}
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Our Digital Platform Development Services Apart */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Sets Our Digital Platform Development Services Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the unique advantages that make our digital platform development services stand out in the industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              <AccordionItem value="item-0" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Industry-Agnostic Expertise</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Our proficiency spans diverse sectors, allowing us to grasp your unique challenges and deliver bespoke platform solutions that perfectly align with your agency's objectives.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Database className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Deep Domain Knowledge</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    We bring years of experience across industries, giving us valuable context to tailor platform features to your operational needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Turning Data into Action</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    We help you transform raw data into actionable insights with integrated analytics, dashboards, and intelligent workflows.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">On-Time, On-Budget, On-Point</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Proven methodologies and agile execution ensure that your platform is delivered efficiently, aligned with scope and timeline.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Ironclad Security</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    We employ enterprise-grade security protocols and proactive monitoring to protect your data and reputation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Hassle-Free Development Journey</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    From planning to deployment, our communication, collaboration, and transparency ensure smooth sailing throughout.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Settings className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Flexible Engagement Models</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Choose from T&M, fixed price, or dedicated team models tailored to your project type, budget, and timeline.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <div className="glass p-8 rounded-2xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Expert Development Team</h3>
                  <p className="text-muted-foreground">
                    Years of experience in building scalable digital platforms
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us for Your Digital Platform Development?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With years of experience in digital platform development, we specialize in building customized platforms that meet your unique business needs. We combine industry expertise with the latest technologies to design scalable, secure, and high-performance platforms that deliver measurable value.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're building a new platform or upgrading an existing one, we provide the technical expertise and hands-on support to ensure success.
              </p>
              <div className="space-y-4">
                {[
                  "Custom platform solutions tailored to your needs",
                  "Latest technologies and best practices",
                  "Scalable and secure architecture",
                  "Ongoing support and maintenance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build a digital platform that drives growth and innovation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Start Your Digital Platform Development
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalPlatformDevelopment;
