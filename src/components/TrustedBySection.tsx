import React from 'react';

const TrustedBySection = () => {
  const stats = [
    { number: '325+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15M+', label: 'Users Impacted' },
    { number: '24/7', label: 'Support Available' }
  ];

  const brands = [
    'FutureScale',
    'DataDriven',
    'CloudFirst',
    'AIVentures',
    'TechCorp',
    'InnovateLab',
    'FutureScale',
    'DataDriven',
    'CloudFirst',
    'AIVentures',
    'TechCorp',
    'InnovateLab'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional results across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Carousel Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold font-manrope mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powering Innovation for Leading Brands
            </span>
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-full px-8 py-4 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-foreground font-semibold whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;