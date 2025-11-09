'use client';

import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function AboutMission() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every professional on our platform is verified and portfolio-reviewed to ensure exceptional quality.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We build lasting relationships between creatives and clients, fostering a supportive community.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our platform to our customer service.'
    },
    {
      icon: CheckCircle,
      title: 'Trust & Safety',
      description: 'Secure payments, verified professionals, and comprehensive support ensure peace of mind.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
            Our <span style={{ color: theme.colors.copper.DEFAULT }}>Mission & Values</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            We're committed to empowering creative professionals and making quality photography 
            and videography services accessible to everyone across Nigeria.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: theme.colors.copper[100] }}
              >
                <value.icon className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
              </div>
              
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
                {value.title}
              </h3>
              
              <p style={{ color: theme.colors.text.secondary }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 text-center transition-all duration-700 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div 
            className="max-w-4xl mx-auto p-8 rounded-3xl"
            style={{ backgroundColor: theme.colors.copper[50], border: `1px solid ${theme.colors.copper[200]}` }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              To democratize access to professional photography and videography services across Nigeria, 
              while empowering creative professionals to build sustainable businesses and showcase their talents 
              to a wider audience. We believe every moment deserves to be captured beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}