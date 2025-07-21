import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Bot, 
  Zap, 
  Cloud, 
  Settings, 
  Rocket, 
  Shield, 
  CheckCircle,
  Users,
  Clock,
  Target,
  Layers,
  Database,
  Cog,
  Heart,
  ShoppingCart,
  GraduationCap,
  Building,
  Car,
  Plane
} from 'lucide-react';

const SoftwareProductDevelopment = () => {
  const [activeTab, setActiveTab] = useState('web-app');

  const developmentCapabilities = {
    'web-app': {
      title: 'Web App Development',
      icon: <Code className="h-6 w-6" />,
      content: 'We build scalable, responsive web applications using modern frameworks like React, Angular, and Vue.js. Our web apps are designed for performance, security, and user experience, incorporating progressive web app features, real-time capabilities, and seamless integrations. From single-page applications to complex enterprise portals, we deliver solutions that drive business growth and user engagement.',
    },
    'mobile-app': {
      title: 'Mobile App Development',
      icon: <Smartphone className="h-6 w-6" />,
      content: 'Create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android. We leverage React Native, Flutter, and native development to build apps that are fast, intuitive, and feature-rich. Our mobile solutions include offline capabilities, push notifications, payment integrations, and seamless synchronization with backend systems.',
    },
    'ai-ml': {
      title: 'AI & ML Integration',
      icon: <Bot className="h-6 w-6" />,
      content: 'Integrate intelligent features into your software products with our AI and machine learning capabilities. We implement natural language processing, computer vision, predictive analytics, and recommendation engines to enhance user experiences and automate complex processes. Our AI solutions are tailored to your specific business needs and data requirements.',
    },
    'api-integration': {
      title: 'API & System Integration',
      icon: <Zap className="h-6 w-6" />,
      content: 'Connect your software ecosystem with robust API development and third-party integrations. We design RESTful and GraphQL APIs, implement microservices architecture, and ensure seamless data flow between systems. Our integration expertise covers payment gateways, CRM systems, marketing automation, and enterprise software platforms.',
    },
    'cloud-native': {
      title: 'Cloud-Native Architecture',
      icon: <Cloud className="h-6 w-6" />,
      content: 'Build scalable, resilient applications with cloud-native architecture principles. We leverage containerization, serverless computing, and auto-scaling capabilities to ensure your software can handle growth and traffic spikes. Our cloud solutions include AWS, Azure, and Google Cloud Platform implementations with DevOps best practices.',
    },
  };

  const whyChooseUsItems = [
    {
      title: 'Tailored, Scalable Solutions',
      icon: <Target className="h-5 w-5" />,
      content: 'Every business is unique, and so should be its software. We craft custom solutions that align perfectly with your business objectives, industry requirements, and growth trajectory. Our scalable architecture ensures your software evolves with your business, handling increased users, data, and functionality without compromising performance.',
    },
    {
      title: 'Agile Development Methodology',
      icon: <Rocket className="h-5 w-5" />,
      content: 'We embrace agile principles to deliver value early and often. Our iterative approach includes regular sprint reviews, continuous feedback loops, and transparent communication. This methodology allows for quick adaptations to changing requirements while maintaining high-quality standards and predictable delivery timelines.',
    },
    {
      title: 'AI-First Engineering Mindset',
      icon: <Bot className="h-5 w-5" />,
      content: 'Our team brings an AI-first approach to software development, identifying opportunities to enhance functionality with intelligent features. From automated workflows to predictive capabilities, we ensure your software stays ahead of the competition by leveraging the latest in artificial intelligence and machine learning technologies.',
    },
    {
      title: 'Full Lifecycle Support',
      icon: <Settings className="h-5 w-5" />,
      content: 'Our commitment extends beyond launch. We provide comprehensive support throughout your software\'s lifecycle, including regular updates, security patches, performance optimization, and feature enhancements. Our dedicated support team ensures your software remains secure, efficient, and aligned with evolving business needs.',
    },
    {
      title: 'On-Time, On-Budget Delivery',
      icon: <Clock className="h-5 w-5" />,
      content: 'We understand the importance of meeting deadlines and budget constraints. Our proven project management methodology, combined with experienced development teams, ensures timely delivery without compromising quality. We provide transparent progress tracking and regular updates to keep you informed throughout the development process.',
    },
    {
      title: 'Security & Compliance by Default',
      icon: <Shield className="h-5 w-5" />,
      content: 'Security is built into every layer of our development process. We implement industry best practices for data protection, secure coding standards, and compliance requirements. Our solutions meet GDPR, HIPAA, SOX, and other regulatory standards, ensuring your software is secure and compliant from day one.',
    },
  ];

  const developmentProcess = [
    {
      title: 'Discovery & Requirement Mapping',
      icon: <Target className="h-5 w-5" />,
      content: 'We begin with comprehensive stakeholder interviews, market research, and technical feasibility analysis. Our discovery phase includes user journey mapping, competitive analysis, and technical architecture planning. We define clear project scope, success metrics, and create detailed documentation to ensure all stakeholders are aligned before development begins.',
    },
    {
      title: 'Wireframing & UI/UX Design',
      icon: <Layers className="h-5 w-5" />,
      content: 'Our design team creates intuitive user interfaces and seamless user experiences. We develop wireframes, prototypes, and interactive mockups that prioritize usability and accessibility. Our design process includes user testing, responsive design principles, and brand alignment to ensure your software delights users across all devices and platforms.',
    },
    {
      title: 'Agile Sprint-Based Development',
      icon: <Rocket className="h-5 w-5" />,
      content: 'Development is organized into focused sprints with clear deliverables and regular review cycles. Our teams follow test-driven development practices, continuous integration, and code review processes. Each sprint delivers working features that can be tested and validated, ensuring rapid progress and early identification of any issues.',
    },
    {
      title: 'Quality Assurance & UAT',
      icon: <CheckCircle className="h-5 w-5" />,
      content: 'Comprehensive testing ensures your software meets the highest quality standards. Our QA process includes automated testing, manual testing, performance testing, and security audits. User Acceptance Testing involves your team in validating functionality and provides an opportunity for final adjustments before launch.',
    },
    {
      title: 'Go-Live Deployment',
      icon: <Cloud className="h-5 w-5" />,
      content: 'We handle smooth deployment to production environments with minimal downtime. Our deployment strategy includes staging environment testing, rollback procedures, and monitoring setup. We provide deployment checklists, go-live support, and immediate post-launch monitoring to ensure everything functions perfectly from day one.',
    },
    {
      title: 'Maintenance & Feature Expansion',
      icon: <Cog className="h-5 w-5" />,
      content: 'Post-launch support includes regular maintenance, security updates, and performance optimization. We provide ongoing feature development based on user feedback and business growth. Our maintenance plans include monitoring, backup management, and proactive issue resolution to keep your software running smoothly.',
    },
  ];

  const featureCards = [
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Custom Architecture',
      description: 'Tailored system architecture designed for your specific performance, security, and scalability requirements.',
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI-Powered Features',
      description: 'Intelligent capabilities including automation, analytics, and personalization to enhance user experience.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Dedicated PM & Sprint Reviews',
      description: 'Assigned project manager and regular sprint reviews for transparent communication and progress tracking.',
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Ongoing Tech Support',
      description: 'Comprehensive technical support, maintenance, and feature updates to ensure long-term success.',
    },
  ];

  const industries = [
    { name: 'FinTech', icon: <Building className="h-6 w-6" />, description: 'Secure financial solutions with compliance focus' },
    { name: 'Healthcare', icon: <Heart className="h-6 w-6" />, description: 'HIPAA-compliant healthcare applications' },
    { name: 'E-Commerce', icon: <ShoppingCart className="h-6 w-6" />, description: 'Scalable online retail platforms' },
    { name: 'SaaS', icon: <Cloud className="h-6 w-6" />, description: 'Multi-tenant cloud-based solutions' },
    { name: 'Logistics', icon: <Plane className="h-6 w-6" />, description: 'Supply chain and logistics optimization' },
    { name: 'EdTech', icon: <GraduationCap className="h-6 w-6" />, description: 'Educational technology platforms' },
    { name: 'Retail', icon: <ShoppingCart className="h-6 w-6" />, description: 'Modern retail management systems' },
    { name: 'AI Startups', icon: <Bot className="h-6 w-6" />, description: 'AI-first product development' },
  ];

  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
              Custom Software Product Development That Powers Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From concept to launch, we design scalable, intuitive, and future-ready software products tailored for business success.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Development Capabilities */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Development Capabilities</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tabs */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {Object.entries(developmentCapabilities).map(([key, capability]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg text-left transition-all duration-200 ${
                      activeTab === key 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'bg-background hover:bg-muted border border-border'
                    }`}
                  >
                    {capability.icon}
                    <span className="font-medium">{capability.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {developmentCapabilities[activeTab].icon}
                    <CardTitle>{developmentCapabilities[activeTab].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {developmentCapabilities[activeTab].content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us for Software Product Development?</h2>
          </div>
          
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {whyChooseUsItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">{item.icon}</div>
                    <span className="font-semibold text-left">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Software Product Development Lifecycle</h2>
          </div>
          
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {developmentProcess.map((step, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg overflow-hidden bg-background">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">{step.icon}</div>
                    <span className="font-semibold text-left">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What You Get With Our Software Product Development Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="text-primary mx-auto mb-2">{card.icon}</div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Forward-Thinking Businesses</h2>
            <p className="text-muted-foreground">Companies worldwide trust us to build their next-generation software products</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">
                  "Their expertise in AI integration transformed our customer service platform. The development team delivered exactly what we envisioned."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">
                  "Exceptional project management and on-time delivery. Our mobile app exceeded user expectations and drove significant growth."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CEO, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-4">
                  "Their cloud-native architecture approach ensured our platform scales seamlessly with our rapid business growth."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">VP Product, HealthTech Inc</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="text-primary mx-auto mb-2">{industry.icon}</div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Turn Your Product Idea Into a Market-Ready Solution</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a strategy call and explore how we can build a future-proof, scalable software product for your business.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
            Schedule a Free Call
          </Button>
        </div>
      </section>

    </Layout>
  );
};

export default SoftwareProductDevelopment;