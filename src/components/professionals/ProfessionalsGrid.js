'use client';

import { Star, MapPin, Camera, Heart, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const PROFESSIONALS = [
  {
    id: 1,
    name: "Alex Visuals",
    specialty: "Wedding Photography",
    rating: 4.9,
    reviews: 127,
    location: "Lagos",
    price: "₦75,000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    portfolio: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=150&fit=crop"
    ],
    verified: true,
    responseTime: "< 1 hour"
  },
  {
    id: 2,
    name: "Lagos Lens Studio",
    specialty: "Corporate Photography",
    rating: 4.8,
    reviews: 89,
    location: "Victoria Island",
    price: "₦125,000",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    portfolio: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=150&fit=crop"
    ],
    verified: true,
    responseTime: "< 30 mins"
  },
  {
    id: 3,
    name: "Abuja Films",
    specialty: "Event Videography",
    rating: 4.7,
    reviews: 156,
    location: "Abuja",
    price: "₦200,000",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    portfolio: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=200&h=150&fit=crop"
    ],
    verified: true,
    responseTime: "< 2 hours"
  },
  {
    id: 4,
    name: "Portrait Pro",
    specialty: "Portrait Photography",
    rating: 4.9,
    reviews: 95,
    location: "Ikeja",
    price: "₦45,000",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    portfolio: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=150&fit=crop"
    ],
    verified: true,
    responseTime: "< 1 hour"
  },
  {
    id: 5,
    name: "Creative Vision",
    specialty: "Fashion Photography",
    rating: 4.8,
    reviews: 112,
    location: "Lekki",
    price: "₦90,000",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    portfolio: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=150&fit=crop"
    ],
    verified: true,
    responseTime: "< 45 mins"
  },
  {
    id: 6,
    name: "Studio Nine",
    specialty: "Product Photography",
    rating: 4.6,
    reviews: 78,
    location: "Surulere",
    price: "₦55,000",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
    portfolio: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=150&fit=crop"
    ],
    verified: true,
    responseTime: "< 3 hours"
  }
];

export default function ProfessionalsGrid() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-16" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROFESSIONALS.map((pro, index) => (
            <div 
              key={pro.id}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/professional/${pro.id}`} className="block group">
                <div 
                  className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  style={{ 
                    backgroundColor: theme.colors.bg.primary,
                    border: `1px solid ${theme.colors.border}`,
                    boxShadow: theme.boxShadow.card
                  }}
                >
                  
                  {/* Profile Section */}
                  <div className="relative h-48">
                    <img 
                      src={pro.image} 
                      alt={pro.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {pro.verified && (
                        <div 
                          className="px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                          style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
                        >
                          <Award className="w-3 h-3" />
                          Verified
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div 
                        className="px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                        style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}
                      >
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        {pro.rating}
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{pro.name}</h3>
                      <p className="text-sm opacity-90">{pro.specialty}</p>
                    </div>
                  </div>

                  {/* Portfolio Preview */}
                  <div className="grid grid-cols-3 gap-0 h-24">
                    {pro.portfolio.slice(0, 3).map((img, imgIndex) => (
                      <div key={imgIndex} className="relative overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${pro.name} work ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {imgIndex === 2 && pro.portfolio.length > 3 && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-semibold">
                            +{pro.portfolio.length - 2}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm" style={{ color: theme.colors.text.secondary }}>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{pro.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{pro.responseTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                          {pro.price}
                        </div>
                        <div className="text-xs" style={{ color: theme.colors.text.muted }}>starting from</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>
                          {pro.reviews} reviews
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(pro.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className={`text-center mt-16 transition-all duration-700 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button 
            className="px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            style={{ 
              backgroundColor: 'transparent',
              color: theme.colors.copper.DEFAULT,
              border: `2px solid ${theme.colors.copper.DEFAULT}`
            }}
          >
            Load More Professionals
          </button>
        </div>
      </div>
    </section>
  );
}