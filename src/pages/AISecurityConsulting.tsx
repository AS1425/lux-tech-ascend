
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, FileCheck, Users, TrendingUp, Zap } from 'lucide-react';

const AISecurityConsulting = () => {
  const [activeRiskIndex, setActiveRiskIndex] = useState(0);

  const securityRisks = [
    {
      title: "Jailbreak and Prompt Injection Attacks",
      content: "When LLMs are fed malicious prompts, they are tricked into revealing sensitive insights or executing unauthorized commands. By integrating advanced guardrails and training models to recognize manipulative input, we neutralize these risks and keep your systems secure."
    },
    {
      title: "Excessive Agency and Malicious Intent",
      content: "Overly autonomous AI systems can act beyond intended limits. We define strict boundaries and embed behavioral constraints to prevent unintended actions."
    },
    {
      title: "Insecure Plugin Design",
      content: "Poorly secured plugins can expose AI systems to external threats. We audit and test plugins rigorously to ensure safe integrations with third-party tools."
    },
    {
      title: "Insufficient Monitoring, Logging, and Rate Limiting",
      content: "Without real-time monitoring, threats go undetected. We implement detailed logging, rate-limiting, and alert mechanisms to detect anomalies early."
    },
    {
      title: "Lack of Output Validation",
      content: "AI systems may generate harmful, biased, or incorrect outputs. We apply multi-layered filters, validation techniques, and human-in-the-loop mechanisms to ensure output quality."
    },
    {
      title: "Dynamic LLM Testing",
      content: "Static testing can't capture evolving threats. We simulate real-world attacks using adversarial testing, red teaming, and stress scenarios to ensure resilience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            AI Security Consulting Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Protect your AI systems and data with expert security solutions tailored for the evolving digital landscape.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Schedule a Security Consultation
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is AI Security Consulting?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI security consulting focuses on providing businesses with strategies to protect their artificial intelligence systems and data from vulnerabilities, attacks, and misuse. As AI technologies become more integrated into business processes, ensuring the security of AI models and algorithms is critical to maintaining trust, compliance, and operational integrity.
              </p>
              <p className="text-lg text-muted-foreground">
                Our AI security consulting services help identify risks, secure data pipelines, and build resilient AI systems that are safe from adversarial attacks and unauthorized access.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Lock className="w-16 h-16 text-primary" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Security is Crucial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why AI Security is Crucial for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              AI security is more important than ever as businesses increasingly rely on AI for decision-making, customer service, and data analysis. AI systems are valuable assets that can be vulnerable to attacks, which can compromise both data integrity and privacy. By ensuring robust security measures, you protect your organization from potential breaches, safeguard customer trust, and comply with regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Data Protection</h3>
              <p className="text-muted-foreground">Secure your AI models and data from unauthorized access and breaches.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Threat Detection</h3>
              <p className="text-muted-foreground">Identify and mitigate potential security threats before they impact your systems.</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compliance</h3>
              <p className="text-muted-foreground">Ensure your AI systems meet regulatory requirements and industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our AI Security Consulting Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our approach to AI security is thorough and comprehensive, ensuring all aspects of your AI system are secure and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Assessment & Discovery</h3>
              </div>
              <p className="text-muted-foreground">
                We conduct a detailed review of your existing AI systems, identifying vulnerabilities and areas of concern.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Risk Analysis</h3>
              </div>
              <p className="text-muted-foreground">
                Our experts perform a risk assessment to understand potential threats and determine how they could impact your AI infrastructure.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Security Strategy Design</h3>
              </div>
              <p className="text-muted-foreground">
                We develop a customized AI security strategy that includes threat mitigation, data protection, and secure deployment practices.
              </p>
            </div>

            {/* Second row cards - centered */}
            <div className="lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-3 lg:translate-x-1/2">
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Implementation & Integration</h3>
                </div>
                <p className="text-muted-foreground">
                  We implement security measures such as encryption, access controls, and adversarial training to strengthen your AI systems.
                </p>
              </div>
            </div>

            <div className="lg:col-start-3 lg:col-end-4 md:col-start-1 md:col-end-3 lg:-translate-x-1/2">
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Ongoing Monitoring</h3>
                </div>
                <p className="text-muted-foreground">
                  We provide continuous monitoring, threat detection, and maintenance services to ensure your AI systems remain secure as threats evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Security Risks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Protecting Your AI Systems Against the Top Risks
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Safeguard your AI infrastructure from the most critical security threats with our comprehensive protection strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Risk Tabs */}
            <div className="space-y-2">
              {securityRisks.map((risk, index) => (
                <button
                  key={index}
                  onClick={() => setActiveRiskIndex(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeRiskIndex === index
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card border hover:bg-accent/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeRiskIndex === index ? 'bg-primary-foreground/20' : 'bg-primary/20'
                    }`}>
                      <Shield className={`h-5 w-5 ${
                        activeRiskIndex === index ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                    </div>
                    <span className="font-semibold">{risk.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Risk Content */}
            <div className="bg-card rounded-2xl p-8 border">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {securityRisks[activeRiskIndex].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {securityRisks[activeRiskIndex].content}
                </p>
              </div>
              <Button variant="outline" className="w-full">
                Learn More About This Risk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Benefits of Our AI Security Consulting Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Protection from Cyber Attacks</h3>
              <p className="text-muted-foreground">Safeguard your AI systems from potential attacks, ensuring data integrity and privacy.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compliance with Regulations</h3>
              <p className="text-muted-foreground">Ensure your AI systems comply with industry regulations and data protection laws, such as GDPR and CCPA.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Increased Trust</h3>
              <p className="text-muted-foreground">Build customer trust by demonstrating your commitment to secure AI practices, protecting sensitive information and transactions.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Enhanced AI Performance</h3>
              <p className="text-muted-foreground">Secure AI systems not only provide protection but also ensure stable and optimized performance by eliminating potential weaknesses.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Scalable Security Solutions</h3>
              <p className="text-muted-foreground">Implement AI security measures that scale as your AI solutions evolve, ensuring long-term protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Lock className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                    <Eye className="w-10 h-10 text-accent" />
                  </div>
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <FileCheck className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Partner with Us for AI Security?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With extensive experience in AI and cybersecurity, our team of experts is uniquely positioned to deliver AI security solutions that protect your most valuable assets. We provide end-to-end consulting, from identifying vulnerabilities to designing secure AI architectures and ensuring ongoing compliance with evolving regulations.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                By partnering with us, you gain the expertise needed to secure your AI systems, build customer trust, and stay ahead of emerging threats.
              </p>
              <Button size="lg" className="text-lg px-8 py-4">
                Start Securing Your AI Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Secure Your AI Systems?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait until it's too late. Protect your AI investments and ensure compliance with our expert security consulting services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Contact Our Security Experts
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISecurityConsulting;
