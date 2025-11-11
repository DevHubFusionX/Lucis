'use client';

import { Shield, Clock, Star, Zap } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const features = [
  {
    icon: Shield,
    title: 'Verified Professionals',
    description: 'Every photographer is thoroughly vetted and background-checked for your peace of mind.'
  },
  {
    icon: Clock,
    title: 'Instant Booking',
    description: 'Book in minutes with real-time availability and instant confirmation.'
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description: 'All work is backed by our satisfaction guarantee and professional standards.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Receive your edited photos within days, not weeks.'
  }
];

export default function NotificationSection() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className={`text-center mb-20 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Built for Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const positions = [
              'md:translate-y-0',
              'md:translate-y-12',
              'md:translate-y-12',
              'md:translate-y-0'
            ];
            return (
              <div
                key={feature.title}
                className={`group relative transition-all duration-700 ease-out ${
                  positions[index]
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl">
                  <div className="absolute top-8 right-8 w-20 h-20 bg-gray-900 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base font-light text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}