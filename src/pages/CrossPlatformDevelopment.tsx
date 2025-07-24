import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Smartphone, 
  Code, 
  Palette, 
  Settings, 
  Zap, 
  DollarSign, 
  Target,
  CheckCircle
} from 'lucide-react';

const CrossPlatformDevelopment = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Flutter App Development",
      description: "Native-like experience with expressive UI and rapid development."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "React Native Development", 
      description: "Build fast, responsive apps using reusable components."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Hybrid App Development",
      description: "Use web technologies with native-like performance."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Design systems that scale beautifully across platforms."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "App Maintenance & Upgrades",
      description: "Ongoing updates, performance improvements, and compatibility testing."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-12 w-12 text-primary mb-4" />,
      title: "Faster Go-to-Market",
      description: "Single-codebase means quicker development and launch."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary mb-4" />,
      title: "Cost Efficiency", 
      description: "Build once, deploy across multiple platforms."
    },
    {
      icon: <Target className="h-12 w-12 text-primary mb-4" />,
      title: "Reliable Performance",
      description: "Frameworks + native APIs = smooth, stable apps."
    }
  ];

  const processSteps = [
    "Discovery & Strategy",
    "UI/UX Planning", 
    "Cross-Platform Development",
    "QA & Testing",
    "App Store Submission",
    "Ongoing Support"
  ];

  const faqs = [
    {
      question: "Which is better – cross-platform or native development?",
      answer: "Cross-platform offers faster deployment and lower cost, while native may give slight performance advantages for platform-specific features."
    },
    {
      question: "What frameworks do you use?",
      answer: "We specialize in Flutter, React Native, Xamarin, and Ionic based on project needs."
    },
    {
      question: "Will it look and feel like a native app?",
      answer: "Yes! We follow platform guidelines and use native components where necessary."
    },
    {
      question: "Can I migrate my existing app to a cross-platform framework?",
      answer: "Absolutely. We assess your current setup and offer a strategic migration plan."
    },
    {
      question: "What's the average development timeline?",
      answer: "Timelines vary by scope but are typically 30–40% faster than separate native builds."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            One Codebase. Every Platform.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Launch stunning, high-performance apps for iOS, Android, and web — faster and smarter with cross-platform development.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Let's Talk
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build Once. Launch Everywhere.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With frameworks like Flutter and React Native, we empower businesses to build scalable, efficient apps that work seamlessly across devices — all from a single codebase.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 h-64 flex items-center justify-center">
                <Smartphone className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Cross-Platform Services Include
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us for Cross-Platform App Development?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  {index + 1}
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Cross-Platform App?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build a fast, scalable product for every platform, with just one codebase.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Request a Quote
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CrossPlatformDevelopment;