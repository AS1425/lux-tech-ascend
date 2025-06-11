
import React, { useEffect, useState } from 'react';

const ClientsSection = () => {
  const [animatedCounters, setAnimatedCounters] = useState<boolean[]>([]);

  const clients = [
    { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=150&h=75&fit=crop' },
    { name: 'InnovateLab', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=75&fit=crop' },
    { name: 'FutureScale', logo: 'https://images.unsplash.com/photo-1611262588019-db6cc2032da3?w=150&h=75&fit=crop' },
    { name: 'DataDriven', logo: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=150&h=75&fit=crop' },
    { name: 'CloudFirst', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=75&fit=crop' },
    { name: 'AIVentures', logo: 'https://images.unsplash.com/photo-1611262588019-db6cc2032da3?w=150&h=75&fit=crop' },
  ];

  const metrics = [
    { number: 325, suffix: '+', label: 'Projects Delivered', duration: 2000 },
    { number: 98, suffix: '%', label: 'Client Satisfaction', duration: 1500 },
    { number: 15, suffix: 'M+', label: 'Users Impacted', duration: 2500 },
    { number: 24, suffix: '/7', label: 'Support Available', duration: 1000 }
  ];

  const [counters, setCounters] = useState(metrics.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedCounters[0]) {
            setAnimatedCounters([true]);
            // Animate counters
            metrics.forEach((metric, index) => {
              let start = 0;
              const increment = metric.number / (metric.duration / 16);
              const timer = setInterval(() => {
                start += increment;
                if (start >= metric.number) {
                  setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[index] = metric.number;
                    return newCounters;
                  });
                  clearInterval(timer);
                } else {
                  setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[index] = Math.floor(start);
                    return newCounters;
                  });
                }
              }, 16);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
      observer.observe(metricsSection);
    }

    return () => observer.disconnect();
  }, [animatedCounters]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <div className="metrics-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Delivering exceptional results across the globe
            </p>
          </div>

          {/* Animated Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center glass p-6 rounded-2xl border border-primary/20">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-manrope">
                  {counters[index]}{metric.suffix}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">
            Powering Innovation for Leading Brands
          </h3>
        </div>

        {/* Scrolling Logo Strip */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-12 py-4">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 h-16 glass rounded-lg border border-primary/10 flex items-center justify-center group hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 font-semibold text-sm">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Their AI solutions transformed our customer service efficiency by 300%. Outstanding technical expertise and professional delivery.",
              author: "Sarah Chen",
              position: "CTO, TechCorp",
              avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
            },
            {
              quote: "The team delivered a complex machine learning platform ahead of schedule. Their attention to detail is remarkable.",
              author: "Michael Rodriguez",
              position: "VP Engineering, InnovateLab",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
            },
            {
              quote: "Best investment we've made. The automation solution saved us $2M annually while improving our service quality.",
              author: "Emily Watson",
              position: "CEO, FutureScale",
              avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
            }
          ].map((testimonial, index) => (
            <div key={index} className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="mb-4">
                <svg className="w-8 h-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
