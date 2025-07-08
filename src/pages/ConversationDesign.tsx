
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Users, Target, Zap, BarChart3, Shield, Clock, Globe, Brain, Cog } from 'lucide-react';

const ConversationDesign = () => {
  const features = [
    {
      icon: Users,
      title: "User-Centered Approach",
      description: "We put the user at the center of every design decision, ensuring that the conversation flows naturally and intuitively."
    },
    {
      icon: Globe,
      title: "Seamless Multi-Channel Integration",
      description: "Our conversational designs work across platforms such as websites, mobile apps, social media, and messaging services."
    },
    {
      icon: Target,
      title: "Personalized Conversations",
      description: "By leveraging user data and insights, we design conversations that are tailored to each individual, ensuring relevance and engagement."
    },
    {
      icon: Brain,
      title: "Conversational AI Models",
      description: "We build AI models that understand and process user inputs accurately, delivering intelligent, human-like responses."
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "We analyze and optimize the effectiveness of conversations based on metrics like user engagement, response time, and satisfaction."
    }
  ];

  const useCases = [
    {
      icon: MessageCircle,
      title: "Customer Support Chatbots",
      description: "Design automated customer support agents that resolve issues and answer questions with a personalized approach."
    },
    {
      icon: Target,
      title: "Sales & Lead Generation",
      description: "Build lead qualification bots that engage customers, answer product queries, and generate sales opportunities."
    },
    {
      icon: Zap,
      title: "E-commerce Assistance",
      description: "Design AI-driven shopping assistants that guide users through the buying process, recommend products, and answer questions."
    },
    {
      icon: Users,
      title: "HR and Recruitment",
      description: "Create AI assistants that screen resumes, answer job-related queries, and schedule interviews."
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research & Understanding",
      description: "We begin by analyzing your customer personas, understanding pain points, and determining key goals for the conversation."
    },
    {
      step: "02",
      title: "Designing Conversation Flows",
      description: "We design intuitive conversation flows that cater to different user intents and scenarios, ensuring smooth navigation through interactions."
    },
    {
      step: "03",
      title: "Prototyping & Iteration",
      description: "We build prototypes and conduct iterative testing to refine the dialogues, ensuring they are both functional and human-like."
    },
    {
      step: "04",
      title: "Voice & Tone Design",
      description: "We develop the chatbot's personality, tone, and voice, ensuring it aligns with your brand and resonates with users."
    },
    {
      step: "05",
      title: "Integration & Testing",
      description: "We integrate the conversational design with your existing platforms, test for quality assurance, and optimize based on user feedback."
    },
    {
      step: "06",
      title: "Monitoring & Optimization",
      description: "Post-launch, we continuously monitor the conversations and optimize them based on analytics, ensuring they remain effective and engaging."
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
              Conversational Design Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Craft seamless, human-like conversations with our expert conversational design solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is Conversational Design?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Conversational design is the process of creating natural, engaging, and intuitive dialogues between users and AI-powered systems. By focusing on Natural Language Processing (NLP) and user-centered design principles, we craft conversations that enhance user experience, build trust, and drive outcomes. Our conversational design services are aimed at developing AI interactions that feel intuitive, efficient, and human, whether in chatbots, virtual assistants, or other automated communication platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Conversational Design Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Conversational Design is Critical for Your Business</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              As AI continues to shape customer interactions, conversational design ensures these interactions are meaningful and seamless. It allows businesses to build more natural, personalized, and effective communication with their customers. A well-designed conversation flow helps reduce customer frustration, increases satisfaction, and ensures that every interaction drives positive outcomes. With expertly designed dialogues, your business can foster deeper customer relationships, improve engagement, and ensure every interaction feels like a genuine conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our Conversational Design Services</h2>
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

      {/* Design Process Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Conversational Design Process</h2>
          <div className="max-w-4xl mx-auto">
            {designProcess.map((process, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Conversational Design Use Cases</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Us for Conversational Design?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              We specialize in creating highly engaging and intuitive conversational experiences. With our deep expertise in conversational AI and design, we deliver solutions that not only meet your business goals but also enhance customer satisfaction. We focus on humanizing your digital interactions, ensuring your chatbot or virtual assistant communicates naturally, aligns with your brand, and delivers value at every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Customer Conversations?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's design intelligent conversations that will enhance your customer experience and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Designing Your Conversation Today
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConversationDesign;
