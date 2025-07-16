
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrustedBySection from '../components/TrustedBySection';
import WorkflowSection from '../components/WorkflowSection';
import TechStackSection from '../components/TechStackSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ClientsSection from '../components/ClientsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingChatbot from '../components/FloatingChatbot';

const Index = () => {
  useEffect(() => {
    // Update scroll progress
    const updateScrollProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <TechStackSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <ContactSection />
      <WorkflowSection />
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;
