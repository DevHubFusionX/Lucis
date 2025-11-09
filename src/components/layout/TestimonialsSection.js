'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Couple',
      content: 'LUCIS connected us with the most amazing photographer. Our wedding photos exceeded every expectation and captured our special day perfectly.',
      rating: 5,
      service: 'Wedding Photography'
    },
    {
      name: 'David Chen',
      role: 'CEO, TechStart',
      content: 'Professional headshots delivered exactly on time. The photographer understood our brand vision and delivered exceptional quality.',
      rating: 5,
      service: 'Corporate Photography'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Content Creator',
      content: 'Found an incredible videographer through LUCIS. The quality and creativity of the final video blew my mind. Highly recommended!',
      rating: 5,
      service: 'Brand Videography'
    },
    {
      name: 'Michael Torres',
      role: 'Event Planner',
      content: 'The booking process was seamless and the photographer delivered stunning event coverage. Our clients were thrilled with the results.',
      rating: 5,
      service: 'Event Photography'
    },
    {
      name: 'Lisa Park',
      role: 'Marketing Director',
      content: 'Amazing experience from start to finish. The videographer understood our brand perfectly and created compelling content.',
      rating: 5,
      service: 'Commercial Video'
    },
    {
      name: 'James Wilson',
      role: 'Small Business Owner',
      content: 'Found the perfect photographer for our product shoot. Professional, creative, and delivered exactly what we needed.',
      rating: 5,
      service: 'Product Photography'
    }
  ];



  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const TestimonialCard = ({ testimonial }) => (
    <div 
      className="p-6 rounded-2xl shadow-sm border flex-shrink-0 w-80 mx-3"
      style={{ backgroundColor: theme.colors.bg.primary, borderColor: theme.colors.border }}
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star 
            key={i} 
            className="w-4 h-4" 
            style={{ 
              fill: theme.colors.copper.DEFAULT, 
              color: theme.colors.copper.DEFAULT 
            }} 
          />
        ))}
      </div>
      
      <blockquote 
        className="text-sm leading-relaxed mb-4"
        style={{ color: theme.colors.text.primary }}
      >
        "{testimonial.content}"
      </blockquote>

      <div>
        <div 
          className="font-semibold"
          style={{ color: theme.colors.text.primary }}
        >
          {testimonial.name}
        </div>
        <div 
          className="text-sm"
          style={{ color: theme.colors.text.secondary }}
        >
          {testimonial.role} • {testimonial.service}
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef} 
      className="py-20 overflow-hidden"
      style={{ backgroundColor: theme.colors.seaMist[25] }}
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            What Our <span style={{ color: theme.colors.copper.DEFAULT }}>Clients</span> Say
          </h2>
          
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            Real stories from satisfied customers who found their perfect creative professional
          </p>
        </div>

        {/* Desktop Marquee */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="flex animate-marquee">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="flex justify-center">
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </div>
            
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: theme.colors.copper[100] }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'opacity-100' : 'opacity-30'
                    }`}
                    style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full transition-colors"
                style={{ backgroundColor: theme.colors.copper[100] }}
              >
                <ChevronRight className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}