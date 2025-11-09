'use client';

import { Star, MapPin, Camera } from 'lucide-react';

export default function FeaturedCreatives() {
  const featured = [
    {
      id: 1,
      name: 'Alex Visuals',
      specialty: 'Wedding Photography',
      location: 'Lagos',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&q=80',
      portfolio: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&q=80',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Films',
      specialty: 'Event Videography',
      location: 'Abuja',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face&q=80',
      portfolio: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&q=80',
      verified: true
    },
    {
      id: 3,
      name: 'Mike Studios',
      specialty: 'Corporate Photography',
      location: 'Port Harcourt',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&q=80',
      portfolio: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&q=80',
      verified: true
    },
    {
      id: 4,
      name: 'Kemi Portraits',
      specialty: 'Portrait Photography',
      location: 'Ibadan',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&q=80',
      portfolio: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop&q=80',
      verified: true
    },
    {
      id: 5,
      name: 'David Lens',
      specialty: 'Fashion Photography',
      location: 'Lagos',
      rating: 4.8,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&q=80',
      portfolio: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop&q=80',
      verified: true
    },
    {
      id: 6,
      name: 'Grace Events',
      specialty: 'Event Videography',
      location: 'Kano',
      rating: 4.9,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face&q=80',
      portfolio: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop&q=80',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Creatives
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Top-rated professionals trusted by hundreds of clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.slice(0, 6).map((creative) => (
            <div key={creative.id} className="group cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Portfolio Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={creative.portfolio}
                    alt={`${creative.name} portfolio`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={creative.image}
                      alt={creative.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900">{creative.name}</h3>
                        {creative.verified && (
                          <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                            <Camera className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-slate-600">{creative.specialty}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{creative.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="font-semibold text-slate-900">{creative.rating}</span>
                      <span className="text-slate-600 text-sm">({creative.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}