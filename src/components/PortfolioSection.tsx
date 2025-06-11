import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'AI-Powered E-commerce Platform',
      category: 'Machine Learning',
      description: 'Revolutionary e-commerce platform with AI-driven product recommendations, dynamic pricing, and predictive inventory management.',
      tech: ['React', 'Python', 'TensorFlow', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      metrics: ['300% increase in conversions', '45% reduction in cart abandonment', '2M+ products analyzed'],
      featured: true
    },
    {
      title: 'Smart City Traffic Management',
      category: 'IoT & AI',
      description: 'Intelligent traffic management system using computer vision and real-time data analytics to optimize city-wide traffic flow.',
      tech: ['Python', 'OpenCV', 'IoT', 'Real-time Analytics'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop',
      metrics: ['40% reduction in traffic congestion', '25% decrease in emissions', '500k+ vehicles tracked daily'],
      featured: true
    },
    {
      title: 'Healthcare AI Diagnostic Tool',
      category: 'Computer Vision',
      description: 'Advanced medical imaging analysis system that assists healthcare professionals in early disease detection and diagnosis.',
      tech: ['Python', 'PyTorch', 'Medical Imaging', 'Cloud Computing'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      metrics: ['95% diagnostic accuracy', '60% faster analysis', 'FDA approved'],
      featured: true
    },
    {
      title: 'Financial Risk Assessment Platform',
      category: 'Fintech',
      description: 'Comprehensive risk assessment platform leveraging machine learning to predict market trends and evaluate investment opportunities.',
      tech: ['React', 'Node.js', 'Python', 'Financial APIs'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      metrics: ['89% prediction accuracy', '$50M+ analyzed', '200+ financial institutions'],
      featured: false
    },
    {
      title: 'Supply Chain Optimization',
      category: 'Automation',
      description: 'End-to-end supply chain management solution with predictive analytics and automated inventory optimization.',
      tech: ['Vue.js', 'Python', 'Machine Learning', 'IoT'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      metrics: ['30% cost reduction', '99.5% delivery accuracy', 'Global supply chain'],
      featured: false
    },
    {
      title: 'Customer Service AI Assistant',
      category: 'Natural Language Processing',
      description: 'Intelligent customer service chatbot with natural language understanding and multi-language support.',
      tech: ['React', 'NLP', 'Machine Learning', 'Voice Recognition'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
      metrics: ['24/7 availability', '92% customer satisfaction', '15+ languages supported'],
      featured: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, projectIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-gradient-to-b from-muted/20 via-background to-muted/20" ref={sectionRef}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-manrope mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with innovative AI and digital solutions.
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 glass card-hover">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  {projects[activeProject].category}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {projects[activeProject].title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {projects[activeProject].description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 glass rounded-full text-sm text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {projects[activeProject].metrics.map((metric, index) => (
                    <div key={index} className="text-center p-3 glass rounded-xl card-hover">
                      <div className="text-primary font-semibold text-sm">{metric}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="cta-ripple glass px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center pulse-glow">
                    <Play className="w-4 h-4 mr-2" />
                    View Demo
                  </button>
                  <button className="glass px-6 py-3 rounded-full text-foreground border border-primary/30 hover:bg-primary/10 transition-all duration-300 flex items-center card-hover">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Case Study
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden glass border border-primary/20 card-hover">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.filter(p => p.featured).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === index ? 'bg-primary scale-125 glow-mint' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`project-card group glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 card-hover ${
                  isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white glow-mint" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 glass rounded text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 glass rounded text-xs text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <button className="text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium">
                      View Details
                    </button>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full glass hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center card-hover">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="w-8 h-8 rounded-full glass hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center card-hover">
                        <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
