'use client';

import { Search, Grid, List } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function BookingsControls({ 
  searchQuery, 
  setSearchQuery, 
  sortBy, 
  setSortBy, 
  viewMode, 
  setViewMode, 
  filteredCount 
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: theme.colors.text.muted }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bookings..."
            className="pl-10 pr-4 py-2.5 rounded-xl border transition-all"
            style={{ 
              borderColor: theme.colors.border, 
              backgroundColor: theme.colors.seaMist[25] 
            }}
          />
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded-xl border"
          style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
        >
          <option value="date">Sort by Date</option>
          <option value="price">Sort by Price</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm" style={{ color: theme.colors.text.muted }}>
          {filteredCount} bookings
        </span>
        <div className="flex border rounded-lg" style={{ borderColor: theme.colors.border }}>
          <button
            onClick={() => setViewMode('grid')}
            className="p-2 transition-colors"
            style={{
              backgroundColor: viewMode === 'grid' ? theme.colors.copper.DEFAULT : 'transparent',
              color: viewMode === 'grid' ? 'white' : theme.colors.text.muted
            }}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className="p-2 transition-colors"
            style={{
              backgroundColor: viewMode === 'list' ? theme.colors.copper.DEFAULT : 'transparent',
              color: viewMode === 'list' ? 'white' : theme.colors.text.muted
            }}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}