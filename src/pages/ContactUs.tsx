import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, MessageSquare, Calendar, Clock, Sparkles, Brain, Cpu, Network, ArrowRight, ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Neural network animation
    const createNeuralNetwork = () => {
      const container = document.querySelector('.neural-network');
      if (!container) return;

      // Create nodes
      for (let i = 0; i < 50; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(node);
      }

      // Create connections
      for (let i = 0; i < 30; i++) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        connection.style.left = Math.random() * 100 + '%';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.width = Math.random() * 200 + 50 + 'px';
        connection.style.transform = `rotate(${Math.random() * 360}deg)`;
        connection.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(connection);
      }
    };

    setTimeout(createNeuralNetwork, 100);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        message: ''
      });
    }, 3000);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* 1. Hero Banner Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
        {/* Neural Network Background */}
        <div className="neural-network absolute inset-0 opacity-30"></div>
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-pulse"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-manrope mb-8">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Have a project in mind, want to collaborate, or just curious? We'd love to hear from you.
            </p>
            
            {/* Floating Icons */}
            <div className="relative max-w-3xl mx-auto mb-12">
              <div className="absolute -top-8 left-1/4 transform -translate-x-1/2 animate-bounce">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="absolute -top-4 right-1/4 transform translate-x-1/2 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center backdrop-blur-sm border border-secondary/30">
                  <Globe className="w-5 h-5 text-secondary" />
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/3 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                  <MessageSquare className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-4 right-1/3 transform translate-x-1/2 animate-bounce" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center backdrop-blur-sm border border-secondary/30">
                  <Cpu className="w-4 h-4 text-secondary" />
                </div>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 pulse-glow shadow-xl"
            >
              Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Contact Options Grid */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Preferred</span> Contact Method
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Contact */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-background to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 glass">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">📧 General Inquiries</h3>
                <p className="text-primary font-semibold text-lg mb-2">hello@example.com</p>
                <p className="text-muted-foreground">Response within 24 hours</p>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-background to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 glass">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-secondary to-primary p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">📞 Call or WhatsApp</h3>
                <p className="text-secondary font-semibold text-lg mb-2">+1 (234) 567-8901</p>
                <p className="text-muted-foreground">Available Mon–Fri, 9 AM–6 PM EST</p>
              </div>
            </div>

            {/* Location */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-background to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 glass">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">📍 Our Location</h3>
                <p className="text-primary font-semibold text-lg mb-2">123 AI Avenue, New York, NY</p>
                <p className="text-muted-foreground">Google Maps link</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Embedded Contact Form Section */}
      <section id="contact-form" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Drop Us a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Message</span>
            </h2>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl border border-primary/20 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-background/50 border border-muted-foreground/20 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground backdrop-blur-sm"
                      placeholder="Name *"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-background/50 border border-muted-foreground/20 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground backdrop-blur-sm"
                      placeholder="Email *"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-background/50 border border-muted-foreground/20 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground backdrop-blur-sm"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-background/50 border border-muted-foreground/20 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg text-foreground backdrop-blur-sm"
                  >
                    <option value="">I'm reaching out about...</option>
                    <option value="project">Project</option>
                    <option value="hiring">Hiring</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-background/50 border border-muted-foreground/20 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground resize-none backdrop-blur-sm"
                    placeholder="Message *"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full glass px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-xl ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 pulse-glow'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6 animate-scale-in" />
                <h3 className="text-3xl font-bold mb-4 text-foreground">Thank You!</h3>
                <p className="text-lg text-muted-foreground">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Calendly / Meeting CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass p-12 rounded-3xl border border-primary/20 shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-5 mb-8">
              <Calendar className="w-full h-full text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Want to Talk <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Now?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-min consultation with our team.
            </p>
            
            <button className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 pulse-glow shadow-xl">
              Schedule a Call
              <Calendar className="ml-2 w-5 h-5" />
            </button>
            
            {/* AI Assistant Illustration */}
            <div className="mt-12 relative">
              <div className="flex justify-center space-x-8">
                <div className="animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Network className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div className="animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust/Partnership Strip */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          {/* Scrolling ticker would go here with client logos */}
          <div className="flex justify-center items-center space-x-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="text-lg font-semibold text-muted-foreground">Fortune 500 Companies</div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="text-lg font-semibold text-muted-foreground">Innovative Startups</div>
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <div className="text-lg font-semibold text-muted-foreground">Global Enterprises</div>
          </div>
        </div>
      </section>

      {/* 6. Final Encouragement CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Prefer email or chat? No problem. We're flexible.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's connect the way that works best for you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-primary/30 text-primary border border-primary/30 font-semibold transition-all duration-300 hover:scale-105 hover:from-primary hover:to-primary hover:text-white backdrop-blur-sm"
            >
              📬 Email Us
            </a>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-secondary/20 to-secondary/30 text-secondary border border-secondary/30 font-semibold transition-all duration-300 hover:scale-105 hover:from-secondary hover:to-secondary hover:text-white backdrop-blur-sm"
            >
              📞 Schedule a Call
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border border-primary/30 font-semibold transition-all duration-300 hover:scale-105 hover:from-primary hover:to-secondary hover:text-white backdrop-blur-sm">
              💬 Start Chat
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;