'use client';

import { Star, Quote } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      id: 1,
      name: 'Adebayo Johnson',
      role: 'Wedding Client',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&q=80',
      rating: 5,
      text: 'Found the perfect photographer for our wedding. The quality exceeded our expectations! Alex Visuals captured every moment beautifully.'
    },
    {
      id: 2,
      name: 'Sarah Okafor',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&q=80',
      rating: 5,
      text: 'Professional service and amazing results. Mike Studios delivered exactly what we needed for our corporate event. Will definitely use again.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Event Organizer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&q=80',
      rating: 5,
      text: 'The platform made it so easy to find and hire talented creatives. The booking process was smooth and the results were outstanding!'
    },
    {
      id: 4,
      name: 'Funmi Adebayo',
      role: 'Fashion Brand Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&q=80',
      rating: 5,
      text: 'David Lens understood our brand vision perfectly. The fashion shoot photos were exactly what we needed for our campaign.'
    },
    {
      id: 5,
      name: 'Emeka Okonkwo',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face&q=80',
      rating: 5,
      text: 'Frame Perfect made our dishes look absolutely incredible. The food photography boosted our social media engagement significantly.'
    },
    {
      id: 6,
      name: 'Kemi Adeleke',
      role: 'Portrait Client',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face&q=80',
      rating: 5,
      text: 'Kemi Portraits captured my personality perfectly in the headshots. Professional, friendly, and incredibly talented photographer.'
    }
  ];

  const brands = [
    { name: 'MTN', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&q=80' },
    { name: 'Dangote', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&q=80' },
    { name: 'GTBank', logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=120&h=60&fit=crop&q=80' },
    { name: 'Shoprite', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&q=80' },
    { name: 'Jumia', logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=60&fit=crop&q=80' },
    { name: 'Konga', logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&q=80' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect creative match
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-50 rounded-2xl p-6 relative">
              <Quote className="w-8 h-8 text-indigo-600 mb-4" />
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-8">
            Trusted by Leading Brands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
            <div className="text-slate-600">Verified Professionals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">10k+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">4.9</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}