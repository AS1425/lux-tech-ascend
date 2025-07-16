import React from 'react';
import CounterAnimation from './CounterAnimation';

const TrustedBySection = () => {
  const stats = [
    { number: '325+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15M+', label: 'Users Impacted' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional results across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;