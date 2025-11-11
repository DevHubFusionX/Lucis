'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function ServicesHero() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-6 block">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Professional Creative Services for Every Occasion
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
              From intimate portraits to grand celebrations, discover exceptional photographers and videographers ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#categories"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/search"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-light rounded-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-400"
              >
                Find Professionals
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
