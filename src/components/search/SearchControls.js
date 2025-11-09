'use client';

import { Filter, Grid, List } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function SearchControls({ 
  showFilters, 
  setShowFilters, 
  sortBy, 
  setSortBy, 
  viewMode, 
  setViewMode, 
  resultsCount 
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors"
          style={{
            backgroundColor: showFilters ? theme.colors.copper.DEFAULT : 'white',
            color: showFilters ? theme.colors.text.onCopper : theme.colors.text.secondary,
            border: `1px solid ${theme.colors.border}`
          }}
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg border"
          style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
        >
          <option value="relevance">Most Relevant</option>
          <option value="rating">Highest Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-sm" style={{ color: theme.colors.text.muted }}>
          {resultsCount} found
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