import { useState } from 'react';
import { Play, Filter, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ParticleBackground from '@/components/ParticleBackground';

const Webinar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI & Automation',
    'Digital Strategy', 
    'Case Studies',
    'Productivity',
    'Marketing Technology',
    'Leadership & Innovation'
  ];

  const webinars = [
    {
      id: 1,
      title: "Building an AI-First Agency",
      description: "How to transition from traditional service delivery to scalable AI-led solutions.",
      category: "AI Strategy",
      thumbnail: "/lovable-uploads/3ca4aae6-c8a7-447f-824c-a746d863e63c.png",
      featured: true
    },
    {
      id: 2,
      title: "Driving ROI with AI Automation",
      description: "Proven strategies to measure and maximize return on AI investments in business.",
      category: "AI & Automation",
      thumbnail: "/lovable-uploads/4398f4ce-d943-48ee-8a03-e8d3a088c4f4.png"
    },
    {
      id: 3,
      title: "Digital Transformation Roadmap",
      description: "Step-by-step guide to successfully implementing digital change in organizations.",
      category: "Digital Strategy",
      thumbnail: "/lovable-uploads/5180df42-3881-438e-ab8b-d4c4ecddcc74.png"
    },
    {
      id: 4,
      title: "Case Study: 500% Growth with AI",
      description: "Real client success story showing massive growth through AI implementation.",
      category: "Case Studies",
      thumbnail: "/lovable-uploads/656039c0-0ed3-4ae0-8e29-1fdf3c2f0a62.png"
    },
    {
      id: 5,
      title: "Productivity Hacks with Automation",
      description: "Time-saving automation techniques that boost team productivity by 300%.",
      category: "Productivity",
      thumbnail: "/lovable-uploads/6b6204b6-2cd0-456e-83e6-7e3c444c37c8.png"
    },
    {
      id: 6,
      title: "MarTech Stack Optimization",
      description: "Streamline your marketing technology for better performance and results.",
      category: "Marketing Technology",
      thumbnail: "/lovable-uploads/719f62e6-2285-4fb4-8f44-d5a748250c0d.png"
    },
    {
      id: 7,
      title: "Leading Innovation in 2024",
      description: "Leadership strategies for driving innovation and change in modern businesses.",
      category: "Leadership & Innovation",
      thumbnail: "/lovable-uploads/75ccf48e-fd5c-4d2b-9720-d64f0b797c12.png"
    },
    {
      id: 8,
      title: "AI Ethics and Implementation",
      description: "Responsible AI deployment strategies for sustainable business growth.",
      category: "AI & Automation",
      thumbnail: "/lovable-uploads/789edca0-4ca1-4514-916b-a86fc6baf585.png"
    },
    {
      id: 9,
      title: "Customer Journey Automation",
      description: "Automate customer touchpoints for improved satisfaction and retention.",
      category: "Digital Strategy",
      thumbnail: "/lovable-uploads/7a5056ee-8476-4c03-bf0c-ff52e1cd9c5d.png"
    },
    {
      id: 10,
      title: "Scaling with Smart Systems",
      description: "Build scalable business systems that grow with your organization.",
      category: "Productivity",
      thumbnail: "/lovable-uploads/7d68d6c0-e4a6-4ab1-97af-feea948bfdf4.png"
    },
    {
      id: 11,
      title: "Data-Driven Decision Making",
      description: "Leverage analytics and AI for smarter business decisions and outcomes.",
      category: "AI & Automation",
      thumbnail: "/lovable-uploads/7f4f9140-16e6-4d2a-b775-4df6a962bf40.png"
    },
    {
      id: 12,
      title: "Future of Work with AI",
      description: "How AI is reshaping workplace dynamics and employee productivity.",
      category: "Leadership & Innovation",
      thumbnail: "/lovable-uploads/7f57f081-38c1-45ac-a9d8-050fe37e6fc9.png"
    }
  ];

  const filteredWebinars = selectedCategory === 'All' 
    ? webinars 
    : webinars.filter(webinar => webinar.category === selectedCategory);

  const featuredWebinar = webinars.find(webinar => webinar.featured);

  const testimonials = [
    {
      quote: "These webinars helped us rethink our internal processes with AI.",
      author: "Startup CTO"
    },
    {
      quote: "Practical insights that we implemented immediately with great results.",
      author: "Digital Marketing Director"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Explore Our Webinar Library
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Gain valuable insights from our past webinars on AI, automation, digital transformation, and more — all on-demand.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Webinar Highlight */}
      {featuredWebinar && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                  <div className="relative">
                    <img 
                      src={featuredWebinar.thumbnail} 
                      alt={featuredWebinar.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="rounded-full w-16 h-16">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Badge className="mb-4">{featuredWebinar.category}</Badge>
                    <h3 className="text-3xl font-bold mb-4">{featuredWebinar.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{featuredWebinar.description}</p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-lg mb-6">
                      "This session completely transformed how we approach AI implementation in our company."
                    </blockquote>
                    <Button size="lg">
                      Watch Now
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Topic-Based Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Gallery Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.map((webinar) => (
                <Card key={webinar.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={webinar.thumbnail} 
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        <Play className="mr-2 h-4 w-4" />
                        Play
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4">{webinar.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{webinar.title}</CardTitle>
                    <CardDescription className="text-base">{webinar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      Watch Recording
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Viewers Say</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                    <p className="font-medium">– {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Footer */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Want to get notified about future webinars?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" size="lg">
                Subscribe to Our Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinar;