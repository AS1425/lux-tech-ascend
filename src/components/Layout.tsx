import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <Navigation />
      <main className="pt-20 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;