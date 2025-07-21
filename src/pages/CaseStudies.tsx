import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ParticleBackground from '@/components/ParticleBackground';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "vedant-artisans",
      projectName: "Vedant Artisans",
      client: "Luxury Furniture Manufacturer",
      category: "eCommerce Development",
      overview: "Custom eCommerce platform for premium handcrafted tables with integrated SEO and conversion optimization to drive luxury furniture sales.",
      challenges: "Required sophisticated product catalog, premium brand positioning, and conversion optimization for high-value luxury items with complex customization options.",
      solutions: "Built custom eCommerce platform with advanced product configurator, implemented comprehensive SEO strategy, and designed conversion-focused user experience.",
      techStack: "WordPress, WooCommerce, Custom PHP, MySQL, Google Analytics, Search Console",
      impact: "Increased online visibility by 300%, improved conversion rate by 45%, and established strong digital presence in luxury furniture market."
    },
    {
      id: "mullanphy-table-leg",
      projectName: "Mullanphy Table Leg",
      client: "Law Enforcement Equipment Manufacturer",
      category: "Branding & SEO",
      overview: "Complete brand transformation and SEO optimization for specialized law enforcement nightstick manufacturer targeting B2B clients.",
      challenges: "Niche market with specific compliance requirements, limited online presence, and need for specialized B2B lead generation in law enforcement sector.",
      solutions: "Comprehensive website revamp, content strategy development, Google My Business optimization, and targeted outreach campaigns for B2B clients.",
      techStack: "WordPress, Custom Theme, Yoast SEO, Google My Business, Content Management System",
      impact: "200% increase in qualified B2B leads, improved search rankings for target keywords, and enhanced brand credibility in law enforcement industry."
    },
    {
      id: "eft-universe",
      projectName: "EFT Universe",
      client: "Wellness Community Platform",
      category: "LMS Development",
      overview: "Comprehensive learning management system and community platform for large wellness community with automated course delivery and member engagement.",
      challenges: "Complex course structure management, member engagement automation, and integration of multiple wellness methodologies into cohesive learning experience.",
      solutions: "Custom LearnDash LMS implementation, automated email marketing sequences, community features, and comprehensive SEO optimization for wellness content.",
      techStack: "WordPress, LearnDash, Mailchimp, BuddyPress, Custom Plugin Development, Advanced Custom Fields",
      impact: "500% increase in course completion rates, 300% growth in community engagement, and 250% improvement in organic search traffic."
    },
    {
      id: "dimartino-law",
      projectName: "DiMartino Law",
      client: "Immigration Law Firm",
      category: "Legal Marketing",
      overview: "Complete digital marketing strategy for US Immigration Law Firm focusing on lead generation, content strategy, and local SEO optimization.",
      challenges: "Competitive legal market, complex immigration law content creation, and need for qualified lead generation in specialized legal services.",
      solutions: "Local SEO optimization, comprehensive blog content strategy, Google Ads campaigns, and strategic backlink building for legal authority.",
      techStack: "WordPress, Local SEO Tools, Google Ads, Content Management, Legal Schema Markup",
      impact: "400% increase in qualified legal consultations, top 3 rankings for key immigration terms, and 350% growth in organic traffic."
    },
    {
      id: "tirupati-herbal",
      projectName: "Tirupati Herbal",
      client: "Herbal Products Manufacturer",
      category: "B2B Website Development",
      overview: "International B2B website development for herbal products manufacturer with custom UI design and comprehensive product catalog management.",
      challenges: "Complex product categorization, international market targeting, B2B functionality requirements, and integration with existing manufacturing processes.",
      solutions: "Custom WordPress development, advanced product filtering, B2B pricing structures, international shipping integration, and industry-focused content strategy.",
      techStack: "WordPress, Custom Theme Development, WooCommerce B2B, Multi-language Support, Custom Product Catalog",
      impact: "300% increase in international inquiries, 250% improvement in B2B lead quality, and expanded market reach to 15+ countries."
    },
    {
      id: "jwd-bright",
      projectName: "JWD Bright",
      client: "Steel Bar Supplier",
      category: "Industrial Web Development",
      overview: "Complete branding and landing page development for steel bar supplier with industry-focused SEO and B2B lead generation optimization.",
      challenges: "Competitive industrial market, technical product specifications presentation, and need for B2B trust building in steel supply industry.",
      solutions: "Professional logo design, conversion-optimized landing page, technical product showcases, and industry-specific SEO strategy targeting steel suppliers.",
      techStack: "Custom HTML/CSS, WordPress, Technical Schema Markup, Industry-specific SEO Tools",
      impact: "200% increase in B2B inquiries, improved brand recognition in steel industry, and enhanced digital presence for industrial clients."
    }
  ];

  const featuredProjects = [
    {
      title: "EFT Universe LMS",
      result: "500% increase in course completion",
      image: "/api/placeholder/400/250",
      category: "Learning Management"
    },
    {
      title: "DiMartino Law SEO",
      result: "400% growth in legal consultations",
      image: "/api/placeholder/400/250",
      category: "Legal Marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Case Studies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore real-world digital success stories built by our team. From AI solutions to custom development, see how we transform businesses.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Let's Build Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Success Stories Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting our most impactful projects that delivered exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Tirupati Herbal */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">B2B Manufacturing</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tirupati Herbal Website & SEO</h3>
                <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  200% increase in B2B lead inquiries
                </div>
              </div>
            </div>

            {/* Remote StacX Automation */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">Internal Automation</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-based Hiring Automation</h3>
                <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Reduced onboarding time by 70%
                </div>
              </div>
            </div>

            {/* Vedant Artisans */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">E-Commerce Growth</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Epoxy Tables Ad Campaign</h3>
                <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  300% growth in paid ad conversions
                </div>
              </div>
            </div>

            {/* Citadel NYC */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">Real Estate Lead Gen</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IDX SEO Optimization</h3>
                <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  65% boost in organic search leads
                </div>
              </div>
            </div>

            {/* AeroVersa */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">Aviation Careers</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Platform Launch</h3>
                <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  1,000+ signups in first 30 days
                </div>
              </div>
            </div>

            {/* Hansem Global */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">B2B Localization</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO & Content Funnel</h3>
                <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  125+ qualified B2B leads
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Accordion */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive deep into our project methodologies, challenges overcome, and measurable results delivered.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {caseStudies.map((study) => (
                <AccordionItem 
                  key={study.id} 
                  value={study.id}
                  className="border-2 rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">{study.projectName}</h3>
                        <p className="text-muted-foreground mt-1">{study.client}</p>
                      </div>
                      <div className="md:ml-4 mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Overview
                          </h4>
                          <p className="text-muted-foreground">{study.overview}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
                            Challenges
                          </h4>
                          <p className="text-muted-foreground">{study.challenges}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                            Solutions Implemented
                          </h4>
                          <p className="text-muted-foreground">{study.solutions}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            Tech Stack Used
                          </h4>
                          <p className="text-muted-foreground">{study.techStack}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                            Impact & Results
                          </h4>
                          <p className="text-muted-foreground">{study.impact}</p>
                        </div>
                        
                        <div className="pt-4">
                          <Button variant="outline" className="w-full">
                            View Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to become our next success story?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your project and create a tailored solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;