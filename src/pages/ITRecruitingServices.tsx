
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Search, CheckCircle, Clock, Award, Target, Shield, Zap, Settings, Layers, Filter } from 'lucide-react';

const ITRecruitingServices = () => {
  const [activeTab, setActiveTab] = useState('reliability');

  const valueProps = [
    {
      id: 'reliability',
      title: 'Rock-Solid Reliability',
      content: 'Count on us to go the distance. Our unwavering commitment to your success means you always have access to the talent you need when you need it. We\'re not in the business of quick fixes; we\'re building long-term processes to support your brand\'s growth and evolution.',
      icon: Shield
    },
    {
      id: 'custom-fit',
      title: 'A Custom-Fit Approach',
      content: 'No two companies are alike—so why should their recruitment solutions be? We tailor our strategies based on your industry, company culture, and team dynamics to ensure each candidate is a seamless match, both technically and culturally.',
      icon: Settings
    },
    {
      id: 'agile-speed',
      title: 'Agile and Speedy Recruitment',
      content: 'In a competitive market, speed is everything. Our lean recruitment workflows, AI-assisted shortlisting, and curated candidate pipelines drastically cut hiring timelines while preserving quality.',
      icon: Zap
    },
    {
      id: 'precision',
      title: 'Precision Talent Sourcing',
      content: 'We combine data-driven sourcing with expert human insight to identify high-potential candidates who are not only technically skilled but also aligned with your long-term vision.',
      icon: Target
    },
    {
      id: 'screening',
      title: 'Multi-Layered Screening Process',
      content: 'Our comprehensive screening process goes beyond basic skill checks. We include personality profiling, technical assessments, culture-fit evaluation, and background verification to deliver top-tier talent.',
      icon: Filter
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-magenta-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-magenta-400 bg-clip-text text-transparent animate-fade-up">
              IT Recruiting Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Find top-tier IT talent to drive innovation and elevate your business with our specialized recruiting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="group">
                Start Your Recruitment Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is IT Recruiting?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                IT recruiting refers to the process of sourcing, evaluating, and hiring top-tier IT professionals who possess the specialized skills needed to build and support complex technology systems. Whether you're looking for software developers, system administrators, cybersecurity experts, or data scientists, our IT recruiting services ensure that you connect with highly qualified candidates who fit your unique business needs.
              </p>
              <p className="text-lg text-muted-foreground">
                We specialize in providing IT talent for both temporary and permanent roles, delivering skilled professionals who help drive digital transformation and business growth.
              </p>
            </div>
            <div className="relative animate-fade-left">
              <div className="bg-gradient-to-br from-purple-400/20 to-magenta-400/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                    <h3 className="font-semibold">Expert Sourcing</h3>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <Search className="h-8 w-8 mx-auto mb-2 text-magenta-400" />
                    <h3 className="font-semibold">Candidate Evaluation</h3>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                    <h3 className="font-semibold">Quality Screening</h3>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <Target className="h-8 w-8 mx-auto mb-2 text-magenta-400" />
                    <h3 className="font-semibold">Perfect Match</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IT Recruiting is Essential */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              Why IT Recruiting is Crucial for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              As technology continues to evolve, finding the right IT professionals who can align with your business goals and drive innovation is more important than ever. The right IT talent can help streamline processes, improve system efficiency, and support digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skilled Professionals</h3>
              <p className="text-muted-foreground">Access to a pool of skilled professionals well-versed in the latest technologies and industry trends.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-magenta-400 to-magenta-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Placement</h3>
              <p className="text-muted-foreground">Efficiently fill critical IT roles to ensure your business remains competitive in the digital era.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-magenta-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Drive</h3>
              <p className="text-muted-foreground">Connect with professionals who can drive digital transformation and business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              Our IT Recruiting Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              We follow a structured, results-driven approach to connect you with the best IT talent
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Requirement Analysis",
                description: "We begin by understanding your business objectives and the specific technical skills required for the role.",
                icon: Users
              },
              {
                step: "02",
                title: "Talent Sourcing",
                description: "Using targeted outreach, job boards, and our extensive network, we identify top IT talent that matches your needs.",
                icon: Search
              },
              {
                step: "03",
                title: "Candidate Evaluation & Screening",
                description: "We conduct in-depth interviews, skills assessments, and background checks to ensure candidates meet your requirements.",
                icon: CheckCircle
              },
              {
                step: "04",
                title: "Shortlisting & Presentation",
                description: "We provide a shortlist of qualified candidates with detailed profiles for your review and feedback.",
                icon: Target
              },
              {
                step: "05",
                title: "Interview Coordination",
                description: "We schedule interviews with shortlisted candidates and help facilitate the offer and negotiation process.",
                icon: Clock
              },
              {
                step: "06",
                title: "Onboarding & Follow-Up",
                description: "Once hired, we assist with onboarding and provide ongoing support to ensure a smooth transition.",
                icon: Award
              }
            ].map((item, index) => (
              <div key={index} className="relative p-6 bg-muted/50 rounded-lg animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute top-4 right-4 text-2xl font-bold text-purple-400/30">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              Key Benefits of Our IT Recruiting Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Top Talent",
                description: "We have access to a vast network of skilled IT professionals across various industries, ensuring you find the right candidate.",
                icon: Users,
                color: "from-purple-400 to-purple-600"
              },
              {
                title: "Faster Time-to-Hire",
                description: "Our efficient recruitment process helps you fill positions faster, minimizing downtime and keeping projects on track.",
                icon: Clock,
                color: "from-magenta-400 to-magenta-600"
              },
              {
                title: "Industry Expertise",
                description: "Our team specializes in IT recruitment, providing knowledge and resources to source the best tech talent.",
                icon: Award,
                color: "from-purple-400 to-magenta-400"
              },
              {
                title: "Tailored Solutions",
                description: "We work closely with you to understand your unique needs and provide customized recruiting solutions.",
                icon: Target,
                color: "from-purple-500 to-purple-700"
              },
              {
                title: "Quality Screening",
                description: "Comprehensive evaluation ensures candidates meet both technical and cultural requirements for your team.",
                icon: CheckCircle,
                color: "from-magenta-500 to-magenta-700"
              },
              {
                title: "Ongoing Support",
                description: "We provide post-placement support to ensure your new hire integrates successfully into your team.",
                icon: Search,
                color: "from-purple-400 to-magenta-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-background rounded-lg animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              The Value Proposition: What Sets Our IT Recruiting Apart
            </h2>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8">
            {/* Left Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {valueProps.map((prop) => (
                <button
                  key={prop.id}
                  onClick={() => setActiveTab(prop.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeTab === prop.id
                      ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                      : 'bg-background hover:bg-muted text-foreground hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <prop.icon className={`h-5 w-5 ${activeTab === prop.id ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className="font-semibold">{prop.title}</span>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Right Content */}
            <div className="lg:col-span-8">
              <div className="bg-background rounded-xl p-8 shadow-lg h-full">
                {valueProps.map((prop) => (
                  <div
                    key={prop.id}
                    className={`transition-all duration-500 ${
                      activeTab === prop.id ? 'opacity-100 animate-fade-in' : 'opacity-0 hidden'
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <prop.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{prop.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{prop.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {valueProps.map((prop) => (
              <div key={prop.id} className="bg-background rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <prop.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{prop.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{prop.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Partner with Us for IT Recruiting?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With years of experience in IT recruiting, we specialize in connecting businesses with the best IT talent. Our team understands the intricacies of the tech industry and is committed to finding candidates who are not only technically skilled but also culturally fit for your team.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We focus on building long-term partnerships with our clients, offering personalized recruitment services that meet your unique needs. Whether you're hiring for a startup, enterprise, or everything in between, we ensure you have the right IT professionals in place to help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Recruiting Top IT Talent
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Contact Our Experts
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-left">
              <div className="bg-gradient-to-br from-purple-400/20 to-magenta-400/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Years of Experience</h3>
                      <p className="text-sm text-muted-foreground">Deep understanding of tech industry needs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-magenta-400 to-magenta-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Cultural Fit Focus</h3>
                      <p className="text-sm text-muted-foreground">Technical skills + team compatibility</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-magenta-400 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Long-term Partnerships</h3>
                      <p className="text-sm text-muted-foreground">Personalized service for all business sizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-500/10 via-transparent to-magenta-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Ready to Find Your Next IT Star?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Let our expert recruiters connect you with top-tier IT talent that will drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="group">
              Start Recruiting Top IT Talent
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITRecruitingServices;
