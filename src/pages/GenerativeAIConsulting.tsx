
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Bot, 
  Lightbulb, 
  Target, 
  Cog, 
  Zap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Palette,
  Rocket,
  DollarSign,
  Clock,
  BarChart3,
  Users
} from 'lucide-react';

const GenerativeAIConsulting = () => {
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
      description: "We begin by understanding your business goals, the challenges you're facing, and the creative or operational areas where generative AI can be applied."
    },
    {
      icon: Lightbulb,
      title: "Solution Design",
      description: "Our team designs a custom generative AI strategy tailored to your needs, selecting the most appropriate algorithms and tools for your objectives."
    },
    {
      icon: Cog,
      title: "Model Development & Training",
      description: "We develop and train generative models, ensuring that they align with your requirements, whether it's content generation, product design, or customer personalization."
    },
    {
      icon: Zap,
      title: "Integration & Deployment",
      description: "We seamlessly integrate the AI solutions into your existing infrastructure and workflows, ensuring smooth adoption and scaling."
    },
    {
      icon: TrendingUp,
      title: "Optimization & Continuous Improvement",
      description: "We provide ongoing optimization and updates to ensure that the models continue to evolve with your business needs and industry trends."
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Enhance Creativity",
      description: "Automate the creation of new content, designs, and ideas, enhancing your creative potential and saving valuable time"
    },
    {
      icon: Clock,
      title: "Increase Efficiency",
      description: "Streamline content production, product design, and marketing efforts by automating repetitive tasks and generating high-quality outputs faster"
    },
    {
      icon: Rocket,
      title: "Innovate Faster",
      description: "Stay ahead of the curve by using cutting-edge generative AI technologies to explore new ideas, develop innovative products, and improve your customer offerings"
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "By automating the creative and development processes, businesses can reduce the cost of hiring large creative teams and speed up time-to-market"
    },
    {
      icon: BarChart3,
      title: "Scalable Solutions",
      description: "Our AI solutions are scalable, enabling you to handle growing workloads and content demands as your business expands"
    }
  ];

  const consultingServices = [
    {
      title: "Strategy Development and Roadmapping",
      content: "We begin by deeply analyzing your goals, competitive landscape, and data infrastructure. This sets the stage to identify implementation opportunities, assess feasibility, and design a tailored roadmap. Our experts provide actionable strategies that minimize risks and align your GenAI initiatives with measurable business objectives."
    },
    {
      title: "Opportunity Discovery & Assessment",
      content: "Our consultants evaluate your business workflows to uncover high-impact areas where Generative AI can unlock value. We assess process gaps, automation potential, and innovation opportunities to drive efficiency and competitiveness."
    },
    {
      title: "GAI Governance, Compliance, and Ethical Frameworks",
      content: "We ensure your GenAI solutions follow best practices in security, transparency, and ethical use. This includes model auditability, data privacy alignment (e.g., GDPR, CCPA), and responsible AI use policies to build stakeholder trust."
    },
    {
      title: "Technology Assessment, Advisory, and Selection",
      content: "Our team evaluates leading GenAI platforms, APIs, and cloud solutions to help you select the right tech stack. We guide vendor selection, build-versus-buy decisions, and integration strategies aligned with your business needs."
    },
    {
      title: "Data Engineering and Advanced AI Modeling",
      content: "We design scalable data pipelines and curate structured datasets tailored for GenAI training and optimization. Our team implements advanced AI models with fine-tuning, reinforcement learning, and prompt engineering."
    },
    {
      title: "GenAI Development and Customization",
      content: "We create custom GenAI applications — chatbots, copilots, content generators, and internal assistants — built for your unique business use cases. Every solution is branded, secure, and optimized for scalability."
    },
    {
      title: "Deployment, System Integration, and Optimization",
      content: "We ensure seamless deployment across your ecosystem — including CRM, CMS, ERP, or proprietary tools. Our experts handle integration, automation, and real-time data flow for peak performance."
    },
    {
      title: "GenAI Empowerment, Training, and Maintenance Support",
      content: "We don't just deliver tech—we enable your teams to use it effectively. This includes stakeholder training, custom documentation, and continuous support to monitor, maintain, and evolve your GenAI assets."
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
                Generative AI Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Unlock creativity and drive innovation with our expert generative AI strategies tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple hover:scale-105 transition-all duration-300">
                  Request a Consultation
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
                  What is Generative AI?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Generative AI refers to a class of AI techniques that can create new content, whether it's images, text, music, or even software code. By harnessing algorithms like Generative Adversarial Networks (GANs), Transformers, and Reinforcement Learning, generative AI enables businesses to automate creative processes, develop new products, and explore innovative applications.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our consulting services help businesses integrate generative AI into their workflows, ensuring they can leverage its power to drive creativity, efficiency, and business growth.
                </p>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Expert integration of cutting-edge generative AI technologies
                  </p>
                </div>
              </div>
              <div className="animate-fade-left">
                <div className="relative">
                  <div className="glass p-8 rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[Sparkles, Palette, Bot, Lightbulb].map((Icon, index) => (
                        <div
                          key={index}
                          className="glass-dark p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                        >
                          <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">AI Creation</div>
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

      {/* Industry Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Generative AI is Revolutionizing Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Generative AI is reshaping how businesses create and use content, from generating realistic images for marketing to automating product design and innovation. With its ability to create highly realistic, human-like outputs, generative AI is unlocking new possibilities in fields such as art, content marketing, product design, and media creation. By adopting generative AI, companies can not only improve efficiency but also tap into new revenue streams and stay ahead of the competition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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

      {/* Consulting Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Generative AI Consulting Services for Your Excellence
              </h2>
            </div>

            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {consultingServices.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-lg border-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-foreground">
                      {service.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Consulting Process Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Generative AI Consulting Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a structured approach to integrate generative AI into your business
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
                      <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">Generative AI Excellence</h3>
                      <p className="text-muted-foreground">
                        Industry-leading expertise in generative AI strategy and implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-left">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Why Partner with Us for Generative AI Consulting?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With years of experience in AI and machine learning, we specialize in creating generative AI solutions that are tailored to your business needs. We offer a hands-on approach to ensure that our AI strategies are not only innovative but also practical, delivering measurable results. Whether you want to automate content creation, enhance product design, or innovate your marketing efforts, our team is here to guide you every step of the way.
                </p>
                <div className="space-y-4">
                  {[
                    "Years of experience in AI and machine learning",
                    "Custom generative AI solutions tailored to your needs",
                    "Hands-on approach with practical, measurable results",
                    "Expert guidance from content creation to product innovation"
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
              Ready to Unlock the Power of Generative AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule your generative AI consultation today and discover how intelligent content creation can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-6 text-lg cta-ripple pulse-glow">
                Schedule Your AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Start Your Generative AI Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerativeAIConsulting;
