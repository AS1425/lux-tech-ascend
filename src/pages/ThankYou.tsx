import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, Clock, Sparkles } from 'lucide-react';

const ThankYou = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        {/* Floating AI Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 animate-float-slow">
            <MessageCircle className="w-8 h-8 text-primary/30" />
          </div>
          <div className="absolute top-40 right-32 animate-float-medium">
            <CheckCircle className="w-6 h-6 text-accent/40" />
          </div>
          <div className="absolute bottom-40 left-32 animate-float-fast">
            <Clock className="w-7 h-7 text-primary/25" />
          </div>
          <div className="absolute bottom-32 right-20 animate-float-slow">
            <Sparkles className="w-5 h-5 text-accent/35" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl">
            {/* Main Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Thank You for Reaching Out!
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We've received your message and our team is already working on it.
              </p>

              <div className="pt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  onClick={() => window.location.href = '/'}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Badge Section */}
      <section className="py-20 bg-gradient-to-r from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 shadow-lg border border-border/50 backdrop-blur-sm">
              {/* Success Icon */}
              <div className="mb-8 animate-scale-in">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Success Message */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Your submission was successful.
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  One of our team members will get in touch with you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to build something extraordinary?
            </h2>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={() => window.location.href = '/contact-us'}
            >
              Let's Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(8deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        `
      }} />
    </Layout>
  );
};

export default ThankYou;