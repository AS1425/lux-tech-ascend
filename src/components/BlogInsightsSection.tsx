import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const BlogInsightsSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/lovable-uploads/3e75f1ff-fe76-43af-a565-c4c548b31789.png",
      date: "22 May 2025",
      title: "6 Selling Cycle Bottlenecks AI Sales Automation Can Overcome",
      excerpt: "Only 37% of sales pros' time is spent building connections with prospects and customers...",
      slug: "/blog/ai-sales-automation"
    },
    {
      id: 2,
      image: "/lovable-uploads/75ccf48e-fd5c-4d2b-9720-d64f0b797c12.png",
      date: "18 May 2025",
      title: "The Future of Healthcare: AI-Powered Diagnostics",
      excerpt: "How artificial intelligence is revolutionizing medical diagnostics and patient care...",
      slug: "/blog/ai-healthcare-diagnostics"
    },
    {
      id: 3,
      image: "/lovable-uploads/0fc2a63d-aba7-4125-97eb-a367544e3e0a.png",
      date: "15 May 2025",
      title: "Machine Learning in Finance: Risk Assessment Revolution",
      excerpt: "Exploring how ML algorithms are transforming financial risk assessment and fraud detection...",
      slug: "/blog/ml-finance-risk"
    },
    {
      id: 4,
      image: "/lovable-uploads/656039c0-0ed3-4ae0-8e29-1fdf3c2f0a62.png",
      date: "12 May 2025",
      title: "Conversational AI: The Next Frontier in Customer Service",
      excerpt: "How advanced chatbots and voice assistants are reshaping customer interactions...",
      slug: "/blog/conversational-ai-customer-service"
    },
    {
      id: 5,
      image: "/lovable-uploads/2398c5c6-b13a-4b5b-8542-917971eb6e00.png",
      date: "8 May 2025",
      title: "Blockchain Integration with AI: Building Trust in Automation",
      excerpt: "The synergy between blockchain and AI technologies in creating transparent systems...",
      slug: "/blog/blockchain-ai-integration"
    },
    {
      id: 6,
      image: "/lovable-uploads/4c5ac427-24c4-4b95-9209-2489fa46956a.png",
      date: "5 May 2025",
      title: "Edge Computing and AI: Processing Power at the Source",
      excerpt: "How edge computing is enabling real-time AI processing for IoT applications...",
      slug: "/blog/edge-computing-ai"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unlock Expert Insights on AI & Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with curated articles and reports on how AI is transforming your industry.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {blogPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-0">
                      {/* Blog Image */}
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Blog Content */}
                      <div className="p-6">
                        {/* Date */}
                        <span className="text-sm text-muted-foreground font-medium">
                          {post.date}
                        </span>
                        
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background border-2 border-border hover:bg-accent hover:text-accent-foreground transition-colors" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background border-2 border-border hover:bg-accent hover:text-accent-foreground transition-colors" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Explore More Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;