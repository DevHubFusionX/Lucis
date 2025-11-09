'use client';

import { Camera, Video, Heart, Building, Users, Palette, Sparkles, Award } from 'lucide-react';
import Link from 'next/link';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const CATEGORIES = [
  { 
    icon: Heart, 
    name: 'Wedding Photography', 
    description: 'Capture your special day with stunning photos',
    count: '1,200+', 
    price: 'From $800',
    features: ['4K Quality', 'Same Day Edit', 'Online Gallery'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&crop=center'
  },
  { 
    icon: Video, 
    name: 'Wedding Videography', 
    description: 'Cinematic wedding films that tell your story',
    count: '800+', 
    price: 'From $1,200',
    features: ['4K Video', 'Drone Shots', 'Highlight Reel'],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop&crop=center'
  },
  { 
    icon: Users, 
    name: 'Portrait Sessions', 
    description: 'Professional headshots and family portraits',
    count: '900+', 
    price: 'From $200',
    features: ['Studio/Outdoor', 'Retouching', 'Multiple Looks'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face'
  },
  { 
    icon: Camera, 
    name: 'Event Photography', 
    description: 'Corporate events, parties, and celebrations',
    count: '600+', 
    price: 'From $400',
    features: ['Live Coverage', 'Quick Delivery', 'Group Photos'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop&crop=center'
  }
];

export default function PopularCategories() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
            <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: theme.colors.copper.DEFAULT }}>
              Our Services
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            Professional Photography & Videography
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            From intimate portraits to grand celebrations, our verified professionals deliver exceptional quality for every occasion.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const isLarge = index === 0;
            return (
              <Link
                key={category.name}
                href={`/search?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isLarge ? 'md:col-span-2 md:row-span-2 h-96' : 'h-48'
                }`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                      style={{ backgroundColor: `${theme.colors.copper.DEFAULT}90` }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`font-bold text-white mb-2 ${
                      isLarge ? 'text-2xl' : 'text-lg'
                    }`}>
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-lg">
                        {category.price}
                      </span>
                      <span className="text-sm group-hover:translate-x-1 transition-transform">
                        Browse →
                      </span>
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