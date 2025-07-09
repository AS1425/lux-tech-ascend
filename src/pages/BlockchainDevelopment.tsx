
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Lock, Zap, TrendingUp, Users, CheckCircle, Globe, Network, Eye } from 'lucide-react';

const BlockchainDevelopment = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Increased Security",
      description: "Blockchain technology is inherently secure due to its decentralized nature and cryptographic techniques, making it ideal for safeguarding sensitive data."
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Transparency and Immutability",
      description: "Every transaction on the blockchain is recorded in a public ledger, ensuring transparency and preventing data tampering."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Cost Efficiency",
      description: "By eliminating intermediaries, blockchain reduces transaction fees and operational costs, making it a cost-effective solution for many industries."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Faster Transactions",
      description: "Blockchain facilitates faster, peer-to-peer transactions without the need for a central authority or intermediary."
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Decentralization",
      description: "Blockchain eliminates the reliance on central authorities, offering more control and ownership to participants in the network."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Discovery",
      description: "We start by understanding your business objectives, challenges, and the areas where blockchain can create the most value."
    },
    {
      step: "02",
      title: "Solution Design & Architecture",
      description: "Our team designs a tailored blockchain solution, choosing the appropriate blockchain type and smart contract architecture."
    },
    {
      step: "03",
      title: "Blockchain Development",
      description: "We develop secure, efficient blockchain systems and smart contracts that are scalable, resilient, and aligned with your business needs."
    },
    {
      step: "04",
      title: "Testing & Security",
      description: "The blockchain solution is rigorously tested to ensure it meets performance standards and is secure from potential vulnerabilities."
    },
    {
      step: "05",
      title: "Deployment & Integration",
      description: "We deploy the blockchain solution and integrate it into your existing business systems, ensuring smooth functionality."
    },
    {
      step: "06",
      title: "Ongoing Support & Maintenance",
      description: "We offer continuous monitoring and maintenance services to ensure the blockchain solution remains secure and performs optimally."
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
                  Blockchain Development Services
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Blockchain Development Services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Unlock the power of blockchain technology to enhance security, transparency, and efficiency in your business operations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your Blockchain Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Contact Our Experts
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
                  alt="Blockchain Technology Network"
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
                What is Blockchain Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Blockchain development refers to the process of creating decentralized, secure systems where data is stored in blocks, linked together in a chain, ensuring transparency, immutability, and security. Whether you are looking to build blockchain-based applications, smart contracts, or decentralized finance (DeFi) solutions, our blockchain development services provide end-to-end solutions to help businesses harness the potential of blockchain technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expert team builds tailored blockchain solutions that streamline operations, reduce fraud, and increase trust among users.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Blockchain Network Visualization"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Blockchain Development Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80"
                alt="Blockchain Security and Decentralization"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Blockchain is Essential for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Blockchain technology enables businesses to create decentralized systems that ensure data security, streamline operations, and reduce the risk of fraud. By eliminating intermediaries, blockchain can significantly lower transaction costs, improve efficiency, and enhance transparency in processes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From secure transactions to decentralized applications (DApps), blockchain has the potential to revolutionize industries such as finance, healthcare, supply chain, and more. Our blockchain development services help businesses integrate blockchain into their operations, unlocking new efficiencies and capabilities.
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
              Our Blockchain Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to deliver custom blockchain solutions that meet your business needs
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
              Key Benefits of Blockchain Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Harness the power of blockchain technology to transform your business operations
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
                Why Choose Us for Your Blockchain Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong track record in building scalable, secure blockchain solutions, we specialize in delivering end-to-end services for businesses looking to integrate blockchain into their operations. Our expert team works closely with you to design and implement customized blockchain solutions that align with your business goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a custom blockchain application, smart contracts, or a decentralized platform, we ensure that your solution is built to last, performs optimally, and provides measurable value.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Blockchain Development Team"
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
            Ready to Transform Your Business with Blockchain?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how blockchain technology can revolutionize your operations and create new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Start Your Blockchain Project Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Our Blockchain Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainDevelopment;
