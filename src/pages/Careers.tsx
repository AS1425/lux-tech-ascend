import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import FloatingChatbot from "@/components/FloatingChatbot";
import { Users, Lightbulb, Globe, TrendingUp, Heart, Shield, Target, Zap, Sparkles } from "lucide-react";

const Careers = () => {
  const [jobFilter, setJobFilter] = useState('all');

  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovative Projects",
      description: "Work on cutting-edge AI and blockchain solutions that shape the future of technology."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI-First Culture",
      description: "Be at the forefront of AI innovation with access to latest tools and technologies."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and a results-driven environment."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Learning & Growth",
      description: "Continuous learning opportunities, mentorship, and career advancement paths."
    }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Integrity",
      description: "We build trust through transparency and ethical practices."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Curiosity",
      description: "We question, explore, and push boundaries to find better solutions."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Collaboration",
      description: "We believe diverse perspectives create breakthrough innovations."
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Accountability",
      description: "We take ownership and deliver on our commitments."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Innovation",
      description: "We embrace change and create solutions that matter."
    }
  ];

  const openRoles = [
    {
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and deploy machine learning models for enterprise clients."
    },
    {
      title: "Blockchain Developer",
      department: "Engineering", 
      location: "Remote",
      type: "Full-time",
      description: "Develop decentralized applications and smart contracts."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive user experiences for AI-powered applications."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure and deployment pipelines."
    }
  ];

  const testimonials = [
    {
      quote: "Working at Foreignerds has been an incredible journey. The team's commitment to innovation and the supportive culture makes it a great place to grow.",
      name: "Ankit Kumar",
      position: "Senior Developer",
      image: "/lovable-uploads/a173058e-3970-41d7-b03f-5faa92936b71.png"
    },
    {
      quote: "The remote-first culture and emphasis on work-life balance while building cutting-edge AI solutions is exactly what I was looking for.",
      name: "Janvi Anand",
      position: "AI Specialist",
      image: "/lovable-uploads/b949ede3-3d1d-44f3-8c0c-1b9ed36d34e2.png"
    },
    {
      quote: "Being part of a team that's shaping the future of technology while maintaining strong ethical values has been truly rewarding.",
      name: "Yogesh Kaushik",
      position: "Tech Lead",
      image: "/lovable-uploads/c99a3bbf-42b8-48ec-9465-f87b7e90d87a.png"
    }
  ];

  const filteredJobs = jobFilter === 'all' ? openRoles : openRoles.filter(job => 
    job.department.toLowerCase() === jobFilter || 
    job.type.toLowerCase() === jobFilter ||
    job.location.toLowerCase() === jobFilter
  );

  return (
    <Layout>
      
      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background"></div>
        <div className="animated-particles-bg"></div>
        
        <div className="container mx-auto px-4 text-center z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-up">
            Join a Team of Digital Innovators
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            At Foreignerds, we believe in building future-forward solutions while growing a culture of curiosity, collaboration, and creativity.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold animate-fade-up hover:scale-105 transition-transform duration-300"
            style={{animationDelay: '0.4s'}}
            onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Foreignerds Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Life at Foreignerds
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our culture thrives on flexibility, continuous learning, and meaningful collaboration. We're a remote-friendly team that values work-life balance while pushing the boundaries of what's possible with AI and emerging technologies.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">35+</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">280+</div>
                  <div className="text-muted-foreground">Global Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Remote Friendly</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/7f4f9140-16e6-4d2a-b775-4df6a962bf40.png" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img 
                src="/lovable-uploads/85089fbb-e881-40d5-99bb-882a78c92ec9.png" 
                alt="Remote work setup" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              />
              <img 
                src="/lovable-uploads/8b71c982-5eaa-436a-9a9e-30789aa114a8.png" 
                alt="Innovation session" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 -mt-8"
              />
              <img 
                src="/lovable-uploads/91a208ed-fa9c-4b69-a41f-6287b353a14e.png" 
                alt="Team success" 
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-positions" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Current Openings
          </h2>
          
          {/* Job Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'engineering', 'design', 'full-time', 'remote'].map((filter) => (
              <Button
                key={filter}
                variant={jobFilter === filter ? "default" : "outline"}
                onClick={() => setJobFilter(filter)}
                className="capitalize"
              >
                {filter === 'all' ? 'All Positions' : filter.replace('-', ' ')}
              </Button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.location}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>
                  <Button 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                    onClick={() => window.location.href = 'mailto:careers@foreignerds.com?subject=Application for ' + job.title}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">No current openings matching your criteria</h3>
              <p className="text-muted-foreground mb-6">But we'd love to hear from you! Drop us a line.</p>
              <Button 
                variant="outline"
                onClick={() => window.location.href = 'mailto:careers@foreignerds.com?subject=General Inquiry'}
              >
                Send Your Resume
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            What Our Team Says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Think You're a Great Fit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building the future of AI and digital innovation. We're always looking for passionate individuals to join our team.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
            onClick={() => window.location.href = 'mailto:careers@foreignerds.com?subject=General Application'}
          >
            Send Your Resume
          </Button>
        </div>
      </section>
      
      <FloatingChatbot />
    </Layout>
  );
};

export default Careers;