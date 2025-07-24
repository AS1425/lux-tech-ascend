import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Server, 
  Cog, 
  Shield, 
  Cloud, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Settings,
  Building,
  HeartHandshake,
  CreditCard,
  Truck,
  Home,
  Award,
  Users,
  Headphones,
  DollarSign,
  Calendar
} from 'lucide-react';

const ITConsultingServices = () => {
  // Services data
  const keyOfferings = [
    {
      icon: Target,
      title: "IT Strategy & Roadmap",
      description: "Align your technology roadmap with business objectives."
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation Consulting",
      description: "Future-proof your organization with the latest tech solutions."
    },
    {
      icon: Server,
      title: "Infrastructure Assessment & Planning",
      description: "Identify inefficiencies and plan resilient infrastructure upgrades."
    },
    {
      icon: Cloud,
      title: "Cloud Consulting",
      description: "Accelerate cloud adoption and architecture design securely."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Risk Assessment",
      description: "Discover vulnerabilities and strengthen your digital defenses."
    },
    {
      icon: Settings,
      title: "Technology Stack Advisory",
      description: "Choose the right tools, platforms, and frameworks for growth."
    },
    {
      icon: CheckCircle,
      title: "IT Governance & Compliance",
      description: "Ensure IT operations meet regulatory and policy standards."
    },
    {
      icon: DollarSign,
      title: "Cost Optimization & Budget Planning",
      description: "Maximize ROI on technology investments and reduce IT overhead."
    }
  ];

  const industries = [
    {
      icon: HeartHandshake,
      title: "Healthcare",
      description: "Optimizing IT infrastructure for patient-centric systems"
    },
    {
      icon: CreditCard,
      title: "Finance & Banking",
      description: "Regulatory-compliant cloud and infrastructure"
    },
    {
      icon: Building,
      title: "Retail & E-commerce",
      description: "Scalable IT solutions for omnichannel success"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "IT optimization to drive operational efficiency"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Smart tech advisory for lead and listing systems"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Decade of Experience Across Industries",
      description: "Proven expertise in diverse business environments"
    },
    {
      icon: Users,
      title: "Certified IT Experts & Architects",
      description: "Industry-certified professionals at your service"
    },
    {
      icon: Cog,
      title: "End-to-End Digital Transformation Support",
      description: "Complete guidance from strategy to implementation"
    },
    {
      icon: Headphones,
      title: "Tailored Engagement Models",
      description: "Flexible consulting approaches to match your needs"
    }
  ];

  const relatedServices = [
    {
      title: "Managed IT Services",
      description: "Complete IT infrastructure management and support",
      link: "/managed-it-services"
    },
    {
      title: "Cybersecurity Consulting",
      description: "Comprehensive security assessment and protection",
      link: "/cybersecurity-consulting"
    },
    {
      title: "DevOps Consulting",
      description: "Streamline development and operations workflows",
      link: "/devops-consulting"
    }
  ];

  const accordionData = [
    {
      question: "Bridge the Knowledge Gap",
      answer: "Access specialized IT knowledge without hiring in-house teams."
    },
    {
      question: "Reduce Costly Mistakes",
      answer: "Make better technology decisions guided by expert insights."
    },
    {
      question: "Scale Faster & Smarter",
      answer: "Implement systems that scale as your business grows."
    },
    {
      question: "Improve Cyber Resilience",
      answer: "Get proactive guidance on compliance, data security, and risk."
    },
    {
      question: "Adapt to Emerging Technologies",
      answer: "Stay ahead of the curve by exploring and adopting innovation early."
    }
  ];

  const faqData = [
    {
      question: "What kind of businesses benefit most from IT consulting?",
      answer: "Businesses of all sizes can benefit from IT consulting, especially those experiencing rapid growth, undergoing digital transformation, or facing complex technology challenges. Small to medium enterprises often lack in-house IT expertise, while large organizations may need specialized knowledge for specific projects or strategic initiatives."
    },
    {
      question: "How do you assess IT infrastructure health?",
      answer: "We conduct comprehensive audits that include network performance analysis, security vulnerability assessments, system capacity evaluations, and compliance reviews. Our assessment covers hardware, software, cloud services, data management practices, and disaster recovery capabilities to provide a complete picture of your IT environment."
    },
    {
      question: "Do you help with cloud migration?",
      answer: "Yes, we provide end-to-end cloud migration services including strategy development, platform selection, migration planning, execution, and post-migration optimization. We work with all major cloud providers and ensure minimal downtime during the transition process."
    },
    {
      question: "Can you assist with budgeting and vendor selection?",
      answer: "Absolutely. We help organizations optimize their IT spending through detailed budget analysis, ROI calculations, and vendor evaluation. Our vendor-neutral approach ensures you get unbiased recommendations that best fit your specific requirements and budget constraints."
    },
    {
      question: "How long do typical IT consulting engagements last?",
      answer: "Engagement duration varies based on project scope and complexity. Strategic assessments typically take 2-4 weeks, while comprehensive transformation projects can span 6-18 months. We offer both short-term advisory services and long-term partnership models to support ongoing IT initiatives."
    }
  ];

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/5 to-primary/5">
        <div className="absolute inset-0 opacity-20 bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\" fill-opacity=\"0.03\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Unlock Your Digital Potential with Expert IT Consulting
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Strategic guidance, technical expertise, and business-focused IT solutions to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple hover:scale-105 transition-all duration-300">
                  Speak to a Consultant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-right">
                <div className="relative">
                  <div className="glass p-8 rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[Server, Cloud, Shield, Settings].map((Icon, index) => (
                        <div
                          key={index}
                          className="glass-dark p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                        >
                          <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">IT Expertise</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-left">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Tailored IT Consulting Services That Drive Results
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  From infrastructure modernization to enterprise IT strategy, our consulting services are designed to streamline your operations, reduce risk, and enable long-term scalability. We combine deep technical expertise with a business-first mindset to deliver actionable insights and technology-driven success.
                </p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Strategic technology alignment with business objectives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                What Our IT Consulting Services Cover
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IT consulting solutions to transform your technology landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyOfferings.map((offering, index) => (
                <Card key={index} className="glass card-hover group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <offering.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why IT Consulting Accordion Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Do Businesses Need IT Consulting?
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover how expert IT consulting can transform your business operations and drive sustainable growth.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {accordionData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Industries We Serve with Our IT Consulting Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Specialized IT consulting solutions tailored to industry-specific challenges and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="glass card-hover">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Illustration Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Transforming Business with Strategic IT Guidance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures successful digital transformation at every step
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Discovery & Audit", description: "Comprehensive assessment of current IT landscape" },
                { icon: Cog, title: "Strategy Design", description: "Custom roadmap aligned with business goals" },
                { icon: Settings, title: "Implementation", description: "Guided execution with minimal disruption" },
                { icon: BarChart3, title: "Monitoring", description: "Continuous optimization and performance tracking" }
              ].map((step, index) => (
                <Card key={index} className="glass card-hover text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Foreignerds Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose Foreignerds for IT Consulting?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Partner with industry experts who understand both technology and business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="glass card-hover">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23fff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build the Future of Your Business Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free IT consulting session and uncover growth opportunities.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our IT consulting services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="glass rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Explore Related Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive technology solutions to support your digital journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((service, index) => (
                <Card key={index} className="glass card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITConsultingServices;