import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, TrendingUp, Users, Database, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  // Debug: Force rebuild to clear cache
  console.log('Portfolio component loaded - bannerStudies should be available');
  const [activeTab, setActiveTab] = useState('By Services');
  const [activeFilter, setActiveFilter] = useState('All');

  const tabs = ['By Services', 'By Industries', 'By Use Cases'];
  
  const filtersByTab = {
    'By Services': ['All', 'AI Agent', 'Chatbot', 'Voice AI', 'Machine Learning', 'Custom Software'],
    'By Industries': ['All', 'Healthcare', 'E-commerce', 'FinTech', 'Education', 'Manufacturing'],
    'By Use Cases': ['All', 'Customer Support', 'Sales Automation', 'Data Analytics', 'Process Optimization']
  };

  // Scrollable Banner Case Studies
  const bannerStudies = [
    {
      id: 1,
      title: 'Dr. Oetker Chatbot',
      client: 'Dr. Oetker',
      bullets: [
        'Engaging virtual assistant',
        'Automated contact entry',
        'AR filters on Instagram for more fun'
      ],
      description: 'Giuseppe Virtual Assistant on Messenger promoting the Easy Post product and driving engagement for their content.',
      logo: '/lovable-uploads/656039c0-0ed3-4ae0-8e29-1fdf3c2f0a62.png',
      background: 'bg-gradient-to-br from-purple-600/20 via-red-500/20 to-pink-600/20'
    },
    {
      id: 2,
      title: 'Healthcare SaaS Platform',
      client: 'MedCore Solutions',
      bullets: [
        'x15 revenue growth in two years',
        '30+ hospitals using the solution',
        '162,000+ assets in the portfolio'
      ],
      description: 'AI-powered healthcare management platform transforming patient care delivery and operational efficiency.',
      logo: '/lovable-uploads/91a208ed-fa9c-4b69-a41f-6287b353a14e.png',
      background: 'bg-gradient-to-br from-blue-600/20 via-teal-500/20 to-green-600/20'
    },
    {
      id: 3,
      title: 'FinTech Revolution',
      client: 'SecureBank',
      bullets: [
        '400% increase in user adoption',
        '50K+ active users monthly',
        '$2M+ transactions processed'
      ],
      description: 'Revolutionary mobile banking platform with AI-driven insights and automated financial planning.',
      logo: '/lovable-uploads/7f4f9140-16e6-4d2a-b775-4df6a962bf40.png',
      background: 'bg-gradient-to-br from-indigo-600/20 via-purple-500/20 to-pink-600/20'
    },
    {
      id: 4,
      title: 'E-commerce Intelligence',
      client: 'RetailMax',
      bullets: [
        '300% sales increase',
        '100K+ customers served',
        '85% conversion rate improvement'
      ],
      description: 'AI-powered e-commerce platform with predictive analytics and personalized shopping experiences.',
      logo: '/lovable-uploads/8b71c982-5eaa-436a-9a9e-30789aa114a8.png',
      background: 'bg-gradient-to-br from-orange-600/20 via-red-500/20 to-pink-600/20'
    },
    {
      id: 5,
      title: 'Educational Platform',
      client: 'EduTech Pro',
      bullets: [
        'Personalized learning experiences',
        '250% engagement increase',
        'Mobile-first responsive design'
      ],
      description: 'Next-generation learning platform with AI-driven content recommendations and interactive features.',
      logo: '/lovable-uploads/75ccf48e-fd5c-4d2b-9720-d64f0b797c12.png',
      background: 'bg-gradient-to-br from-emerald-600/20 via-teal-500/20 to-blue-600/20'
    }
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

  const currentFilters = filtersByTab[activeTab];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => {
        if (activeTab === 'By Services') return project.tags.includes(activeFilter);
        if (activeTab === 'By Industries') return project.tags.includes(activeFilter);
        if (activeTab === 'By Use Cases') return project.tags.includes(activeFilter);
        return true;
      });

  const handleProjectClick = (projectId: number) => {
    // Navigate to detailed case study
    window.location.href = `/case-study/${projectId}`;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {/* Hero Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Work Speaks for Itself
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses worldwide design, build, and grow successful digital platforms.
            </p>
          </div>
        </section>

        {/* Scrollable Hero Banner */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.2 },
                1280: { slidesPerView: 2.5 }
              }}
              className="hero-swiper"
            >
              {bannerStudies.map((study) => (
                <SwiperSlide key={study.id}>
                  <Card className={`group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-[420px] ${study.background} backdrop-blur-sm`}>
                    <div className="relative h-full">
                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="destructive" className="bg-red-500 text-white font-medium px-3 py-1">
                          LATEST CASE STUDIES
                        </Badge>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent backdrop-blur-[2px]" />
                      
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                        <div>
                          <div className="mb-2">
                            <span className="text-sm text-muted-foreground font-medium">{study.client}</span>
                          </div>
                          <h3 className="text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                            {study.title}
                          </h3>
                          
                          <div className="space-y-3 mb-6">
                            {study.bullets.map((bullet, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-foreground font-medium">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                            {study.description}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <Button 
                              variant="default" 
                              size="lg"
                              className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            
                            <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                              <img 
                                src={study.logo} 
                                alt={`${study.client} logo`}
                                className="w-16 h-16 object-contain rounded-lg bg-white/10 backdrop-blur-sm p-2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="swiper-button-prev-custom flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button className="swiper-button-next-custom flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-muted rounded-lg p-1">
                {tabs.map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "default" : "ghost"}
                    onClick={() => {
                      setActiveTab(tab);
                      setActiveFilter('All');
                    }}
                    className={`px-6 py-2 rounded-md transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-background text-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </Button>
                ))}
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {currentFilters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  size="sm"
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
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
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 z-30">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="w-full bg-white/90 hover:bg-white text-black border-0"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag) => (
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
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-2 rounded-lg bg-primary/5">
                          <div className="font-bold text-lg text-primary">{value}</div>
                          <div className="capitalize text-muted-foreground text-xs">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Show More Button */}
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 text-lg rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Show More Projects
              </Button>
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