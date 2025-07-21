import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, BarChart3, Brain, Cpu, Database, Lightbulb, Target, TrendingUp, Zap, Layers, MessageSquare, Globe, Star, Shield, Activity, RefreshCw } from 'lucide-react';

const MachineLearningConsulting = () => {
  const [activeValuePropIndex, setActiveValuePropIndex] = useState(0);

  const mlServices = [
    {
      title: "Comprehensive Machine Learning Development",
      content: "Benefit from our expertise in crafting scalable, high-performing models that integrate seamlessly into your existing operations. Transform your business with custom machine learning solutions that drive efficiency, innovation, and growth. We leverage the latest technologies to solve complex challenges, from predictive analytics to automated decision-making."
    },
    {
      title: "Strategic Machine Learning Integration",
      content: "Align your machine learning initiatives with your business strategy to maximize ROI. We help identify where AI can make the greatest impact and ensure seamless integration across functions."
    },
    {
      title: "Advanced Natural Language Processing",
      content: "Build intelligent applications capable of understanding and processing human language—enabling smarter chatbots, content moderation, sentiment analysis, and more."
    },
    {
      title: "Intelligent Chatbot Solutions",
      content: "Develop ML-powered chatbots that provide contextual, human-like conversations. Our bots can adapt to behavior, improve with time, and reduce support costs."
    },
    {
      title: "Innovative Big Data Strategies",
      content: "Leverage vast data assets to uncover patterns, trends, and actionable insights. We assist with big data architecture, engineering, and modeling using ML."
    },
    {
      title: "Cutting-Edge Data Analytics",
      content: "Empower your teams with powerful tools for real-time analysis, data visualization, and forecasting—enabling fast, data-driven decisions."
    },
    {
      title: "Tailored Deep Learning Services",
      content: "Harness the capabilities of neural networks to solve vision, speech, or predictive problems. Our solutions are custom-trained and optimized for your unique use case."
    },
    {
      title: "Next-Generation Business Intelligence",
      content: "Use ML to go beyond dashboards—automate insight generation, anomaly detection, and business forecasting for a competitive edge."
    },
    {
      title: "ML-Driven Product Recommendation System",
      content: "Boost conversions with AI recommendation engines. Personalize offerings using customer data and behavior patterns to improve user experience and revenue."
    }
  ];

  const valuePropositions = [
    {
      title: "Data-Driven Decision-Making",
      content: "We empower stakeholders to make well-considered choices by providing deep insights and predictive analytics derived from the data at your disposal. Our machine learning development services help you understand customer behaviors, optimize operations, and increase profitability by turning complex datasets into actionable intelligence."
    },
    {
      title: "Scalable and Future-Proof Solutions",
      content: "Our models are designed to grow with your business. Whether you need to expand across platforms, geographies, or data sources, we ensure your ML systems evolve seamlessly."
    },
    {
      title: "Accelerated Innovation and Competitive Edge",
      content: "Stay ahead of the curve by adopting AI technologies faster. We shorten time-to-value through ready-to-deploy models and strategic consulting."
    },
    {
      title: "Risk Mitigation and Enhanced Security",
      content: "We apply AI responsibly and securely—ensuring that your data is protected, models are bias-mitigated, and compliance is maintained at every step."
    },
    {
      title: "Effortless LLM Orchestration",
      content: "Integrate and manage Large Language Models (LLMs) like GPT securely within your stack. Our orchestration helps control costs, accuracy, and content safety."
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
              Machine Learning 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Consulting Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Unlock the potential of data with our machine learning expertise to drive smarter business decisions and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Talk to Our Experts
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Machine Learning Circuit Board"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is Machine Learning Consulting?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Machine learning consulting involves leveraging the power of data and algorithms to build predictive models, automate tasks, and drive innovation in your business. From choosing the right tools and technologies to building and deploying machine learning models, our consultants provide end-to-end solutions that align with your strategic goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to optimize your processes, improve decision-making, or harness the power of predictive analytics, our team of experts will guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ML is Essential Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-right">
              <div className="glass p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Predictive Analytics</h4>
                      <p className="text-sm text-muted-foreground">Forecast trends and patterns</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Process Automation</h4>
                      <p className="text-sm text-muted-foreground">Streamline operations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Insights</h4>
                      <p className="text-sm text-muted-foreground">Extract actionable intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Machine Learning is Crucial for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Machine learning enables businesses to extract valuable insights from vast amounts of data and automate decision-making processes. With the ability to analyze complex datasets, identify patterns, and predict future trends, machine learning helps businesses enhance customer experiences, improve operational efficiency, and stay ahead of the competition.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our machine learning consulting services allow you to unlock the full potential of your data, transforming it into actionable insights that fuel growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Machine Learning Consulting Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team follows a structured approach to deliver machine learning solutions that are aligned with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Understanding",
                description: "We start by understanding your business objectives, challenges, and the areas where machine learning can create the most value.",
                icon: Target
              },
              {
                title: "Data Collection & Preparation",
                description: "We gather and clean the data, ensuring that it's accurate and ready for analysis and modeling.",
                icon: Database
              },
              {
                title: "Model Selection & Development",
                description: "We develop machine learning models using the best-suited algorithms, such as regression, classification, or clustering.",
                icon: Brain
              },
              {
                title: "Model Training & Evaluation",
                description: "We train the model on your data, optimizing it for the best performance and validating its accuracy.",
                icon: BarChart3
              },
              {
                title: "Deployment & Integration",
                description: "We deploy the machine learning models and integrate them into your existing systems for seamless use.",
                icon: Cpu
              },
              {
                title: "Continuous Monitoring",
                description: "We provide ongoing support and model optimization to ensure your machine learning systems continue to deliver results.",
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

      {/* Benefits Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Benefits of Our Machine Learning Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your business with data-driven insights and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Decision-Making",
                description: "Leverage predictive models to make data-driven decisions that enhance business strategies and outcomes.",
                icon: Target
              },
              {
                title: "Automation of Processes",
                description: "Automate repetitive tasks such as data entry, lead scoring, and customer segmentation, saving time and reducing errors.",
                icon: Zap
              },
              {
                title: "Scalability",
                description: "Build machine learning solutions that scale with your business, adapting to growing data needs without compromising performance.",
                icon: TrendingUp
              },
              {
                title: "Actionable Insights",
                description: "Transform complex data into clear insights that can be easily understood and acted upon by decision-makers.",
                icon: Lightbulb
              },
              {
                title: "Innovation",
                description: "Stay ahead of the competition by utilizing machine learning to uncover new opportunities and improve existing products and services.",
                icon: Brain
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

      {/* ML Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Tailored Machine Learning Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business with intelligent automation and data-driven insights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {mlServices.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-lg border-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-foreground">
                      {service.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.content}
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
              Why Leverage the Expertise of Our Machine Learning Consulting Company
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the power of strategic machine learning implementation that delivers measurable business value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Tabs */}
            <div className="space-y-2">
              {valuePropositions.map((prop, index) => (
                <button
                  key={index}
                  onClick={() => setActiveValuePropIndex(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeValuePropIndex === index
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'glass hover:bg-accent/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeValuePropIndex === index ? 'bg-primary-foreground/20' : 'bg-primary/20'
                    }`}>
                      <Zap className={`h-5 w-5 ${
                        activeValuePropIndex === index ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                    </div>
                    <span className="font-semibold">{prop.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Content */}
            <div className="glass p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {valuePropositions[activeValuePropIndex].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {valuePropositions[activeValuePropIndex].content}
                </p>
              </div>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose Us for Machine Learning Consulting?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced consultants specializes in delivering tailored machine learning solutions that align with your business goals. We combine industry expertise with technical proficiency to build and deploy machine learning models that drive meaningful results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need to automate business processes, enhance customer experiences, or optimize decision-making, we provide scalable, secure, and high-performance machine learning solutions that deliver lasting value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your Machine Learning Journey Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-left">
              <div className="glass p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">Experienced ML engineers and data scientists</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">Track record of successful ML implementations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Business with Machine Learning?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let our experts help you unlock the power of your data and drive innovation through intelligent automation.
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

export default MachineLearningConsulting;
