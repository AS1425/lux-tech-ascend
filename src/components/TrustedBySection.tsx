import React from 'react';

const TrustedBySection = () => {
  const companies = [
    { name: 'Microsoft', logo: 'M' },
    { name: 'Google', logo: 'G' },
    { name: 'Amazon', logo: 'A' },
    { name: 'Meta', logo: 'M' },
    { name: 'Apple', logo: 'A' },
    { name: 'Tesla', logo: 'T' },
    { name: 'Netflix', logo: 'N' },
    { name: 'Spotify', logo: 'S' }
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that trust us to deliver cutting-edge AI and digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary group-hover:shadow-lg transition-all duration-300">
                {company.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;