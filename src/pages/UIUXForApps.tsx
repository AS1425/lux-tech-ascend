import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Palette, Monitor, Smartphone, Users, TrendingUp, Zap, Eye, Heart, Layout, TestTube, Accessibility } from 'lucide-react';

const UIUXForApps = () => {
  const uiuxServices = [
    {
      title: "UX Research & Wireframing",
      description: "Deep user research and strategic wireframing to build intuitive user journeys.",
      icon: Users
    },
    {
      title: "UI Design for Mobile & Web",
      description: "Pixel-perfect interfaces designed for both mobile and web platforms.",
      icon: Monitor
    },
    {
      title: "Design Systems & Prototyping",
      description: "Comprehensive design systems and interactive prototypes for consistency.",
      icon: Layout
    },
    {
      title: "App Redesign Services",
      description: "Complete app makeovers to improve usability and visual appeal.",
      icon: Palette
    },
    {
      title: "User Testing & Feedback Loops",
      description: "Iterative testing and feedback collection to optimize user experiences.",
      icon: TestTube
    },
    {
      title: "Accessibility-First Design",
      description: "Inclusive design practices ensuring your app works for everyone.",
      icon: Accessibility
    }
  ];

  const whyUIUXMatters = [
    {
      title: "Improved Retention",
      description: "Users stay longer with intuitive navigation and visual clarity.",
      icon: Heart
    },
    {
      title: "Boosted Conversions",
      description: "Seamless design drives better call-to-action responses.",
      icon: TrendingUp
    },
    {
      title: "User Satisfaction",
      description: "Positive experience = positive reviews = more downloads.",
      icon: Users
    },
    {
      title: "Reduced Development Cost",
      description: "Fewer revisions and reworks save money in long term.",
      icon: Zap
    }
  ];

  const designProcess = [
    {
      title: "Discovery & User Research",
      description: "Understanding your users, business goals, and competitive landscape.",
      icon: Eye
    },
    {
      title: "Wireframing & UX Strategy",
      description: "Creating user flows and wireframes that map the optimal user journey.",
      icon: Layout
    },
    {
      title: "UI Mockups & Visual Branding",
      description: "Designing beautiful interfaces that align with your brand identity.",
      icon: Palette
    },
    {
      title: "Prototyping & Iterations",
      description: "Building interactive prototypes for testing and refinement.",
      icon: Monitor
    },
    {
      title: "User Testing & Feedback",
      description: "Validating designs with real users and incorporating feedback.",
      icon: TestTube
    },
    {
      title: "Final Handoff to Dev Team",
      description: "Delivering pixel-perfect designs and assets ready for development.",
      icon: ArrowRight
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0">
            {/* UI Elements Animation */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            {/* Connecting Lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 80}%`,
                  width: `${20 + Math.random() * 60}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              UI/UX Design for 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Web & Mobile Apps
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Crafting intuitive, engaging, and conversion-focused user experiences for modern digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Get a Free Design Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Build Once. Launch Everywhere.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The success of your app begins with the user experience. Our expert UI/UX designers build pixel-perfect, conversion-optimized interfaces that not only look stunning but also improve usability and business outcomes.
              </p>
            </div>
            <div className="relative animate-fade-right">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="UI/UX Design Mockups"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Good UI/UX Matters Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why UI/UX Design is Critical for App Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Great design isn't just about aesthetics—it's about creating experiences that drive business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUIUXMatters.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our UI/UX Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive UI/UX Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From research to final implementation, we cover every aspect of the design process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiuxServices.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Design Stunning Interfaces
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven design process ensures every project delivers exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our UI/UX design services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you offer UI/UX for both web and mobile apps?</AccordionTrigger>
              <AccordionContent>
                Yes, we specialize in responsive UI/UX for iOS, Android, and web platforms. Our designs are crafted to provide consistent experiences across all devices while leveraging platform-specific design patterns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What tools do you use for design?</AccordionTrigger>
              <AccordionContent>
                We typically use Figma, Adobe XD, Sketch, and InVision based on project needs. Figma is our primary tool for collaborative design and prototyping, ensuring seamless handoff to development teams.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you redesign an existing app?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We evaluate your current UX and apply a modern, conversion-focused redesign. Our process includes user research, competitive analysis, and iterative design improvements to enhance user engagement and business metrics.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you involve clients in the design process?</AccordionTrigger>
              <AccordionContent>
                We share wireframes, prototypes, and iterative feedback sessions for full transparency. Our collaborative approach includes regular check-ins, design reviews, and user testing sessions where clients can provide input and see progress in real-time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you conduct user research?</AccordionTrigger>
              <AccordionContent>
                Yes, our UX process includes user interviews, journey mapping, and usability testing. We believe in data-driven design decisions and always validate our designs with real users to ensure optimal user experiences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Let's Design an Experience Users Will Love
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborate with our design team to build elegant, intuitive, and high-converting app interfaces.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 group">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXForApps;