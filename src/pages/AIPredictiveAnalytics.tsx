
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BarChart3, TrendingUp, Brain, Target, Zap, Shield, Users, DollarSign, Cog, Database, Globe, Eye } from 'lucide-react';

const AIPredictiveAnalytics = () => {
  const features = [
    {
      icon: Database,
      title: "Data-Driven Insights",
      description: "Transform data into actionable insights that drive decision-making, business strategies, and growth."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Forecasting",
      description: "Leverage real-time data to predict market conditions, customer behavior, and operational performance."
    },
    {
      icon: Globe,
      title: "Scalability",
      description: "Our solutions are scalable, enabling your business to handle increasing data volumes and complex analysis as you grow."
    },
    {
      icon: Target,
      title: "Customizable Models",
      description: "We create predictive models tailored to your unique business needs, from sales forecasting to risk management."
    },
    {
      icon: BarChart3,
      title: "Actionable Reporting",
      description: "Get easy-to-understand, visual reports that highlight key insights, trends, and opportunities, making it easy to share findings with stakeholders."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Customer Behavior Forecasting",
      description: "Predict customer actions and buying patterns to optimize marketing campaigns, inventory management, and product offerings."
    },
    {
      icon: DollarSign,
      title: "Sales & Revenue Forecasting",
      description: "Forecast future sales, identify demand fluctuations, and optimize pricing strategies to boost revenue."
    },
    {
      icon: Cog,
      title: "Operational Efficiency",
      description: "Predict supply chain disruptions, optimize resource allocation, and reduce downtime by anticipating maintenance needs."
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Use predictive models to detect anomalies in financial transactions and identify potential fraud or security breaches."
    },
    {
      icon: Eye,
      title: "Churn Prediction",
      description: "Analyze customer data to predict churn and take proactive steps to improve retention."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Data Collection & Cleansing",
      description: "We gather relevant data from multiple sources and ensure it's clean, accurate, and ready for analysis."
    },
    {
      step: "02",
      title: "Exploratory Data Analysis",
      description: "Our team explores the data to uncover patterns, relationships, and insights that inform model development."
    },
    {
      step: "03",
      title: "Model Design & Selection",
      description: "We use machine learning algorithms and advanced analytics tools to develop models that predict future outcomes accurately."
    },
    {
      step: "04",
      title: "Model Training & Validation",
      description: "We train models on real data, validate their performance, and fine-tune them to ensure their predictive power."
    },
    {
      step: "05",
      title: "Deployment & Integration",
      description: "Our team integrates predictive models into your existing systems for seamless data flow and real-time insights."
    },
    {
      step: "06",
      title: "Continuous Monitoring & Improvement",
      description: "After deployment, we continuously monitor and optimize the models based on performance data, ensuring they adapt to changing conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 neural-network">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Predictive Analytics Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Leverage AI to predict future trends, optimize strategies, and unlock new opportunities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                  Request a Demo
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <img 
                src="/lovable-uploads/05543f82-a71f-4501-9860-9c274aafec51.png" 
                alt="AI Predictive Analytics Illustration" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is AI Predictive Analytics?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              AI predictive analytics involves using advanced machine learning and statistical models to analyze historical data and predict future outcomes. By leveraging these tools, businesses can identify trends, forecast sales, optimize processes, and make data-driven decisions. Our AI-powered predictive analytics services enable you to harness the full potential of your data, driving smarter business strategies and achieving measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Predictive Analytics Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Predictive Analytics is Vital for Your Business</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Predictive analytics transforms how businesses operate by enabling them to anticipate future challenges and opportunities. By applying machine learning to your historical data, we help you predict customer behavior, market trends, operational needs, and more. Predictive analytics gives you a competitive edge, enabling proactive decision-making, reducing risks, and improving operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our Predictive Analytics Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass card-hover">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our AI Predictive Analytics Development Process</h2>
          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((process, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases for AI Predictive Analytics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass card-hover">
                <CardHeader>
                  <useCase.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Partner with Us for Predictive Analytics?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              Our team of experts combines machine learning, data science, and industry-specific knowledge to deliver predictive analytics solutions that provide real, actionable insights. We focus on delivering solutions that not only forecast trends accurately but also enable your team to take data-driven actions. Whether you are looking to improve customer retention, optimize your supply chain, or forecast revenue, our predictive analytics services help you unlock the full potential of your data and achieve tangible results.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
              Reap the Benefits of AI Predictive Analytics
            </h2>
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="bg-background rounded-2xl shadow-lg border border-border mb-6">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 rounded-2xl transition-colors">
                    <span className="text-xl font-semibold">Data-Driven Decision Making</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Say goodbye to gut feelings and hello to data-backed conclusions. Custom AI predictive analytics solutions empower you to analyze complex data sets, uncover hidden patterns, and gain actionable insights. Enable yourself to make informed choices that drive growth and maximize profitability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-background rounded-2xl shadow-lg border border-border mb-6">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 rounded-2xl transition-colors">
                    <span className="text-xl font-semibold">Early Risk Detection</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Leverage AI models to proactively identify risks and anomalies in your operations. Predictive analytics helps prevent potential failures, fraud, or losses before they happen—ensuring smoother and safer business workflows.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-background rounded-2xl shadow-lg border border-border mb-6">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 rounded-2xl transition-colors">
                    <span className="text-xl font-semibold">Optimized Performance</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    Use predictive insights to streamline processes, allocate resources efficiently, and optimize performance across departments. From inventory to marketing, AI analytics ensures every move is strategic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Predicting with AI?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's unlock the power of your data with AI predictive analytics to drive smarter decisions and achieve measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Predicting with AI
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Get in Touch with Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPredictiveAnalytics;
