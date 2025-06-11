
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'AI & Machine Learning',
      'Web Development',
      'Digital Transformation',
      'Cybersecurity',
      'Automation Solutions',
      'Data Analytics'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Blog',
      'Case Studies',
      'Contact'
    ],
    resources: [
      'Documentation',
      'API Reference',
      'White Papers',
      'Webinars',
      'Support Center',
      'Community'
    ]
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(180,69,255,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/f93f435b-d0de-41b2-95fb-eb0ea83683c5.png" 
                  alt="Foreignerds" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming businesses through innovative AI and digital solutions. 
                We architect the future of technology, one project at a time.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Github, href: '#', label: 'GitHub' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Contact */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Resources</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.slice(0, 4).map((resource, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Quick Contact */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-primary mr-3" />
                  <span className="text-muted-foreground">hello@foreignerds.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 text-primary mr-3" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-primary mr-3" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary/20 py-8">
          <div className="glass p-8 rounded-3xl border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get the latest insights on AI, technology trends, and industry news.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-muted/30 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <button className="glass px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Foreignerds. All rights reserved. Built with cutting-edge technology.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
