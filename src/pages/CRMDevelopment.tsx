
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, Users, TrendingUp, Shield, BarChart3, Zap, CheckCircle, ArrowRight, Target, Headphones, ShoppingCart, MessageSquare, PieChart } from 'lucide-react';

const CRMDevelopment = () => {
  const benefits = [
    {
      icon: Database,
      title: 'Centralized Customer Data',
      description: 'Store all customer information in one place, making it easier to track interactions, manage accounts, and make data-driven decisions.'
    },
    {
      icon: Users,
      title: 'Improved Customer Relationships',
      description: 'Automate customer support, follow-ups, and personalization to enhance customer experience and increase loyalty.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Optimization',
      description: 'Track leads, monitor sales performance, and identify growth opportunities to close more deals and drive revenue.'
    },
    {
      icon: Shield,
      title: 'Enhanced Collaboration',
      description: 'Enable better communication across departments with a centralized CRM system that improves team collaboration.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Get insightful reports and analytics to make informed decisions that improve sales and marketing strategies.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Requirement Analysis',
      description: 'We begin by understanding your business needs, customer management processes, and goals.'
    },
    {
      number: '02',
      title: 'CRM Design & Architecture',
      description: 'We design a custom CRM system that fits your workflow, ensuring it is scalable, user-friendly, and feature-rich.'
    },
    {
      number: '03',
      title: 'CRM Development',
      description: 'Our team develops the CRM system using the latest technologies, ensuring security, efficiency, and full functionality.'
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures the CRM performs well under different conditions and meets your business requirements.'
    },
    {
      number: '05',
      title: 'Deployment & Integration',
      description: 'We deploy the CRM and integrate it with your existing business tools for seamless operation.'
    },
    {
      number: '06',
      title: 'Training & Support',
      description: 'We provide team training and ongoing support to ensure your CRM system evolves with your business.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-bold font-manrope mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CRM Development
                </span>
                <br />
                Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Enhance customer relationships and streamline operations with custom CRM solutions designed for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 pulse-glow">
                  Start Your CRM Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="animate-fade-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                  alt="CRM Development Services"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CRM Development */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                  alt="What is CRM Development"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Database className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="animate-fade-left">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
                What is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CRM Development?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                CRM (Customer Relationship Management) development refers to the process of creating custom systems and applications that help businesses manage interactions with current and potential customers. A CRM system streamlines processes like sales management, customer support, and data analysis to improve customer satisfaction, loyalty, and revenue.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our CRM development services focus on creating solutions tailored to your business needs, enabling you to optimize customer relationships, increase efficiency, and enhance customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why CRM Development is Crucial */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-right">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
                Why CRM Development is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Crucial</span> for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A well-designed CRM system is essential for businesses looking to improve customer interactions, streamline operations, and drive sales. CRM solutions enable businesses to store and manage customer data, track sales opportunities, and provide better customer service, all in one centralized system.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By implementing a CRM system, businesses can improve customer engagement, make data-driven decisions, and increase overall productivity. Our CRM development services provide customized solutions that address your unique business challenges and objectives, giving you a competitive edge.
              </p>
            </div>
            <div className="animate-fade-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                  alt="Why CRM Development is Crucial"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CRM Development</span> Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our CRM development services follow a comprehensive process to ensure that your CRM solution is tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 card-hover animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              Key <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Benefits</span> of CRM Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our CRM development services can transform your business operations and customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 card-hover animate-fade-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom CRM Development Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              Custom CRM Development Services with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tailored Functionalities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your business operations with our comprehensive CRM development solutions designed for your specific needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              <AccordionItem value="item-0" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Precise Marketing & Sales</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    A 360-degree view of your prospects within your CRM provides the detailed profiles and robust analytics needed to identify high-quality leads. Your brand can tap in to use customer data, marketing preferences, their motivations and boost the effectiveness of cross-selling and upselling. Place your salespeople from routine tasks to focus on closing deals, track KPIs, and forecast pipeline with precision.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Headphones className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Proactive Client Service</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Create responsive service experiences by integrating real-time tracking, centralized communication history, and customer behavior insights. Proactive alerts and SLA management ensure your teams meet client expectations consistently, improving retention and loyalty.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Smooth Order & Billing Management</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Automate order confirmations, invoices, payment follow-ups, and delivery tracking in one place. Reduce manual errors and speed up operations across billing and fulfillment with seamless ERP/CRM integration.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Omnichannel Feedback Collection</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Capture structured and unstructured feedback from multiple sources—emails, chats, forms, social media—and store them in one centralized hub. Use NLP-based analysis to generate insights and improve customer experience strategies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <PieChart className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Interactive Reporting</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Build drag-and-drop dashboards that showcase sales metrics, customer satisfaction, churn, and revenue trends. Offer customizable reporting for different departments to align business strategy with real-time data.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Vertical CRM Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              Vertical CRM Solutions: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Maximize Results</span> in Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-specific CRM solutions tailored to meet the unique challenges and requirements of your business sector.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Tabs defaultValue="telecom" orientation="vertical" className="w-full">
                <TabsList className="grid w-full grid-cols-1 h-auto bg-card border border-primary/20 p-2">
                  <TabsTrigger value="telecom" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Telecom
                  </TabsTrigger>
                  <TabsTrigger value="insurance" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Insurance
                  </TabsTrigger>
                  <TabsTrigger value="healthcare" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Healthcare
                  </TabsTrigger>
                  <TabsTrigger value="retail" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Retail & eCommerce
                  </TabsTrigger>
                  <TabsTrigger value="banking" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Banking & Finance
                  </TabsTrigger>
                  <TabsTrigger value="automotive" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Automotive
                  </TabsTrigger>
                  <TabsTrigger value="education" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="travel" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Travel & Hospitality
                  </TabsTrigger>
                  <TabsTrigger value="airports" className="justify-start text-left p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                    Airports and Airlines
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="order-1 lg:order-2">
              <Tabs defaultValue="telecom" className="w-full">
                <TabsContent value="telecom" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Telecom CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Complex billing cycles and service usage patterns? No problem. A tailored CRM streamlines customer segmentation, offers personalized promotions, proactively manages churn, and delivers exceptional customer experience.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="insurance" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Insurance CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Enable agents to manage policies, claims, and renewals with AI-enhanced reminders and automation workflows. Ensure compliance with regulatory requirements and enable omnichannel policyholder communication.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="healthcare" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Healthcare CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Manage patient data, appointments, telehealth sessions, and follow-ups in compliance with HIPAA and global health data standards. Provide personalized care journeys and improve health outcomes.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="retail" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Retail & eCommerce CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Track customer behaviors, abandoned carts, loyalty programs, and personalized product recommendations with intelligent CRM-driven insights and automation.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="banking" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Banking & Finance CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Provide secure platforms for loan origination, KYC, credit scoring, and customer onboarding with audit trails and robust reporting dashboards.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="automotive" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Automotive CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Track vehicle inventory, automate test drive bookings, manage leads, and create post-sale service reminders for personalized customer engagement.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Education CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Automate admissions, student lifecycle tracking, learning analytics, and communications across students, faculty, and parents from a single CRM.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="travel" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Travel & Hospitality CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Centralize booking data, personalize travel offers, manage feedback loops, and automate itinerary and loyalty workflows.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="airports" className="mt-0">
                  <div className="glass p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Airports and Airlines CRM Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Improve traveler experience by automating check-in assistance, updates, frequent flyer programs, and customer complaint resolutions.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              Your Success, Our Priority: The <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Benefits of Partnering</span> for CRM Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the advantages of working with our expert CRM development team for your business transformation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-0" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Domain Knowledge</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    From insurance and banking to retail and telecom, our CRM specialists offer industry-specific insight to design scalable, future-ready platforms aligned with your operational goals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Stress-Free Delivery</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    We manage timelines, scope, and communication to ensure you get a functional CRM on time and within budget, with complete project transparency.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Agile Development</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Build in sprints, gather feedback, and iterate continuously to deliver high-value features that align with evolving stakeholder needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Flexible Collaboration Options</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Choose from fixed price, time & material, or dedicated team models depending on your goals and timeline. We adjust to your way of working.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-primary/20 rounded-2xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 hover:no-underline bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-xl font-semibold text-left">Robust Security Measures</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    Data encryption, role-based access, GDPR & HIPAA compliance, and secure cloud integrations ensure your CRM is protected from day one.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                  alt="Why Choose Us for CRM Development"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="animate-fade-left">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
                Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Partner with Us</span> for CRM Development?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our CRM development team has extensive experience building custom solutions that are tailored to your unique business needs. We understand that every business is different, and we take a personalized approach to design and develop CRM systems that drive success.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to streamline customer support, enhance sales efforts, or improve marketing automation, our team provides the expertise and technical skills needed to deliver effective solutions that scale with your business.
              </p>
              <div className="flex items-center space-x-4">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Expert CRM Development Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass p-12 rounded-3xl border border-primary/20 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Customer Relationships?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our custom CRM development services can streamline your operations and enhance customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 pulse-glow">
                Start Your CRM Project Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                Contact Our CRM Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMDevelopment;
