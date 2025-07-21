
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Activity, Brain, Heart, Shield, Users, Zap, TrendingUp, Target, Database, Stethoscope, UserCheck } from 'lucide-react';

const HealthcareAIConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0">
            {/* Healthcare AI Animation */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-primary/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            {/* Medical Data Flow */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`flow-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
                style={{
                  left: `${Math.random() * 70}%`,
                  top: `${Math.random() * 70}%`,
                  width: `${30 + Math.random() * 50}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Healthcare AI 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Consulting Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transform your healthcare organization with cutting-edge AI solutions that improve patient outcomes, optimize operations, and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Request a Consultation
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
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Healthcare AI Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is Healthcare AI Consulting?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Healthcare AI consulting provides businesses with strategies and expertise to integrate artificial intelligence into healthcare processes to improve efficiency, patient care, and decision-making. From AI-driven diagnostics to predictive analytics, we help healthcare organizations harness the power of AI technologies to streamline operations, enhance patient experiences, and achieve better clinical outcomes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our consulting services guide healthcare providers in selecting, developing, and implementing AI tools that align with industry standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare AI is Essential Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Healthcare AI is Critical for Your Business
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI technologies are revolutionizing healthcare by improving patient care, streamlining workflows, and optimizing resource management. From predictive analytics that help forecast patient outcomes to AI tools that enhance imaging and diagnostics, AI is increasingly becoming a vital part of the healthcare ecosystem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our consulting services ensure that your healthcare business adopts the right AI strategies, enhances operational efficiency, and complies with industry regulations while improving patient experiences and outcomes.
              </p>
            </div>
            <div className="relative animate-fade-left">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthcare Professional with AI Dashboard"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Healthcare AI Consulting Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured and results-driven approach to healthcare AI consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation & Discovery",
                description: "We begin by understanding your specific healthcare challenges and objectives, whether improving patient care, reducing costs, or automating workflows.",
                icon: Users
              },
              {
                title: "AI Strategy Design",
                description: "Our experts design a tailored AI strategy that fits your needs, selecting the right technologies and tools for your healthcare business.",
                icon: Target
              },
              {
                title: "Model Development & Implementation",
                description: "We develop custom AI models or integrate existing tools into your workflows, ensuring seamless and effective AI adoption.",
                icon: Brain
              },
              {
                title: "Testing & Validation",
                description: "We rigorously test AI models to ensure they meet healthcare standards, ensuring reliability, accuracy, and compliance.",
                icon: Shield
              },
              {
                title: "Deployment & Integration",
                description: "We deploy AI models and integrate them with your existing healthcare systems, ensuring smooth operation and performance.",
                icon: Database
              },
              {
                title: "Continuous Monitoring & Optimization",
                description: "We provide ongoing support, optimization, and updates to keep your AI tools relevant and effective over time.",
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
              Key Benefits of Healthcare AI Consulting
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Revolutionize your healthcare operations with intelligent AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Patient Care",
                description: "AI technologies enable more accurate diagnoses, personalized treatment plans, and better patient management, leading to enhanced care.",
                icon: Heart
              },
              {
                title: "Increased Efficiency",
                description: "Automate administrative tasks, streamline workflows, and improve operational efficiency across healthcare institutions.",
                icon: Zap
              },
              {
                title: "Predictive Analytics",
                description: "Use AI to predict patient outcomes, disease progression, and optimize resource allocation for better healthcare delivery.",
                icon: Activity
              },
              {
                title: "Regulatory Compliance",
                description: "Ensure that your AI systems meet healthcare industry regulations, including HIPAA and other data protection standards.",
                icon: Shield
              },
              {
                title: "Cost Reduction",
                description: "Reduce operational costs by automating routine tasks, improving resource management, and minimizing human error.",
                icon: TrendingUp
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

      {/* AI Healthcare Consulting Areas Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Healthcare Consulting Areas We Cover
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions tailored for every aspect of healthcare transformation and optimization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              <AccordionItem
                value="item-0"
                className="bg-card rounded-lg border shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-bold text-foreground">
                    GenAI-Powered Agents
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    Think of these as your digital assistant for desk and nursing assistants rolled into one. Our intelligent virtual helpers take the pressure off staff by handling routine questions and generating patient information through human-like conversations. They're smart enough to guide personalized guidance while staying within clinical policies – freeing up your team to focus on what matters most: face-to-face patient care.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-1"
                className="bg-card rounded-lg border shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-bold text-foreground">
                    Medical Analytics & Data Infrastructure
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    From clinical data pipelines to patient data lakes, we help hospitals and research centers set up secure, scalable, and interoperable systems. Our expertise ensures compliant, insightful use of health data to drive diagnoses, treatment planning, and operational efficiency.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-card rounded-lg border shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-bold text-foreground">
                    Pharmaceutical Innovation Acceleration
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    We assist pharma companies in leveraging AI to shorten drug discovery cycles, model molecular interactions, and identify promising candidates faster with predictive algorithms and simulation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-card rounded-lg border shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-bold text-foreground">
                    Next-Gen Health Tech Platforms
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    We build and integrate next-gen platforms powered by conversational AI, virtual assistants, and LLMs to assist both patients and professionals in improving access, triage, and engagement.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-card rounded-lg border shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-bold text-foreground">
                    Intelligent Care Coordination
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    Ensure continuity of care with AI systems that monitor, recommend, and escalate interventions across the care journey. From remote monitoring to smart alerts, care gaps are minimized.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-card rounded-lg border shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-bold text-foreground">
                    Operational Excellence Engineering
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    We optimize resource allocation, workforce productivity, and logistics through AI-powered forecasting, workflow automation, and root cause analysis.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-card rounded-lg border shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-bold text-foreground">
                    Public Health Intelligence Systems
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    Support large-scale public health decisions with AI dashboards, predictive outbreak modeling, and real-time reporting. Our tools empower health agencies to act proactively, not reactively.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-right">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthcare Team Using AI Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Partner with Us for Healthcare AI Consulting?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in both healthcare and AI technology, we specialize in building customized AI solutions that align with healthcare providers' goals. Our team brings deep knowledge of both industries to design AI tools that improve patient outcomes, streamline processes, and maintain regulatory compliance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We take a hands-on approach, ensuring that every AI solution we develop is aligned with your objectives and delivers measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your Healthcare AI Journey
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
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
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let our experts help you implement AI solutions that improve patient outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Contact Our AI Experts
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

export default HealthcareAIConsulting;
