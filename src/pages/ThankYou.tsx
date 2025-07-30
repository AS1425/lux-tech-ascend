import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, Clock, Sparkles } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Thank You for Reaching Out – Lux Tech Ascend';
    
    const existingMeta = document.querySelector('meta[name="description"]');
    if (existingMeta) {
      existingMeta.setAttribute('content', 'We\'ve received your message and will be in touch within 24 hours. Explore our services and discover how we can help.');
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        {/* Floating AI Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 animate-float-slow" aria-hidden="true">
            <MessageCircle className="w-8 h-8 text-primary/30 drop-shadow-lg" />
          </div>
          <div className="absolute top-40 right-32 animate-float-medium" aria-hidden="true">
            <CheckCircle className="w-6 h-6 text-accent/40 drop-shadow-lg" />
          </div>
          <div className="absolute bottom-40 left-32 animate-float-fast" aria-hidden="true">
            <Clock className="w-7 h-7 text-primary/25 drop-shadow-lg" />
          </div>
          <div className="absolute bottom-32 right-20 animate-float-slow" aria-hidden="true">
            <Sparkles className="w-5 h-5 text-accent/35 drop-shadow-lg" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-medium delay-1000 hidden md:block" aria-hidden="true">
            <MessageCircle className="w-5 h-5 text-primary/20 drop-shadow-lg" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-float-slow delay-2000 hidden lg:block" aria-hidden="true">
            <Sparkles className="w-4 h-4 text-accent/25 drop-shadow-lg" />
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
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  onClick={() => window.location.href = '/#services'}
                  aria-label="Explore our services section"
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
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 ring-4 ring-green-500/20 animate-pulse">
                  <CheckCircle className="w-10 h-10 text-white drop-shadow-lg" />
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
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => window.location.href = '/contact-us'}
              aria-label="Navigate to contact us page"
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
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-float-slow,
          .animate-float-medium,
          .animate-float-fast {
            animation-duration: 4s;
            transform-origin: center;
          }
          
          .animate-float-slow {
            animation-delay: 0s;
          }
          
          .animate-float-medium {
            animation-delay: 1s;
          }
          
          .animate-float-fast {
            animation-delay: 2s;
          }
        }
        `
      }} />
    </Layout>
  );
};

export default ThankYou;