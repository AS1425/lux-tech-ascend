
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Target, 
  Lightbulb, 
  Users, 
  Cog, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Settings
} from 'lucide-react';

const AIConsulting = () => {
  // Neural network animation component
  const NeuralNetwork = () => (
    <div className="neural-network">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="neural-node"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`
          }}
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="neural-connection"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${20 + Math.random() * 60}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 6}s`
          }}
        />
      ))}
    </div>
  );

  const services = [
    {
      icon: Target,
      title: "AI Strategy Development",
      description: "We help define your AI roadmap, aligning your business objectives with AI-driven solutions."
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description: "We develop and implement custom AI solutions such as machine learning models, automation tools, and AI-driven analytics."
    },
    {
      icon: Settings,
      title: "AI Implementation",
      description: "We provide end-to-end support in deploying AI systems, integrating them seamlessly with your existing infrastructure."
    },
    {
      icon: Users,
      title: "AI Training & Knowledge Transfer",
      description: "We equip your team with the knowledge and skills needed to manage and scale AI solutions effectively."
    },
    {
      icon: TrendingUp,
      title: "AI Optimization & Maintenance",
      description: "We monitor and optimize the performance of AI solutions to ensure they deliver continuous value."
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Strategic AI Expertise",
      description: "Leverage years of AI experience to make informed decisions"
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven Solutions",
      description: "Transform your business with cutting-edge AI technologies"
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description: "Achieve tangible business outcomes with data-driven AI strategies"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Fast-track your AI journey with proven methodologies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <NeuralNetwork />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Empower your business with cutting-edge AI strategies and expertise from industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple hover:scale-105 transition-all duration-300">
                  Get Started with AI Consulting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-right">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  What is AI Consulting?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AI consulting involves providing expert advice to businesses on how to implement and leverage artificial intelligence technologies to solve complex business problems. From selecting the right AI tools to developing custom AI models, our consulting services guide businesses through every step of their AI journey, ensuring alignment with their strategic goals and delivering tangible outcomes.
                </p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Expert guidance through your complete AI transformation journey
                  </p>
                </div>
              </div>
              <div className="animate-fade-left">
                <div className="relative">
                  <div className="glass p-8 rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[Brain, Target, Lightbulb, Users].map((Icon, index) => (
                        <div
                          key={index}
                          className="glass-dark p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                        >
                          <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">AI Expertise</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Consulting Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose AI Consulting for Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                AI can be a game-changer for your business, but implementing AI solutions can be complex. Our AI consulting services help you identify the right AI strategies for your needs, build the necessary capabilities, and ensure you achieve measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass card-hover">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Consulting Services Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our AI Consulting Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a range of AI consulting services tailored to your specific business needs
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <Card key={index} className="glass card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-right">
                <div className="relative">
                  <div className="glass p-8 rounded-2xl">
                    <div className="text-center">
                      <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">AI Excellence</h3>
                      <p className="text-muted-foreground">
                        Industry-leading expertise in AI strategy and implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-left">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Why Choose Us for AI Consulting?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With years of experience in AI technology and deep industry expertise, our consulting team is uniquely positioned to help your business leverage AI. We combine technical expertise with strategic insights to deliver practical AI solutions that align with your goals. Our hands-on approach ensures that you receive personalized service every step of the way, driving tangible, measurable business outcomes.
                </p>
                <div className="space-y-4">
                  {[
                    "Years of AI expertise across industries",
                    "Proven track record of successful implementations",
                    "Strategic approach with measurable outcomes",
                    "Personalized service and ongoing support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule your AI consulting session today and discover how AI can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple pulse-glow">
                Schedule Your AI Consulting Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Contact Our AI Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIConsulting;
