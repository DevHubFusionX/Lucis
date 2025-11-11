'use client';

import { Users, Camera, Star, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const stats = [
  {
    icon: Users,
    number: '50,000+',
    label: 'Happy Clients'
  },
  {
    icon: Camera,
    number: '5,000+',
    label: 'Professionals'
  },
  {
    icon: Star,
    number: '4.9',
    label: 'Average Rating'
  },
  {
    icon: MapPin,
    number: '36',
    label: 'States Covered'
  }
];

export default function AboutStats() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            By The Numbers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-light text-gray-900 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-light text-gray-600">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
