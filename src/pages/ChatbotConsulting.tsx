
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, 
  MessageSquare, 
  Target, 
  Lightbulb, 
  Users, 
  Cog, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  DollarSign,
  Heart,
  BarChart3
} from 'lucide-react';

const ChatbotConsulting = () => {
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

  const consultingProcess = [
    {
      icon: Target,
      title: "Consultation & Discovery",
      description: "We start by understanding your business objectives, customer needs, and current communication challenges."
    },
    {
      icon: Lightbulb,
      title: "Solution Design & Strategy",
      description: "We define the best chatbot strategy, ensuring it aligns with your business goals and enhances user experience."
    },
    {
      icon: Cog,
      title: "Tool & Platform Selection",
      description: "We recommend the most suitable tools and platforms based on your requirements, including NLP engines, integration platforms, and chat interfaces."
    },
    {
      icon: Bot,
      title: "Development & Customization",
      description: "Our team builds the chatbot, customizing it with intelligent features like natural language processing, sentiment analysis, and more."
    },
    {
      icon: Zap,
      title: "Deployment & Integration",
      description: "We ensure seamless deployment and integration with your existing systems, such as CRMs, websites, and mobile apps."
    },
    {
      icon: TrendingUp,
      title: "Training & Optimization",
      description: "We provide ongoing training and optimization to ensure the chatbot evolves with your business and customer needs."
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Improved Efficiency",
      description: "Automate repetitive tasks and customer inquiries, freeing up human agents for more complex issues"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Chatbots provide round-the-clock support, ensuring customers always have access to assistance"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solution",
      description: "Reduce customer service costs by handling a large volume of interactions automatically"
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Use chatbots to deliver personalized experiences, tailored to individual customer preferences and needs"
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
                Chatbot Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transform customer experiences with intelligent chatbot strategies and solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple hover:scale-105 transition-all duration-300">
                  Schedule a Consultation
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
                  What is Chatbot Consulting?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Chatbot consulting involves providing expert guidance to businesses on how to design, develop, and implement chatbots to enhance customer service, automate communication, and improve user experience. From understanding your business goals to selecting the right tools and technologies, our chatbot consulting services ensure that you create chatbots that are efficient, responsive, and aligned with your brand's voice.
                </p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Expert guidance through every step of your chatbot journey
                  </p>
                </div>
              </div>
              <div className="animate-fade-left">
                <div className="relative">
                  <div className="glass p-8 rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[Bot, MessageSquare, Target, Users].map((Icon, index) => (
                        <div
                          key={index}
                          className="glass-dark p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                        >
                          <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">Chatbot Strategy</div>
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

      {/* Why Chatbots Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Chatbots Are a Game-Changer for Your Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Chatbots are reshaping the way businesses interact with customers. With the ability to handle inquiries, process orders, and resolve issues in real time, chatbots are an essential tool for automating customer service and engagement. Our chatbot consulting services help businesses improve efficiency, reduce operational costs, and increase customer satisfaction by providing AI-driven solutions that are always available and can handle high volumes of interactions.
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

      {/* Consulting Process Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Chatbot Consulting Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a step-by-step approach to help businesses design and implement the perfect chatbot solution
              </p>
            </div>

            <div className="space-y-8">
              {consultingProcess.map((step, index) => (
                <Card key={index} className="glass card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {step.description}
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
                      <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">Chatbot Excellence</h3>
                      <p className="text-muted-foreground">
                        Industry-leading expertise in chatbot strategy and implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-left">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Why Choose Us for Your Chatbot Consulting Needs?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With years of experience in AI and chatbot development, we specialize in creating customized chatbot solutions that meet the unique needs of your business. From simple FAQ bots to advanced AI-driven conversational agents, we help you create chatbots that improve customer service, drive engagement, and increase operational efficiency. We are committed to delivering solutions that not only meet your immediate needs but also evolve with your business.
                </p>
                <div className="space-y-4">
                  {[
                    "Years of experience in AI and chatbot development",
                    "Customized solutions for your unique business needs",
                    "From simple FAQ bots to advanced AI agents",
                    "Ongoing support and evolution with your business"
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
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule your chatbot consultation today and discover how intelligent automation can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple pulse-glow">
                Schedule Your Chatbot Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatbotConsulting;
