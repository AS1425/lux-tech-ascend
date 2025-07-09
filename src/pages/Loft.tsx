
import React from 'react';
import { ArrowRight, Users, Zap, TrendingUp, Lightbulb, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Loft = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Loft
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Where innovation meets design. Explore how our tailored solutions can elevate your business to new heights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group text-lg px-8 py-6">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-3/4 h-3/4">
                    <div className="bg-primary/30 rounded-xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="bg-secondary/30 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="bg-secondary/30 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="bg-primary/30 rounded-xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is Loft?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Loft is more than just a space; it's a platform for creativity, collaboration, and innovation. Whether you're looking to develop cutting-edge solutions, foster a creative environment, or transform your business processes, Loft provides the tools, resources, and expertise to help you succeed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our services are designed to inspire creativity and provide you with the environment and tools you need to build and grow your business efficiently.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 backdrop-blur-sm border border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <div className="flex space-x-4">
                    <div className="w-16 h-16 bg-primary/40 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="w-16 h-16 bg-primary/40 rounded-full flex items-center justify-center">
                      <Layers className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Loft Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-primary" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center">
                    <Users className="w-12 h-12 text-secondary" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-12 h-12 text-secondary" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center">
                    <Layers className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Loft Matters for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Loft provides businesses with a transformative environment to foster collaboration, creativity, and operational efficiency. By integrating the latest design principles and the right resources, Loft offers a solution where businesses can innovate, grow, and thrive.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform helps companies break down silos, streamline processes, and create scalable solutions that can evolve as business needs change. Loft is where the future of your business starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Loft Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Loft, we follow a structured yet flexible approach to transform your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Discovery",
                description: "We begin by understanding your business needs, challenges, and goals.",
                icon: Users
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Our team works with you to design creative solutions that meet your objectives while fostering collaboration and innovation.",
                icon: Lightbulb
              },
              {
                step: "03",
                title: "Implementation & Execution",
                description: "We develop and implement solutions that optimize your workflows, enhance creativity, and streamline business operations.",
                icon: Zap
              },
              {
                step: "04",
                title: "Testing & Refinement",
                description: "We rigorously test our solutions to ensure they align with your business needs and refine them for continuous improvement.",
                icon: TrendingUp
              },
              {
                step: "05",
                title: "Deployment & Support",
                description: "We deploy the final solution and provide ongoing support to ensure long-term success and adaptability.",
                icon: Layers
              }
            ].map((item, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300 animate-fade-in">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Benefits of Loft
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how Loft transforms your business operations and drives innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Collaboration",
                description: "Loft fosters teamwork by providing an environment that encourages creativity and effective communication.",
                icon: Users,
                color: "primary"
              },
              {
                title: "Increased Efficiency",
                description: "Streamline business processes, reduce inefficiencies, and improve operational performance with our solutions.",
                icon: Zap,
                color: "secondary"
              },
              {
                title: "Scalability",
                description: "As your business grows, Loft can evolve with you, providing flexible solutions that scale with your needs.",
                icon: TrendingUp,
                color: "primary"
              },
              {
                title: "Innovation",
                description: "Stay ahead of the competition by using our cutting-edge design and business solutions to unlock new opportunities.",
                icon: Lightbulb,
                color: "secondary"
              },
              {
                title: "Creative Space",
                description: "Loft provides a collaborative, inspiring environment for your team to innovate and succeed.",
                icon: Layers,
                color: "primary"
              }
            ].map((benefit, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300 animate-fade-in">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-${benefit.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Partner with Loft?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Loft combines creativity with practical solutions, offering businesses the opportunity to thrive in a supportive, scalable environment. With our expert team, you gain access to innovative design thinking, efficient business strategies, and cutting-edge solutions tailored to your specific needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to improve collaboration, streamline processes, or develop scalable solutions, Loft provides the resources and expertise to make your vision a reality.
              </p>
              <Button size="lg" className="group">
                Start Your Loft Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Innovation at Work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Start your journey with Loft today and discover how our innovative solutions can elevate your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Your Loft Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loft;
