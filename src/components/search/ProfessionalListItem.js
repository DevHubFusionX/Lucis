'use client';

import { Star, MapPin } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function ProfessionalListItem({ professional }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300" style={{ border: `1px solid ${theme.colors.border}` }}>
      <div className="flex items-center gap-4">
        <div className="relative">
          <img src={professional.avatar} alt={professional.name} className="w-16 h-16 rounded-xl object-cover" />
          {professional.verified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
              <Star className="w-3 h-3 text-white fill-current" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>{professional.name}</h3>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{professional.type}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>₦{professional.price.toLocaleString()}</div>
              <div className="text-sm" style={{ color: theme.colors.text.muted }}>Available: {professional.available}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>{professional.rating}</span>
              <span className="text-sm" style={{ color: theme.colors.text.muted }}>({professional.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1 text-sm" style={{ color: theme.colors.text.secondary }}>
              <MapPin className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
              {professional.location}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {professional.specialties.slice(0, 4).map(tag => (
                <span key={tag} className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: theme.colors.copper[50], color: theme.colors.copper[700] }}>
                  {tag}
                </span>
              ))}
            </div>
            <button className="px-6 py-2 rounded-lg font-medium transition-colors" style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}