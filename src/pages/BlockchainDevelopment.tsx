
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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

      {/* Section 1: Your Blockchain Arsenal of Solutions for Every Need */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Blockchain Arsenal of Solutions for Every Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive blockchain solutions tailored to your business requirements
            </p>
          </div>
          
          <Tabs defaultValue="nfts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
              <TabsTrigger value="nfts" className="text-xs lg:text-sm">NFTs</TabsTrigger>
              <TabsTrigger value="contracts" className="text-xs lg:text-sm">Smart Contracts</TabsTrigger>
              <TabsTrigger value="networks" className="text-xs lg:text-sm">Networks</TabsTrigger>
              <TabsTrigger value="wallets" className="text-xs lg:text-sm">Wallets</TabsTrigger>
              <TabsTrigger value="trading" className="text-xs lg:text-sm">Trading</TabsTrigger>
              <TabsTrigger value="defi" className="text-xs lg:text-sm">DeFi</TabsTrigger>
              <TabsTrigger value="dao" className="text-xs lg:text-sm">DAOs</TabsTrigger>
              <TabsTrigger value="solutions" className="text-xs lg:text-sm">Solutions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nfts">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Crafting One-of-a-Kind NFTs</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From virtual real estate to in-game collectibles, we mint digital assets that elevate immersive experiences within the metaverse, fostering ownership, trade, and interaction with crypto holdings. This empowers brands to activate novel revenue streams and captivate their audience.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="contracts">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Sophisticated Smart Contracts</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Automate trust and eliminate intermediaries with self-executing smart contracts. Our experts write secure, gas-optimized code for DeFi platforms, token issuance, and more — reducing costs and boosting transactional integrity.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="networks">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Exclusive Blockchain Networks</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Launch your own permissioned or public blockchain network, tailored to your business use case. We help you establish governance protocols, consensus mechanisms, and scalable infrastructure from day one.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="wallets">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Secure Crypto Wallets for Your Investments</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop custodial and non-custodial wallets with enterprise-grade encryption to ensure secure access and seamless interaction with tokens and digital assets across blockchain ecosystems.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="trading">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">High-Performance Trading Infrastructure</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Enable lightning-fast, API-driven trading experiences with our custom-built decentralized and centralized exchange solutions. From liquidity pools to arbitrage automation — we power next-gen trading.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="defi">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Decentralized Finance Reimagined</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Build the future of banking through decentralized lending, staking, yield farming, and liquidity provisioning protocols — all built for transparency, efficiency, and open financial systems.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="dao">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Empowering Governance with DAOs</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement DAO frameworks that allow stakeholders to participate in decentralized governance decisions — ensuring transparency, immutability, and trust within your ecosystem.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="solutions">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pioneering DeFi Solutions</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From stablecoins to synthetic assets and multi-chain bridges, we design secure and compliant DeFi architectures that push boundaries while meeting evolving regulatory standards.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section 2: Blockchain Expertise That Delivers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Blockchain Expertise That Delivers: On Time, On Budget, and On Point
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with our experienced team for exceptional blockchain development results
            </p>
          </div>
          
          <Tabs defaultValue="team" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="team" className="text-xs lg:text-sm">Dream Team</TabsTrigger>
              <TabsTrigger value="track-record" className="text-xs lg:text-sm">Track Record</TabsTrigger>
              <TabsTrigger value="deployment" className="text-xs lg:text-sm">Rapid Deployment</TabsTrigger>
              <TabsTrigger value="engagement" className="text-xs lg:text-sm">Engagement</TabsTrigger>
              <TabsTrigger value="scalability" className="text-xs lg:text-sm">Scalability</TabsTrigger>
            </TabsList>
            
            <TabsContent value="team">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Your Blockchain Dream Team</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our seasoned blockchain developers possess deep expertise across Ethereum, Solana, and emerging protocols. With agile execution, we deliver secure, scalable, high-performing applications that drive business growth.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="track-record">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Proven Track Record in Delivery</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've delivered successful blockchain deployments for FinTechs, exchanges, NFT platforms, and startups — meeting deadlines and exceeding expectations across multiple geographies and use cases.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="deployment">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Rapid Deployment, Reliable Results</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team leverages reusable smart contract templates and DevOps pipelines to cut deployment time — accelerating your time-to-market while preserving quality and security.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="engagement">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Flexible Engagement Models</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need end-to-end development or team augmentation, we offer flexible models — from hourly contracts to dedicated full-stack blockchain teams.
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="scalability">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Solutions Scaled to Your Business</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build blockchain solutions with scalability at the core — whether you're launching an MVP or managing millions of users. Our microservice-driven architecture ensures you're ready for exponential growth.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section 3: Choose Your Blockchain Foundation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose Your Blockchain Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the perfect blockchain platform for your project requirements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="ethereum">
              <AccordionItem value="ethereum">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Ethereum</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Most trusted protocol for dApps, DeFi, and tokenization. Supports smart contracts and broad developer community with robust tooling.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="stellar">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Stellar</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Built for low-cost cross-border payments and financial inclusion. Ideal for fintech platforms and remittance services.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cosmos">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Cosmos</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Enables inter-blockchain communication (IBC) with high modularity and scalability. Great for interconnected blockchain ecosystems.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="solana">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Solana</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Known for ultra-high throughput and low fees. Ideal for NFTs, real-time gaming, and decentralized exchanges.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="polkadot">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Polkadot</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Focuses on interoperability and parachain development. Perfect for scalable and cross-chain decentralized applications.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="near">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">NEAR Protocol</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Developer-friendly and performance-optimized. Uses sharding for scalability and provides low-latency UX for end-users.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="polygon">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Polygon</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A Layer-2 solution that scales Ethereum dApps with low-cost transactions. Suitable for DeFi, games, and mass adoption projects.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cardano">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Cardano</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Built on peer-reviewed research and a layered architecture. Great for compliant and academically-backed blockchain systems.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hyperledger">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Hyperledger</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Enterprise-grade permissioned blockchain framework. Ideal for supply chain, healthcare, and regulated financial services.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hedera">
                <AccordionTrigger className="text-left">
                  <span className="text-lg font-semibold">Hedera</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizes hashgraph consensus for speed and fairness. Suitable for tokenization, secure logging, and permissioned enterprise use.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
