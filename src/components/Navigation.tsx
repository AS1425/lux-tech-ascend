
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesCategories = {
    'AI & ML Solutions': [
      { label: 'AI Development', href: '/ai-development' },
      { label: 'Generative AI Development', href: '/generative-ai-development' },
      { label: 'AI Chatbot Development', href: '/ai-chatbot-development' },
      { label: 'AI Agent Development', href: '/ai-agent-development' },
      { label: 'Conversational AI', href: '/conversational-ai' },
      { label: 'Conversation Design', href: '/conversation-design' },
      { label: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
      { label: 'AI Voice Bots', href: '/ai-voice-bots' },
      { label: 'LLM Development', href: '/llm-development' },
      { label: 'LLM-Orchestrator Open Source Framework', href: '/llm-orchestrator' },
    ],
    'AI & Tech Consulting': [
      { label: 'AI Consulting', href: '/ai-consulting' },
      { label: 'Generative AI Consulting', href: '/generative-ai-consulting' },
      { label: 'Chatbot Consulting', href: '/chatbot-consulting' },
      { label: 'Machine Learning Consulting', href: '/machine-learning-consulting' },
      { label: 'AI Security Consulting', href: '/ai-security-consulting' },
      { label: 'Healthcare AI Consulting', href: '/healthcare-ai-consulting' },
      { label: 'IT Consulting Services', href: '/it-consulting-services' },
      { label: 'EU Accessibility Act Audit', href: '/eu-accessibility-audit' },
    ],
    'Software & Product Development': [
      { label: 'Custom Software Development', href: '/custom-software-development' },
      { label: 'Software Product Development', href: '/software-product-development' },
      { label: 'MVP App Development', href: '/mvp-app-development' },
      { label: 'PoC Development Services', href: '/poc-development-services' },
      { label: 'Custom API Development & Integration', href: '/api-development' },
      { label: 'Product Lifecycle Management Services', href: '/product-lifecycle-management' },
      { label: 'Software Deployment Services', href: '/software-deployment' },
      { label: 'Security Compliance Software Development', href: '/security-compliance-software' },
      { label: 'Windows App Development', href: '/windows-app-development' },
    ],
    'Application Development': [
      { label: 'Mobile App Development', href: '/mobile-app-development' },
      { label: 'Web App Development', href: '/web-app-development' },
      { label: 'Cross-Platform Development', href: '/cross-platform-development' },
      { label: 'Progressive Web Apps', href: '/progressive-web-apps' },
      { label: 'UI/UX for Apps', href: '/ui-ux-design' },
    ],
    'Automation & Others': [
      { label: 'Outsourcing', href: '/outsourcing' },
      { label: 'Business Process Automation', href: '/business-process-automation' },
      { label: 'Conversational Analytics', href: '/conversational-analytics' },
      { label: 'AI Copilot Development', href: '/ai-copilot-development' },
      { label: 'Connector Development', href: '/connector-development' },
      { label: 'Resource Augmentation', href: '/resource-augmentation' },
      { label: 'Digital Platform Development', href: '/digital-platform-development' },
    ],
    'Digital Growth & Marketing': [
      { label: 'Lead Generation', href: '/lead-generation' },
      { label: 'Demand Generation', href: '/demand-generation' },
      { label: 'Marketing Automation', href: '/marketing-automation' },
      { label: 'eCommerce Marketing', href: '/ecommerce-marketing' },
      { label: 'Revenue Growth Marketing', href: '/revenue-growth-marketing' },
      { label: 'Growth Marketing', href: '/growth-marketing' },
      { label: 'SaaS Marketing', href: '/saas-marketing' },
      { label: 'For Startups', href: '/marketing-startups' },
      { label: 'For Enterprises', href: '/marketing-enterprises' },
      { label: 'For Agencies', href: '/marketing-agencies' },
    ],
    'Infrastructure & IT Services': [
      { label: 'Managed IT Services', href: '/managed-it-services' },
      { label: 'IT Infrastructure Support Services', href: '/it-infrastructure-support' },
      { label: 'DevOps Consulting', href: '/devops-consulting' },
      { label: 'Backup and Disaster Recovery', href: '/backup-disaster-recovery' },
      { label: 'Migration & Upgrades', href: '/migration-upgrades' },
      { label: 'SLA Support', href: '/sla-support' },
      { label: 'Security & Compliance', href: '/security-compliance' },
    ],
  };

  const industriesWeServeItems = [
    { label: 'Healthcare & AI Consulting', href: '/healthcare-ai-consulting' },
    { label: 'Banking & Financial Services', href: '/industries/banking' },
    { label: 'Insurance', href: '/industries/insurance' },
    { label: 'Ecommerce', href: '/industries/ecommerce' },
    { label: 'Retail & AI Consulting', href: '/industries/retail' },
    { label: 'AI Automotive', href: '/industries/automotive' },
    { label: 'HR & Recruitment', href: '/it-recruiting-services' },
    { label: 'Political Campaigns', href: '/industries/political' },
    { label: 'Aviation', href: '/industries/aviation' },
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'Energy & Utilities', href: '/industries/energy' },
    { label: 'Education & E-Learning', href: '/industries/education' },
    { label: 'Non-Profit & NGOs', href: '/industries/nonprofit' },
    { label: 'Events, Travel & Hospitality', href: '/industries/travel' },
    { label: 'Telecom', href: '/industries/telecom' },
    { label: 'Food & Beverage', href: '/industries/food' },
    { label: 'Construction & Infrastructure', href: '/industries/construction' },
    { label: 'Logistics & Supply Chain', href: '/industries/logistics' },
    { label: 'Gaming & Entertainment', href: '/industries/gaming' },
    { label: 'Airport & Airlines', href: '/industries/airlines' },
    { label: 'Payments & Fintech', href: '/industries/fintech' },
    { label: 'Legal & Compliance', href: '/industries/legal' },
    { label: 'Transportation & Mobility', href: '/industries/transportation' },
  ];

  const companyItems = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Mission & Vision', href: '/mission-vision' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const toggleMobileCategory = (category: string) => {
    setExpandedMobileCategory(expandedMobileCategory === category ? null : category);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{
          transform: `scaleX(${scrolled ? 0.3 : 0})`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/f93f435b-d0de-41b2-95fb-eb0ea83683c5.png" 
                alt="Foreignerds" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-2">
                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                     <NavigationMenuTrigger className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[1200px] gap-4 p-6 grid-cols-7 max-h-[70vh] overflow-y-auto">
                        {Object.entries(servicesCategories).map(([category, services]) => (
                          <div key={category} className="space-y-3">
                            <h4 className="text-sm font-semibold text-primary border-b border-primary/20 pb-2 whitespace-nowrap">
                              {category}
                            </h4>
                            <div className="space-y-1">
                              {services.map((service) => (
                                <NavigationMenuLink
                                  key={service.label}
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-xs"
                                >
                                  {service.label}
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries We Serve Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium bg-transparent">
                      Industries We Serve
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[800px] gap-3 p-4 grid-cols-3 max-h-[70vh] overflow-y-auto">
                        {industriesWeServeItems.map((item) => (
                          <NavigationMenuLink
                            key={item.label}
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.label}</div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Portfolio Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/portfolio"
                      className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                    >
                      Portfolio
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Company Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium bg-transparent">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] gap-3 p-4">
                        {companyItems.map((item) => (
                          <NavigationMenuLink
                            key={item.label}
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.label}</div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Careers Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/careers"
                      className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                    >
                      Careers
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <button className="ml-6 glass px-6 py-2 rounded-full text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 cta-ripple">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-primary transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 glass-dark rounded-lg mt-2 mb-4 max-h-96 overflow-y-auto">
                {/* Mobile Services */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-foreground font-medium">Services</div>
                  {Object.entries(servicesCategories).map(([category, services]) => (
                    <div key={category} className="space-y-1">
                      <button
                        onClick={() => toggleMobileCategory(category)}
                        className="w-full flex items-center justify-between px-6 py-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        {category}
                        <ChevronRight 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            expandedMobileCategory === category ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {expandedMobileCategory === category && (
                        <div className="space-y-1 pl-4">
                          {services.map((service) => (
                            <a
                              key={service.label}
                              href={service.href}
                              className="block px-6 py-1 text-xs text-foreground/70 hover:text-primary transition-colors duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Industries We Serve */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleMobileCategory('Industries We Serve')}
                    className="w-full flex items-center justify-between px-3 py-2 text-foreground font-medium"
                  >
                    Industries We Serve
                    <ChevronRight 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        expandedMobileCategory === 'Industries We Serve' ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {expandedMobileCategory === 'Industries We Serve' && (
                    <div className="space-y-1 pl-4 max-h-60 overflow-y-auto">
                      {industriesWeServeItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-6 py-1 text-xs text-foreground/70 hover:text-primary transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Portfolio */}
                <div className="space-y-1">
                  <a
                    href="/portfolio"
                    className="block px-3 py-2 text-foreground font-medium hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </a>
                </div>

                {/* Mobile Company */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-foreground font-medium">Company</div>
                  {companyItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Mobile Careers */}
                <div className="space-y-1">
                  <a
                    href="/careers"
                    className="block px-3 py-2 text-foreground font-medium hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </a>
                </div>

                <a
                  href="#careers"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </a>

                <div className="px-3 py-2">
                  <button className="w-full glass px-4 py-2 rounded-full text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
