
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

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
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="glass px-6 py-2 rounded-full text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 glass-dark rounded-lg mt-2 mb-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
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
