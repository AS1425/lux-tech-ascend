import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  RefreshCw, 
  Palette, 
  Zap, 
  Store, 
  TestTube, 
  Building, 
  Headphones,
  Heart,
  Banknote,
  Truck,
  Scale,
  Factory,
  University,
  Users,
  GraduationCap,
  Target,
  Gauge,
  Shield,
  Search,
  LayoutDashboard,
  GitBranch,
  Settings,
  CheckCircle,
  Eye,
  Rocket,
  TrendingUp
} from 'lucide-react';

const WindowsAppDevelopment = () => {
  const coreServices = [
    {
      icon: Monitor,
      title: "Custom Windows App Development",
      description: "Tailored apps built using .NET, C#, C++, and Windows frameworks."
    },
    {
      icon: RefreshCw,
      title: "Legacy App Modernization",
      description: "Upgrade and migrate outdated desktop apps to modern Windows environments."
    },
    {
      icon: Palette,
      title: "WPF & UWP Development",
      description: "Stunning UI/UX experiences with WPF (Windows Presentation Foundation) and Universal Windows Platform."
    },
    {
      icon: Zap,
      title: "API Integration & Automation",
      description: "Seamless connectivity with third-party tools and internal systems."
    },
    {
      icon: Store,
      title: "Windows Store App Deployment",
      description: "Publishing apps on Microsoft Store with full certification support."
    },
    {
      icon: TestTube,
      title: "Desktop Software Testing",
      description: "Rigorous QA to ensure speed, performance, and bug-free experiences."
    },
    {
      icon: Building,
      title: "Enterprise App Solutions",
      description: "Secure and scalable apps for internal enterprise usage."
    },
    {
      icon: Headphones,
      title: "Ongoing Support & Maintenance",
      description: "Version upgrades, enhancements, and support tailored to your business."
    }
  ];

  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant Windows applications"
    },
    {
      icon: Banknote,
      title: "Finance & Banking",
      description: "Secure financial desktop solutions"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Warehouse and shipping management apps"
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Case management and legal workflow tools"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production and inventory management systems"
    },
    {
      icon: Building,
      title: "Government",
      description: "Compliance-ready government applications"
    },
    {
      icon: Users,
      title: "HR & Operations",
      description: "Employee management and operational tools"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Educational software and campus management"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: ".NET & Microsoft Stack Expertise",
      description: "Skilled in C#, WPF, UWP, WinForms, Azure, and Microsoft DevOps tools."
    },
    {
      icon: Gauge,
      title: "Optimized for Performance",
      description: "Fast, responsive, and secure apps that work across multiple Windows versions."
    },
    {
      icon: Shield,
      title: "Enterprise-Ready Solutions",
      description: "Built to scale and integrate with your infrastructure, whether in-office or hybrid."
    }
  ];

  const developmentProcess = [
    {
      icon: Search,
      title: "Requirement Gathering & System Analysis",
      description: "Understanding your needs and technical requirements"
    },
    {
      icon: LayoutDashboard,
      title: "Architecture & UI Design",
      description: "Creating scalable architecture and intuitive interfaces"
    },
    {
      icon: GitBranch,
      title: "Agile-Based Development (Sprint Cycles)",
      description: "Iterative development with regular feedback loops"
    },
    {
      icon: Settings,
      title: "Integration & API Setup",
      description: "Connecting with external systems and services"
    },
    {
      icon: TestTube,
      title: "Quality Assurance & Performance Testing",
      description: "Comprehensive testing for reliability and speed"
    },
    {
      icon: Shield,
      title: "Security Review & Compliance",
      description: "Ensuring data protection and regulatory compliance"
    },
    {
      icon: Eye,
      title: "User Acceptance Testing (UAT)",
      description: "Final validation with end users"
    },
    {
      icon: Rocket,
      title: "Launch & Post-Deployment Support",
      description: "Go-live and ongoing maintenance support"
    }
  ];

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful Windows Apps Tailored for Performance
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Build secure, scalable, and feature-rich desktop applications for Windows that drive productivity, innovation, and enterprise success.
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Get a Custom Windows App
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                  <Monitor className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Delivering Business-Driven Windows Applications</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in crafting custom Windows desktop applications that align with your workflow, business goals, and user expectations. From legacy app modernization to enterprise-grade software, our Windows app solutions bring speed, security, and seamless performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Windows App Development Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Serving Diverse Industries Across the Windows Ecosystem</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <industry.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us for Windows App Development?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <reason.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Windows App Development Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results with Windows Applications</h2>
          </div>
          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <TrendingUp className="w-16 h-16 text-primary mb-4 mx-auto" />
              <CardTitle className="text-2xl text-center">Manufacturing ERP Success Story</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-center">
                "We developed a custom desktop ERP system for a manufacturing company, resulting in a 45% boost in operational efficiency and faster reporting workflows."
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Build Your Custom Windows Application
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get in touch to create a powerful, secure, and modern desktop application tailored to your business.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Request a Quote
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WindowsAppDevelopment;