'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/layout/HeroSection';
import PopularCategories from '../../components/layout/PopularCategories';
import NotificationSection from '../../components/layout/AboutSection';
import FeaturedProfessionals from '../../components/layout/FeaturedProfessionals';
import HowItWorksSection from '../../components/layout/HowItWorksSection';
import TestimonialsSection from '../../components/layout/TestimonialsSection';
import CTASection from '../../components/layout/CTASection';
import Footer from '../../components/layout/Footer';
import LoadingScreen from '../../components/ui/LoadingScreen';
import { theme } from '../../lib/theme';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasVisited', 'true');
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div 
      className={`min-h-screen transition-opacity duration-500 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: theme.colors.seaMist[25] }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <PopularCategories />
        <NotificationSection />
        <FeaturedProfessionals />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}