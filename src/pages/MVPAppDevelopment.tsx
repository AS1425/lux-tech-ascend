import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Lightbulb, 
  Pen, 
  Smartphone, 
  Settings, 
  Puzzle, 
  Rocket, 
  TrendingUp, 
  Wrench,
  Clock,
  DollarSign,
  Users,
  Target,
  Shield,
  Zap,
  Brain,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const MVPAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-secondary/20 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Bring Your Product Idea to Life with 
              <span className="text-primary"> MVP App Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Validate your idea fast with a scalable, user-focused MVP that attracts early users and investors.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your MVP Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Rocket className="h-32 w-32 text-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Test, Learn, and Iterate—Without Wasting Time or Budget
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a startup or an enterprise innovating a new product, our MVP development service helps you validate core functionalities quickly. We focus on what matters most—your users, feedback, and future roadmap—so you can launch lean, test fast, and scale smart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core MVP Services */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our MVP Development Services Include
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Product Ideation & Discovery",
                description: "Define your vision, audience, and features with expert consultation.",
                icon: Lightbulb
              },
              {
                title: "Wireframing & UX Prototyping",
                description: "Visualize your MVP using interactive wireframes and UI mockups.",
                icon: Pen
              },
              {
                title: "MVP App Development",
                description: "Develop the core product with essential features and rapid delivery.",
                icon: Smartphone
              },
              {
                title: "Tech Stack Consultation",
                description: "Choose the right architecture and tools for scalable growth.",
                icon: Settings
              },
              {
                title: "Third-Party Integrations",
                description: "Integrate APIs and systems that streamline MVP functionalities.",
                icon: Puzzle
              },
              {
                title: "Launch & Beta Testing",
                description: "Deploy your MVP, gather feedback, and make informed improvements.",
                icon: Rocket
              },
              {
                title: "Iterative Scaling Post-MVP",
                description: "Add features and optimize post-launch based on real user data.",
                icon: TrendingUp
              },
              {
                title: "Support & Maintenance",
                description: "Ensure uptime, performance, and updates as you evolve your product.",
                icon: Wrench
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why MVP First - Accordion */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why MVP First? Validate Before You Scale.
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Faster Time to Market
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Quickly release your product and gain first-mover advantage.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Lower Initial Investment
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Reduce development cost by focusing on core features only.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                User-Driven Product Evolution
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Make data-backed decisions from real user behavior and feedback.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Investor Readiness
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Impress investors with a working prototype and early traction.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Minimized Risk
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Avoid building features that your users don't want or need.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve with MVP Development
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Healthcare",
                description: "HIPAA-compliant MVPs for digital health solutions",
                icon: Shield
              },
              {
                title: "Fintech",
                description: "Secure and scalable MVPs for payment and finance apps",
                icon: DollarSign
              },
              {
                title: "EdTech",
                description: "eLearning platforms and classroom engagement tools",
                icon: Brain
              },
              {
                title: "E-commerce",
                description: "MVPs for niche marketplaces and delivery services",
                icon: Target
              },
              {
                title: "AI & SaaS",
                description: "Platform-first MVPs for AI and B2B tools",
                icon: Zap
              }
            ].map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <industry.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MVP Development Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our MVP Development Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description: "Understanding your vision and market needs"
              },
              {
                step: "02",
                title: "UX/UI Wireframing",
                description: "Creating user-focused designs and prototypes"
              },
              {
                step: "03",
                title: "MVP Development",
                description: "Building core features with agile methodology"
              },
              {
                step: "04",
                title: "Testing & Iteration",
                description: "Quality assurance and performance optimization"
              },
              {
                step: "05",
                title: "Go-to-Market Launch",
                description: "Deploying your MVP to target users"
              },
              {
                step: "06",
                title: "Feedback Integration & Scaling",
                description: "Continuous improvement based on user data"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <span className="inline-block w-12 h-12 bg-primary text-primary-foreground rounded-full text-lg font-bold flex items-center justify-center">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Foreignerds for Your MVP?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Rapid Agile Development",
                description: "Build MVPs in weeks—not months.",
                icon: Clock
              },
              {
                title: "Business-First Thinking",
                description: "Focused on ROI, product-market fit, and real-world outcomes.",
                icon: Target
              },
              {
                title: "Startup & Enterprise Experience",
                description: "Proven success with founders and innovation teams.",
                icon: Users
              },
              {
                title: "Dedicated Support Post-Launch",
                description: "Ongoing help with scaling, updates, and enhancements.",
                icon: HeadphonesIcon
              }
            ].map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <reason.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have an App Idea You Want to Validate Fast?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build your MVP together—efficiently, strategically, and successfully.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Get Your MVP Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How long does it take to develop an MVP?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Typically 6-12 weeks depending on complexity and features. We focus on rapid delivery while maintaining quality.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What technologies do you use?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We use modern, scalable technologies like React, Node.js, Python, and cloud platforms based on your specific needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Do you help after MVP launch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provide ongoing support, feature additions, and scaling assistance based on user feedback and growth needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Can you help refine my MVP idea?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Our discovery phase includes market research, feature prioritization, and user experience optimization.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Will I own the source code?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, you retain full ownership of the source code and intellectual property upon project completion.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Software Development",
                description: "Build scalable, enterprise-grade software solutions",
                link: "/custom-software-development"
              },
              {
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications",
                link: "/mobile-app-development"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design and experience optimization",
                link: "/ui-ux-design"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVPAppDevelopment;