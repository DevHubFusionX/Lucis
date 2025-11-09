import { Star, MapPin, Camera, ArrowRight, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

export default function Recommendations() {
  const recommendations = [
    {
      id: 1,
      name: "Kemi Visuals",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      location: "Lagos Island",
      specialty: "Wedding Photography",
      price: "₦50,000",
      verified: true,
      responseTime: "2 hours",
      featured: true
    },
    {
      id: 2,
      name: "Abuja Films",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 4.8,
      reviews: 89,
      location: "Victoria Island",
      specialty: "Event Videography",
      price: "₦75,000",
      verified: false,
      responseTime: "4 hours",
      featured: false
    },
    {
      id: 3,
      name: "Studio Nine",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 4.7,
      reviews: 156,
      location: "Ikeja",
      specialty: "Portrait Photography",
      price: "₦35,000",
      verified: true,
      responseTime: "1 hour",
      featured: false
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg" style={{ border: `1px solid ${theme.colors.border}` }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>Recommended</h2>
          <p className="mt-1 text-sm" style={{ color: theme.colors.text.muted }}>Top professionals</p>
        </div>
        <Link 
          href={routes.search}
          className="flex items-center space-x-2 font-medium transition-colors hover:opacity-80"
          style={{ color: theme.colors.copper.DEFAULT }}
        >
          <span>View all</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {recommendations.slice(0, 2).map((pro, index) => (
          <div 
            key={pro.id} 
            className="group relative rounded-xl p-4 hover:shadow-md transition-all duration-300"
            style={{ 
              background: `linear-gradient(135deg, white 0%, ${theme.colors.seaMist[25]} 100%)`,
              border: `1px solid ${theme.colors.border}`
            }}
          >
            {/* Featured badge */}
            {pro.featured && (
              <div 
                className="absolute -top-2 -right-2 text-xs font-bold px-2 py-1 rounded-full shadow-sm" 
                style={{ 
                  backgroundColor: theme.colors.copper.DEFAULT, 
                  color: theme.colors.text.onCopper 
                }}
              >
                ✨ Featured
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-3">
              <div className="relative">
                <img
                  src={pro.photo}
                  alt={pro.name}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-sm"
                />
                {pro.verified && (
                  <div 
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                  >
                    <Star className="w-2.5 h-2.5 text-white fill-current" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 
                  className="font-bold transition-colors truncate" 
                  style={{ color: theme.colors.text.primary }}
                >
                  {pro.name}
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-medium" style={{ color: theme.colors.text.secondary }}>{pro.rating}</span>
                  <span className="text-xs" style={{ color: theme.colors.text.muted }}>({pro.reviews})</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-xs" style={{ color: theme.colors.text.muted }}>
                <span>{pro.specialty}</span>
                <span>•</span>
                <span>{pro.location}</span>
              </div>
              <button 
                className="px-3 py-1.5 font-semibold rounded-lg transition-all duration-200 hover:scale-105 text-xs"
                style={{ 
                  backgroundColor: theme.colors.copper.DEFAULT, 
                  color: theme.colors.text.onCopper 
                }}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}