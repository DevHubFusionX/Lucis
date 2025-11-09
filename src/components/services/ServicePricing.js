'use client';

import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const PRICING_TIERS = [
  {
    name: 'Basic',
    icon: Zap,
    price: '₦45,000',
    period: 'starting from',
    description: 'Perfect for simple shoots and basic coverage',
    features: [
      '2-hour session',
      '50+ edited photos',
      'Online gallery',
      'Basic retouching',
      '48-hour delivery'
    ],
    popular: false
  },
  {
    name: 'Professional',
    icon: Star,
    price: '₦125,000',
    period: 'starting from',
    description: 'Ideal for events and professional shoots',
    features: [
      '6-hour coverage',
      '200+ edited photos',
      'Premium online gallery',
      'Advanced retouching',
      '24-hour delivery',
      'Print release included'
    ],
    popular: true
  },
  {
    name: 'Premium',
    icon: Crown,
    price: '₦300,000',
    period: 'starting from',
    description: 'Complete coverage with cinematic quality',
    features: [
      'Full day coverage',
      '500+ edited photos',
      '4K video highlights',
      'Professional retouching',
      'Same-day preview',
      'Print release included',
      'Second photographer'
    ],
    popular: false
  }
];

export default function ServicePricing() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            Service <span style={{ color: theme.colors.copper.DEFAULT }}>Pricing</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Transparent pricing for professional photography and videography services
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative rounded-3xl p-8 transition-all duration-700 ease-out hover:scale-105 ${
                tier.popular ? 'ring-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                backgroundColor: tier.popular ? theme.colors.copper[50] : theme.colors.seaMist[25],
                border: `1px solid ${tier.popular ? theme.colors.copper.DEFAULT : theme.colors.border}`,
                ringColor: tier.popular ? theme.colors.copper.DEFAULT : 'transparent',
                transitionDelay: `${index * 150}ms`
              }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: theme.colors.copper[100] }}
                >
                  {React.createElement(tier.icon, { className: "w-8 h-8", style: { color: theme.colors.copper.DEFAULT } })}
                </div>
                
                <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                  {tier.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>
                  {tier.description}
                </p>
                
                <div className="mb-2">
                  <span className="text-4xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>
                    {tier.price}
                  </span>
                </div>
                <div className="text-sm" style={{ color: theme.colors.text.muted }}>
                  {tier.period}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: theme.colors.copper.DEFAULT }} />
                    <span style={{ color: theme.colors.text.secondary }}>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg ${
                  tier.popular ? 'text-white' : ''
                }`}
                style={{ 
                  backgroundColor: tier.popular ? theme.colors.copper.DEFAULT : theme.colors.seaMist[100],
                  color: tier.popular ? 'white' : theme.colors.text.primary,
                  border: tier.popular ? 'none' : `1px solid ${theme.colors.border}`
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-lg mb-6" style={{ color: theme.colors.text.secondary }}>
            Need a custom package? We'll create a solution that fits your specific needs.
          </p>
          <button 
            className="px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            style={{ 
              backgroundColor: 'transparent',
              color: theme.colors.copper.DEFAULT,
              border: `2px solid ${theme.colors.copper.DEFAULT}`
            }}
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}