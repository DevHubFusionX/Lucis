'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ProfessionalsHero from '../../components/professionals/ProfessionalsHero';
import ProfessionalsGrid from '../../components/professionals/ProfessionalsGrid';
import ProfessionalsFilters from '../../components/professionals/ProfessionalsFilters';

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ProfessionalsHero />
        <ProfessionalsFilters />
        <ProfessionalsGrid />
      </main>
      <Footer />
    </div>
  );
}