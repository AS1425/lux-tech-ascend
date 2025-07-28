import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Users, Clock, Globe, DollarSign, Shield, Zap, Target, Database, TrendingUp, CheckCircle, Star, MessageSquare, Heart, Building, ShoppingCart, GraduationCap, Home, Briefcase, Code } from 'lucide-react';

const ResourceAugmentation = () => {
  const [activeValuePropIndex, setActiveValuePropIndex] = useState(0);

  const augmentationServices = [
    {
      title: "What roles can you provide under resource augmentation?",
      content: "We provide skilled professionals across all technology domains: Software Developers (Frontend, Backend, Full-Stack), UI/UX Designers, QA Engineers, Data Scientists, DevOps Engineers, Product Managers, Digital Marketers, Business Analysts, and Cybersecurity Experts. Our talent pool spans junior to senior levels with specialized expertise."
    },
    {
      title: "What's the difference between outsourcing and staff augmentation?",
      content: "Staff augmentation provides dedicated resources who work as an extension of your in-house team under your direct management and supervision. Outsourcing involves delegating entire projects or functions to an external provider who manages the work independently. With augmentation, you maintain full control while gaining access to specialized skills."
    },
    {
      title: "Can we interview and manage the hired resource directly?",
      content: "Absolutely! You have complete control over the selection process. We pre-screen candidates and provide you with profiles of vetted professionals. You conduct final interviews, make hiring decisions, and manage day-to-day work activities. Our augmented resources integrate seamlessly into your existing team structure."
    },
    {
      title: "How do you ensure the quality of resources?",
      content: "We maintain strict quality standards through multi-stage vetting: technical skill assessments, portfolio reviews, communication evaluations, reference checks, and cultural fit analysis. All professionals undergo continuous performance monitoring and receive ongoing training to stay current with latest technologies and best practices."
    },
    {
      title: "What if we need to scale or change team members mid-project?",
      content: "Our flexible engagement model allows for seamless scaling up or down based on project needs. If team composition changes are required, we provide quick replacement within 1-2 weeks with proper knowledge transfer. We also offer bench strength to accommodate urgent scaling requirements without delays."
    }
  ];

  const valuePropositions = [
    {
      title: "Access to Global Talent Pool",
      content: "Tap into our extensive network of pre-vetted professionals worldwide. Access specialized skills that may not be available locally, from emerging technologies to niche domain expertise. Our global reach ensures you find the right talent regardless of geographic constraints."
    },
    {
      title: "Cost-Efficient Scaling",
      content: "Reduce hiring costs by up to 60% compared to traditional recruitment. Eliminate overhead expenses like benefits, office space, and equipment. Pay only for productive hours while we handle administrative tasks, compliance, and resource management."
    },
    {
      title: "Rapid Deployment",
      content: "Get started within 2-4 weeks instead of months. Our pre-screened talent pool and streamlined onboarding process eliminate lengthy recruitment cycles. Quick team integration with minimal disruption to ongoing projects."
    },
    {
      title: "Flexible Engagement Models",
      content: "Choose from various engagement options: dedicated teams, part-time specialists, or project-based augmentation. Scale resources up or down based on business demands without long-term commitments or termination complexities."
    },
    {
      title: "Quality Assurance & Support",
      content: "Benefit from our rigorous quality control processes, ongoing performance monitoring, and 24/7 support. We ensure seamless communication, cultural alignment, and deliver consistent high-quality results that meet your standards."
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
            {/* Neural Network Animation */}
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
              Resource Augmentation 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Build, Scale, and Supercharge Your Teams with Top-Tier Global Talent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Talk to Our Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Our Talent Pool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-right">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Global Team Collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Get the Right Talent, Right When You Need It
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Accelerate delivery and cut hiring delays with our resource augmentation services. Whether you need developers, designers, testers, or marketers—we help you onboard vetted experts faster and more cost-effectively.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our flexible staffing solutions allow you to scale your team dynamically, access specialized skills on-demand, and maintain full control over your projects while reducing operational overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our 3-Step Talent Augmentation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From understanding your needs to seamless scaling, we make talent acquisition effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Understand Your Needs",
                description: "We consult with you to define skill sets, experience levels, timelines, and team dynamics to ensure perfect fit.",
                icon: Target
              },
              {
                title: "Select and Onboard Experts",
                description: "We handpick vetted professionals from our global network and integrate them seamlessly into your existing team.",
                icon: Users
              },
              {
                title: "Scale Seamlessly",
                description: "As your needs grow, we scale your team quickly without compromising quality or productivity.",
                icon: TrendingUp
              }
            ].map((step, index) => (
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

      {/* Key Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Resource Augmentation with Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unlock the advantages of flexible, skilled, and cost-effective talent solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access Global Talent",
                description: "Tap into our worldwide network of pre-vetted professionals with specialized skills across all technology domains.",
                icon: Globe
              },
              {
                title: "Cost-Efficient Scaling",
                description: "Reduce hiring costs by up to 60% while eliminating overhead expenses like benefits, office space, and equipment.",
                icon: DollarSign
              },
              {
                title: "Fast Onboarding",
                description: "Get started within 2-4 weeks instead of months with our streamlined recruitment and integration process.",
                icon: Clock
              },
              {
                title: "No Long-Term Commitments",
                description: "Scale up or down based on project needs without the complexities of traditional hiring and termination.",
                icon: Shield
              },
              {
                title: "Full Control Over Resources",
                description: "Maintain complete oversight of your augmented team members while we handle administrative and compliance tasks.",
                icon: CheckCircle
              },
              {
                title: "Flexible Engagement Models",
                description: "Choose from dedicated teams, part-time specialists, or project-based augmentation to fit your specific needs.",
                icon: Zap
              }
            ].map((benefit, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our talent augmentation solutions span across diverse industries and domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Healthcare", icon: Heart },
              { name: "Fintech", icon: DollarSign },
              { name: "SaaS", icon: Code },
              { name: "Retail & Ecommerce", icon: ShoppingCart },
              { name: "EdTech", icon: GraduationCap },
              { name: "Real Estate", icon: Home },
              { name: "Agencies", icon: Briefcase },
              { name: "Enterprise", icon: Building }
            ].map((industry, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{industry.name}</h3>
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
              FAQs About Resource Augmentation
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our talent augmentation services.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {augmentationServices.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Resource Augmentation Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the key advantages that set our talent solutions apart.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {valuePropositions.map((prop, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeValuePropIndex === index 
                      ? 'bg-primary/10 border-2 border-primary/20' 
                      : 'bg-background/50 border border-border hover:bg-background/80'
                  }`}
                  onClick={() => setActiveValuePropIndex(index)}
                >
                  <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                  {activeValuePropIndex === index && (
                    <p className="text-muted-foreground leading-relaxed animate-fade-in">
                      {prop.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Resource Augmentation Benefits"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Happy Client"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                "Resource augmentation helped us reduce hiring time by 70% and boost project delivery by 40% within 3 months. The quality of talent and seamless integration exceeded our expectations."
              </blockquote>
              <div className="border-l-4 border-primary pl-6">
                <p className="font-semibold text-lg">Sarah Johnson</p>
                <p className="text-muted-foreground">CTO, TechVision Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Scale Smarter with Our Vetted Talent
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your team with world-class professionals? Let's discuss your staffing needs and find the perfect talent solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceAugmentation;