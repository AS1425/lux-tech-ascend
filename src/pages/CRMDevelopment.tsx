
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Database, Users, TrendingUp, Shield, BarChart3, Zap, CheckCircle, ArrowRight } from 'lucide-react';

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
