import { useState, useEffect } from 'react';
import { Calendar, Clock, User, CheckCircle, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParticleBackground from '@/components/ParticleBackground';

const Webinar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 13,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const learningPoints = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Building AI-Powered Business Workflows",
      description: "Learn how to design automation systems that reduce effort and boost efficiency."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Case Studies: Real Impact of AI in Marketing & Ops",
      description: "Dive into live examples of 3–5X ROI using our AI solutions."
    },
    {
      icon: <Play className="h-8 w-8 text-primary" />,
      title: "Quick-Start Guide to Integrating AI Agents",
      description: "Get a step-by-step plan to adopt intelligent automation in your operations."
    }
  ];

  const pastWebinars = [
    {
      title: "AI in Marketing: 5X Conversions in 90 Days",
      thumbnail: "/lovable-uploads/3ca4aae6-c8a7-447f-824c-a746d863e63c.png"
    },
    {
      title: "Automation Strategies for Growing Businesses",
      thumbnail: "/lovable-uploads/4398f4ce-d943-48ee-8a03-e8d3a088c4f4.png"
    },
    {
      title: "Data-Driven Decision Making with AI",
      thumbnail: "/lovable-uploads/5180df42-3881-438e-ab8b-d4c4ecddcc74.png"
    }
  ];

  const testimonials = [
    {
      quote: "Practical and transformative insights!",
      author: "Emily, VP Ops",
      rating: 5
    },
    {
      quote: "Best 45 mins I've spent all year.",
      author: "Raj, Startup Founder",
      rating: 5
    },
    {
      quote: "Clear actionable strategies that work.",
      author: "Sarah, Marketing Director",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Will I receive a recording?",
      answer: "Yes, we'll email the recording after the session."
    },
    {
      question: "Is it beginner-friendly?",
      answer: "Absolutely! No technical background required."
    },
    {
      question: "Will I get a certificate?",
      answer: "Attendees receive a participation certificate via email."
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
              Join Our Live Webinar on Digital Innovation & AI
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Explore how automation, AI agents, and data-driven strategies are shaping the future of business transformation.
            </p>
            
            <Card className="max-w-md mx-auto mb-8 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Date: August 29, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Time: 11:00 AM PST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <span>Speaker: Vivek Raina, Head of AI Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Registration: Free | Limited Spots</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button size="lg" className="text-lg px-8 py-6">
              Reserve Your Spot Now →
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gain actionable insights and practical strategies to transform your business with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{point.icon}</div>
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <img 
                  src="/lovable-uploads/656039c0-0ed3-4ae0-8e29-1fdf3c2f0a62.png" 
                  alt="Vivek Raina"
                  className="w-48 h-48 rounded-full mx-auto lg:mx-0 mb-8 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Meet Your Speaker</h2>
                <h3 className="text-2xl font-semibold text-primary mb-2">Vivek Raina</h3>
                <p className="text-xl text-muted-foreground mb-6">Head of AI Strategy</p>
                <p className="text-lg leading-relaxed">
                  Vivek has helped 50+ startups and enterprises adopt AI-first strategies using cutting-edge tools like Make.com, OpenAI, and Apollo.io. His approach blends tech expertise with business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Webinar starts in:</h3>
            <div className="flex justify-center gap-4 lg:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-primary-foreground text-2xl lg:text-4xl font-bold w-16 h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center mb-2 animate-pulse">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Register for Free</CardTitle>
                <CardDescription>Secure your spot in our exclusive webinar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="Enter your work email" />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" placeholder="Enter your job title" />
                </div>
                <Button className="w-full" size="lg">
                  Register for Free
                </Button>
                <p className="text-sm text-center text-muted-foreground flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Secure your spot. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Webinar Recordings */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Catch Up on Past Webinars</h2>
            <p className="text-xl text-muted-foreground">
              Explore our library of educational content
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pastWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={webinar.thumbnail} 
                    alt={webinar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Attendees Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-medium">– {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <CheckCircle className="inline h-4 w-4 text-green-500 mr-2" />
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Ready to Learn from the Experts?
            </h2>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Save My Seat Now →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinar;