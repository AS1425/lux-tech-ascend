import React, { useState } from 'react';

const IndustrySection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const industries = [
    {
      name: 'Healthcare',
      description: 'Building secure, scalable healthcare apps powered by AI & automation.',
      link: '/industries/healthcare'
    },
    {
      name: 'Finance & Banking',
      description: 'Advanced fintech solutions with AI-driven analytics and security.',
      link: '/industries/finance'
    },
    {
      name: 'E-commerce & Retail',
      description: 'Smart retail platforms with personalized shopping experiences.',
      link: '/industries/ecommerce'
    },
    {
      name: 'Education & E-Learning',
      description: 'Interactive learning platforms powered by intelligent algorithms.',
      link: '/industries/education'
    },
    {
      name: 'Legal & Compliance',
      description: 'Automated legal workflows and compliance monitoring systems.',
      link: '/industries/legal'
    },
    {
      name: 'Aviation & Airlines',
      description: 'Flight optimization and passenger experience enhancement solutions.',
      link: '/industries/aviation'
    },
    {
      name: 'Transportation & Logistics',
      description: 'Route optimization and fleet management with real-time tracking.',
      link: '/industries/logistics'
    },
    {
      name: 'Telecom & IT',
      description: 'Network optimization and intelligent infrastructure management.',
      link: '/industries/telecom'
    },
    {
      name: 'Automotive & Car Sales',
      description: 'Smart vehicle systems and automated sales process optimization.',
      link: '/industries/automotive'
    },
    {
      name: 'Travel, Hospitality & Events',
      description: 'Personalized travel experiences and event management platforms.',
      link: '/industries/travel'
    },
    {
      name: 'Media & Entertainment',
      description: 'Content creation tools and audience engagement platforms.',
      link: '/industries/media'
    },
    {
      name: 'HR & Recruitment',
      description: 'Intelligent talent acquisition and workforce management systems.',
      link: '/industries/hr'
    },
    {
      name: 'Agriculture',
      description: 'Precision farming and crop optimization with IoT integration.',
      link: '/industries/agriculture'
    },
    {
      name: 'Game Development',
      description: 'AI-powered game mechanics and player behavior analytics.',
      link: '/industries/gaming'
    },
    {
      name: 'Oil & Gas',
      description: 'Predictive maintenance and resource optimization solutions.',
      link: '/industries/oil-gas'
    },
    {
      name: 'Custom Energy & Environment',
      description: 'Sustainable energy management and environmental monitoring.',
      link: '/industries/energy'
    },
    {
      name: 'Real Estate',
      description: 'Property valuation and smart building management systems.',
      link: '/industries/real-estate'
    },
    {
      name: 'Food & Beverage',
      description: 'Supply chain optimization and quality control automation.',
      link: '/industries/food-beverage'
    },
    {
      name: 'Non-profit Organizations',
      description: 'Donor management and impact measurement platforms.',
      link: '/industries/nonprofit'
    },
    {
      name: 'Political Campaigns',
      description: 'Voter engagement and campaign optimization tools.',
      link: '/industries/political'
    },
    {
      name: 'Financial Services',
      description: 'Risk assessment and automated trading solutions.',
      link: '/industries/financial-services'
    },
    {
      name: 'Supply Chain & Warehousing',
      description: 'Inventory optimization and automated warehouse management.',
      link: '/industries/supply-chain'
    },
    {
      name: 'Construction & Infrastructure',
      description: 'Project management and safety monitoring with AI insights.',
      link: '/industries/construction'
    }
  ];

  const handleCardInteraction = (index: number, isEntering: boolean) => {
    if (isEntering) {
      setFlippedCard(index);
    } else {
      setFlippedCard(null);
    }
  };

  return (
    <section id="ai-industries" className="py-20 px-4 bg-gradient-to-br from-background via-background/95 to-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore AI-driven solutions across 20+ industries we specialize in, delivering cutting-edge technology tailored to your sector's unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group relative h-48 cursor-pointer"
              onMouseEnter={() => handleCardInteraction(index, true)}
              onMouseLeave={() => handleCardInteraction(index, false)}
              onClick={() => handleCardInteraction(index, flippedCard !== index)}
              aria-label={`${industry.name} industry solutions`}
            >
              <div className="relative w-full h-full [perspective:1000px]">
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
                    flippedCard === index ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Front face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6">
                    <h3 className="text-lg font-semibold text-center text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {industry.name}
                    </h3>
                  </div>

                  {/* Back face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary/10 border border-primary/20 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-sm text-foreground mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    <a
                      href={industry.link}
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Explore Solutions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;