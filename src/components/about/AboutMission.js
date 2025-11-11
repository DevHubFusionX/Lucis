'use client';

import { Target, Users, Award, Shield } from 'lucide-react';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'Every professional is verified and portfolio-reviewed for exceptional quality.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Building lasting relationships between creatives and clients.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for excellence in everything we do, from platform to service.'
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Secure payments and verified professionals ensure peace of mind.'
  }
];

export default function AboutMission() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-xs font-light tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            What Drives Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="font-light text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg font-light text-gray-600 leading-relaxed">
              To democratize access to professional photography and videography services, 
              while empowering creative professionals to build sustainable businesses and showcase their talents. 
              We believe every moment deserves to be captured beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
