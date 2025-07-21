
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Shield, DollarSign, Users, Target, TrendingUp, Zap } from 'lucide-react';

const PoCDevelopment = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Test your ideas in a controlled, low-risk environment to identify potential issues before scaling."
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Save time and resources by verifying the feasibility of your concept early in the development cycle."
    },
    {
      icon: TrendingUp,
      title: "Investor Confidence",
      description: "Secure buy-in from investors by demonstrating the technical feasibility of your idea with a tangible prototype."
    },
    {
      icon: Users,
      title: "Market Validation",
      description: "Gain valuable feedback from stakeholders, customers, and users to ensure your concept aligns with market needs and expectations."
    },
    {
      icon: Target,
      title: "Informed Decision-Making",
      description: "Make data-driven decisions about whether to continue developing, pivot, or abandon the project."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We start by understanding your business goals, identifying the problem, and defining the core functionalities of your PoC."
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our team outlines the project scope, creating a design plan that focuses on critical features and functionality."
    },
    {
      number: "03",
      title: "Development & Prototyping",
      description: "We develop a working prototype that showcases the feasibility of the concept and demonstrates its core functionalities."
    },
    {
      number: "04",
      title: "Testing & Validation",
      description: "The PoC is rigorously tested to ensure it meets requirements, functions as expected, and can be scaled further."
    },
    {
      number: "05",
      title: "Iteration & Refinement",
      description: "Based on feedback and testing results, we refine the PoC to ensure it delivers the intended value."
    },
    {
      number: "06",
      title: "Presentation & Reporting",
      description: "We provide a detailed report outlining the PoC's success, challenges, and next steps for further development."
    }
  ];

  const whenDoYouNeedPocTabs = [
    {
      id: "confirm-ideas",
      title: "Confirm Ideas",
      content: "When you have an innovative concept and need to verify its feasibility before full-scale development, PoC allows you to test key features and user interactions. This process helps identify potential challenges and necessary improvements early on, saving time and resources in the long run."
    },
    {
      id: "risk-mitigation",
      title: "Risk Mitigation",
      content: "PoC helps identify potential technical and business risks in the early stages of development, enabling better decision-making and preventing costly mistakes."
    },
    {
      id: "investor-confidence",
      title: "Investor Confidence",
      content: "Demonstrating a functional prototype builds investor confidence by showcasing the idea's viability and expected ROI."
    },
    {
      id: "market-testing",
      title: "Market Testing",
      content: "PoCs can be used to validate product-market fit and collect feedback from early users or stakeholders."
    },
    {
      id: "technical-feasibility",
      title: "Technical Feasibility",
      content: "Test integrations, scalability, and tech stack compatibility before committing full resources to the final build."
    },
    {
      id: "resource-allocation",
      title: "Resource Allocation",
      content: "Helps in assessing whether current internal resources are enough or if additional expertise is required."
    }
  ];

  const mainBenefits = [
    {
      id: "deep-expertise",
      title: "Deep Expertise",
      content: "Our custom software development team brings deep expertise across diverse industries, offering robust solutions that are thoroughly validated and tailored to client needs."
    },
    {
      id: "realistic-deadlines",
      title: "Realistic Deadlines",
      content: "We commit to timelines that are achievable without compromising quality or innovation."
    },
    {
      id: "professional-teams",
      title: "Professional Teams",
      content: "You work with dedicated experts in development, UI/UX, QA, and project management—aligned with your goals."
    },
    {
      id: "smooth-delivery",
      title: "Smooth Delivery",
      content: "A structured delivery plan ensures clarity, consistent updates, and on-time milestones."
    },
    {
      id: "security-reliability",
      title: "Security & Reliability",
      content: "Every prototype is built with secure architecture and data handling practices from day one."
    },
    {
      id: "flexible-engagement",
      title: "Flexible Engagement Models",
      content: "Choose from fixed-cost, hourly, or team-augmentation models based on what suits your project best."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Proof of Concept (PoC) Development Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Validate your ideas and mitigate risk with our expert PoC development services tailored to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glass glow-purple hover:scale-105 transition-all duration-300">
                  Get a Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-accent">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
                alt="PoC Development Conceptual Design"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What is PoC Development Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="PoC Development Prototype"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is Proof of Concept (PoC) Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proof of Concept (PoC) development involves creating an early model or prototype of an idea to demonstrate its feasibility and validate its potential. It serves as a critical step in ensuring that a business idea or technological solution can work as envisioned before investing further resources.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our PoC development services help businesses assess their concepts, test functionality, and identify potential challenges early, saving time and reducing risks in the product development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PoC Development is Crucial Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why PoC Development is Crucial for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PoC development enables businesses to test their ideas in the real world before scaling up. By building a working prototype, companies can validate whether the solution is viable, functional, and aligned with market needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This early-stage validation helps businesses secure investor confidence, streamline product development, and avoid costly mistakes later in the process. Our PoC services provide the clarity and confidence you need to move forward with your business innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80"
                alt="PoC Validation Process"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 to-primary/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* When Do You Need PoC Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              When Do You Need PoC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Identify the right time to validate your innovative concepts
            </p>
          </div>
          
          <Tabs defaultValue="confirm-ideas" className="w-full">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left side - Tabs list */}
              <div className="lg:col-span-1">
                <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-2">
                  {whenDoYouNeedPocTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="w-full justify-start p-4 text-left data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all duration-300"
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Right side - Content */}
              <div className="lg:col-span-2">
                {whenDoYouNeedPocTabs.map((tab) => (
                  <TabsContent
                    key={tab.id}
                    value={tab.id}
                    className="mt-0 space-y-4"
                  >
                    <Card className="card-hover glass border-0 shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shrink-0">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                              {tab.title}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {tab.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Main Benefits of Choosing Our PoC Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why our PoC development approach delivers exceptional value
            </p>
          </div>
          
          <Accordion type="single" collapsible defaultValue="deep-expertise" className="w-full space-y-4">
            {mainBenefits.map((benefit) => (
              <AccordionItem key={benefit.id} value={benefit.id} className="border-0">
                <AccordionTrigger className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/90 transition-all duration-300 text-left text-lg font-semibold text-foreground shadow-sm">
                  {benefit.title}
                </AccordionTrigger>
                <AccordionContent className="bg-white/60 backdrop-blur-sm rounded-b-lg px-6 py-4 text-muted-foreground leading-relaxed">
                  {benefit.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* PoC Development Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our PoC Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We take a strategic and iterative approach to PoC development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-hover glass border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Benefits of PoC Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages of validating your ideas early in the development process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover glass border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Partner with Us for PoC Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines deep technical expertise with strategic insight to develop PoCs that not only validate your ideas but also set the foundation for future growth. We focus on creating functional prototypes that demonstrate the potential of your ideas while helping you avoid common pitfalls in the development process.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From early-stage consultation to final presentation, we work closely with you to ensure your PoC aligns with your vision and business goals.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Deep technical expertise</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Strategic insight and guidance</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Full lifecycle support</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80"
                alt="PoC Development Team"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Validate Your Ideas?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to create a proof of concept that demonstrates the potential of your innovation and sets the foundation for future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glass glow-purple hover:scale-105 transition-all duration-300">
              Get Started with PoC Development
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoCDevelopment;
