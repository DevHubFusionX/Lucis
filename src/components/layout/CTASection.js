'use client';

import { useState, useEffect, useRef } from 'react';
import { theme } from '../../lib/theme';
import { Button } from '../ui/Button';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 text-center"
      style={{ backgroundColor: theme.colors.copper.DEFAULT }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Your story deserves the best lens.
            <br />
            Find your photographer today.
          </h2>
          
          <button 
            onClick={() => window.location.href = '/search'}
            className="px-12 py-4 text-xl font-semibold bg-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ color: theme.colors.copper.DEFAULT }}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}