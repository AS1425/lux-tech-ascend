import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Share2, 
  LinkedinIcon, 
  TwitterIcon, 
  Facebook,
  Copy,
  ChevronRight,
  ArrowLeft,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const { toast } = useToast();

  // Sample blog post data
  const blogPost = {
    id: 1,
    title: '5 Ways AI Agents are Transforming eCommerce in 2025',
    subtitle: 'Discover how businesses are using AI agents to boost automation, personalization, and customer service beyond traditional chatbots.',
    category: 'AI & Machine Learning',
    tags: ['AI', 'eCommerce', 'Automation', 'Customer Service', 'Personalization'],
    author: {
      name: 'Mohit Chaudhary',
      role: 'AI Solutions Architect',
      bio: 'Mohit specializes in building AI-driven solutions for enterprise clients, with over 8 years of experience in machine learning and conversational AI.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    date: 'July 20, 2025',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop',
    content: {
      intro: 'The eCommerce landscape is rapidly evolving, and artificial intelligence is at the forefront of this transformation. Gone are the days when simple chatbots were the pinnacle of AI customer service. Today\'s AI agents are sophisticated, context-aware systems that can handle complex customer interactions, predict behavior, and drive sales like never before.',
      sections: [
        {
          title: '1. Intelligent Customer Support Beyond Basic Chatbots',
          content: 'Modern AI agents can understand context, emotion, and intent in ways that traditional chatbots never could. They can handle complex product queries, process returns, and even escalate issues to human agents when necessary.',
          highlights: [
            'Multi-turn conversation handling',
            'Emotional intelligence and sentiment analysis',
            'Seamless human handoff capabilities',
            'Real-time inventory and order status updates'
          ]
        },
        {
          title: '2. Hyper-Personalized Shopping Experiences',
          content: 'AI agents analyze customer behavior, purchase history, and browsing patterns to create truly personalized shopping experiences that increase conversion rates by up to 35%.',
          highlights: [
            'Dynamic product recommendations',
            'Personalized pricing strategies',
            'Customized content delivery',
            'Behavioral prediction and targeting'
          ]
        },
        {
          title: '3. Automated Inventory and Supply Chain Management',
          content: 'Smart AI systems can predict demand, optimize inventory levels, and automate reordering processes, reducing costs and preventing stockouts.',
          highlights: [
            'Demand forecasting algorithms',
            'Automated supplier communications',
            'Dynamic pricing optimization',
            'Warehouse automation integration'
          ]
        }
      ],
      quote: 'AI agents are not just answering questions—they\'re becoming the backbone of modern eCommerce operations, driving efficiency and customer satisfaction to new heights.',
      faqs: [
        {
          question: 'How do AI agents differ from traditional chatbots?',
          answer: 'AI agents use advanced natural language processing, machine learning, and contextual understanding to provide more human-like interactions. They can handle complex, multi-step processes and learn from each interaction.'
        },
        {
          question: 'What ROI can businesses expect from implementing AI agents?',
          answer: 'Most businesses see a 25-40% reduction in customer service costs and a 15-35% increase in conversion rates within the first year of implementation.'
        },
        {
          question: 'Are AI agents suitable for small eCommerce businesses?',
          answer: 'Yes! Modern AI solutions are scalable and can be customized for businesses of all sizes. Many cloud-based AI platforms offer affordable, pay-as-you-scale pricing models.'
        }
      ]
    }
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: 'Building Scalable Web Applications with React and TypeScript',
      excerpt: 'Learn best practices for developing robust, maintainable web applications.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'The Future of Conversational AI in Customer Support',
      excerpt: 'Explore how advanced chatbots are revolutionizing customer service.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
      category: 'AI & Machine Learning'
    },
    {
      id: 4,
      title: 'Machine Learning Models in Production: Best Practices',
      excerpt: 'Deploy and maintain ML models at scale with reliability and performance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      category: 'AI & Machine Learning'
    }
  ];

  // Reading progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Social share functions
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(blogPost.title);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${text}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${blogPost.title} via @foreignerds`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/blog" className="hover:text-primary transition-colors flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Blog
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{blogPost.category}</span>
          </nav>
        </div>
      </div>

      {/* Hero/Banner Section */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative container max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary text-sm px-4 py-2">
              {blogPost.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {blogPost.title}
          </h1>

          {/* Subtitle */}
          {blogPost.subtitle && (
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {blogPost.subtitle}
            </p>
          )}

          {/* Author and Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-3">
              <img 
                src={blogPost.author.image} 
                alt={blogPost.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-foreground">{blogPost.author.name}</span>
                </div>
                <div className="text-sm">{blogPost.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container max-w-5xl mx-auto px-4 mb-16">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={blogPost.featuredImage} 
            alt={blogPost.title}
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {/* Intro Paragraph with Drop Cap */}
              <p className="text-lg leading-relaxed mb-8 first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {blogPost.content.intro}
              </p>

              {/* Main Content Sections */}
              {blogPost.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {section.content}
                  </p>
                  
                  {/* Highlights */}
                  <div className="bg-muted/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Features:</h3>
                    <ul className="space-y-2">
                      {section.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Block (after second section) */}
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-12 text-center border border-primary/20">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Ready to Transform Your eCommerce with AI?
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Let our experts help you implement AI agents that drive real results for your business.
                      </p>
                      <Button size="lg" className="group">
                        Let's Talk
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}

              {/* Pull Quote */}
              <blockquote className="relative bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 mb-12 border-l-4 border-primary">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
                <p className="text-xl font-medium text-foreground italic pl-8">
                  {blogPost.content.quote}
                </p>
              </blockquote>

              {/* FAQ Accordion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {blogPost.content.faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`} 
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </article>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Tag className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Share this article</h3>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" onClick={shareOnLinkedIn}>
                  <LinkedinIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={shareOnTwitter}>
                  <TwitterIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={shareOnFacebook}>
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={copyLink}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Author Box */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex gap-6">
                  <img 
                    src={blogPost.author.image} 
                    alt={blogPost.author.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {blogPost.author.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {blogPost.author.role}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {blogPost.author.bio}
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <LinkedinIcon className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm">
                        <TwitterIcon className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {blogPost.content.sections.map((section, index) => (
                      <a 
                        key={index}
                        href={`#section-${index}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Newsletter Subscription */}
              <Card className="bg-gradient-to-br from-primary to-accent text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Get weekly AI insights delivered to your inbox.
                  </p>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <section className="py-16 px-4 bg-muted/30 mt-16">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore how our AI-first solutions can help your business grow and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Contact Us
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;