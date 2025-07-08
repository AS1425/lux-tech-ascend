
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Clock, Globe, Brain, BarChart3, Users, Target, Zap, Shield, Cog } from 'lucide-react';

const ConversationalAI = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI solutions are available round-the-clock to support your customers at any time, ensuring no conversation is missed."
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "We integrate AI with multiple platforms like websites, mobile apps, social media, and messaging services, offering consistent support across all channels."
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Our AI agents engage in seamless, human-like conversations using advanced NLP, understanding user intent and context."
    },
    {
      icon: Users,
      title: "Personalization",
      description: "Our AI adapts to individual users, personalizing conversations based on their preferences and previous interactions."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Access detailed analytics and reports to track AI performance, customer behavior, and identify areas for optimization."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security to protect your data and ensure consistent performance across all interactions."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Customer Support",
      description: "Automate responses to frequently asked questions, help desk inquiries, and product/service questions, improving efficiency and reducing response times."
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Engage potential customers, qualify leads, and schedule follow-up actions automatically, increasing conversion rates."
    },
    {
      icon: Zap,
      title: "E-commerce Assistance",
      description: "Guide users through the shopping journey, recommend products, and handle transactions, making the online shopping experience more intuitive."
    },
    {
      icon: Cog,
      title: "HR and Recruitment",
      description: "Automate the recruitment process, from candidate screening to scheduling interviews, all through a conversational interface."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Consultation and Requirement Analysis",
      description: "Understanding your goals and customer needs to define the scope of the AI solution."
    },
    {
      step: "02",
      title: "AI Design and Development",
      description: "We create the AI models, develop conversational flows, and ensure natural language understanding through advanced NLP techniques."
    },
    {
      step: "03",
      title: "Integration with Systems",
      description: "Our team integrates conversational AI with your existing systems, including CRMs, customer support tools, and communication platforms."
    },
    {
      step: "04",
      title: "Testing and Quality Assurance",
      description: "Comprehensive testing to ensure the AI performs as expected in real-world scenarios."
    },
    {
      step: "05",
      title: "Deployment and Continuous Optimization",
      description: "Post-deployment support and continuous improvement based on performance analytics and user feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 neural-network">
          {[...Array(15)].map((_, i) => (
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
              Conversational AI Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Revolutionize your customer interactions with intelligent conversational AI that understands and responds naturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is Conversational AI?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Conversational AI refers to the use of natural language processing (NLP), machine learning, and speech recognition technologies to enable machines to engage in human-like conversations. By leveraging conversational AI, businesses can automate customer interactions, improve user engagement, and streamline communication processes. From chatbots to voice assistants, conversational AI creates personalized, real-time interactions that drive better customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Conversational AI Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">The Importance of Conversational AI for Your Business</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Conversational AI solutions provide businesses with the ability to connect with customers in more meaningful ways. They offer enhanced efficiency, reduced response times, and the capability to manage high volumes of interactions simultaneously. Whether through chatbots or voice assistants, conversational AI helps businesses offer 24/7 support, improve customer satisfaction, and enable seamless communication across platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our Conversational AI Solutions</h2>
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

      {/* Development Process Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Conversational AI Development Process</h2>
          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((process, index) => (
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

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Real-World Use Cases of Conversational AI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass card-hover">
                <CardHeader>
                  <useCase.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Us for Conversational AI Development?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              With years of experience in AI development, we specialize in building powerful conversational AI solutions tailored to your unique business challenges. Our AI experts use the latest technologies to create scalable, secure, and intelligent conversational agents that deliver superior results. Whether you're looking to enhance customer service, generate leads, or automate business processes, we have the expertise to build the perfect solution for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Customer Interactions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build intelligent conversational AI solutions that will revolutionize how you connect with your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Get Started with Conversational AI
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Speak to Our AI Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConversationalAI;
