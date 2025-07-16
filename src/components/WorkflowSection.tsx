import React from 'react';
import { CheckCircle, FileText, Shield, Code, TestTube, Rocket, Wrench, Headphones } from 'lucide-react';

const WorkflowSection = () => {
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
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

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-secondary/30 rounded-full"></div>
              
              {/* Steps */}
              <div className="grid grid-cols-4 gap-8 mb-12">
                {steps.slice(0, 4).map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="relative">
                      {/* Step Circle */}
                      <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                        {step.id}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.slice(4, 8).map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="relative">
                      {/* Step Circle */}
                      <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                        {step.id}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex items-center space-x-6">
                    {/* Step Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                        {step.id}
                      </div>
                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary/50 to-primary/20"></div>
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;