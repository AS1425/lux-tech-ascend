import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Target, Eye, Users, Cpu, Globe, CheckCircle, Award } from 'lucide-react';
import CounterAnimation from '@/components/CounterAnimation';
import Footer from '@/components/Footer';
import globeSpinning from '@/assets/globe-spinning.png';

const AboutUs = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple particle animation
    if (particlesRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      particlesRef.current.appendChild(canvas);

      const particles: any[] = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
        
        particles.forEach(particle => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();

      return () => {
        if (particlesRef.current?.contains(canvas)) {
          particlesRef.current.removeChild(canvas);
        }
      };
    }
  }, []);

  const scrollToJourney = () => {
    document.getElementById('our-journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div ref={particlesRef} className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                We Build the Future of Digital with{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI, Code & Creativity
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Foreignerds, we are more than an agency — we're your innovation partner, 
                powered by people, driven by AI.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToJourney}
                className="group"
              >
                Explore Our Journey
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <Cpu className="w-32 h-32 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <Eye className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empower organizations globally with intelligent solutions that accelerate digital transformation.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <Target className="w-12 h-12 text-secondary mx-auto" />
                <h3 className="text-2xl font-bold">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Blend human creativity with AI-powered execution to solve real-world problems for ambitious businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section id="our-journey" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Milestones that shaped our story</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-12">
              {[
                { year: '2016', event: 'Founded', description: 'Started our journey to build digital solutions' },
                { year: '2018', event: 'Entered North America', description: 'Expanded to serve international clients' },
                { year: '2021', event: '250+ Projects', description: 'Delivered successful projects across industries' },
                { year: '2023', event: 'Became AI-First', description: 'Integrated AI into our core development process' },
                { year: '2025', event: '6+ Countries', description: 'Serving clients across multiple continents' }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h4>
                        <h5 className="text-lg font-semibold mb-2">{milestone.event}</h5>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Culture & Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: 'AI-First Mindset', description: 'Leveraging artificial intelligence to enhance every solution' },
              { icon: Users, title: 'Human-Centered Collaboration', description: 'Putting people at the heart of technology' },
              { icon: Globe, title: 'Remote-Ready, Globally Aligned', description: 'Seamless collaboration across time zones' },
              { icon: CheckCircle, title: 'End-to-End Execution', description: 'From concept to deployment and beyond' }
            ].map((value, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center space-y-4">
                  <value.icon className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Global Team, Local Impact</h2>
            <p className="text-xl text-muted-foreground">
              Serving clients across the US, Canada, UK, UAE, and beyond from our HQ.
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="w-96 h-96 flex items-center justify-center">
              <img 
                src={globeSpinning} 
                alt="Spinning Globe" 
                className="w-80 h-80 object-contain animate-spin rounded-full"
                style={{ animationDuration: '20s' }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Work Philosophy */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <blockquote className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              "We believe AI isn't the future.{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                It's now
              </span>{' '}
              — and it's for everyone."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Tech Startup CEO', quote: 'Foreignerds transformed our vision into reality with their AI-first approach.' },
              { name: 'Fortune 500 CTO', quote: 'Their team delivered beyond expectations, on time and on budget.' },
              { name: 'Digital Agency Owner', quote: 'The perfect blend of creativity and technical expertise.' }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">Let's Build the Future Together</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Tell us your vision — we'll make it real with code, AI & creativity.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="group"
              onClick={() => window.location.href = '/contact-us'}
            >
              Get in Touch
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;