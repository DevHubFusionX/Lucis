'use client';

import { Users, Camera, Star, MapPin } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function AboutStats() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Happy Clients',
      description: 'Satisfied customers across Nigeria'
    },
    {
      icon: Camera,
      number: '5,000+',
      label: 'Verified Professionals',
      description: 'Photographers and videographers'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Average Rating',
      description: 'Based on 25,000+ reviews'
    },
    {
      icon: MapPin,
      number: '36',
      label: 'States Covered',
      description: 'Nationwide coverage'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            Our <span style={{ color: theme.colors.copper.DEFAULT }}>Impact</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Numbers that reflect our commitment to connecting Nigeria's creative community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-700 ease-out hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                backgroundColor: theme.colors.seaMist[50],
                border: `1px solid ${theme.colors.border}`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold mb-2" style={{ color: theme.colors.copper.DEFAULT }}>
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                {stat.label}
              </h3>
              
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-700 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div 
            className="p-8 rounded-2xl"
            style={{ backgroundColor: theme.colors.copper[50], border: `1px solid ${theme.colors.copper[200]}` }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Growing Every Day
            </h3>
            <p style={{ color: theme.colors.text.secondary }}>
              Since our launch in 2023, we've facilitated over 100,000 successful bookings and helped 
              thousands of creative professionals build thriving businesses.
            </p>
          </div>
          
          <div 
            className="p-8 rounded-2xl"
            style={{ backgroundColor: theme.colors.seaMist[50], border: `1px solid ${theme.colors.border}` }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Trusted Platform
            </h3>
            <p style={{ color: theme.colors.text.secondary }}>
              Our secure payment system, comprehensive verification process, and 24/7 customer support 
              have earned the trust of Nigeria's creative community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}