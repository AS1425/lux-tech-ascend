
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '../components/HeroSection';

import WorkflowSection from '../components/WorkflowSection';
import BlogInsightsSection from '../components/BlogInsightsSection';
import TechStackSection from '../components/TechStackSection';
import IndustrySection from '../components/IndustrySection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ClientsSection from '../components/ClientsSection';
import ContactSection from '../components/ContactSection';

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
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <TechStackSection />
      <IndustrySection />
      <ContactSection />
      <WorkflowSection />
      <BlogInsightsSection />
      <FloatingChatbot />
    </Layout>
  );
};

export default Index;
