'use client';

import { Star, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const FEATURED_PROS = [
  {
    id: 1,
    name: "Alex Visuals",
    specialty: "Wedding Photography",
    rating: 4.9,
    reviews: 127,
    location: "Lagos",
    image: "/professional-1.jpg"
  },
  {
    id: 2,
    name: "Lagos Lens Studio",
    specialty: "Corporate Events",
    rating: 4.8,
    reviews: 89,
    location: "Victoria Island",
    image: "/professional-2.jpg"
  },
  {
    id: 3,
    name: "Abuja Films",
    specialty: "Cinematic Videos",
    rating: 4.7,
    reviews: 156,
    location: "Abuja",
    image: "/professional-3.jpg"
  }
];

export default function FeaturedProfessionals() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            Featured Talent
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Meet Our Professionals
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Handpicked experts with exceptional portfolios and proven track records.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {FEATURED_PROS.map((pro, index) => (
            <Link
              key={pro.id}
              href="/search"
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-light text-white">
                        {pro.rating} ({pro.reviews})
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-1">
                      {pro.name}
                    </h3>
                    <p className="text-sm font-light text-white/80 mb-3">
                      {pro.specialty}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-light text-white/70">
                      <MapPin className="w-4 h-4" />
                      <span>{pro.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ease-out delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <Link
            href="/search"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span>View All Professionals</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}