import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Shield, 
  FileCheck, 
  Lock, 
  FileText, 
  Search, 
  GitBranch, 
  Activity, 
  GraduationCap,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Settings,
  Eye,
  Clipboard,
  Database,
  Monitor
} from 'lucide-react';

const SecurityComplianceSoftwareDevelopment = () => {
  const coreOfferings = [
    {
      icon: Shield,
      title: "Secure Software Architecture",
      description: "Threat modeling and secure design principles from the ground up."
    },
    {
      icon: FileCheck,
      title: "Compliance Mapping & Planning",
      description: "Gap assessments and roadmaps to meet industry compliance standards."
    },
    {
      icon: Lock,
      title: "Data Protection & Privacy",
      description: "Encryption, access control, data minimization, and retention policies."
    },
    {
      icon: FileText,
      title: "Audit-Ready Documentation",
      description: "Policies, logs, and evidence reports tailored to your compliance goals."
    },
    {
      icon: Search,
      title: "Vulnerability Assessment & Pen Testing",
      description: "Find and fix security issues before attackers do."
    },
    {
      icon: GitBranch,
      title: "DevSecOps Integration",
      description: "Automate security checks into CI/CD workflows."
    },
    {
      icon: Activity,
      title: "Compliance Monitoring Tools",
      description: "Real-time alerts and dashboards to ensure continuous compliance."
    },
    {
      icon: GraduationCap,
      title: "Training & Knowledge Transfer",
      description: "Educate teams on secure practices and regulatory frameworks."
    }
  ];

  const securityTools = [
    { name: "AWS IAM", logo: "☁️" },
    { name: "HashiCorp Vault", logo: "🔐" },
    { name: "Snyk", logo: "🛡️" },
    { name: "Qualys", logo: "🔍" },
    { name: "Nessus", logo: "🔎" },
    { name: "Burp Suite", logo: "🕷️" },
    { name: "Splunk", logo: "📊" },
    { name: "Cloudflare Zero Trust", logo: "🌐" },
    { name: "Azure Security Center", logo: "🔷" },
    { name: "Fortinet", logo: "🏰" },
    { name: "OWASP ZAP", logo: "⚡" }
  ];

  const benefitCards = [
    {
      icon: CheckCircle,
      title: "Compliance from Day One",
      description: "Security and compliance are not afterthoughts—they're baked in."
    },
    {
      icon: Target,
      title: "Industry-Specific Experience",
      description: "Expertise across healthcare, finance, retail, and enterprise-grade apps."
    },
    {
      icon: TrendingUp,
      title: "Future-Proof Software",
      description: "Solutions built to withstand evolving threats and regulations."
    },
    {
      icon: Users,
      title: "End-to-End Service",
      description: "From strategy and planning to deployment and monitoring."
    }
  ];

  const complianceProcess = [
    {
      icon: Search,
      title: "Requirement Analysis & Risk Profiling",
      description: "Understanding your compliance needs and risk landscape"
    },
    {
      icon: Shield,
      title: "Secure Architecture & Design",
      description: "Building security into the foundation"
    },
    {
      icon: Clipboard,
      title: "Compliance Planning & Checklist Creation",
      description: "Detailed roadmap for regulatory alignment"
    },
    {
      icon: Settings,
      title: "Secure Development & Testing",
      description: "Implementation with security at every step"
    },
    {
      icon: Eye,
      title: "Penetration Testing & Code Review",
      description: "Thorough security validation and assessment"
    },
    {
      icon: FileText,
      title: "Final Audit Prep & Documentation",
      description: "Complete audit-ready documentation package"
    },
    {
      icon: CheckCircle,
      title: "Go-Live with Compliance Sign-off",
      description: "Deployment with full compliance certification"
    },
    {
      icon: Monitor,
      title: "Post-Deployment Monitoring",
      description: "Continuous compliance and security monitoring"
    }
  ];

  const frameworksData = [
    {
      value: "gdpr",
      trigger: "GDPR (General Data Protection Regulation)",
      content: "Ensuring privacy and data rights for EU residents."
    },
    {
      value: "hipaa",
      trigger: "HIPAA (Health Insurance Portability and Accountability Act)",
      content: "Healthcare-grade software compliance for PHI."
    },
    {
      value: "soc2",
      trigger: "SOC 2 Type I & II",
      content: "Trust service principles: security, availability, processing integrity, confidentiality, and privacy."
    },
    {
      value: "pci-dss",
      trigger: "PCI DSS",
      content: "Secure payment processing and cardholder data handling."
    },
    {
      value: "iso-27001",
      trigger: "ISO/IEC 27001",
      content: "Establishing robust Information Security Management Systems (ISMS)."
    },
    {
      value: "ccpa",
      trigger: "CCPA",
      content: "California Consumer Privacy Act compliance for US-based businesses."
    }
  ];

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Secure. Compliant. Trusted.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl">
              We build software that meets global security standards and industry-specific compliance frameworks—ensuring trust, safety, and business continuity.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Request a Compliance Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Security and Compliance Built into Every Line of Code</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Today's digital products demand more than performance—they must be secure, private, and compliant. Our team delivers software that aligns with frameworks such as GDPR, HIPAA, SOC 2, ISO 27001, PCI DSS, and more, tailored to your industry and technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Security & Compliance Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreOfferings.map((offering, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <offering.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{offering.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Regulatory Frameworks & Standards We Align With</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {frameworksData.map((item, index) => (
                <AccordionItem key={index} value={item.value} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Security Tools Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security Tools & Platforms We Integrate</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {securityTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 text-center">
                <div className="text-4xl mb-2">{tool.logo}</div>
                <div className="text-sm font-medium">{tool.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Build Compliance-Ready Software</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Clients Trust Our Security Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitCards.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Make Your Software Audit-Ready
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From code to compliance, we help you launch with confidence.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Talk to a Compliance Expert
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityComplianceSoftwareDevelopment;