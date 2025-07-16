import React from 'react';
import { FileText, Shield, CheckCircle, Code, TestTube, Rocket, Wrench, Headphones } from 'lucide-react';

const ProcessIconsSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Requirements Understanding',
      icon: FileText,
      description: 'Deep dive into your business needs'
    },
    {
      id: 2,
      title: 'Signing NDA',
      icon: Shield,
      description: 'Secure confidentiality agreement'
    },
    {
      id: 3,
      title: 'Discovery Phase',
      icon: CheckCircle,
      description: 'Research and planning stage'
    },
    {
      id: 4,
      title: 'Development',
      icon: Code,
      description: 'Building your solution'
    },
    {
      id: 5,
      title: 'QA & Testing',
      icon: TestTube,
      description: 'Quality assurance process'
    },
    {
      id: 6,
      title: 'Launch',
      icon: Rocket,
      description: 'Go-live deployment'
    },
    {
      id: 7,
      title: 'Maintenance and Scaling',
      icon: Wrench,
      description: 'Ongoing optimization'
    },
    {
      id: 8,
      title: 'Dedicated Support',
      icon: Headphones,
      description: '24/7 support availability'
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              From Concept to Execution — Our Collaborative Development Flow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At our company, we set the convenient flow of work that is transparent and clear for our clients. 
            We value everyone's time and effort; thus, involve you only during phases when mutual collaboration is crucial.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.slice(0, 4).map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                      {step.id}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.slice(4, 8).map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                      {step.id}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
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

export default ProcessIconsSection;