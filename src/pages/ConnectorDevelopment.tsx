
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Database, Cloud, Workflow, CheckCircle, Users, TrendingUp, Lock } from 'lucide-react';

const ConnectorDevelopment = () => {
  const benefits = [
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Seamless Integration",
      description: "Connect your business systems, applications, and data sources without friction, ensuring smooth data flow."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Improved Data Accuracy",
      description: "By automating the data exchange, connectors reduce the potential for human error and improve data quality."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Increased Efficiency",
      description: "Automate data transfer and system communication, reducing the time spent on manual tasks and improving operational efficiency."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Scalability",
      description: "Our custom connectors are designed to grow with your business, enabling seamless integration of new tools and technologies as your company evolves."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Enhanced Security",
      description: "We ensure that the connectors we develop are secure, protecting your data and systems from unauthorized access and breaches."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Discovery",
      description: "We begin by understanding your specific business requirements, systems, and integration goals."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the architecture of the connector, ensuring it is robust, secure, and efficient."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "We build the connector according to your requirements, ensuring compatibility with the systems it will integrate."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "The connector undergoes rigorous testing to ensure seamless communication and secure data transfers between systems."
    },
    {
      step: "05",
      title: "Deployment & Integration",
      description: "We deploy the connector and integrate it into your live environment, ensuring minimal disruption to your operations."
    },
    {
      step: "06",
      title: "Ongoing Support & Maintenance",
      description: "We offer continuous support to ensure that the connector evolves with your changing business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20">
                  Connector Development Services
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Connector Development Services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Build seamless integrations between your systems with custom connectors that enhance data flow and connectivity.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Get Started with Connector Development
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="System Integration and Connectivity"
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is Connector Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connector development refers to the creation of customized software components that facilitate data exchange and integration between different systems, platforms, and services. These connectors ensure that your applications can work together smoothly by enabling secure data transfer and communication across multiple platforms, both on-premise and in the cloud.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're integrating third-party APIs, databases, or business tools, our connector development services streamline data connectivity, improving your operations and productivity.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Data Integration and Connectivity"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Connector Development Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
                alt="System Architecture and Data Flow"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Connector Development is Vital for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With the increasing complexity of business environments, having a seamless flow of data between disparate systems is critical. Connector development ensures that your systems, whether legacy, cloud-based, or hybrid, can communicate efficiently without errors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By creating robust, secure connectors, businesses can integrate disparate applications, enhance data sharing, reduce manual input, and improve operational efficiency. Our custom connectors are built to scale with your business, enabling smooth interactions between new technologies and existing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Connector Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure your connector development project meets your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Benefits of Connector Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock the power of seamless system integration with our custom connector solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Partner with Us for Connector Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team specializes in developing custom connectors that perfectly align with your business systems and technologies. With years of experience in integration and API development, we ensure that your connectors are built with the latest standards and best practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We take a hands-on approach to ensure that your connectors are not only functional but also scalable, secure, and capable of adapting to future business needs. Whether you're connecting legacy systems with new tools or integrating multiple cloud platforms, we provide reliable solutions that help you unlock the full potential of your data.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                alt="Development Team Working on Integration"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Streamline Your System Integrations?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our custom connectors can transform your business operations and enhance data connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Start Your Connector Development Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConnectorDevelopment;
