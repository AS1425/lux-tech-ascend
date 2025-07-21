
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mic, MessageSquare, Clock, Bot, Zap, Users, Phone, Calendar, ShoppingCart, Headphones, UserCheck, Target, UserCog, ClipboardCheck, CreditCard, Handshake, BarChart3, Volume2, FileText, TrendingUp } from 'lucide-react';

const AIVoiceBots = () => {
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);

  const industryUseCases = [
    {
      id: 'client-support',
      title: 'Client Support',
      icon: Headphones,
      description: 'Deliver exceptionally helpful 24/7 voice bots that handle inquiries, troubleshoot issues, and provide instant resolutions. No more long wait times – just human-like interactions that boost customer satisfaction while cutting down operational costs.'
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification in Sales',
      icon: Target,
      description: 'Automatically qualify prospects with intelligent voice bots that ask the right questions, assess customer needs, and route high-quality leads to your sales team for faster conversions.'
    },
    {
      id: 'recruitment',
      title: 'Streamlining Recruitment',
      icon: UserCog,
      description: 'Transform your hiring process with AI voice bots that conduct initial candidate screenings, schedule interviews, and collect essential information, saving HR teams countless hours.'
    },
    {
      id: 'appointment-booking',
      title: 'Effortless Appointment Booking',
      icon: ClipboardCheck,
      description: 'Enable seamless appointment scheduling with voice bots that check availability, book appointments, send confirmations, and handle rescheduling requests automatically.'
    },
    {
      id: 'debt-recovery',
      title: 'Simplified Debt Recovery',
      icon: CreditCard,
      description: 'Handle debt collection calls professionally with AI voice bots that maintain compliance, negotiate payment plans, and provide options while preserving customer relationships.'
    }
  ];

  const voiceBotFeatures = [
    {
      id: 'handoff',
      title: 'Handoff from Chatbot to Human Agent',
      icon: Handshake,
      description: 'Get a flawless user journey with seamless bot-to-agent handoff. When a query requires a personal touch, the AI smoothly transfers the call to a live agent – complete with contact history and insights – so no client ever has to repeat themselves.',
      defaultOpen: true
    },
    {
      id: 'performance',
      title: 'Call Performance Evaluation',
      icon: BarChart3,
      description: 'Automatically analyze bot calls for quality, sentiment, and resolution accuracy.'
    },
    {
      id: 'speech-recognition',
      title: 'Speech Recognition Technology',
      icon: Volume2,
      description: 'Leverage advanced speech-to-text engines to recognize accents, tones, and variations.'
    },
    {
      id: 'call-recaps',
      title: 'Intelligent Call Recaps',
      icon: FileText,
      description: 'Summarize calls and push structured data into your CRM for next-step actions.'
    },
    {
      id: 'metrics',
      title: 'Actionable Metrics & Reporting',
      icon: TrendingUp,
      description: 'Access dashboards to track KPIs, agent escalations, resolution rate, and more.'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Provide around-the-clock service to customers, answering questions, resolving issues, and improving user engagement."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Understanding",
      description: "Leverage the latest in NLP technology to ensure the bot understands complex, conversational language."
    },
    {
      icon: Users,
      title: "Multi-Channel Integration",
      description: "Deploy voice bots across various platforms, including websites, mobile apps, and IVR systems, to deliver seamless service across all channels."
    },
    {
      icon: Bot,
      title: "Personalization",
      description: "Our AI bots tailor conversations based on customer preferences, history, and behavior for a personalized experience."
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "Easily scale the voice bot to handle increased call volumes and customer interactions without compromising on quality or performance."
    }
  ];

  const useCases = [
    {
      icon: Headphones,
      title: "Customer Service Automation",
      description: "AI voice bots handle common queries and customer support tasks, freeing up human agents for more complex issues."
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Engage potential customers, qualify leads, and schedule follow-up calls or meetings, driving higher conversion rates."
    },
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Allow customers to place orders, track shipments, or check inventory through voice commands."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Automate appointment bookings, reminders, and confirmations with a seamless voice-driven experience."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We understand your business needs, target audience, and goals to design a bot that aligns with your objectives."
    },
    {
      step: "02",
      title: "Voice Design & Personalization",
      description: "Our team creates a conversational flow tailored to your business needs, with a voice that matches your brand tone."
    },
    {
      step: "03",
      title: "Integration",
      description: "We integrate the AI voice bot into your existing systems, including CRMs, websites, or other communication platforms."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "We test the bot extensively to ensure it understands and responds accurately in real-world scenarios."
    },
    {
      step: "05",
      title: "Deployment",
      description: "After thorough testing, we deploy the bot and monitor its performance to ensure it meets your business objectives."
    },
    {
      step: "06",
      title: "Continuous Support & Improvement",
      description: "We provide ongoing support and updates, optimizing the bot based on real-time performance data and user feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 neural-network">
          {[...Array(20)].map((_, i) => (
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
              AI Voice Bot Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Enhance customer interactions with intelligent AI voice bots that understand and respond in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is an AI Voice Bot?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              An AI voice bot is an intelligent, conversational agent powered by natural language processing (NLP) and machine learning that can interact with customers via voice in a human-like manner. These voice bots understand and respond to spoken commands, provide customer service, manage tasks, and much more. From automating phone-based support to creating seamless voice-driven experiences for your customers, our AI voice bots are designed to deliver efficiency, scalability, and an improved user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose AI Voice Bots Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why AI Voice Bots Are Essential for Your Business</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              AI voice bots provide a transformative solution for businesses by automating customer support, lead generation, and many other critical tasks. They can handle high volumes of interactions, provide personalized responses, and improve customer satisfaction by offering round-the-clock service. With the ability to understand natural language, AI voice bots can enhance communication, increase operational efficiency, and allow businesses to scale their operations effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our AI Voice Bot Development Process</h2>
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

      {/* Industry Use Cases - Speech-Enabled Bots Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Industry Use Cases – Speech-Enabled Bots</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column: Vertical Navigation Tabs */}
              <div className="lg:col-span-4">
                <div className="flex flex-col gap-3">
                  {industryUseCases.map((useCase, index) => (
                    <button
                      key={useCase.id}
                      onClick={() => setActiveIndustryTab(index)}
                      className={`px-6 py-4 rounded-full font-semibold text-left transition-all duration-300 ${
                        activeIndustryTab === index
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'bg-background border border-border hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {useCase.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Dynamic Content */}
              <div className="lg:col-span-8">
                <div className="bg-background rounded-lg shadow-lg p-8 h-full flex items-center animate-fade-in">
                  <div className="w-full text-center">
                    <div className="flex justify-center mb-6">
                      {React.createElement(industryUseCases[activeIndustryTab].icon, {
                        className: "h-16 w-16 text-primary"
                      })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {industryUseCases[activeIndustryTab].title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {industryUseCases[activeIndustryTab].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Bot Feature Accordion Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powerful Features That Elevate Your Voice Bot Experience</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" defaultValue="handoff" collapsible>
              {voiceBotFeatures.map((feature) => (
                <AccordionItem key={feature.id} value={feature.id} className="border rounded-lg mb-4 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4">
                      {React.createElement(feature.icon, {
                        className: "h-6 w-6 text-primary"
                      })}
                      <span className="font-semibold text-left">{feature.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our AI Voice Bot Solutions</h2>
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

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases of AI Voice Bots</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Partner with Us for AI Voice Bot Development?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              Our team has extensive experience in building intelligent AI voice bots that deliver value across industries. We combine cutting-edge voice recognition technology with personalized, human-like conversation designs to create bots that meet your business goals. Whether you need to automate customer service, improve lead generation, or enhance your customer engagement, our voice bots are designed to meet your specific needs and deliver outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Started with AI Voice Bot Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your customer interactions with intelligent AI voice bots that deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Get Started with AI Voice Bot Solutions
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVoiceBots;
