'use client';

import React from 'react';
import { Camera, Video, Users, Star } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function ServicesHero() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="pt-32 pb-20" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h1 className="text-5xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              Professional <span style={{ color: theme.colors.copper.DEFAULT }}>Creative Services</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: theme.colors.text.secondary }}>
              From weddings to corporate events, portraits to product shoots - find the perfect photographer or videographer for any occasion.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>50+</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Service Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>5,000+</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Professionals</div>
              </div>
            </div>
            
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            >
              Browse All Services
            </button>
          </div>

          {/* Right Column - Service Icons */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {[
              { icon: Camera, title: 'Photography', count: '3,000+' },
              { icon: Video, title: 'Videography', count: '2,000+' },
              { icon: Users, title: 'Event Coverage', count: '1,500+' },
              { icon: Star, title: 'Premium Services', count: '500+' }
            ].map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl text-center transition-all hover:scale-105"
                style={{ backgroundColor: theme.colors.seaMist[50], border: `1px solid ${theme.colors.border}` }}
              >
                {React.createElement(service.icon, { className: "w-12 h-12 mx-auto mb-4", style: { color: theme.colors.copper.DEFAULT } })}
                <h3 className="font-bold mb-2" style={{ color: theme.colors.text.primary }}>{service.title}</h3>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{service.count} pros</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}