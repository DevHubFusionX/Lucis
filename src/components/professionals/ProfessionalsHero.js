'use client';

import { Search, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function ProfessionalsHero() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            Browse Professionals
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            Find Your Perfect Match
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto">
            5,000+ verified photographers and videographers ready to bring your vision to life.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex flex-col md:flex-row gap-3 p-3 bg-white rounded-2xl shadow-lg">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by service..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-xl transition-all hover:shadow-xl hover:scale-105">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
