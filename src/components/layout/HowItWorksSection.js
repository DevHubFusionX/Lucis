'use client';

import { Search, Bell, Camera, ArrowRight } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function HowItWorksSection() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const steps = [
    {
      icon: Search,
      title: 'Search Nearby',
      description: 'Use smart filters for skills, style, date, and distance.'
    },
    {
      icon: Bell,
      title: 'Book & Get Confirmed',
      description: 'Instant notification when they accept or reject.'
    },
    {
      icon: Camera,
      title: 'Get Captured',
      description: 'Rate, comment, and save memories securely.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>How It</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Works</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Simple, fast, and in your control — 3 easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="relative">
                <div className={`text-center transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 200}ms` }}>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
                      style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                      {step.title}
                    </h3>
                    <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 z-10">
                    <ArrowRight 
                      className="w-8 h-8" 
                      style={{ color: theme.colors.copper.DEFAULT }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 ease-out delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}