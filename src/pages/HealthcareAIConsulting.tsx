import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Heart, 
  Activity, 
  Brain, 
  Stethoscope, 
  Shield, 
  Clock, 
  Users, 
  ChartBar,
  Phone,
  MessageCircle,
  Search,
  FileText,
  Bell,
  Database,
  ArrowRight
} from 'lucide-react';

const HealthcareAIConsulting = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background with Zoom Animation */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 transition-transform duration-[2500ms] ease-out"
          style={{
            transform: 'scale(1.05)',
            animation: 'parallaxZoom 2.5s ease-out forwards'
          }}
        >
          {/* Overlay Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
          
          {/* Neural Network Animation */}
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/60 rounded-full animate-pulse"
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
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
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
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Revolutionizing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Healthcare with AI & ML
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              From predictive diagnostics to intelligent patient support, our AI-powered solutions are transforming how care is delivered and managed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group" onClick={scrollToContact}>
                Let's Talk AI in Healthcare
                <Heart className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                The Healthcare Sector is Struggling with Legacy Systems, Manual Overheads & Inaccessible Intelligence
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-foreground/80 text-lg">Delayed diagnosis & rising operational costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-foreground/80 text-lg">Data silos across EHR/EMR platforms</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-foreground/80 text-lg">Manual documentation draining clinical time</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-foreground/80 text-lg">Patients demanding smarter virtual care options</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-left">
              <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl p-8 backdrop-blur-sm border border-destructive/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-destructive">
                    <Clock className="h-6 w-6" />
                    <span className="font-semibold text-lg">Current Healthcare Challenges</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background/70 rounded-lg">
                      <p className="text-2xl font-bold text-destructive">47%</p>
                      <p className="text-sm text-foreground/70 font-medium">Administrative Time</p>
                    </div>
                    <div className="text-center p-4 bg-background/70 rounded-lg">
                      <p className="text-2xl font-bold text-destructive">$200B</p>
                      <p className="text-sm text-foreground/70 font-medium">Annual Waste</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How AI is Reimagining Healthcare Operations</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Transform your healthcare operations with intelligent solutions that improve patient outcomes and reduce costs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ChartBar,
                title: "Predictive Patient Analytics",
                description: "Spot risks and readmissions early using machine learning.",
                stat: "48%",
                statLabel: "reduction in readmissions"
              },
              {
                icon: MessageCircle,
                title: "AI Chatbots & Virtual Nurses",
                description: "Automate triage, FAQs, reminders, and health advice.",
                stat: "24/7",
                statLabel: "patient support"
              },
              {
                icon: Search,
                title: "Radiology & Image Analysis",
                description: "Faster, accurate image interpretation through computer vision.",
                stat: "85%",
                statLabel: "accuracy improvement"
              },
              {
                icon: FileText,
                title: "Administrative Workflow Automation",
                description: "Automate scheduling, claims, and documentation.",
                stat: "60%",
                statLabel: "time saved"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{item.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.statLabel}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                LLM-Powered Assistants for Doctors, Patients & Operations Teams
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Empower your care ecosystem with AI copilots that extract insights from EMRs, assist in diagnostics, 
                and streamline communication across clinical teams.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground/90">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground/90">EMR Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground/90">Multi-Team Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground/90">Real-time Alerts</span>
                </div>
              </div>
              <Button size="lg" className="mt-6">
                Learn More About Our AI Copilots
              </Button>
            </div>
            
            <div className="relative animate-fade-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                    <span className="font-semibold">AI Medical Assistant Dashboard</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">Patient Vitals</p>
                      <p className="text-xs text-muted-foreground">Real-time monitoring</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 text-center">
                      <FileText className="h-8 w-8 text-accent mx-auto mb-2" />
                      <p className="text-sm font-medium">Smart Notes</p>
                      <p className="text-xs text-muted-foreground">Auto documentation</p>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">AI Insights:</p>
                    <p className="text-xs text-muted-foreground">
                      "Based on patient history and current vitals, recommend follow-up in 48 hours. 
                      High risk indicators suggest preventive care protocol."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Impact Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-right">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Real Impact: From Hours to Seconds</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-background/80 rounded-lg">
                      <div className="text-4xl font-bold text-primary mb-2">48%</div>
                      <div className="text-sm text-foreground/80 font-medium">Faster Patient Intake</div>
                    </div>
                    <div className="text-center p-4 bg-background/80 rounded-lg">
                      <div className="text-4xl font-bold text-secondary mb-2">30%</div>
                      <div className="text-sm text-foreground/80 font-medium">Better Post-Op Adherence</div>
                    </div>
                    <div className="text-center p-4 bg-background/80 rounded-lg">
                      <div className="text-4xl font-bold text-primary mb-2">65%</div>
                      <div className="text-sm text-foreground/80 font-medium">Reduced Admin Time</div>
                    </div>
                    <div className="text-center p-4 bg-background/80 rounded-lg">
                      <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                      <div className="text-sm text-foreground/80 font-medium">Patient Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Transforming Healthcare Delivery</h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                We helped a U.S.-based hospital reduce patient intake processing time by 48%, 
                and improved post-op adherence by 30% using AI-driven reminders and predictive alerts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-foreground/80 text-lg">Automated patient triage and scheduling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-foreground/80 text-lg">Predictive analytics for readmission prevention</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-foreground/80 text-lg">Intelligent medication reminders and follow-ups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section - AI Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Where AI Fits into Your Ecosystem</h2>
              <p className="text-xl text-foreground/80">
                Explore specific AI applications across your healthcare operations
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4 animate-fade-up">
              {[
                {
                  value: "virtual-assistants",
                  title: "Virtual Assistants for Pre-Visit Questionnaires",
                  content: "Automate patient intake with intelligent questionnaires that adapt based on responses, reducing wait times and improving data quality. Our AI assistants can handle complex medical histories and route patients to appropriate care pathways."
                },
                {
                  value: "nlp-extraction",
                  title: "NLP in Clinical Notes Extraction",
                  content: "Transform unstructured clinical notes into actionable insights. Our natural language processing technology extracts key medical information, identifies patterns, and flags potential issues for clinical review."
                },
                {
                  value: "chronic-care",
                  title: "AI in Chronic Care Management",
                  content: "Monitor patients with chronic conditions through intelligent tracking systems that analyze symptoms, medication adherence, and lifestyle factors to provide personalized care recommendations and early intervention alerts."
                },
                {
                  value: "discharge-monitoring",
                  title: "Post-Discharge Monitoring & Alerts",
                  content: "Reduce readmissions with AI-powered monitoring that tracks patient recovery, medication compliance, and symptom progression. Automated alerts notify care teams of potential complications before they escalate."
                },
                {
                  value: "data-intelligence",
                  title: "HIPAA-Compliant Data Intelligence Layer",
                  content: "Build a secure, compliant data foundation that aggregates information from multiple sources while maintaining patient privacy. Our AI platform provides insights without compromising sensitive health information."
                }
              ].map((item, index) => (
                <AccordionItem 
                  key={item.value} 
                  value={item.value}
                  className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="absolute inset-0">
          {/* Floating medical icons */}
          <div className="absolute top-20 left-10 animate-float">
            <Heart className="h-8 w-8 text-primary/30" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <Stethoscope className="h-6 w-6 text-accent/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
            <Brain className="h-10 w-10 text-primary/20" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Care with AI. Start Today.
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Let's partner to bring intelligent, ethical, and secure AI to your healthcare system. 
              Schedule a free discovery call to explore how AI can revolutionize your patient care and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="group">
                Schedule a Free Discovery Call
                <Phone className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Download Healthcare AI Guide
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/20">
              <div className="text-center space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">HIPAA Compliant</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Healthcare AI specialists</p>
              </div>
              <div className="text-center space-y-2">
                <Clock className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Fast Deployment</h3>
                <p className="text-sm text-muted-foreground">Rapid implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HealthcareAIConsulting;