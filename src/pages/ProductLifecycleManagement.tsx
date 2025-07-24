import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Target, 
  Lightbulb, 
  GitBranch, 
  Settings, 
  FileText, 
  Zap, 
  Shield, 
  Archive,
  Factory,
  Heart,
  Cloud,
  Car,
  Radio,
  Plane,
  Smartphone,
  Zap as Energy,
  Search,
  Wrench,
  Database,
  Users,
  BookOpen,
  TrendingUp,
  CheckCircle,
  DollarSign,
  Eye,
  FileCheck
} from 'lucide-react';

const ProductLifecycleManagement = () => {
  const serviceOfferings = [
    {
      icon: Target,
      title: "Concept & Roadmap Planning",
      description: "Turn ideas into executable product strategies with clear milestones."
    },
    {
      icon: Lightbulb,
      title: "Product Design & Development",
      description: "Streamline prototyping, user testing, and agile-based development."
    },
    {
      icon: GitBranch,
      title: "Versioning & Release Management",
      description: "Manage iterations, testing cycles, and releases efficiently."
    },
    {
      icon: Settings,
      title: "Change & Configuration Management",
      description: "Control versions, track changes, and reduce rework across teams."
    },
    {
      icon: FileText,
      title: "Bill of Materials (BOM) Management",
      description: "Track components, suppliers, and documentation in one place."
    },
    {
      icon: Zap,
      title: "PLM System Integration",
      description: "Integrate PLM with ERP, CRM, DevOps, and other systems."
    },
    {
      icon: Shield,
      title: "Compliance & Documentation Control",
      description: "Maintain regulatory compliance with structured audit-ready processes."
    },
    {
      icon: Archive,
      title: "End-of-Life Product Planning",
      description: "Support decommissioning, data archiving, and transition strategies."
    }
  ];

  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Process standardization across product lines"
    },
    {
      icon: Heart,
      title: "Healthcare & MedTech",
      description: "FDA-compliant device lifecycle management"
    },
    {
      icon: Cloud,
      title: "SaaS & Tech Products",
      description: "Cloud-based version control and release tracking"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "BOM, CAD data, and part management"
    },
    {
      icon: Radio,
      title: "Telecom",
      description: "Complex product structuring and service modeling"
    },
    {
      icon: Plane,
      title: "Aerospace",
      description: "Safety-critical configuration and documentation"
    },
    {
      icon: Smartphone,
      title: "Consumer Electronics",
      description: "Rapid product development and market iteration"
    },
    {
      icon: Energy,
      title: "Energy & Utilities",
      description: "Equipment lifecycle and maintenance planning"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Domain-Centric PLM Experts",
      description: "Deep knowledge across industries like manufacturing, healthcare, and SaaS."
    },
    {
      icon: Wrench,
      title: "Tool-Agnostic Approach",
      description: "We work with Windchill, Siemens, Arena, and other PLM tools."
    },
    {
      icon: Database,
      title: "Data Integrity & Compliance",
      description: "Strong focus on clean documentation, versioning, and control."
    },
    {
      icon: Users,
      title: "Seamless Collaboration",
      description: "Alignment between engineering, marketing, sales, and support teams."
    }
  ];

  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Needs Analysis",
      description: "Understanding your current processes and requirements"
    },
    {
      icon: Target,
      title: "Tool & Strategy Selection",
      description: "Choosing the right PLM approach for your business"
    },
    {
      icon: Database,
      title: "System Integration & Data Migration",
      description: "Seamless integration with existing systems"
    },
    {
      icon: Settings,
      title: "Workflow Customization",
      description: "Tailoring processes to your specific needs"
    },
    {
      icon: BookOpen,
      title: "Team Training & Onboarding",
      description: "Ensuring smooth adoption across teams"
    },
    {
      icon: TrendingUp,
      title: "Monitoring & Continuous Optimization",
      description: "Ongoing improvements and performance tracking"
    }
  ];

  const accordionData = [
    {
      value: "time-to-market",
      trigger: "Reduces Time-to-Market",
      content: "Eliminates silos and speeds up collaboration and approvals."
    },
    {
      value: "quality",
      trigger: "Improves Product Quality",
      content: "Ensures accurate documentation, feedback loops, and test coverage."
    },
    {
      value: "costs",
      trigger: "Cuts Operational Costs",
      content: "Streamlines development cycles and avoids redundancy."
    },
    {
      value: "visibility",
      trigger: "Enhances Cross-Team Visibility",
      content: "Provides a single source of truth across departments."
    },
    {
      value: "compliance",
      trigger: "Supports Regulatory Compliance",
      content: "Tracks every change, version, and audit trail."
    }
  ];

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Manage the Entire Product Journey—From Concept to End-of-Life
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl">
              We help you streamline product innovation, improve collaboration, and accelerate time-to-market with end-to-end PLM services.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Book a Free PLM Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                  <Target className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Transform Ideas Into Market-Ready Products</h2>
              <p className="text-lg text-muted-foreground mb-6">
                From R&D to product retirement, our PLM solutions offer a structured approach to managing the entire lifecycle of a product. Whether you're launching a new software product, improving hardware efficiency, or maintaining regulatory compliance, our services keep every phase connected, traceable, and optimized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Product Lifecycle Management Offerings</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceOfferings.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
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
              <h2 className="text-4xl font-bold mb-4">Why Product Lifecycle Management is Crucial</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {accordionData.map((item, index) => (
                <AccordionItem key={index} value={item.value} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Empower with PLM Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <industry.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our PLM Implementation Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makes Our PLM Services Stand Out?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Maximize Your Product Value with End-to-End PLM Services
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with us to streamline product development, ensure compliance, and manage product data at scale.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Talk to a PLM Expert
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductLifecycleManagement;