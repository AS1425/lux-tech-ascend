import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code2, Smartphone, Globe, Database, Shield, Zap, Users, Palette } from 'lucide-react';

const WebAppDevelopment = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Application Development",
      description: "Tailored apps aligned with your unique business processes."
    },
    {
      icon: Globe,
      title: "SaaS Platform Development",
      description: "Full-featured SaaS products built for scalability and user adoption."
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps (PWAs)",
      description: "Fast, offline-capable apps with native app-like experiences."
    },
    {
      icon: Zap,
      title: "Single Page Applications (SPA)",
      description: "Modern SPAs using React, Vue, or Angular for dynamic interfaces."
    },
    {
      icon: Shield,
      title: "Enterprise Web Portals",
      description: "Secure, scalable portals for employees, vendors, or customers."
    },
    {
      icon: Palette,
      title: "UI/UX Design for Web Apps",
      description: "Intuitive and accessible interfaces designed for user delight."
    },
    {
      icon: Database,
      title: "API Integration & Backend Development",
      description: "Custom backend systems and third-party integrations."
    },
    {
      icon: ArrowRight,
      title: "App Modernization & Migration",
      description: "Upgrade legacy apps or shift to cloud-native environments."
    }
  ];

  const industries = [
    "Healthcare Patient Portals",
    "Logistics Dashboards", 
    "E-learning Platforms",
    "HR Management Tools",
    "Banking & Finance Portals",
    "Real Estate Marketplaces",
    "Non-profit Donation Management",
    "Ecommerce Web Platforms"
  ];

  const whyChooseUs = [
    {
      title: "Custom-First Approach",
      description: "Every project is built to reflect your business logic and growth path."
    },
    {
      title: "Modern, Scalable Tech Stack",
      description: "React, Node.js, Next.js, Python, MongoDB, Firebase, and more."
    },
    {
      title: "Security, Speed & SEO-Readiness",
      description: "We follow the best practices in data protection, performance, and discoverability."
    }
  ];

  const processSteps = [
    "Requirements Discovery",
    "Wireframes & Design Prototyping", 
    "Frontend + Backend Development",
    "API Integrations",
    "Testing & QA",
    "Deployment & Monitoring",
    "Ongoing Support & Feature Scaling"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Custom Web Apps Built to Scale and Perform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Drive user engagement, process automation, and digital transformation with modern web applications tailored to your business goals.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Let's Build Your Web App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Future-Ready Web Applications for Every Business Need
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're launching a SaaS product, streamlining internal operations, or creating customer-facing portals—our custom web app development services turn ideas into scalable, secure, and high-performing web solutions. From concept to deployment, we bring modern technologies and user-centered design to life.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Globe className="h-24 w-24 mx-auto text-primary" />
                <p className="text-sm text-muted-foreground">Responsive Design & Modern Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Web App Development Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
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

      {/* Industries Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Solutions Designed for Every Industry
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Badge key={index} variant="secondary" className="text-center p-4 text-sm font-medium">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us for Web App Development?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Web App Development Process
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Delivering Business Value with Every Line of Code
            </h2>
            <Card className="bg-background/50 border-border/50">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground italic">
                  "We delivered a scalable PWA for a logistics provider, helping them reduce response times by 58% and boost client satisfaction significantly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Launch Your Web App?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build a future-proof web application tailored to your vision.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Talk to Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebAppDevelopment;