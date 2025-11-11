'use client';

import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const team = [
  {
    name: 'Adebayo Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Kemi Okafor',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Chidi Nwankwo',
    role: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Fatima Abdullahi',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face'
  }
];

export default function AboutTeam() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Meet The Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="text-xl font-light text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-light text-gray-600">
                  {member.role}
                </p>
              </div>
              
              <div className="flex justify-center gap-3">
                <a 
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
