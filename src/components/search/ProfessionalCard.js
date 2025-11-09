'use client';

import { Star, MapPin, Calendar } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function ProfessionalCard({ professional }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group" style={{ border: `1px solid ${theme.colors.border}` }}>
      {/* Portfolio Preview */}
      <div className="relative mb-4 overflow-hidden rounded-xl h-32">
        <div className="grid grid-cols-2 gap-1 h-full">
          {professional.portfolio.slice(0, 2).map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
          +{professional.portfolio.length}
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img src={professional.avatar} alt={professional.name} className="w-12 h-12 rounded-xl object-cover" />
          {professional.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
              <Star className="w-2.5 h-2.5 text-white fill-current" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold truncate" style={{ color: theme.colors.text.primary }}>{professional.name}</h3>
          <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{professional.type}</p>
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span style={{ color: theme.colors.text.secondary }}>{professional.rating}</span>
              <span style={{ color: theme.colors.text.muted }}>({professional.reviewCount})</span>
            </div>
            <span style={{ color: theme.colors.text.muted }}>•</span>
            <span style={{ color: theme.colors.text.muted }}>{professional.responseTime}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {professional.specialties.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: theme.colors.copper[50], color: theme.colors.copper[700] }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <MapPin className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
          {professional.location}
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <Calendar className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
          Available: {professional.available}
        </div>
        <div className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>
          ₦{professional.price.toLocaleString()}
        </div>
      </div>

      {/* Action */}
      <button className="w-full py-2.5 rounded-xl font-medium transition-colors" style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}>
        Book Now
      </button>
    </div>
  );
}