import React from 'react';
import { ArrowRight, Code, Settings, Zap, Shield, Users, CheckCircle, Cloud, Database, Smartphone, Cog, Package, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CustomSoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Custom Software That Fits Your Business Like a Glove
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We design, develop, and deploy scalable custom software solutions tailored to your business needs—driving productivity, efficiency, and ROI.
          </p>
          <Button size="lg" className="group">
            Talk to Our Experts
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Introduction / Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Custom Software Development"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Code className="w-12 h-12 text-primary" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Scalable and Purpose-Built Software That Grows with You
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From MVPs to enterprise-grade platforms, our team builds powerful software tailored to your unique needs. We cover the entire lifecycle—from ideation and design to deployment and ongoing support—with agility, transparency, and innovation at the core.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services (Icon Cards Section) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Custom Software Development Services Include
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Enterprise Software Development",
                description: "Build robust enterprise platforms tailored to your internal workflows.",
                icon: Settings
              },
              {
                title: "MVP & Prototype Development",
                description: "Launch faster with strategic MVPs validated for real-world use.",
                icon: Zap
              },
              {
                title: "Legacy Software Modernization",
                description: "Upgrade outdated systems into modern, scalable technologies.",
                icon: Package
              },
              {
                title: "API Development & Integrations",
                description: "Seamlessly connect your systems with custom APIs and integrations.",
                icon: Database
              },
              {
                title: "Cross-Platform App Development",
                description: "Build responsive software across desktop, web, and mobile.",
                icon: Smartphone
              },
              {
                title: "Software Architecture & Design",
                description: "Architect scalable systems from the ground up with long-term vision.",
                icon: Cog
              },
              {
                title: "Cloud-Native Development",
                description: "Build scalable and secure applications optimized for cloud.",
                icon: Cloud
              },
              {
                title: "Maintenance & Support",
                description: "Post-deployment support, enhancements, and performance monitoring.",
                icon: Wrench
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section – Why Custom Software? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Custom Software Over Off-the-Shelf Solutions?
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Tailored to Your Business Logic
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No compromise—solutions built around your workflows, not the other way around.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Greater Flexibility & Control
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Add features, scale performance, or integrate anytime—on your terms.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Improved Efficiency & Productivity
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Automate repetitive tasks and eliminate bottlenecks.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Cost-Effective in the Long Run
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Avoid recurring licensing costs and third-party limitations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Competitive Advantage
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Build proprietary tools that give your business a unique edge.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Industry Use Cases / Sectors We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Build Software For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Healthcare",
                description: "Custom EMR, HIPAA-compliant systems",
                emoji: "🏥"
              },
              {
                title: "E-commerce",
                description: "Tailored order and inventory management",
                emoji: "🛒"
              },
              {
                title: "Finance & Banking",
                description: "Secure fintech platforms with real-time insights",
                emoji: "🏦"
              },
              {
                title: "Logistics",
                description: "Real-time tracking and delivery systems",
                emoji: "🚚"
              },
              {
                title: "Education",
                description: "LMS platforms, student portals, and eLearning tools",
                emoji: "🎓"
              }
            ].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="text-4xl mb-2">{industry.emoji}</div>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story / Process Flow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Bring Your Software Vision to Life
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Requirement Gathering",
                icon: Users
              },
              {
                step: "02", 
                title: "UI/UX Design & Wireframing",
                icon: Code
              },
              {
                step: "03",
                title: "Development & Testing",
                icon: Settings
              },
              {
                step: "04",
                title: "Deployment & Integration",
                icon: Zap
              },
              {
                step: "05",
                title: "Maintenance & Optimization",
                icon: CheckCircle
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <process.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{process.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner with Us for Custom Software?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full-Cycle Development Expertise",
                description: "End-to-end development from concept to deployment and beyond.",
                icon: Cog
              },
              {
                title: "Agile & Scalable Delivery",
                description: "Flexible methodology ensuring timely delivery and scalability.",
                icon: Zap
              },
              {
                title: "Experienced Cross-Industry Developers",
                description: "Deep expertise across multiple industries and technologies.",
                icon: Users
              },
              {
                title: "Client-First Approach & Transparent Communication",
                description: "Clear communication and client satisfaction at every step.",
                icon: Shield
              }
            ].map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Software That Drives Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's turn your vision into high-performing, scalable software. Start your journey today.
          </p>
          <Button size="lg" className="group">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How long does it take to build custom software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Development timelines vary based on complexity, features, and requirements. Simple applications may take 3-6 months, while complex enterprise solutions can take 12-18 months or more.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you sign NDAs and provide IP rights?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we sign NDAs to protect your confidential information and ensure you retain full intellectual property rights to your custom software.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I scale the software after launch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! We build scalable architectures that can grow with your business, and we provide ongoing support for enhancements and new features.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What technologies do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with modern technologies including React, Node.js, Python, .NET, cloud platforms (AWS, Azure, GCP), databases, and mobile development frameworks.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-5" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you offer post-launch support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provide comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Services You Might Need
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description: "Create intuitive and engaging user experiences for your software.",
                href: "/ui-ux-design"
              },
              {
                title: "Mobile App Development",
                description: "Extend your software reach with native and cross-platform mobile apps.",
                href: "/mobile-app-development"
              },
              {
                title: "DevOps Consulting",
                description: "Streamline deployment and operations with DevOps best practices.",
                href: "/devops-consulting"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;