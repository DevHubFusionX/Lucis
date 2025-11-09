'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ServicesHero from '../../components/services/ServicesHero';
import ServiceCategories from '../../components/services/ServiceCategories';
import ServicePricing from '../../components/services/ServicePricing';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesHero />
        <ServiceCategories />
        <ServicePricing />
      </main>
      <Footer />
    </div>
  );
}