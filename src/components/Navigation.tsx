
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
    'AI & Data': [
      { label: 'AI Development', href: '/ai-development' },
      { label: 'AI Chatbot Development', href: '/ai-chatbot-development' },
      { label: 'AI Agent Development', href: '/ai-agent-development' },
      { label: 'Conversational AI', href: '/conversational-ai' },
      { label: 'Conversation Design', href: '/conversation-design' },
      { label: 'Generative AI Development', href: '/generative-ai-development' },
      { label: 'AI Predictive Analytics', href: '/ai-predictive-analytics' },
      { label: 'LLM Development', href: '/llm-development' },
      { label: 'AI Voice Bots', href: '/ai-voice-bots' },
    ],
    'Consulting': [
      { label: 'Chatbot Consulting', href: '/chatbot-consulting' },
      { label: 'EU Accessibility Act Audit Services for Chatbots', href: '/eu-accessibility-audit' },
      { label: 'AI Consulting', href: '/ai-consulting' },
      { label: 'Generative AI Consulting', href: '/generative-ai-consulting' },
      { label: 'Machine Learning Consulting', href: '/machine-learning-consulting' },
      { label: 'AI Security Consulting', href: '/ai-security-consulting' },
      { label: 'Healthcare AI Consulting', href: '/healthcare-ai-consulting' },
    ],
    'Development': [
      { label: 'Custom Software Development', href: '/custom-software-development' },
      { label: 'Software Product Development', href: '#software-product-development' },
      { label: 'PoC Development Services', href: '/poc-development-services' },
      { label: 'Mobile App Development', href: '/mobile-app-development' },
      { label: 'Connector Development', href: '/connector-development' },
      { label: 'Blockchain Development', href: '/blockchain-development' },
      { label: 'CRM Software Development', href: '/crm-software-development' },
      { label: 'Digital Platform Development', href: '/digital-platform-development' },
    ],
    'Other': [
      { label: 'Business Process Automation', href: '/business-process-automation' },
      { label: 'IT Recruiting Services', href: '/it-recruiting-services' },
      { label: 'Conversational Analytics', href: '/conversational-analytics' },
      { label: 'AI Copilot Development', href: '/ai-copilot-development' },
      { label: 'LLM-Orchestrator Open Source Framework', href: '#llm-orchestrator-framework' },
    ],
  };

  const portfolioItems = [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Client Success Stories', href: '#success-stories' },
    { label: 'Industry Solutions', href: '#industry-solutions' },
    { label: 'Product Demos', href: '#demos' },
  ];

  const resourcesItems = [
    { label: 'Blog', href: '#blog' },
    { label: 'Whitepapers', href: '#whitepapers' },
    { label: 'Webinars', href: '#webinars' },
    { label: 'AI Guides', href: '#guides' },
  ];

  const companyItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Mission & Vision', href: '#mission' },
    { label: 'Contact', href: '#contact' },
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
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark backdrop-blur-md' : 'bg-transparent'
      }`}>
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
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[800px] gap-3 p-6 md:grid-cols-4 lg:w-[900px]">
                        {Object.entries(servicesCategories).map(([category, services]) => (
                          <div key={category} className="space-y-3">
                            <h4 className="text-sm font-semibold text-primary border-b border-primary/20 pb-2">
                              {category}
                            </h4>
                            <div className="space-y-1">
                              {services.map((service) => (
                                <NavigationMenuLink
                                  key={service.label}
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
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

                  {/* AI Solutions */}
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#ai-solutions"
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2 rounded-md hover:bg-accent/10"
                    >
                      AI Solutions
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Portfolio Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent">
                      Portfolio
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {portfolioItems.map((item) => (
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

                  {/* Resources Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {resourcesItems.map((item) => (
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

                  {/* Company Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
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

                  {/* Careers */}
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#careers"
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2 rounded-md hover:bg-accent/10"
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
                className="text-foreground hover:text-primary transition-colors"
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

                <a
                  href="#ai-solutions"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  AI Solutions
                </a>

                {/* Mobile Portfolio */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-foreground font-medium">Portfolio</div>
                  {portfolioItems.map((item) => (
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

                {/* Mobile Resources */}
                <div className="space-y-1">
                  <div className="px-3 py-2 text-foreground font-medium">Resources</div>
                  {resourcesItems.map((item) => (
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
