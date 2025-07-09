
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Mic, Eye, FileCheck, CheckCircle, Volume2, Palette, UserCheck, Settings } from 'lucide-react';

const EUAccessibilityAudit = () => {
  const auditProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your current chatbot's functionality and accessibility features, identifying potential compliance gaps."
    },
    {
      step: "02",
      title: "Accessibility Testing",
      description: "Our experts conduct in-depth testing to evaluate how the chatbot interacts with users who have disabilities. This includes testing voice recognition, text-to-speech, contrast settings, and more."
    },
    {
      step: "03",
      title: "Audit Report",
      description: "We deliver a detailed audit report that highlights the current accessibility status of your chatbot, along with actionable recommendations for improvement."
    },
    {
      step: "04",
      title: "Remediation & Optimization",
      description: "Based on the audit results, we help you implement changes to improve accessibility, ensuring compliance with EU regulations."
    },
    {
      step: "05",
      title: "Ongoing Monitoring",
      description: "We provide continuous support and periodic audits to ensure your chatbot remains fully compliant with evolving accessibility standards."
    }
  ];

  const features = [
    {
      icon: FileCheck,
      title: "Comprehensive Accessibility Review",
      description: "We perform a thorough review of your chatbot's compliance with EU accessibility standards, covering all key areas such as navigation, readability, and speech-to-text functionality."
    },
    {
      icon: Mic,
      title: "Voice & Speech Recognition Compliance",
      description: "Ensure your chatbot supports voice commands and can process speech accurately, meeting accessibility standards."
    },
    {
      icon: Volume2,
      title: "Text-to-Speech & Visual Aids",
      description: "We test text-to-speech functionality and ensure that all written content is compatible with screen readers and other assistive technologies."
    },
    {
      icon: Palette,
      title: "Color & Contrast Adjustments",
      description: "Ensure that the chatbot's interface meets contrast and color standards to accommodate users with visual impairments."
    },
    {
      icon: UserCheck,
      title: "User Testing & Feedback",
      description: "We conduct real-user testing with individuals with disabilities to ensure the chatbot meets their needs and provides a seamless experience."
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EU Accessibility Act Audit Services for Chatbots
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Ensure your chatbot complies with EU accessibility standards and provides an inclusive experience for all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                Get Started with Our Audit
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Talk to Our Accessibility Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is the EU Accessibility Act?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              The EU Accessibility Act mandates that all digital services, including chatbots, must be accessible to people with disabilities. This includes ensuring that chatbots are easy to use for individuals with visual, auditory, cognitive, and motor disabilities. By complying with these regulations, businesses not only ensure inclusivity but also avoid potential fines and legal challenges. Our EU Accessibility Act Audit Services for chatbots help businesses evaluate and optimize their chatbot interfaces to meet EU accessibility standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Accessibility Matters Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Accessibility Matters for Your Chatbot?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Chatbots are an integral part of modern business operations, providing customer service, information, and guidance 24/7. However, without proper accessibility features, chatbots can alienate users with disabilities. Ensuring your chatbot complies with the EU Accessibility Act not only enhances user experience but also broadens your market reach. Accessible chatbots foster inclusivity, improve customer satisfaction, and strengthen your brand's reputation by demonstrating social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our EU Accessibility Act Audit Process</h2>
          <div className="max-w-4xl mx-auto">
            {auditProcess.map((process, index) => (
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

      {/* Key Features Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our EU Accessibility Act Audit Services</h2>
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

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Us for Your Chatbot Accessibility Audit?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              Our team of accessibility experts specializes in ensuring digital products comply with the EU Accessibility Act. We bring deep knowledge of accessibility standards and proven experience in optimizing chatbots to be fully compliant. By partnering with us, you ensure that your chatbot provides an inclusive experience for all users, while avoiding legal risks associated with non-compliance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Start Your Accessibility Audit Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ensure your chatbot meets EU accessibility standards and provides an inclusive experience for all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Your Accessibility Audit Today
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Get In Touch with Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EUAccessibilityAudit;
