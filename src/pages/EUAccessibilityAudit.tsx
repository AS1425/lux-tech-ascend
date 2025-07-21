
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Mic, Eye, FileCheck, CheckCircle, Volume2, Palette, UserCheck, Settings, AlertTriangle, DollarSign, TrendingDown, Scale, Building, Brain, Search, MapPin, HelpCircle, FileText } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const EUAccessibilityAudit = () => {
  const [openPenalties, setOpenPenalties] = useState<string | null>(null);
  const [openSolutions, setOpenSolutions] = useState<string | null>(null);

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

  const penaltiesData = [
    {
      id: 'fines',
      icon: DollarSign,
      title: 'Significant Financial Fines',
      description: 'EU member states can impose substantial financial penalties for non-compliance with accessibility regulations. These fines can range from thousands to millions of euros depending on company size and severity of violations, potentially devastating your bottom line.'
    },
    {
      id: 'brand',
      icon: TrendingDown,
      title: 'Severe Brand Damage',
      description: 'Non-compliance can lead to negative publicity and loss of consumer trust. Your brand reputation, built over years, can be damaged overnight when accessibility violations become public, affecting customer loyalty and market perception.'
    },
    {
      id: 'market-share',
      icon: Users,
      title: 'Lost Clients & Market Share',
      description: 'Failure to provide accessible services excludes a significant portion of potential customers with disabilities, representing up to 15% of the global population. This exclusion directly translates to lost revenue and reduced market competitiveness.'
    },
    {
      id: 'legal',
      icon: Scale,
      title: 'Costly Legal Battles & Lawsuits',
      description: 'Non-compliance opens your business to discrimination lawsuits and lengthy legal proceedings. Legal fees, settlement costs, and court-mandated remediation can far exceed the initial investment in accessibility compliance.'
    },
    {
      id: 'operational',
      icon: Building,
      title: 'Forced Service Changes & Operational Halts',
      description: 'Regulatory authorities may mandate immediate service modifications or temporary shutdowns until compliance is achieved. These operational disruptions can halt business operations and cause significant revenue loss during critical periods.'
    }
  ];

  const solutionsData = [
    {
      id: 'comprehensive',
      icon: Brain,
      title: 'Comprehensive Evaluation',
      description: 'We leave no stone unturned in our thorough assessment of your chatbot\'s accessibility features, testing every interaction point, navigation element, and user interface component to ensure complete compliance with EU Accessibility Act requirements.',
      hasImage: true
    },
    {
      id: 'gap-analysis',
      icon: Search,
      title: 'Gap Analysis',
      description: 'Our detailed gap analysis identifies specific areas where your chatbot falls short of accessibility standards, providing you with clear visibility into compliance issues and their potential impact on your business operations.'
    },
    {
      id: 'roadmap',
      icon: MapPin,
      title: 'Prioritized Roadmap',
      description: 'We create a strategic, prioritized roadmap that addresses the most critical accessibility issues first, allowing you to achieve compliance efficiently while minimizing business disruption and optimizing resource allocation.'
    },
    {
      id: 'assistance',
      icon: HelpCircle,
      title: 'Expert Assistance',
      description: 'Our team of accessibility specialists provides ongoing support throughout the remediation process, ensuring that all improvements are implemented correctly and maintained for long-term compliance success.'
    },
    {
      id: 'reporting',
      icon: FileText,
      title: 'Detailed Reporting',
      description: 'Receive comprehensive reports that document your chatbot\'s accessibility status, remediation progress, and compliance verification, providing stakeholders with clear evidence of your commitment to accessibility standards.'
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

      {/* Penalties and Business Impact Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Penalties and Business Impact of Non-Compliance
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The EU Accessibility Act for chatbots is a core business reality, with June 28th, 2025, as an important compliance milestone. Non-compliance exposes your organization to severe consequences that extend far beyond regulatory penalties, impacting every aspect of your business operations and market position.
              </p>
            </div>
            
            <div className="space-y-4">
              {penaltiesData.map((penalty) => (
                <Card key={penalty.id} className="glass border-l-4 border-l-destructive/20 hover:border-l-destructive/40 transition-colors duration-300">
                  <Collapsible open={openPenalties === penalty.id} onOpenChange={() => setOpenPenalties(openPenalties === penalty.id ? null : penalty.id)}>
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="flex flex-row items-center space-y-0 space-x-4 cursor-pointer hover:bg-muted/50 transition-colors duration-200 rounded-t-lg">
                        <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                          <penalty.icon className="h-6 w-6 text-destructive" />
                        </div>
                        <div className="flex-1 text-left">
                          <CardTitle className="text-xl text-foreground">{penalty.title}</CardTitle>
                        </div>
                        <div className="w-5 h-5 text-muted-foreground">
                          {openPenalties === penalty.id ? '−' : '+'}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {penalty.description}
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Our Audit Helps Avoid These Risks Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                How Our Audit Helps Avoid These Risks
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Don't let accessibility be an afterthought that exposes your business to costly penalties and operational disruptions. Our comprehensive EU Accessibility Act audit transforms compliance from a burden into a strategic advantage, protecting your organization while expanding your market reach.
              </p>
            </div>
            
            <div className="space-y-4">
              {solutionsData.map((solution) => (
                <Card key={solution.id} className="glass border-l-4 border-l-primary/20 hover:border-l-primary/40 transition-colors duration-300">
                  <Collapsible open={openSolutions === solution.id} onOpenChange={() => setOpenSolutions(openSolutions === solution.id ? null : solution.id)}>
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="flex flex-row items-center space-y-0 space-x-4 cursor-pointer hover:bg-muted/50 transition-colors duration-200 rounded-t-lg">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          {solution.hasImage ? (
                            <Brain className="h-6 w-6 text-primary" />
                          ) : (
                            <solution.icon className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <CardTitle className="text-xl text-foreground">{solution.title}</CardTitle>
                        </div>
                        <div className="w-5 h-5 text-muted-foreground">
                          {openSolutions === solution.id ? '−' : '+'}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="flex items-start gap-6">
                          {solution.hasImage && (
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Brain className="h-8 w-8 text-primary" />
                            </div>
                          )}
                          <p className="text-muted-foreground leading-relaxed flex-1">
                            {solution.description}
                          </p>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
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
