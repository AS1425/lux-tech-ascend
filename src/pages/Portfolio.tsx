import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'AI & Automation',
    'Digital Platform',
    'Conversational AI',
    'Healthcare',
    'E-commerce',
    'FinTech',
    'Mobile Apps'
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Assistant',
      client: 'MedCore Solutions',
      image: '/lovable-uploads/656039c0-0ed3-4ae0-8e29-1fdf3c2f0a62.png',
      tags: ['AI & Automation', 'Healthcare', 'Conversational AI'],
      description: 'Developed an intelligent healthcare assistant that reduced patient wait times by 60% and improved diagnosis accuracy.',
      metrics: { engagement: '+85%', efficiency: '+60%', satisfaction: '+92%' }
    },
    {
      id: 2,
      title: 'E-commerce Platform Transformation',
      client: 'RetailMax',
      image: '/lovable-uploads/7f4f9140-16e6-4d2a-b775-4df6a962bf40.png',
      tags: ['E-commerce', 'Digital Platform', 'AI & Automation'],
      description: 'Complete digital transformation resulting in 300% increase in online sales and improved user experience.',
      metrics: { sales: '+300%', conversion: '+45%', retention: '+70%' }
    },
    {
      id: 3,
      title: 'Financial Services Chatbot',
      client: 'SecureBank',
      image: '/lovable-uploads/91a208ed-fa9c-4b69-a41f-6287b353a14e.png',
      tags: ['FinTech', 'Conversational AI', 'AI & Automation'],
      description: 'Intelligent banking assistant handling 80% of customer queries automatically with 24/7 availability.',
      metrics: { automation: '+80%', response: '-75%', cost: '-40%' }
    },
    {
      id: 4,
      title: 'Mobile Learning Platform',
      client: 'EduTech Pro',
      image: '/lovable-uploads/8b71c982-5eaa-436a-9a9e-30789aa114a8.png',
      tags: ['Mobile Apps', 'Digital Platform', 'AI & Automation'],
      description: 'Revolutionary mobile learning platform with AI-powered personalized content delivery.',
      metrics: { engagement: '+120%', completion: '+85%', satisfaction: '+95%' }
    },
    {
      id: 5,
      title: 'Supply Chain Optimization',
      client: 'LogiCorp',
      image: '/lovable-uploads/c99a3bbf-42b8-48ec-9465-f87b7e90d87a.png',
      tags: ['AI & Automation', 'Digital Platform'],
      description: 'AI-driven supply chain management system reducing operational costs by 35% while improving delivery times.',
      metrics: { cost: '-35%', efficiency: '+50%', accuracy: '+90%' }
    },
    {
      id: 6,
      title: 'Telemedicine Platform',
      client: 'HealthConnect',
      image: '/lovable-uploads/d23fcf19-80ad-4991-a51d-314794899af2.png',
      tags: ['Healthcare', 'Digital Platform', 'Mobile Apps'],
      description: 'Comprehensive telemedicine solution connecting patients with healthcare providers seamlessly.',
      metrics: { reach: '+200%', consultations: '+150%', satisfaction: '+88%' }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const handleProjectClick = (projectId: number) => {
    // Navigate to detailed case study
    window.location.href = `/case-study/${projectId}`;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Work Speaks for Itself
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses worldwide design, build, and grow successful digital platforms.
            </p>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'hover:bg-primary/10 hover:border-primary/30'
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="w-full bg-white/90 hover:bg-white text-black border-0"
                      >
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      Client: {project.client}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="flex justify-between text-xs text-primary font-medium">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-lg">{value}</div>
                          <div className="capitalize text-muted-foreground">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and create your success story.
            </p>
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg rounded-full bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;