'use client';

import { Plus, Calendar } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

export default function BookingsHeader({ stats }) {
  return (
    <div 
      className="rounded-2xl p-6 shadow-sm" 
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.seaMist.DEFAULT} 0%, white 50%, ${theme.colors.seaMist[100]} 100%)`,
        border: `1px solid ${theme.colors.border}`
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>My Bookings</h1>
          <p style={{ color: theme.colors.text.secondary }}>Manage your photography and videography sessions</p>
          
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
              <span className="text-sm" style={{ color: theme.colors.text.muted }}>{stats.upcoming} upcoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm" style={{ color: theme.colors.text.muted }}>{stats.completed} completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>Total spent: ₦{stats.totalSpent.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link
            href={routes.search}
            className="flex items-center gap-2 px-4 py-2.5 font-medium rounded-xl transition-all hover:scale-105"
            style={{ 
              backgroundColor: theme.colors.copper.DEFAULT, 
              color: theme.colors.text.onCopper 
            }}
          >
            <Plus className="w-4 h-4" />
            New Booking
          </Link>
          <button 
            className="flex items-center gap-2 px-4 py-2.5 bg-white font-medium rounded-xl border transition-colors hover:opacity-80" 
            style={{ 
              borderColor: theme.colors.border, 
              color: theme.colors.text.secondary 
            }}
          >
            <Calendar className="w-4 h-4" />
            Calendar
          </button>
        </div>
      </div>
    </div>
  );
}