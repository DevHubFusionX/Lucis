'use client';

import { Search, MapPin, Filter } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function ProfessionalsHero() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="pt-32 pb-16" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className="text-5xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
            Find Your Perfect <span style={{ color: theme.colors.copper.DEFAULT }}>Professional</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Browse 5,000+ verified photographers and videographers across Nigeria
          </p>
        </div>

        {/* Search Bar */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div 
            className="flex flex-col md:flex-row gap-4 p-6 rounded-2xl"
            style={{ backgroundColor: theme.colors.seaMist[50], border: `1px solid ${theme.colors.border}` }}
          >
            
            {/* Service Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.text.muted }} />
              <input
                type="text"
                placeholder="Search by service type..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:outline-none"
                style={{ 
                  backgroundColor: theme.colors.bg.primary,
                  color: theme.colors.text.primary,
                  focusRingColor: theme.colors.copper.DEFAULT
                }}
              />
            </div>

            {/* Location Search */}
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.text.muted }} />
              <input
                type="text"
                placeholder="Location..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:outline-none"
                style={{ 
                  backgroundColor: theme.colors.bg.primary,
                  color: theme.colors.text.primary,
                  focusRingColor: theme.colors.copper.DEFAULT
                }}
              />
            </div>

            {/* Search Button */}
            <button 
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-700 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {[
            { number: '5,000+', label: 'Professionals' },
            { number: '50K+', label: 'Happy Clients' },
            { number: '4.9★', label: 'Average Rating' },
            { number: '100%', label: 'Verified' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: theme.colors.copper.DEFAULT }}>
                {stat.number}
              </div>
              <div className="text-sm" style={{ color: theme.colors.text.secondary }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}