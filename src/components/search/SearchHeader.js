'use client';

import { Search } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function SearchHeader({ query, setQuery }) {
  return (
    <div className="mb-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
              Find Creative Professionals
            </h1>
            <p style={{ color: theme.colors.text.secondary }}>Discover talented photographers and videographers</p>
          </div>
          
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.text.muted }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search professionals..."
              className="w-full pl-10 pr-4 py-3 rounded-xl transition-all"
              style={{ 
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.seaMist[25]
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}