'use client';

import { useState, useEffect, useRef } from 'react';
import { Calendar, Shield, CreditCard, Star, Clock, Users, Camera, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { theme } from '../../lib/theme';
import { Button } from '../ui/Button';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content - Takes 5 columns */}
          <div className={`lg:col-span-5 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-8">
              <div className="space-y-6">
                <div 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: theme.colors.copper[50], color: theme.colors.copper.DEFAULT }}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Trusted Platform
                </div>
                
                <h2 
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ color: theme.colors.text.primary }}
                >
                  Why{' '}
                  <span style={{ color: theme.colors.copper.DEFAULT }}>5,000+ clients</span>{' '}
                  choose LUCIS
                </h2>
                
                <p 
                  className="text-xl leading-relaxed"
                  style={{ color: theme.colors.text.secondary }}
                >
                  The most trusted platform for booking professional photographers and videographers. 
                  Built for quality, security, and seamless experiences.
                </p>
              </div>

              {/* Key Benefits List */}
              <div className="space-y-4">
                {[
                  'Verified professionals only',
                  'Secure payment protection',
                  'Instant booking confirmation',
                  '24/7 customer support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: theme.colors.copper.DEFAULT }} />
                    <span style={{ color: theme.colors.text.secondary }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="inline-flex items-center px-6 py-3 font-semibold"
                style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
              >
                Start Booking Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - Takes 7 columns */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Features Grid - Bento Box Style */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Large Feature Card */}
              <div 
                className="col-span-2 p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
                style={{ backgroundColor: theme.colors.seaMist.DEFAULT }}
              >
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-3"
                    style={{ color: theme.colors.text.primary }}
                  >
                    100% Verified Professionals
                  </h3>
                  <p style={{ color: theme.colors.text.secondary }}>
                    Every photographer and videographer goes through our rigorous verification process
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-10">
                  <Shield className="w-24 h-24" style={{ color: theme.colors.copper.DEFAULT }} />
                </div>
              </div>

              {/* Small Feature Cards */}
              {[
                {
                  icon: CreditCard,
                  title: 'Secure Payments',
                  description: 'Protected transactions with escrow'
                },
                {
                  icon: Calendar,
                  title: 'Easy Scheduling',
                  description: 'Book in just a few clicks'
                },
                {
                  icon: Star,
                  title: '4.9★ Rating',
                  description: 'Consistently excellent service'
                },
                {
                  icon: Clock,
                  title: 'Quick Response',
                  description: 'Average 2-hour response time'
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border group"
                    style={{ borderColor: theme.colors.border }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: theme.colors.copper[50] }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
                    </div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: theme.colors.text.primary }}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div 
            className="rounded-3xl p-8 lg:p-12"
            style={{ backgroundColor: theme.colors.seaMist[50] }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: '5,000+', label: 'Happy Clients' },
                { number: '500+', label: 'Verified Pros' },
                { number: '4.9★', label: 'Average Rating' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index}>
                  <div 
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    style={{ color: theme.colors.copper.DEFAULT }}
                  >
                    {stat.number}
                  </div>
                  <div style={{ color: theme.colors.text.secondary }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}