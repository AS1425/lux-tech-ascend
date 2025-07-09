
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Smartphone, Shield, Zap, Users, Settings, Layers } from 'lucide-react';

const MobileAppDevelopment = () => {
  const features = [
    {
      icon: Layers,
      title: "Cross-platform Compatibility",
      description: "We develop apps that run seamlessly on both iOS and Android platforms, ensuring wide user accessibility."
    },
    {
      icon: Settings,
      title: "Customizable Solutions",
      description: "Our apps are built to meet your specific business needs, offering flexibility and adaptability to changes as your business evolves."
    },
    {
      icon: Shield,
      title: "High-Performance & Security",
      description: "We focus on building fast, secure, and scalable mobile apps that provide a smooth user experience and protect sensitive data."
    },
    {
      icon: Users,
      title: "Intuitive UI/UX",
      description: "Our design team ensures that your app is easy to use, visually appealing, and optimized for the best performance on mobile devices."
    },
    {
      icon: Zap,
      title: "Integration with Business Systems",
      description: "We can integrate your app with existing business systems like CRM, ERP, and other back-end solutions to streamline operations."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Requirements Gathering",
      description: "We begin by understanding your business goals, target audience, and the key features required for the app."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our design team creates a seamless, intuitive user interface (UI) and user experience (UX) that align with your brand and optimize user engagement."
    },
    {
      number: "03",
      title: "App Development",
      description: "We develop the app using the latest technologies for both iOS and Android platforms, ensuring scalability, security, and performance."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "The app undergoes rigorous testing to identify bugs, improve functionality, and ensure a smooth user experience across devices."
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "Once the app is tested and ready, we deploy it to the app stores, ensuring it meets all platform requirements for a successful launch."
    },
    {
      number: "06",
      title: "Post-launch Support & Maintenance",
      description: "We provide ongoing support, updates, and maintenance to keep your app up-to-date and running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Mobile App Development Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build user-friendly, high-performance mobile apps that drive engagement and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glass glow-purple hover:scale-105 transition-all duration-300">
                  Start Your Project Today
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-accent">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                alt="Mobile App Development Team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Mobile App Development Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80"
                alt="Mobile App Interface Design"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is Mobile App Development?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mobile app development is the process of creating applications designed to run on mobile devices, such as smartphones and tablets. These apps provide users with a variety of services, from entertainment and shopping to productivity and social networking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mobile app development services cover every stage of the development process, from ideation and design to development, testing, and deployment. We build scalable, high-performing apps that deliver a seamless user experience on both iOS and Android platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile Apps Are Essential Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Mobile Apps Are Essential for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mobile apps provide businesses with an effective way to engage with customers, streamline processes, and offer new services. With the growing reliance on smartphones, having a well-designed app can enhance brand visibility, improve customer experience, and drive revenue.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to extend your e-commerce platform, improve customer support, or create innovative solutions, our mobile app development services ensure that your business stays competitive in a mobile-first world.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
                alt="Business Growth Through Mobile Apps"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 to-primary/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mobile App Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured, agile approach to deliver high-quality mobile apps tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-hover glass border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features of Our Mobile App Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the powerful features that make our mobile app development services stand out
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover glass border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose Us for Your Mobile App Development Needs?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in mobile app development, our team is dedicated to creating innovative, high-performing apps that meet your business objectives. From idea conception to post-launch support, we work closely with you to ensure the app delivers value and meets user expectations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our development process combines the latest technologies with industry best practices to build apps that are scalable, secure, and intuitive.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Years of experience in mobile development</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Cross-platform expertise (iOS & Android)</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">End-to-end development support</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
                alt="Mobile App Development Team Collaboration"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's transform your ideas into powerful mobile applications that engage users and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glass glow-purple hover:scale-105 transition-all duration-300">
              Start Your Mobile App Project
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
