
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, MessageSquare, FileText, BarChart3, Languages, Zap, Target, Database, Cog, Globe, Users, TrendingUp } from 'lucide-react';

const LLMDevelopment = () => {
  const features = [
    {
      icon: FileText,
      title: "Advanced Text Generation",
      description: "Generate human-like, context-aware text for content creation, chatbots, and more."
    },
    {
      icon: Target,
      title: "Customizable Models",
      description: "Tailor the model to meet your specific business needs, including domain-specific knowledge and unique business tasks."
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Develop models capable of processing and generating text in multiple languages, enhancing your global reach."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Insights",
      description: "Use LLMs to gain real-time insights from large volumes of text data, such as customer feedback or social media posts."
    },
    {
      icon: Zap,
      title: "Scalable and Robust",
      description: "Our LLM solutions are scalable to handle increasing volumes of data and complex tasks without compromising performance."
    }
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that can engage in natural, context-aware conversations with customers."
    },
    {
      icon: FileText,
      title: "Content Generation",
      description: "Automatically generate high-quality articles, product descriptions, marketing copy, and more."
    },
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Analyze customer feedback, reviews, and social media posts to gauge sentiment and improve customer service."
    },
    {
      icon: Database,
      title: "Text Summarization",
      description: "Use LLMs to automatically summarize long documents, reports, or articles, saving time and improving productivity."
    },
    {
      icon: Globe,
      title: "Text Classification",
      description: "Categorize large volumes of text into predefined labels, useful for email filtering, topic tagging, and more."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Requirement Gathering",
      description: "We begin by understanding your business goals, target audience, and the challenges you aim to address with a custom LLM solution."
    },
    {
      step: "02",
      title: "Data Collection & Preprocessing",
      description: "We gather and prepare relevant data to train the model, ensuring it is clean, diverse, and high-quality."
    },
    {
      step: "03",
      title: "Model Selection & Customization",
      description: "We choose the most suitable LLM architecture (e.g., GPT, BERT, T5) and fine-tune it for your specific business requirements."
    },
    {
      step: "04",
      title: "Training & Optimization",
      description: "Using state-of-the-art machine learning techniques, we train the model to perform tasks like text generation, summarization, and question answering."
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "We rigorously test the model to ensure accuracy, effectiveness, and alignment with your business objectives."
    },
    {
      step: "06",
      title: "Deployment & Integration",
      description: "Once the model is ready, we deploy it and integrate it into your existing systems, ensuring seamless functionality and real-time performance."
    },
    {
      step: "07",
      title: "Monitoring & Updates",
      description: "We continuously monitor the model's performance and provide updates to adapt to changing needs and new data."
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
              Large Language Model (LLM) Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Unleash the power of advanced NLP with our custom large language models to drive intelligent automation and enhance business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is a Large Language Model?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Large Language Models (LLMs) are powerful AI systems designed to process, understand, and generate human-like text. By leveraging vast amounts of data, LLMs are capable of learning complex patterns in language and can be applied to a variety of tasks, including chatbots, content generation, and language translation. We specialize in developing custom LLMs tailored to your business needs, helping you automate processes, create intelligent applications, and gain deeper insights from your data.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose LLMs Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Large Language Models Are Essential for Your Business</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              LLMs are transforming the way businesses interact with customers, analyze data, and automate processes. These models enable companies to create conversational AI, automate content creation, perform sentiment analysis, and much more. By incorporating LLMs into your operations, you can enhance customer service, improve decision-making, and streamline workflows. Whether you are in e-commerce, healthcare, finance, or any other industry, LLMs can be a game-changer for driving business efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our LLM Development Process</h2>
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

      {/* Key Features Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our LLM Solutions</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases for Large Language Models</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Partner with Us for LLM Development?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              With years of experience in natural language processing and AI development, we specialize in building large language models that deliver real business value. Our LLM solutions are designed to enhance customer interactions, automate processes, and generate meaningful insights from your data. Whether you're looking to develop intelligent chatbots or automate content creation, we provide scalable, secure, and cutting-edge solutions that align with your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Start Building Your LLM Solution Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your business with custom large language models that deliver intelligent automation and enhanced insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Building Your LLM Solution Today
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

export default LLMDevelopment;
