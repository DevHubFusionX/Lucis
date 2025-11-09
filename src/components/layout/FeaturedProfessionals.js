'use client';

import { Star, MapPin, CheckCircle, Camera, Video, Award } from 'lucide-react';
import Link from 'next/link';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const FEATURED_PROS = [
  {
    id: 1,
    name: "Alex Visuals",
    skills: ["Wedding", "Portrait"],
    rating: 4.9,
    reviews: 127,
    location: "Lagos",
    badge: "Top Rated",
    verified: true,
    type: "photographer",
    image: "/professional-1.jpg"
  },
  {
    id: 2,
    name: "Lagos Lens Studio",
    skills: ["Corporate", "Event"],
    rating: 4.8,
    reviews: 89,
    location: "Victoria Island",
    badge: "Most Booked",
    verified: true,
    type: "photographer",
    image: "/professional-2.jpg"
  },
  {
    id: 3,
    name: "Abuja Films",
    skills: ["Event Video", "Wedding"],
    rating: 4.7,
    reviews: 156,
    location: "Abuja",
    badge: "New Talent",
    verified: true,
    type: "videographer",
    image: "/professional-3.jpg"
  },
  {
    id: 4,
    name: "Portrait Pro",
    skills: ["Portrait", "Fashion"],
    rating: 4.9,
    reviews: 95,
    location: "Ikeja",
    badge: "Top Rated",
    verified: true,
    type: "photographer",
    image: "/professional-4.jpg"
  }
];

export default function FeaturedProfessionals() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <section ref={sectionRef} className="py-24" style={{ backgroundColor: theme.colors.lightBlue[50] }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm mb-4" style={{ borderColor: theme.colors.ocean[200] }}>
            <Award className="w-4 h-4" style={{ color: theme.colors.ocean.DEFAULT }} />
            <span className="text-sm font-bold uppercase tracking-wide" style={{ color: theme.colors.ocean.DEFAULT }}>
              Top Professionals
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span style={{ color: theme.colors.text.primary }}>Meet Our</span>{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${theme.colors.ocean.DEFAULT} 0%, ${theme.colors.turquoise.DEFAULT} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              Featured Experts
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Handpicked professionals with proven track records and exceptional reviews
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FEATURED_PROS.map((pro, index) => {
            const IconComponent = pro.type === 'photographer' ? Camera : Video;
            
            return (
              <div key={pro.id} className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                
                <div className="bg-white rounded-2xl p-6 shadow-md border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: theme.colors.lightBlue[200] }}>
                  
                  {/* Profile Photo & Badge */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-2xl mx-auto overflow-hidden shadow-lg">
                      <img 
                        src={pro.image} 
                        alt={pro.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Verified Badge */}
                    {pro.verified && (
                      <div className="absolute top-0 right-8 w-7 h-7 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: theme.colors.coral.DEFAULT }}>
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full" style={{ 
                      backgroundColor: pro.badge === 'Top Rated' ? theme.colors.coral[100] : 
                                     pro.badge === 'Most Booked' ? '#D1FAE5' : '#EDE9FE',
                      color: pro.badge === 'Top Rated' ? theme.colors.coral.DEFAULT : 
                             pro.badge === 'Most Booked' ? '#059669' : '#7C3AED'
                    }}>
                      {pro.badge}
                    </span>
                  </div>

                  {/* Name & Skills */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                      {pro.name}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {pro.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 text-xs font-medium rounded-lg" style={{ 
                          backgroundColor: theme.colors.lightBlue[100], 
                          color: theme.colors.ocean.DEFAULT
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating & Location */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 bg-yellow-50 rounded-lg py-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-bold text-lg" style={{ color: theme.colors.text.primary }}>
                        {pro.rating}
                      </span>
                      <span className="text-sm" style={{ color: theme.colors.text.muted }}>
                        ({pro.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" style={{ color: theme.colors.ocean.DEFAULT }} />
                      <span className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>
                        {pro.location}
                      </span>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <button 
                    className="w-full py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-md"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors.ocean.DEFAULT} 0%, ${theme.colors.turquoise.DEFAULT} 100%)`,
                      color: 'white'
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 ease-out delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link
            href="/search"
            className="inline-block px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[600]} 100%)`,
              color: 'white'
            }}
          >
            Explore All Professionals →
          </Link>
        </div>
      </div>
    </section>
  );
}