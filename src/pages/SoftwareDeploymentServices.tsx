import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Server, 
  GitBranch, 
  Cloud, 
  Calendar, 
  RotateCcw, 
  Activity, 
  Shield, 
  Headphones,
  Search,
  Settings,
  FileText,
  CheckCircle,
  TrendingUp,
  Monitor,
  Target,
  Lock,
  Cog,
  Globe
} from 'lucide-react';

const SoftwareDeploymentServices = () => {
  const serviceOfferings = [
    {
      icon: Server,
      title: "Environment Setup & Configuration",
      description: "Infrastructure provisioning for development, staging, and production."
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Integration",
      description: "Automate builds, tests, and deployments using tools like Jenkins, GitHub Actions, or GitLab CI."
    },
    {
      icon: Cloud,
      title: "Cloud & On-Premise Deployments",
      description: "Deploy seamlessly to AWS, Azure, GCP, or self-hosted environments."
    },
    {
      icon: Calendar,
      title: "Release Management",
      description: "Plan, schedule, and track release cycles across multiple teams."
    },
    {
      icon: RotateCcw,
      title: "Rollback & Version Control",
      description: "Revert to previous versions quickly if issues arise post-deployment."
    },
    {
      icon: Activity,
      title: "Deployment Monitoring & Alerts",
      description: "Real-time logs, alerts, and performance tracking after deployment."
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "Implement firewalls, SSL, API keys, and environment variables securely."
    },
    {
      icon: Headphones,
      title: "Post-Deployment Support",
      description: "Ongoing maintenance and support after going live."
    }
  ];

  const tools = [
    { name: "Docker", logo: "🐳" },
    { name: "Kubernetes", logo: "☸️" },
    { name: "Jenkins", logo: "🔧" },
    { name: "GitLab CI/CD", logo: "🦊" },
    { name: "GitHub Actions", logo: "🐙" },
    { name: "Bitbucket Pipelines", logo: "🪣" },
    { name: "Ansible", logo: "🔴" },
    { name: "AWS CodeDeploy", logo: "☁️" },
    { name: "Azure DevOps", logo: "🔷" },
    { name: "Terraform", logo: "🏗️" },
    { name: "CircleCI", logo: "⭕" },
    { name: "Netlify", logo: "🌐" },
    { name: "Vercel", logo: "▲" }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Zero Downtime Rollouts",
      description: "Blue-green, canary, and rolling deployment support."
    },
    {
      icon: Lock,
      title: "Security-First Approach",
      description: "SSH key management, API encryption, and access control."
    },
    {
      icon: Cog,
      title: "Customized Pipelines",
      description: "Tailored CI/CD solutions for unique workflows."
    },
    {
      icon: Globe,
      title: "Cross-Platform Expertise",
      description: "Whether cloud-native, containerized, or legacy apps—we've got it covered."
    }
  ];

  const processSteps = [
    {
      icon: Search,
      title: "Requirement Gathering",
      description: "Understanding your deployment needs and infrastructure"
    },
    {
      icon: Settings,
      title: "Environment Setup",
      description: "Configuring development, staging, and production environments"
    },
    {
      icon: GitBranch,
      title: "Pipeline Configuration",
      description: "Setting up automated CI/CD workflows"
    },
    {
      icon: CheckCircle,
      title: "Testing & Validation",
      description: "Thorough testing before production deployment"
    },
    {
      icon: TrendingUp,
      title: "Go-Live Execution",
      description: "Seamless deployment to production environment"
    },
    {
      icon: Monitor,
      title: "Post-Deployment Monitoring",
      description: "Continuous monitoring and performance tracking"
    }
  ];

  const accordionData = [
    {
      value: "downtime",
      trigger: "Reduces Downtime",
      content: "Reliable deployments mean uninterrupted business operations."
    },
    {
      value: "time-to-market",
      trigger: "Improves Time-to-Market",
      content: "Automated pipelines accelerate delivery."
    },
    {
      value: "security",
      trigger: "Ensures Security Compliance",
      content: "Consistent and secure deployment processes prevent vulnerabilities."
    },
    {
      value: "human-error",
      trigger: "Eliminates Human Error",
      content: "Automation reduces the risk of manual mistakes."
    },
    {
      value: "continuous-delivery",
      trigger: "Enables Continuous Delivery",
      content: "Supports agile, DevOps, and scalable growth."
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
              Seamless Software Deployment—From Development to Production
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Accelerate your go-live process with secure, automated, and stress-free deployment services tailored to your infrastructure.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Get a Custom Deployment Plan
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
                  <Server className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Launch with Confidence, Every Time</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our deployment services are designed to ensure that your software is delivered to production environments quickly, securely, and with zero downtime. Whether it's a web app, mobile application, or enterprise software, we handle environment provisioning, versioning, rollback, and validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Software Deployment Services Include</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceOfferings.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
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
              <h2 className="text-4xl font-bold mb-4">Why a Professional Deployment Strategy is Critical</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {accordionData.map((item, index) => (
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

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tools & Platforms We Work With</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 text-center">
                <div className="text-4xl mb-2">{tool.logo}</div>
                <div className="text-sm font-medium">{tool.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our End-to-End Deployment Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Businesses Choose Our Deployment Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Go Live with Confidence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let us build and manage a bulletproof deployment strategy tailored to your business.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareDeploymentServices;