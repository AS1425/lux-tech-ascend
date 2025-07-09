
import React from 'react';
import { ArrowRight, Code, Settings, Zap, Shield, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomSoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Custom Software Development Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Build innovative, scalable, and secure custom software solutions tailored to your business needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Custom Software Development - Team coding"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Java programming on monitor"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Code className="w-12 h-12 text-primary" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is Custom Software Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Custom software development involves designing, building, and maintaining software solutions that are tailored specifically to meet the unique needs of your business. Unlike off-the-shelf software, custom software is designed from the ground up, offering flexibility, scalability, and the ability to adapt as your business evolves.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our custom software development services help businesses streamline operations, enhance customer experiences, and drive digital transformation by creating software that perfectly aligns with their objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom Software Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Custom Software Matters for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Off-the-shelf software solutions may not provide the flexibility or features your business needs to operate efficiently. Custom software development ensures that your software perfectly aligns with your business processes, improves efficiency, and provides a competitive edge.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to automate workflows, integrate with existing systems, or create innovative customer-facing applications, custom software development offers tailored solutions that drive success and help your business grow.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Settings className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Workflow Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">System Integration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                alt="Colorful software code on computer monitor"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Custom Software Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic and agile approach to deliver custom software solutions that meet your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Requirement Gathering",
                description: "We start by understanding your business requirements, pain points, and goals.",
                icon: Users
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our team creates a detailed design and prototype to ensure the software meets your needs and expectations.",
                icon: Code
              },
              {
                step: "03",
                title: "Development & Coding",
                description: "We begin the software development process, using best practices to ensure clean, efficient, and scalable code.",
                icon: Settings
              },
              {
                step: "04",
                title: "Testing & QA",
                description: "Our quality assurance team tests the software to identify and resolve bugs and ensure it performs to the highest standards.",
                icon: Shield
              },
              {
                step: "05",
                title: "Deployment & Support",
                description: "We deploy the software into your environment and provide ongoing support, updates, and maintenance.",
                icon: Zap
              },
              {
                step: "06",
                title: "Continuous Improvement",
                description: "We monitor software performance and continuously optimize it to meet the evolving needs of your business.",
                icon: CheckCircle
              }
            ].map((process, index) => (
              <div key={index} className="group relative">
                <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-primary/30 mr-4">{process.step}</span>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <process.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{process.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Benefits of Our Custom Software Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how custom software solutions can transform your business operations and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tailored to Your Needs",
                description: "Custom software is designed specifically to address your business's unique challenges and objectives.",
                icon: "🎯"
              },
              {
                title: "Scalable & Flexible",
                description: "As your business grows, custom software can evolve with you, scaling and adapting to new demands.",
                icon: "📈"
              },
              {
                title: "Improved Efficiency",
                description: "Automate processes, streamline workflows, and reduce inefficiencies to improve overall productivity.",
                icon: "⚡"
              },
              {
                title: "Better Integration",
                description: "Custom software can integrate seamlessly with existing systems, ensuring smooth data flow and improving operations.",
                icon: "🔗"
              },
              {
                title: "Competitive Advantage",
                description: "Custom-built solutions provide a unique advantage by offering functionality that's not available in off-the-shelf products.",
                icon: "🏆"
              },
              {
                title: "Long-term Support",
                description: "Ongoing maintenance, updates, and support ensure your software continues to meet evolving business needs.",
                icon: "🛠️"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 h-full">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose Us for Your Custom Software Development Needs?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in custom software development, our team has a proven track record of delivering high-quality, reliable solutions that align with business goals. We combine industry expertise with the latest technologies to create scalable, secure, and innovative software solutions that meet your unique needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team is committed to providing full support throughout the software development lifecycle and beyond, ensuring your software continues to meet evolving business demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="group">
                  Get Started with Custom Software Development
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="People working with laptops - software development team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-12 h-12 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business with Custom Software?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom software solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwareDevelopment;
