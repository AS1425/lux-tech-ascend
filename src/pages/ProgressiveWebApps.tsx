import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Smartphone, 
  Wifi, 
  Download, 
  Bell, 
  DollarSign,
  Search,
  Palette,
  Code,
  TestTube,
  RotateCcw,
  HeadphonesIcon,
  CheckCircle,
  Globe,
  Zap,
  Shield
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "PWA Strategy & Consultation",
    description: "Expert guidance on PWA implementation strategy and technical architecture planning."
  },
  {
    icon: Palette,
    title: "UI/UX Design for PWAs",
    description: "Creating intuitive, app-like interfaces optimized for progressive web experiences."
  },
  {
    icon: Code,
    title: "Custom PWA Development",
    description: "Building feature-rich PWAs with service workers, offline capabilities, and modern web APIs."
  },
  {
    icon: TestTube,
    title: "PWA Testing & Optimization",
    description: "Comprehensive testing across devices and browsers to ensure optimal performance."
  },
  {
    icon: RotateCcw,
    title: "Migration to PWA",
    description: "Seamlessly converting existing websites and apps into progressive web applications."
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support & Maintenance",
    description: "Continuous updates, performance monitoring, and feature enhancements for your PWA."
  }
];

const highlights = [
  {
    icon: Wifi,
    title: "Offline Functionality",
    description: "Users can access your app even without internet."
  },
  {
    icon: Smartphone,
    title: "App-Like Experience",
    description: "PWAs mimic the performance and look of native apps."
  },
  {
    icon: Download,
    title: "No App Store Hassles",
    description: "Instantly installable from the browser — no approvals needed."
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Keep users engaged with timely updates and alerts."
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "One codebase for all platforms = reduced development time."
  }
];

const processSteps = [
  {
    icon: Search,
    title: "Requirements Analysis",
    description: "Understanding your business needs and PWA objectives"
  },
  {
    icon: Palette,
    title: "Wireframing & UI/UX",
    description: "Designing user-centric interfaces for optimal experience"
  },
  {
    icon: Code,
    title: "PWA Development",
    description: "Building with modern web technologies and service workers"
  },
  {
    icon: TestTube,
    title: "Testing Across Devices",
    description: "Ensuring compatibility and performance on all platforms"
  },
  {
    icon: Globe,
    title: "Deployment & Launch",
    description: "Going live with comprehensive monitoring setup"
  },
  {
    icon: HeadphonesIcon,
    title: "Post-launch Support",
    description: "Ongoing maintenance and feature enhancements"
  }
];

const ProgressiveWebApps: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Progressive Web Apps Development
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Progressive Web Apps Development
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Fast. Reliable. Engaging. We build progressive web apps that combine the best of web and mobile experiences.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Let's Build Your PWA
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Future of App Development
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Progressive Web Apps (PWAs) are the future of app development — offering users a seamless, app-like experience directly from the browser. We help businesses deliver offline-ready, installable, fast-loading apps with minimal development cost.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Service Workers</Badge>
                <Badge variant="secondary">Offline Support</Badge>
                <Badge variant="secondary">Push Notifications</Badge>
                <Badge variant="secondary">Installable</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Globe className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Progressive Web Apps?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages that make PWAs the perfect choice for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our PWA Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our PWA Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive PWA development services to transform your digital presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering high-quality progressive web applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about Progressive Web App development
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How are PWAs different from native apps?</AccordionTrigger>
              <AccordionContent>
                PWAs are web apps with app-like features but don't require downloading from an app store. They run in browsers but offer native-like experiences including offline functionality, push notifications, and device integration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Will users be able to install my PWA?</AccordionTrigger>
              <AccordionContent>
                Yes! Users can "Add to Home Screen" directly from their browser on both mobile and desktop devices. The PWA will appear like a native app with its own icon and launch experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are PWAs supported by all browsers?</AccordionTrigger>
              <AccordionContent>
                Most modern browsers support PWAs, including Chrome, Edge, Safari, and Firefox. While feature support may vary slightly between browsers, core PWA functionality is widely supported.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I convert my existing website into a PWA?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We assess your current architecture and apply the best PWA migration path. This typically involves adding service workers, a web app manifest, and optimizing for performance and offline functionality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do PWAs support push notifications?</AccordionTrigger>
              <AccordionContent>
                Yes, for supported browsers, we integrate service workers to enable push alerts. Users can receive notifications even when the PWA isn't actively open, helping maintain engagement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Build a Seamless Web Experience for All Devices
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's work together to build a fast, reliable, and engaging progressive web app for your business.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Request a Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProgressiveWebApps;