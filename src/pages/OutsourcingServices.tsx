import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Users, Clock, Globe, Shield, CheckCircle, TrendingUp, Award, Zap } from 'lucide-react';

const OutsourcingServices = () => {
  const whyChooseUsFeatures = [
    {
      icon: TrendingUp,
      title: "Cost-Effective Scaling",
      description: "Reduce overheads and control budgets without sacrificing quality."
    },
    {
      icon: Users,
      title: "Top-Tier Talent",
      description: "Access highly skilled professionals across development, design, QA, and more."
    },
    {
      icon: Zap,
      title: "Faster Time-to-Market",
      description: "Boost delivery timelines and release products faster."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get round-the-clock support from distributed global teams."
    }
  ];

  const services = [
    {
      title: "Dedicated Developer Teams",
      description: "Full-stack development teams exclusively for your projects."
    },
    {
      title: "Staff Augmentation",
      description: "Add skilled professionals to complement your existing team."
    },
    {
      title: "End-to-End Product Development",
      description: "Complete product lifecycle management from concept to delivery."
    },
    {
      title: "Technical Support & Maintenance",
      description: "Ongoing support and maintenance for your applications."
    },
    {
      title: "QA & Testing Outsourcing",
      description: "Comprehensive testing services to ensure quality delivery."
    },
    {
      title: "UI/UX Design Outsourcing",
      description: "Expert design teams for exceptional user experiences."
    },
    {
      title: "Digital Marketing Teams",
      description: "Complete digital marketing solutions and campaign management."
    },
    {
      title: "Project Management & DevOps",
      description: "Streamlined project management and DevOps automation."
    }
  ];

  const processSteps = [
    {
      title: "Requirement Gathering",
      description: "Understand your goals, team structure, and technical needs."
    },
    {
      title: "Talent Mapping & Selection",
      description: "Match the right experts to your project and culture."
    },
    {
      title: "Team Onboarding",
      description: "Seamless integration with your processes and tools."
    },
    {
      title: "Agile Execution",
      description: "Regular sprints, updates, and collaborative progress."
    },
    {
      title: "Quality Delivery & Support",
      description: "Continuous improvement with scalable long-term support."
    }
  ];

  const faqData = [
    {
      question: "What roles can I outsource through you?",
      answer: "Developers, designers, QA engineers, marketers, DevOps specialists, and more."
    },
    {
      question: "Can I scale the team up or down based on demand?",
      answer: "Yes, our outsourcing model is fully scalable and flexible."
    },
    {
      question: "What time zones do your teams operate in?",
      answer: "We cover US, UK, EU, and APAC time zones depending on client preference."
    },
    {
      question: "How do you ensure data security?",
      answer: "NDAs, secured systems, and ISO-compliant practices are implemented."
    },
    {
      question: "Is the communication transparent and regular?",
      answer: "Yes, we use Slack, Zoom, Jira, and your preferred tools for daily/weekly updates."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              End-to-End IT Outsourcing Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Scale smarter, faster, and more efficiently with reliable outsourcing solutions tailored to your business needs.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simplify Your Growth with Scalable Outsourcing
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our outsourcing services help you reduce operational costs, improve delivery speed, and gain access to world-class talent — without compromising on quality. Whether you're a startup or an enterprise, we build agile teams to meet your evolving tech needs.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">Global Collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Businesses Choose Our Outsourcing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Outsourcing Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-3" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Outsourcing Model Works
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FAQs About Our Outsourcing Services
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Your Dream Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us your vision — we'll assemble the right team to bring it to life.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OutsourcingServices;