'use client';

import React from 'react';
import { Camera, Video, Heart, Briefcase, User, Package, Music, Palette } from 'lucide-react';
import Link from 'next/link';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const SERVICES = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Capture your special day with professional wedding photographers',
    icon: Heart,
    price: 'From ₦75,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    professionals: 850
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional coverage for business events and conferences',
    icon: Briefcase,
    price: 'From ₦125,000',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    professionals: 650
  },
  {
    id: 'portrait',
    title: 'Portrait Photography',
    description: 'Professional headshots and personal portraits',
    icon: User,
    price: 'From ₦45,000',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop',
    professionals: 1200
  },
  {
    id: 'product',
    title: 'Product Photography',
    description: 'High-quality product shots for e-commerce and marketing',
    icon: Package,
    price: 'From ₦55,000',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    professionals: 450
  },
  {
    id: 'event-video',
    title: 'Event Videography',
    description: 'Cinematic coverage of your special events',
    icon: Video,
    price: 'From ₦200,000',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
    professionals: 380
  },
  {
    id: 'music-video',
    title: 'Music Videos',
    description: 'Creative music video production and direction',
    icon: Music,
    price: 'From ₦300,000',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    professionals: 120
  }
];

export default function ServiceCategories() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            Our <span style={{ color: theme.colors.copper.DEFAULT }}>Services</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Professional photography and videography services for every occasion
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured Service - Large */}
          <div className={`md:col-span-2 lg:row-span-2 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <Link href={`/services/${SERVICES[0].id}`} className="block group h-full">
              <div 
                className="relative h-full min-h-[400px] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT}30, transparent), url(${SERVICES[0].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                  >
                    {React.createElement(SERVICES[0].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-3">{SERVICES[0].title}</h3>
                  <p className="text-lg mb-4 opacity-90">{SERVICES[0].description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">{SERVICES[0].price}</div>
                      <div className="text-sm opacity-75">{SERVICES[0].professionals} professionals</div>
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                      Browse Pros
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Regular Service Cards */}
          {SERVICES.slice(1).map((service, index) => (
            <div key={service.id} className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
              <Link href={`/services/${service.id}`} className="block group h-full">
                <div 
                  className="relative h-64 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${theme.colors.seaMist.DEFAULT}40, transparent), url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: theme.colors.seaMist.DEFAULT }}
                    >
                      {React.createElement(service.icon, { className: "w-5 h-5", style: { color: theme.colors.text.primary } })}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold mb-1">{service.title}</h4>
                    <p className="text-sm opacity-90 mb-2">{service.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">{service.price}</span>
                      <span className="opacity-75">{service.professionals} pros</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}