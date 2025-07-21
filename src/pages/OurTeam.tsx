import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  quote: string;
}

const teamMembers: TeamMember[] = [
  { 
    id: 1, 
    name: "Vivek Raina", 
    role: "Chief Technology Officer", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Leads technical architecture and drives innovation across all development projects.",
    skills: ["React", "Node.js", "Cloud"],
    quote: "Code is poetry in motion"
  },
  { 
    id: 2, 
    name: "Mohit Chaudhary", 
    role: "Chief Operating Officer", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Oversees operations and ensures seamless project delivery across all teams.",
    skills: ["Strategy", "Operations", "Leadership"],
    quote: "Excellence through teamwork"
  },
  { 
    id: 3, 
    name: "Jayshree Dubey", 
    role: "Project Manager", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Coordinates complex projects and ensures timely delivery with quality results.",
    skills: ["Agile", "Scrum", "Planning"],
    quote: "Organization breeds success"
  },
  { 
    id: 4, 
    name: "Akansha Shukla", 
    role: "SEO Executive", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Optimizes digital presence and drives organic growth through strategic SEO.",
    skills: ["SEO", "Analytics", "Content"],
    quote: "Visibility drives growth"
  },
  { 
    id: 5, 
    name: "Rohit Kumar", 
    role: "SEO Executive", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Specializes in technical SEO and performance optimization strategies.",
    skills: ["Technical SEO", "Performance", "Research"],
    quote: "Data reveals opportunities"
  },
  { 
    id: 6, 
    name: "Rhythm Tomar", 
    role: "Performance Marketer", 
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    bio: "Creates data-driven marketing campaigns that deliver measurable business results.",
    skills: ["PPC", "Analytics", "Conversion"],
    quote: "Numbers tell the story"
  },
  { 
    id: 7, 
    name: "Janvi Anand", 
    role: "Creative Designer", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Transforms ideas into compelling visual experiences that engage and inspire.",
    skills: ["UI/UX", "Branding", "Creative"],
    quote: "Design speaks louder than words"
  },
  { 
    id: 8, 
    name: "Yogesh Kaushik", 
    role: "WordPress Developer", 
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
    bio: "Builds custom WordPress solutions that are fast, secure, and scalable.",
    skills: ["WordPress", "PHP", "Optimization"],
    quote: "Simplicity is sophistication"
  },
  { 
    id: 9, 
    name: "Ajit Pal Singh", 
    role: "VP Technology", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Guides technology vision and mentors teams to deliver cutting-edge solutions.",
    skills: ["Leadership", "Architecture", "Innovation"],
    quote: "Technology enables possibilities"
  },
  { 
    id: 10, 
    name: "Ankit Kumar", 
    role: "Shopify Developer", 
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face",
    bio: "Creates powerful ecommerce experiences that drive sales and customer satisfaction.",
    skills: ["Shopify", "Ecommerce", "Liquid"],
    quote: "Commerce meets creativity"
  },
  { 
    id: 11, 
    name: "Prabhat Singh", 
    role: "Strategy Consultant", 
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=face",
    bio: "Develops strategic roadmaps that align technology with business objectives.",
    skills: ["Strategy", "Consulting", "Analysis"],
    quote: "Strategy guides execution"
  }
];

export default function OurTeam() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">Team</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
            Meet the creative minds behind your next digital success
          </h2>
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-muted-foreground"
          >
            We combine technical expertise with creative vision to deliver solutions that drive real business results.
          </p>
          <Button 
            className="px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.location.href = '/contact-us'}
          >
            Start a Project
          </Button>
        </div>
      </section>

      {/* Interactive Team Grid */}
      <section className="py-16 px-4 bg-accent/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex justify-center">
                <Card 
                  className={`cursor-pointer transition-all duration-300 ease-in-out border-primary hover:shadow-lg ${
                    expandedCard === member.id 
                      ? 'w-64 h-auto bg-card shadow-xl' 
                      : 'w-48 h-48 bg-card/90'
                  }`}
                  style={{
                    border: `4px solid hsl(var(--primary))`,
                    borderRadius: expandedCard === member.id ? '16px' : '50%',
                    boxShadow: expandedCard === member.id 
                      ? `0 0 30px hsl(var(--primary) / 0.3)` 
                      : `0 0 15px hsl(var(--primary) / 0.1)`
                  }}
                  onClick={() => handleCardClick(member.id)}
                  data-card="expandable"
                  aria-expanded={expandedCard === member.id}
                >
                  <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                    <div className={`${expandedCard === member.id ? 'w-32 h-32' : 'w-40 h-40'} transition-all duration-300`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{
                          borderRadius: expandedCard === member.id ? '12px' : '50%'
                        }}
                      />
                    </div>
                    {expandedCard === member.id && (
                      <div className="text-center mt-4 pb-4 px-4 animate-fade-in">
                        <h3 className="text-xl font-bold mb-2 text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-sm mb-3 text-muted-foreground">
                          {member.role}
                        </p>
                        <p className="text-xs mb-3 leading-relaxed text-muted-foreground">
                          {member.bio}
                        </p>
                        <div className="flex flex-wrap justify-center gap-1 mb-3">
                          {member.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs italic text-muted-foreground">
                          "{member.quote}"
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation</h3>
              <p className="text-sm text-muted-foreground">Pushing boundaries with fresh solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-secondary">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Collaboration</h3>
              <p className="text-sm text-muted-foreground">Teamwork drives extraordinary results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Excellence</h3>
              <p className="text-sm text-muted-foreground">Quality is never an accident</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Want to Work With Our Experts?
          </h2>
          <p className="text-lg md:text-xl mb-4 text-primary-foreground/90">
            Schedule a quick discovery call with our team.
          </p>
          <p className="text-base mb-8 text-primary-foreground/90">
            Transform your ideas into powerful digital experiences that engage and convert.
          </p>
          <Button 
            className="px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-background text-foreground hover:bg-background/90"
            onClick={() => window.location.href = '/contact-us'}
          >
            Book a Call
          </Button>
        </div>
      </section>

      {/* Client Logo Carousel (Placeholder) */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Trusted by Leading Companies
          </h3>
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-muted-foreground text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Have a Project in Mind?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </p>
          <Button 
            className="px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.location.href = '/contact-us'}
          >
            Let's Talk
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}