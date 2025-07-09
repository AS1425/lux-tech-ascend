
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Cpu, Palette, Music, FileText, Image, Zap, BarChart3, Cog, Brain, Globe, Target } from 'lucide-react';

const GenerativeAIDevelopment = () => {
  const features = [
    {
      icon: FileText,
      title: "Content Generation",
      description: "Create new, high-quality content automatically, such as images, videos, audio, and text."
    },
    {
      icon: Target,
      title: "Personalization",
      description: "Tailor generative AI models to create personalized experiences for your customers, improving engagement and customer loyalty."
    },
    {
      icon: Sparkles,
      title: "Creativity at Scale",
      description: "Automate the creation of creative assets at scale, from marketing materials to product designs, saving time and resources."
    },
    {
      icon: Brain,
      title: "Advanced Learning",
      description: "Our AI models learn from vast amounts of data, enabling them to create highly realistic and accurate outputs."
    },
    {
      icon: Cog,
      title: "Flexible and Customizable",
      description: "Our generative AI solutions can be customized to suit your specific business needs, from marketing to product development and beyond."
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Content Creation",
      description: "Automate the generation of marketing copy, blogs, and social media posts to enhance your content marketing efforts."
    },
    {
      icon: Palette,
      title: "Design Generation",
      description: "Use AI to generate product designs, logos, or even architectural plans, allowing for faster design iterations and innovative solutions."
    },
    {
      icon: Music,
      title: "Music and Audio Generation",
      description: "Create original music and sound effects for your media projects, advertisements, or games."
    },
    {
      icon: Image,
      title: "Text-to-Image Generation",
      description: "Generate images from descriptive text inputs, perfect for visualizing ideas, advertising campaigns, and creative assets."
    },
    {
      icon: BarChart3,
      title: "Synthetic Data Generation",
      description: "Produce realistic data for training AI models, particularly useful in fields like healthcare, finance, and research."
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Consultation and Requirement Gathering",
      description: "We start by understanding your goals, challenges, and the specific generative AI solutions you require."
    },
    {
      step: "02",
      title: "Model Selection and Design",
      description: "Our team selects the best AI models (like GANs, VAEs, etc.) for your project and designs custom algorithms tailored to your needs."
    },
    {
      step: "03",
      title: "Training and Optimization",
      description: "We train the AI models using your data to ensure the generative outputs meet your quality standards and are relevant to your business."
    },
    {
      step: "04",
      title: "Integration",
      description: "Our team integrates the generative AI solution into your existing systems, ensuring seamless performance and usability."
    },
    {
      step: "05",
      title: "Testing and Validation",
      description: "We rigorously test the AI-generated outputs, ensuring they meet the expected standards for realism, accuracy, and relevance."
    },
    {
      step: "06",
      title: "Deployment and Continuous Improvement",
      description: "After deployment, we continuously monitor and improve the system based on user feedback and evolving needs."
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
              Generative AI Development Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Unlock the power of creativity with our generative AI solutions, tailored to drive innovation and transform your business.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What is Generative AI?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Generative AI is a subset of artificial intelligence that focuses on creating new content, such as images, text, music, and even code, from existing data. Using advanced machine learning algorithms and neural networks, generative AI models can produce original content that is indistinguishable from human-generated output. From deep learning models like GANs (Generative Adversarial Networks) to transformer-based models, we harness the power of generative AI to bring your business ideas to life through automation, creativity, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Generative AI Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Generative AI is Transforming Industries</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Generative AI is revolutionizing industries by enabling businesses to automate content creation, generate high-quality designs, and produce realistic simulations for training, marketing, and product development. With its ability to understand patterns, learn from vast datasets, and generate new data, generative AI is driving efficiency and creativity across fields such as entertainment, e-commerce, healthcare, and more. By incorporating generative AI into your processes, you can unlock new business opportunities, enhance creativity, and reduce time spent on repetitive tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features of Our Generative AI Solutions</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Generative AI Development Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Generative AI Use Cases</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Partner with Us for Generative AI Solutions?</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              With deep expertise in AI and machine learning, we specialize in developing custom generative AI solutions that unlock new possibilities for your business. Whether you're looking to automate content creation, enhance product design, or improve customer engagement, we provide scalable, innovative solutions that align with your business goals. Our team ensures that each generative AI model we develop is finely tuned, highly accurate, and delivers real value for your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business with Generative AI?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's harness the power of generative AI to unlock new creative possibilities and drive innovation in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass px-8 py-3 text-lg cta-ripple hover:scale-105 transition-transform pulse-glow">
                Start Building with Generative AI
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover:scale-105 transition-transform">
                Get in Touch with Our AI Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerativeAIDevelopment;
