'use client';

import { Filter, ChevronDown } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function ProfessionalsFilters() {
  return (
    <section className="py-8" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Results Count */}
          <div>
            <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
              5,247 Professionals Found
            </h2>
            <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
              Showing results for all locations and services
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Service Type Filter */}
            <div className="relative">
              <select 
                className="appearance-none px-4 py-2 pr-8 rounded-xl border cursor-pointer focus:ring-2 focus:outline-none"
                style={{ 
                  backgroundColor: theme.colors.bg.primary,
                  color: theme.colors.text.primary,
                  borderColor: theme.colors.border,
                  focusRingColor: theme.colors.copper.DEFAULT
                }}
              >
                <option>All Services</option>
                <option>Wedding Photography</option>
                <option>Corporate Events</option>
                <option>Portrait Photography</option>
                <option>Product Photography</option>
                <option>Event Videography</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: theme.colors.text.muted }} />
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <select 
                className="appearance-none px-4 py-2 pr-8 rounded-xl border cursor-pointer focus:ring-2 focus:outline-none"
                style={{ 
                  backgroundColor: theme.colors.bg.primary,
                  color: theme.colors.text.primary,
                  borderColor: theme.colors.border,
                  focusRingColor: theme.colors.copper.DEFAULT
                }}
              >
                <option>Any Price</option>
                <option>Under ₦50,000</option>
                <option>₦50,000 - ₦100,000</option>
                <option>₦100,000 - ₦200,000</option>
                <option>Above ₦200,000</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: theme.colors.text.muted }} />
            </div>

            {/* Rating Filter */}
            <div className="relative">
              <select 
                className="appearance-none px-4 py-2 pr-8 rounded-xl border cursor-pointer focus:ring-2 focus:outline-none"
                style={{ 
                  backgroundColor: theme.colors.bg.primary,
                  color: theme.colors.text.primary,
                  borderColor: theme.colors.border,
                  focusRingColor: theme.colors.copper.DEFAULT
                }}
              >
                <option>Any Rating</option>
                <option>4.5+ Stars</option>
                <option>4.0+ Stars</option>
                <option>3.5+ Stars</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: theme.colors.text.muted }} />
            </div>

            {/* Sort By */}
            <div className="relative">
              <select 
                className="appearance-none px-4 py-2 pr-8 rounded-xl border cursor-pointer focus:ring-2 focus:outline-none"
                style={{ 
                  backgroundColor: theme.colors.bg.primary,
                  color: theme.colors.text.primary,
                  borderColor: theme.colors.border,
                  focusRingColor: theme.colors.copper.DEFAULT
                }}
              >
                <option>Sort by Relevance</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: theme.colors.text.muted }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}