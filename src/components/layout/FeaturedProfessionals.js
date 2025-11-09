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
    type: "photographer"
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
    type: "photographer"
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
    type: "videographer"
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
    type: "photographer"
  }
];

export default function FeaturedProfessionals() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <section ref={sectionRef} className="py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Featured</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Professionals</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Discover our top-rated, verified creatives ready to capture your perfect moments.
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
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-2" style={{ borderColor: theme.colors.border }}>
                  
                  {/* Profile Photo & Badge */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                      <IconComponent className="w-10 h-10" style={{ color: theme.colors.copper.DEFAULT }} />
                    </div>
                    
                    {/* Verified Badge */}
                    {pro.verified && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    {/* Dynamic Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ 
                        backgroundColor: pro.badge === 'Top Rated' ? theme.colors.copper.DEFAULT : 
                                       pro.badge === 'Most Booked' ? '#10B981' : '#8B5CF6',
                        color: 'white'
                      }}>
                        {pro.badge}
                      </span>
                    </div>
                  </div>

                  {/* Name & Skills */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                      {pro.name}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-1 mb-3">
                      {pro.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 text-xs rounded-full" style={{ 
                          backgroundColor: theme.colors.seaMist[100], 
                          color: theme.colors.text.secondary 
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating & Location */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold" style={{ color: theme.colors.text.primary }}>
                        {pro.rating}
                      </span>
                      <span className="text-sm" style={{ color: theme.colors.text.muted }}>
                        ({pro.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <MapPin className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
                      <span className="text-sm" style={{ color: theme.colors.text.muted }}>
                        {pro.location}
                      </span>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <button 
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
                    style={{ 
                      backgroundColor: theme.colors.copper.DEFAULT + '10', 
                      color: theme.colors.copper.DEFAULT 
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
            className="inline-block px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
          >
            Explore All Professionals
          </Link>
        </div>
      </div>
    </section>
  );
}