import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ShoppingCart, MessageSquare, BarChart3, Search, Eye, Mic, Target, Zap, TrendingUp, Lightbulb, Brain, Users, DollarSign, Settings, Smartphone, Globe, Star, Package, CreditCard, TrendingDown } from 'lucide-react';

const EcommerceAI = () => {
  const [activeValuePropIndex, setActiveValuePropIndex] = useState(0);

  const useCases = [
    {
      title: "Smart Product Recommendations",
      description: "AI-powered recommendation engines that analyze customer behavior, purchase history, and preferences to suggest personalized products, increasing conversion rates and average order value.",
      icon: Target
    },
    {
      title: "AI Customer Support Chatbots",
      description: "Intelligent chatbots that handle customer inquiries 24/7, provide instant support, process returns, and guide customers through their shopping journey with human-like interactions.",
      icon: MessageSquare
    },
    {
      title: "Dynamic Pricing & Inventory Forecasting",
      description: "Machine learning algorithms that optimize pricing strategies based on demand, competition, and market trends while predicting inventory needs to prevent stockouts.",
      icon: BarChart3
    },
    {
      title: "Visual Search & Voice Commerce",
      description: "Advanced search capabilities allowing customers to find products using images or voice commands, creating seamless and intuitive shopping experiences.",
      icon: Search
    }
  ];

  const services = [
    {
      title: "AI-Powered Personalization",
      icon: Target
    },
    {
      title: "Intelligent Chatbot Development",
      icon: MessageSquare
    },
    {
      title: "Predictive Analytics & Forecasting",
      icon: BarChart3
    },
    {
      title: "Voice & Visual Search Solutions",
      icon: Search
    },
    {
      title: "Customer Behavior Analysis",
      icon: Users
    },
    {
      title: "Dynamic Pricing Optimization",
      icon: DollarSign
    },
    {
      title: "Automated Inventory Management",
      icon: Settings
    },
    {
      title: "Mobile Commerce Solutions",
      icon: Smartphone
    },
    {
      title: "Omnichannel Integration",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background with Zoom Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse">
          {/* Overlay Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
          
          {/* Animated floating particles - Shopping Carts & Chatbots */}
          <div className="particles-container">
            {[...Array(15)].map((_, i) => {
              const isShoppingCart = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="particle-icon"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${10 + Math.random() * 20}s`,
                  }}
                >
                  {isShoppingCart ? (
                    <ShoppingCart className="w-4 h-4 text-primary/60" />
                  ) : (
                    <MessageSquare className="w-4 h-4 text-secondary/60" />
                  )}
                </div>
              );
            })}
          </div>
          
          {/* 3D Shopping Dashboard Visual Element */}
          <div className="absolute right-10 top-1/4 opacity-20 hidden lg:block">
            <div className="relative transform rotate-12 perspective-1000">
              <div className="w-48 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg backdrop-blur-sm border border-primary/20 shadow-2xl">
                <div className="p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-primary/60" />
                    <div className="h-2 bg-primary/40 rounded w-20"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4 text-secondary/60" />
                    <div className="h-2 bg-secondary/40 rounded w-16"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-primary/60" />
                    <div className="h-2 bg-primary/40 rounded w-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Chatbot Assisting Customer Visual */}
          <div className="absolute left-10 bottom-1/4 opacity-20 hidden lg:block">
            <div className="relative transform -rotate-6">
              <div className="w-40 h-24 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-lg backdrop-blur-sm border border-secondary/20 shadow-2xl">
                <div className="p-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/40 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-secondary/80" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 bg-secondary/50 rounded w-16"></div>
                    <div className="h-1.5 bg-primary/50 rounded w-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom CSS for particles animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          
          .particle-icon {
            position: absolute;
            animation: float linear infinite;
          }
          
          @keyframes float {
            0% {
              transform: translateY(100vh) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-100px) scale(1);
              opacity: 0;
            }
          }
          .perspective-1000 {
            perspective: 1000px;
          }
          `
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Ecommerce AI &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#a000ff] to-[#ff5ee6]">
                Digital Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Revolutionize Your Online Business with Intelligent Automation and Scalable Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Book a Free Consultation
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
                Accelerate Your Growth with Smarter Commerce Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The ecommerce world moves fast. We help brands stay ahead with data-driven insights, AI-powered personalization, and seamless shopping experiences across platforms. Whether you're D2C, B2B, or a hybrid, our ecommerce technology consulting transforms how you sell, engage, and scale.
              </p>
            </div>
            <div className="relative animate-fade-right">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="AI Analytics Dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where AI Adds Value in Ecommerce
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ecommerce Tech Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer to Ecommerce Brands
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-lg border shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                How can AI increase my ecommerce store's revenue?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                AI increases revenue by optimizing product recommendations, automating retargeting campaigns, offering personalized promotions, and reducing cart abandonment using predictive behavior.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-lg border shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                What platforms do you integrate with?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                We support seamless integrations with Shopify, WooCommerce, Magento, BigCommerce, Wix, and headless solutions using APIs or custom middleware.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-lg border shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                Can AI tools be used for marketing automation?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Yes. AI powers marketing flows like personalized email campaigns, product re-targeting, dynamic ad creatives, and customer journey mapping.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-lg border shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">
                Do you provide maintenance and optimization post-launch?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Absolutely. We offer ongoing optimization, analytics, A/B testing, performance tuning, and support services to keep your ecommerce platform evolving with market needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Impact Snapshot Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Success Snapshot
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-left">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                "We helped an ecommerce fashion brand reduce cart abandonment by 28% and increase average order value by 22% with real-time personalization and automated email flows."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Proven Results</p>
                  <p className="text-sm text-muted-foreground">Data-driven success stories</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-right">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Data Dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with floating icons */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
          
          {/* Floating CTA Icons */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                {i % 3 === 0 && <ShoppingCart className="w-6 h-6 text-primary/60" />}
                {i % 3 === 1 && <Users className="w-6 h-6 text-secondary/60" />}
                {i % 3 === 2 && <TrendingUp className="w-6 h-6 text-primary/60" />}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Redefine Your Ecommerce Experience
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Talk to our AI and digital transformation experts to boost conversions, automate operations, and scale faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceAI;