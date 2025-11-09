'use client';

import { Star } from 'lucide-react';
import { theme } from '../../lib/theme';

const FILTERS = {
  types: ['Photography', 'Videography'],
  specialties: ['Wedding', 'Portrait', 'Event', 'Corporate', 'Fashion', 'Documentary', 'Commercial'],
  locations: ['Lagos Island', 'Victoria Island', 'Ikeja', 'Lekki', 'Abuja']
};

export default function SearchFiltersPanel({ 
  activeFilters, 
  updateFilter, 
  toggleSpecialty, 
  clearFilters 
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6" style={{ border: `1px solid ${theme.colors.border}` }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold" style={{ color: theme.colors.text.primary }}>Filters</h3>
        <button onClick={clearFilters} className="text-sm" style={{ color: theme.colors.copper.DEFAULT }}>Clear</button>
      </div>
      
      <div className="space-y-6">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: theme.colors.text.primary }}>Service Type</label>
          <div className="grid grid-cols-2 gap-2">
            {FILTERS.types.map(type => (
              <button
                key={type}
                onClick={() => updateFilter('type', activeFilters.type === type ? '' : type)}
                className="p-2 text-sm rounded-lg border transition-colors"
                style={{
                  backgroundColor: activeFilters.type === type ? theme.colors.copper.DEFAULT : 'white',
                  color: activeFilters.type === type ? 'white' : theme.colors.text.secondary,
                  borderColor: activeFilters.type === type ? theme.colors.copper.DEFAULT : theme.colors.border
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: theme.colors.text.primary }}>Specialties</label>
          <div className="flex flex-wrap gap-2">
            {FILTERS.specialties.map(specialty => (
              <button
                key={specialty}
                onClick={() => toggleSpecialty(specialty)}
                className="px-3 py-1 text-xs rounded-full border transition-colors"
                style={{
                  backgroundColor: activeFilters.specialties.includes(specialty) ? theme.colors.copper.DEFAULT : 'white',
                  color: activeFilters.specialties.includes(specialty) ? 'white' : theme.colors.text.secondary,
                  borderColor: activeFilters.specialties.includes(specialty) ? theme.colors.copper.DEFAULT : theme.colors.border
                }}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: theme.colors.text.primary }}>Location</label>
          <select
            value={activeFilters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="w-full p-3 rounded-lg border"
            style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
          >
            <option value="">All Locations</option>
            {FILTERS.locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: theme.colors.text.primary }}>Minimum Rating</label>
          <div className="grid grid-cols-2 gap-2">
            {[0, 4, 4.5, 4.8].map(rating => (
              <button
                key={rating}
                onClick={() => updateFilter('minRating', activeFilters.minRating === rating ? 0 : rating)}
                className="flex items-center justify-center gap-1 p-2 text-sm rounded-lg border transition-colors"
                style={{
                  backgroundColor: activeFilters.minRating === rating ? theme.colors.copper.DEFAULT : 'white',
                  color: activeFilters.minRating === rating ? 'white' : theme.colors.text.secondary,
                  borderColor: activeFilters.minRating === rating ? theme.colors.copper.DEFAULT : theme.colors.border
                }}
              >
                <Star className="w-3 h-3 fill-current text-yellow-400" />
                {rating === 0 ? 'Any' : `${rating}+`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}