import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Puzzle, 
  Cloud, 
  Globe, 
  Shield, 
  Cog,
  TestTube,
  Heart,
  CreditCard,
  ShoppingCart,
  Building2,
  Phone,
  Truck,
  GraduationCap,
  MapPin,
  Search,
  Layers,
  FileText,
  CheckCircle,
  Settings,
  Monitor,
  Users,
  Lock,
  Zap,
  BookOpen
} from 'lucide-react';

const CustomAPIDevelopment: React.FC = () => {
  const coreServices = [
    {
      icon: Code2,
      title: "RESTful & GraphQL API Development",
      description: "Build lightweight, efficient APIs using industry-standard protocols."
    },
    {
      icon: FileText,
      title: "Custom API Design & Documentation",
      description: "API-first approach with OpenAPI/Swagger-based documentation."
    },
    {
      icon: Puzzle,
      title: "Third-Party API Integration",
      description: "Connect your systems with CRMs, ERPs, payment gateways, and more."
    },
    {
      icon: Layers,
      title: "Microservices Architecture APIs",
      description: "Modular and containerized APIs that support agile development."
    },
    {
      icon: Globe,
      title: "Mobile & Web API Backend",
      description: "Backend APIs that support apps, web platforms, and devices."
    },
    {
      icon: Shield,
      title: "Authentication & Security Protocols",
      description: "Implement OAuth, JWT, SSL, and token-based security best practices."
    },
    {
      icon: Database,
      title: "Legacy System Integration",
      description: "Extend functionality of outdated systems through API bridges."
    },
    {
      icon: TestTube,
      title: "API Testing & Monitoring",
      description: "Ensure performance, uptime, and quality with automated tools."
    }
  ];

  const industries = [
    {
      icon: CreditCard,
      title: "FinTech & Payments",
      description: "Secure financial transactions & integrations"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant data exchanges"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Inventory, payment, and shipping integrations"
    },
    {
      icon: Building2,
      title: "SaaS & B2B Platforms",
      description: "Extendable backend APIs for platforms"
    },
    {
      icon: Phone,
      title: "Telecom",
      description: "Real-time data routing and messaging APIs"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Vehicle tracking and warehouse APIs"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "LMS and classroom integrations"
    },
    {
      icon: MapPin,
      title: "Travel & Hospitality",
      description: "Booking engine and CRM API sync"
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Platform-Agnostic Expertise",
      description: "We build and integrate APIs across cloud, mobile, and on-prem systems."
    },
    {
      icon: Lock,
      title: "Security-First Development",
      description: "We prioritize encryption, access control, and secure data flow."
    },
    {
      icon: Zap,
      title: "Rapid, Scalable Delivery",
      description: "Agile workflows and modular APIs that evolve with your business."
    },
    {
      icon: BookOpen,
      title: "Clean, Documented Code",
      description: "Developer-friendly code and OpenAPI documentation for easy onboarding."
    }
  ];

  const accordionData = [
    {
      value: "efficiency",
      title: "Boost Operational Efficiency",
      content: "Automate repetitive tasks and enable seamless system communication."
    },
    {
      value: "omnichannel",
      title: "Enable Omni-Channel Experiences",
      content: "Support web, mobile, IoT, and cloud platforms via unified APIs."
    },
    {
      value: "integrations",
      title: "Unlock Scalable Integrations",
      content: "Expand your software ecosystem without reengineering core systems."
    },
    {
      value: "timetomarket",
      title: "Accelerate Product Time-to-Market",
      content: "Build faster using reusable services and ready integrations."
    },
    {
      value: "dataflow",
      title: "Improve Data Flow & Visibility",
      content: "Enable real-time synchronization and centralized data access."
    }
  ];

  const processSteps = [
    {
      icon: Search,
      title: "Requirement Analysis & System Mapping",
      description: "Understanding your current systems and integration needs"
    },
    {
      icon: Layers,
      title: "API Design & Architecture",
      description: "Creating scalable and secure API blueprints"
    },
    {
      icon: Code2,
      title: "Development & Integration",
      description: "Building and connecting your API solutions"
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing for reliability and performance"
    },
    {
      icon: FileText,
      title: "Documentation & Versioning",
      description: "Clear documentation and version management"
    },
    {
      icon: Monitor,
      title: "Launch & Monitoring",
      description: "Deployment and continuous performance monitoring"
    }
  ];

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build Robust, Scalable APIs That Power Your Digital Ecosystem
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              We help you connect, extend, and innovate faster with custom API solutions tailored to your business systems.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Let's Build Your API Stack
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Connect the Dots of Your Digital Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Custom APIs are the backbone of modern digital systems. Whether you're integrating third-party platforms, enabling mobile apps, or building microservices, we craft secure and scalable APIs that enhance interoperability and performance. Future-proof your architecture with intelligent API design and execution.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                <Puzzle className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our API Development & Integration Services Include
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Prioritize Custom API Development?
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {accordionData.map((item, index) => (
                <AccordionItem key={index} value={item.value} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industries We Empower with Custom APIs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Lifecycle */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our API Development & Integration Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Us for API Development?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Secure, Scalable API for Your Product?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            We help you streamline integrations and unlock business agility with custom APIs.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Schedule a Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CustomAPIDevelopment;