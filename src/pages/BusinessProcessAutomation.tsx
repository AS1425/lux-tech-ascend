
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  Settings, 
  Shield, 
  BarChart3, 
  TrendingUp, 
  Users,
  Database,
  Workflow,
  Clock,
  CheckCircle,
  ArrowRight,
  Cog,
  Target,
  DollarSign,
  UserCheck,
  Timer
} from 'lucide-react';

const BusinessProcessAutomation = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Improved Efficiency",
      description: "Automate repetitive tasks to streamline operations, reduce errors, and speed up business processes."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Cost Reduction",
      description: "Eliminate the need for manual labor and reduce operational costs by automating routine tasks."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Better Data Accuracy",
      description: "Automation minimizes human error, improving the accuracy of your data and reports."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Scalability",
      description: "Automated systems can easily scale with your business growth, handling more tasks without additional overhead."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Enhanced Employee Productivity",
      description: "By automating mundane tasks, employees can focus on more strategic, high-value activities."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Improved Customer Experience",
      description: "Automation enables faster response times and more personalized interactions with customers."
    }
  ];

  const processSteps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consultation & Discovery",
      description: "We start by understanding your business processes, pain points, and automation goals."
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Process Mapping", 
      description: "Our team maps out existing workflows and identifies opportunities for automation and optimization."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Solution Design & Architecture",
      description: "We design a tailored automation solution, ensuring it integrates with your existing systems and meets your specific needs."
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Automation Development",
      description: "We develop and configure the automation solution, ensuring it's scalable, secure, and capable of handling your business's needs."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Testing & Validation",
      description: "The automation system undergoes thorough testing to ensure it meets performance and security standards."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Deployment & Training",
      description: "We deploy the automation solution and provide training to ensure smooth adoption across your team."
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Ongoing Support & Maintenance",
      description: "We offer continuous support and updates to ensure the automation solution remains efficient and up-to-date as your business evolves."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Business Process Automation Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Streamline your operations, reduce costs, and improve efficiency with custom business process automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Business Process Automation?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Business Process Automation (BPA) refers to the use of technology to automate repetitive business tasks and workflows, enabling organizations to streamline operations, reduce human error, and improve productivity. BPA integrates software tools, robotics, and AI to handle routine tasks like data entry, reporting, approvals, and customer service, allowing your teams to focus on more strategic activities.
              </p>
              <p className="text-lg text-muted-foreground">
                Our BPA services help businesses identify inefficiencies and implement automation solutions that drive operational excellence and scalability.
              </p>
            </div>
            <div className="animate-fade-left">
              <div className="glass p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <Workflow className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Workflow Automation</h3>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Database className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Data Processing</h3>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Real-time Monitoring</h3>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <BarChart3 className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold">Performance Analytics</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BPA is Critical Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Business Process Automation is Key for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              In today's competitive market, efficiency and scalability are crucial for success. Business Process Automation streamlines manual and time-consuming tasks, improving accuracy, speed, and cost-effectiveness. By automating processes, businesses can eliminate repetitive tasks, enhance customer experience, reduce operational costs, and improve employee productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="h-8 w-8" />, title: "Enhanced Efficiency", description: "Streamline operations and eliminate bottlenecks" },
              { icon: <DollarSign className="h-8 w-8" />, title: "Cost Savings", description: "Reduce operational costs and manual labor" },
              { icon: <Users className="h-8 w-8" />, title: "Better Customer Service", description: "Faster response times and improved experiences" }
            ].map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="flex justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Business Process Automation Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a step-by-step process to ensure that your business process automation solutions are efficient and aligned with your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold">Step {index + 1}</div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Benefits of Business Process Automation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your business operations with automation solutions that deliver measurable results and competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {benefit.icon}
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <div className="glass p-8 rounded-2xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Expert Automation Team</h3>
                  <p className="text-muted-foreground">
                    Proven track record in delivering automation solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us for Your Business Process Automation Needs?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With a proven track record in delivering automation solutions, our team specializes in designing and implementing custom BPA solutions that align with your unique business needs. We combine technical expertise with industry knowledge to automate your workflows and processes, ensuring that your business operates at peak efficiency.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From process discovery to ongoing support, we are committed to delivering results that improve your bottom line and set you up for future success.
              </p>
              <div className="space-y-4">
                {[
                  "Custom automation solutions tailored to your business",
                  "Seamless integration with existing systems",
                  "Scalable and secure automation architecture",
                  "Comprehensive training and ongoing support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Automate Your Business Processes?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's streamline your operations and boost efficiency with our custom automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Start Automating Your Processes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessProcessAutomation;
