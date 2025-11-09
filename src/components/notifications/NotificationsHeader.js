'use client';

import { Bell, CheckCircle, Settings } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function NotificationsHeader({ stats, markAllAsRead }) {
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
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center" 
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            >
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Notifications</h1>
              <p style={{ color: theme.colors.text.secondary }}>Stay updated with your activity</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
              <span className="text-sm" style={{ color: theme.colors.text.muted }}>{stats.unreadCount} unread</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm" style={{ color: theme.colors.text.muted }}>{stats.todayCount} today</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={markAllAsRead}
            className="flex items-center gap-2 px-4 py-2.5 font-medium rounded-xl transition-colors" 
            style={{ 
              backgroundColor: theme.colors.copper.DEFAULT, 
              color: theme.colors.text.onCopper 
            }}
          >
            <CheckCircle className="w-4 h-4" />
            Mark All Read
          </button>
          <button 
            className="flex items-center gap-2 px-4 py-2.5 bg-white border font-medium rounded-xl transition-colors hover:opacity-80" 
            style={{ 
              borderColor: theme.colors.border, 
              color: theme.colors.text.secondary 
            }}
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}