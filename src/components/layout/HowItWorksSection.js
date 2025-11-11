'use client';

import { Search, UserCheck, Camera, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'Browse verified professionals in your area with detailed portfolios and reviews.',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop'
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Connect',
    description: 'Book instantly with real-time availability and transparent pricing.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop'
  },
  {
    number: '03',
    icon: Camera,
    title: 'Create',
    description: 'Collaborate with your photographer to capture unforgettable moments.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop'
  }
];

export default function HowItWorksSection() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className={`text-center mb-20 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-gray-400" />
            <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Three simple steps to connect with the perfect creative professional.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Floating number */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center shadow-2xl">
                    <span className="text-3xl font-light text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="max-w-lg">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg font-light text-gray-600 leading-relaxed">
                      {step.description}
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
