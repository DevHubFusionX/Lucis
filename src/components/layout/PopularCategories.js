'use client';

import { Camera, Video, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const CATEGORIES = [
  { 
    icon: Heart, 
    name: 'Weddings', 
    description: 'Timeless memories of your special day',
    count: '1,200+',
    image: '/wedding-photography.jpg'
  },
  { 
    icon: Video, 
    name: 'Videography', 
    description: 'Cinematic stories beautifully told',
    count: '800+',
    image: '/wedding-videography.jpg'
  },
  { 
    icon: Users, 
    name: 'Portraits', 
    description: 'Authentic moments, artfully captured',
    count: '900+',
    image: '/portrait-photography.jpg'
  },
  { 
    icon: Camera, 
    name: 'Events', 
    description: 'Every celebration, perfectly documented',
    count: '600+',
    image: '/event-photography.jpg'
  }
];

export default function PopularCategories() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Explore Our Services
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            From intimate moments to grand celebrations, find the perfect professional for your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const layouts = [
              'col-span-12 md:col-span-7 row-span-2',
              'col-span-12 md:col-span-5',
              'col-span-12 md:col-span-5',
              'col-span-12 md:col-span-7'
            ];
            const heights = ['h-[400px] md:h-[600px]', 'h-[300px]', 'h-[300px]', 'h-[300px] md:h-[290px]'];
            
            return (
              <Link
                key={category.name}
                href={`/search?category=${category.name.toLowerCase()}`}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:shadow-2xl ${
                  layouts[index]
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`relative ${heights[index]}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-all" />
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-light text-white/80 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        {category.count}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className={`font-light text-white mb-2 ${
                        index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-sm md:text-base font-light text-white/90 mb-3">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-light text-white group-hover:gap-3 transition-all">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}