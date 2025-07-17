import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, Zap, Shield, MessageSquare, Users, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    projectBudget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        fullName: '',
        workEmail: '',
        companyName: '',
        projectBudget: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-manrope mb-8">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Have a project in mind or a challenge to solve? Let's talk about how our AI-first solutions can help accelerate your growth.
          </p>
        </div>
      </section>

      {/* Interactive Globe Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative max-w-2xl mx-auto">
            {/* Globe Illustration */}
            <div className="relative w-80 h-80 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <Globe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-primary" />
              
              {/* Floating dots for global presence */}
              <div className="absolute top-16 left-20 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-16 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-24 left-24 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-32 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-24 right-32 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              We work with clients across the globe
            </h2>
            <p className="text-lg text-muted-foreground">
              From startups to Fortune 500 companies, we deliver AI solutions worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="glass p-8 md:p-12 rounded-3xl border border-primary/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Let's Start Something Amazing
                </h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground"
                        placeholder="Full Name *"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground"
                        placeholder="Work Email *"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground"
                        placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <select
                        name="projectBudget"
                        value={formData.projectBudget}
                        onChange={handleInputChange}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary focus:outline-none transition-colors text-lg text-muted-foreground"
                      >
                        <option value="">Project Budget</option>
                        <option value="<10k">&lt;$10K</option>
                        <option value="10k-25k">$10K–$25K</option>
                        <option value="25k-50k">$25K–$50K</option>
                        <option value="50k+">$50K+</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-muted-foreground/30 focus:border-primary focus:outline-none transition-colors text-lg placeholder:text-muted-foreground resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full glass px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg transition-all duration-300 flex items-center justify-center mt-8 ${
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
                          Let's Talk
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - AI Illustration */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* AI Brain Illustration */}
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 glass border border-primary/20">
                    {/* Central AI Icon */}
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-6 mb-6">
                        <MessageSquare className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">AI-Powered Solutions</h3>
                      <p className="text-muted-foreground">Transform your business with cutting-edge technology</p>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-8">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                        <Shield className="w-6 h-6 text-secondary" />
                      </div>
                    </div>

                    <div className="absolute top-1/2 left-4">
                      <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center animate-pulse">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    <div className="absolute top-1/3 right-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                        <Globe className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Not ready to chat? Learn more about how we help businesses grow with AI.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our comprehensive AI services and discover how we can transform your business.
          </p>
          <a
            href="/ai-development"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 pulse-glow"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;