'use client';

import { Search, Archive, Trash2 } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function NotificationsControls({ 
  searchQuery, 
  setSearchQuery, 
  filterType, 
  setFilterType, 
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
            placeholder="Search notifications..."
            className="pl-10 pr-4 py-2.5 rounded-xl border transition-all"
            style={{ 
              borderColor: theme.colors.border, 
              backgroundColor: theme.colors.seaMist[25] 
            }}
          />
        </div>
        
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2.5 rounded-xl border"
          style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
        >
          <option value="all">All time</option>
          <option value="unread">Unread only</option>
          <option value="today">Today</option>
          <option value="week">This week</option>
        </select>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm" style={{ color: theme.colors.text.muted }}>
          {filteredCount} notifications
        </span>
        <div className="flex gap-1">
          <button 
            className="p-2 rounded-lg border transition-colors hover:opacity-80" 
            style={{ borderColor: theme.colors.border, color: theme.colors.text.muted }}
          >
            <Archive className="w-4 h-4" />
          </button>
          <button 
            className="p-2 rounded-lg border transition-colors hover:opacity-80" 
            style={{ borderColor: theme.colors.border, color: theme.colors.text.muted }}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}