import React, { useState } from 'react';
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const ClientSuccessStories = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const featuredCaseStudies = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      logo: '/lovable-uploads/f93f435b-d0de-41b2-95fb-eb0ea83683c5.png',
      industry: 'SaaS',
      summary: 'Increased customer engagement by 300% with AI chatbot',
      beforeImage: '/lovable-uploads/548dfabd-a77b-47df-bd08-a1e8f0b6f0d3.png',
      afterImage: '/lovable-uploads/75ccf48e-fd5c-4d2b-9720-d64f0b797c12.png',
      results: {
        engagement: '+300%',
        responseTime: '-80%',
        satisfaction: '+95%'
      }
    },
    {
      id: 2,
      company: 'HealthTech Innovations',
      logo: '/lovable-uploads/f93f435b-d0de-41b2-95fb-eb0ea83683c5.png',
      industry: 'Healthcare',
      summary: 'Streamlined patient communication reducing wait times by 60%',
      beforeImage: '/lovable-uploads/91a208ed-fa9c-4b69-a41f-6287b353a14e.png',
      afterImage: '/lovable-uploads/be3cabcb-666a-4794-9547-ea7f88021585.png',
      results: {
        waitTime: '-60%',
        efficiency: '+150%',
        patientSatisfaction: '+85%'
      }
    },
    {
      id: 3,
      company: 'FinanceFlow Pro',
      logo: '/lovable-uploads/f93f435b-d0de-41b2-95fb-eb0ea83683c5.png',
      industry: 'FinTech',
      summary: 'Automated 90% of customer inquiries with intelligent AI assistant',
      beforeImage: '/lovable-uploads/7f4f9140-16e6-4d2a-b775-4df6a962bf40.png',
      afterImage: '/lovable-uploads/c99a3bbf-42b8-48ec-9465-f87b7e90d87a.png',
      results: {
        automation: '+90%',
        costs: '-40%',
        accuracy: '+99%'
      }
    }
  ];

  const detailedCaseStudies = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'SaaS',
      website: 'www.techcorp.com',
      projectScope: 'AI Chatbot Development & Integration',
      duration: '6 months',
      teamSize: '8 specialists',
      painPoints: [
        'High customer support ticket volume',
        'Slow response times during peak hours',
        'Inconsistent support quality',
        'Manual repetitive tasks'
      ],
      transformationSteps: [
        {
          step: 'Discovery & Audit',
          description: 'Analyzed existing support processes and identified automation opportunities',
          icon: '🔍'
        },
        {
          step: 'AI Design & Development',
          description: 'Created intelligent chatbot with natural language processing capabilities',
          icon: '🤖'
        },
        {
          step: 'Integration & Testing',
          description: 'Seamlessly integrated with existing CRM and support systems',
          icon: '⚙️'
        },
        {
          step: 'Launch & Optimization',
          description: 'Deployed with continuous learning and performance monitoring',
          icon: '🚀'
        }
      ],
      metrics: [
        { label: 'Customer Engagement', value: '+300%', icon: TrendingUp },
        { label: 'Response Time', value: '-80%', icon: CheckCircle },
        { label: 'Support Costs', value: '-45%', icon: Award },
        { label: 'Customer Satisfaction', value: '+95%', icon: Star }
      ],
      testimonial: {
        quote: "The AI chatbot transformed our customer support. We're now handling 3x more inquiries with faster resolution times and happier customers.",
        author: "Sarah Johnson",
        role: "VP of Customer Success",
        image: '/lovable-uploads/656039c0-0ed3-4ae0-8e29-1fdf3c2f0a62.png'
      },
      techStack: ['React', 'Node.js', 'TensorFlow', 'Natural Language Processing', 'MongoDB', 'AWS']
    },
    {
      id: 2,
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      website: 'www.healthtech.com',
      projectScope: 'Patient Communication System & AI Assistant',
      duration: '8 months',
      teamSize: '12 specialists',
      painPoints: [
        'Long patient wait times',
        'Manual appointment scheduling',
        'Inefficient communication channels',
        'Staff overwhelmed with routine inquiries'
      ],
      transformationSteps: [
        {
          step: 'Healthcare Analysis',
          description: 'Comprehensive assessment of patient flow and communication bottlenecks',
          icon: '🏥'
        },
        {
          step: 'AI Assistant Development',
          description: 'Built HIPAA-compliant AI system for patient interactions',
          icon: '🤖'
        },
        {
          step: 'System Integration',
          description: 'Connected with electronic health records and scheduling systems',
          icon: '🔗'
        },
        {
          step: 'Staff Training & Rollout',
          description: 'Comprehensive training program and phased implementation',
          icon: '👥'
        }
      ],
      metrics: [
        { label: 'Wait Time Reduction', value: '-60%', icon: CheckCircle },
        { label: 'Operational Efficiency', value: '+150%', icon: TrendingUp },
        { label: 'Patient Satisfaction', value: '+85%', icon: Star },
        { label: 'Staff Productivity', value: '+120%', icon: Users }
      ],
      testimonial: {
        quote: "Our patients love the instant responses and automated scheduling. Staff can now focus on providing better care instead of administrative tasks.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer",
        image: '/lovable-uploads/7a5056ee-8476-4c03-bf0c-ff52e1cd9c5d.png'
      },
      techStack: ['Vue.js', 'Python', 'Healthcare APIs', 'HIPAA Compliance', 'PostgreSQL', 'Azure']
    }
  ];

  const industries = ['All', 'SaaS', 'Healthcare', 'FinTech', 'E-commerce', 'Education', 'Manufacturing'];

  const testimonials = [
    {
      quote: "Working with Foreignerds was a game-changer. Their AI solution increased our productivity by 250% and our customers love the instant support.",
      author: "Emma Rodriguez",
      role: "CEO, InnovateTech",
      company: "InnovateTech",
      rating: 5,
      image: '/lovable-uploads/c5869668-2ca0-4d98-ae87-121d3c2a2e51.png'
    },
    {
      quote: "The level of customization and attention to detail exceeded our expectations. Our ROI was positive within 3 months of implementation.",
      author: "James Wilson",
      role: "CTO, DataDriven Inc",
      company: "DataDriven Inc",
      rating: 5,
      image: '/lovable-uploads/91dc40c8-e8ff-4314-9217-028055c705e2.png'
    },
    {
      quote: "Their AI chatbot handles 85% of our customer inquiries automatically. Customer satisfaction scores have never been higher.",
      author: "Lisa Park",
      role: "Director of Operations",
      company: "ServicePro",
      rating: 5,
      image: '/lovable-uploads/d6b03295-4c8e-4590-9476-2ae8c6c42cc9.png'
    }
  ];

  const [beforeAfterToggle, setBeforeAfterToggle] = useState<{[key: number]: 'before' | 'after'}>({});

  const toggleBeforeAfter = (id: number) => {
    setBeforeAfterToggle(prev => ({
      ...prev,
      [id]: prev[id] === 'after' ? 'before' : 'after'
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
                Client Success Stories – 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Real Results, Real Impact</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up [animation-delay:200ms]">
                From struggling platforms to scalable digital success—explore our client journeys powered by innovation, AI, and execution excellence.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-up [animation-delay:400ms]">
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Case Studies Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Featured Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study) => (
                <Card key={study.id} className="group hover:shadow-xl transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <img src={study.logo} alt={study.company} className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-xl">{study.company}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">{study.industry}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Before/After Toggle */}
                    <div className="relative">
                      <div className="flex justify-center mb-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleBeforeAfter(study.id)}
                          className="text-xs"
                        >
                          {beforeAfterToggle[study.id] === 'after' ? 'Show Before' : 'Show After'}
                        </Button>
                      </div>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={beforeAfterToggle[study.id] === 'after' ? study.afterImage : study.beforeImage}
                          alt={beforeAfterToggle[study.id] === 'after' ? 'After' : 'Before'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-8 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        {beforeAfterToggle[study.id] === 'after' ? 'After' : 'Before'}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{study.summary}</p>

                    {/* Quick Results */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.values(study.results).map((result, index) => (
                        <div key={index} className="bg-primary/5 rounded-lg p-2">
                          <div className="text-sm font-bold text-primary">{result}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Detailed Case Studies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dive into our client transformation journeys
              </p>
            </div>

            <div className="space-y-12">
              {detailedCaseStudies.map((study) => (
                <Card key={study.id} className="bg-card/80 backdrop-blur-sm border border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{study.company}</CardTitle>
                        <p className="text-muted-foreground">{study.industry} • {study.website}</p>
                      </div>
                      <Badge variant="outline">{study.projectScope}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="journey">Journey</TabsTrigger>
                        <TabsTrigger value="results">Results</TabsTrigger>
                        <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
                        <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Project Details</h4>
                            <div className="space-y-2 text-sm">
                              <p><span className="font-medium">Duration:</span> {study.duration}</p>
                              <p><span className="font-medium">Team Size:</span> {study.teamSize}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Initial Challenges</h4>
                            <ul className="space-y-1 text-sm">
                              {study.painPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="journey" className="mt-6">
                        <div className="space-y-6">
                          {study.transformationSteps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="text-2xl">{step.icon}</div>
                              <div>
                                <h4 className="font-semibold text-primary">Step {index + 1}: {step.step}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="results" className="mt-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {study.metrics.map((metric, index) => (
                            <Card key={index} className="text-center">
                              <CardContent className="pt-6">
                                <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                                <div className="text-sm text-muted-foreground">{metric.label}</div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="testimonial" className="mt-6">
                        <Card className="bg-primary/5 border-primary/20">
                          <CardContent className="pt-6">
                            <div className="flex gap-4">
                              <img 
                                src={study.testimonial.image} 
                                alt={study.testimonial.author}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <blockquote className="text-lg italic mb-4">
                                  "{study.testimonial.quote}"
                                </blockquote>
                                <div>
                                  <div className="font-semibold">{study.testimonial.author}</div>
                                  <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="tech" className="mt-6">
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filterable Case Study Library */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Case Study Library</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio by industry and service type
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedFilter === industry ? "default" : "outline"}
                  onClick={() => setSelectedFilter(industry)}
                  className="mb-2"
                >
                  {industry}
                </Button>
              ))}
            </div>

            {/* Case Study Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCaseStudies
                .filter(study => selectedFilter === 'All' || study.industry === selectedFilter)
                .map((study) => (
                <Card key={study.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={study.logo} alt={study.company} className="w-10 h-10" />
                      <div>
                        <h3 className="font-semibold">{study.company}</h3>
                        <Badge variant="outline" className="text-xs">{study.industry}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{study.summary}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wall of Love - Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our satisfied clients about their transformation journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-sm italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm">{testimonial.author}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Let's Write Your Success Story Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View All Case Studies
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 opacity-60">
              <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex justify-center items-center gap-8 grayscale">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src="/lovable-uploads/f93f435b-d0de-41b2-95fb-eb0ea83683c5.png" 
                    alt="Client logo"
                    className="h-8 opacity-50"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ClientSuccessStories;