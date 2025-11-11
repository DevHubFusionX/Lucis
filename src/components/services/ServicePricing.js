'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: 'From $200',
    description: 'Perfect for simple shoots',
    features: [
      '2-hour session',
      '50+ edited photos',
      'Online gallery',
      'Basic retouching'
    ]
  },
  {
    name: 'Professional',
    price: 'From $500',
    description: 'Ideal for events',
    features: [
      '6-hour coverage',
      '200+ edited photos',
      'Premium gallery',
      'Advanced retouching',
      '24-hour delivery'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: 'From $1,200',
    description: 'Complete coverage',
    features: [
      'Full day coverage',
      '500+ edited photos',
      '4K video highlights',
      'Professional retouching',
      'Same-day preview',
      'Second photographer'
    ]
  }
];

export default function ServicePricing() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your needs. All prices are starting rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`relative p-8 rounded-3xl bg-white border-2 transition-all duration-300 hover:shadow-2xl ${
                tier.popular ? 'border-gray-900' : 'border-gray-200 hover:border-gray-300'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-full">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm font-light text-gray-600 mb-6">
                    {tier.description}
                  </p>
                  <div className="text-4xl font-light text-gray-900">
                    {tier.price}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
                      <span className="text-sm font-light text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  tier.popular
                    ? 'bg-gray-900 text-white hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-base font-light text-gray-600 mb-6">
            Need a custom package? We'll create a solution that fits your needs.
          </p>
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-light rounded-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-400">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
