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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Enjoy the smooth process from idea to business benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Master of Code Global, we set the convenient flow of work that is transparent and clear for our clients. 
            We value everyone's time and effort; thus, involve you only during phases when mutual collaboration is crucial.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 hidden lg:block"></div>
          
          {/* Steps */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHighlighted = step.id === 6; // Launch step
              return (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                  {/* Step Circle */}
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
                    isHighlighted 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-600 border-2 border-gray-200'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Step Label */}
                  <div className="mt-4 text-center max-w-24">
                    <h3 className="font-semibold text-sm text-gray-800 leading-tight">{step.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;