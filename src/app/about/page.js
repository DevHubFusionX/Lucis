'use client';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import AboutHero from '../../components/about/AboutHero';
import AboutMission from '../../components/about/AboutMission';
import AboutTeam from '../../components/about/AboutTeam';
import AboutStats from '../../components/about/AboutStats';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutStats />
        <AboutTeam />
      </main>
      <Footer />
    </div>
  );
}