'use client';

import { theme } from '../../lib/theme';

export default function StudioAnalyticsTab({ studioData }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Performance Metrics</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-xl border" style={{ borderColor: theme.colors.border }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>Booking Completion Rate</span>
              <span className="font-bold text-sm sm:text-base" style={{ color: theme.colors.text.primary }}>93%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT, width: '93%' }}></div>
            </div>
          </div>
          
          <div className="p-4 rounded-xl border" style={{ borderColor: theme.colors.border }}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>Response Rate</span>
              <span className="font-bold text-sm sm:text-base" style={{ color: theme.colors.text.primary }}>{studioData.responseRate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT, width: `${studioData.responseRate}%` }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Monthly Overview</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 rounded-xl" style={{ backgroundColor: theme.colors.seaMist[50] }}>
            <div className="text-xl sm:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>12</div>
            <div className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>This Month</div>
          </div>
          <div className="text-center p-4 rounded-xl" style={{ backgroundColor: theme.colors.seaMist[50] }}>
            <div className="text-xl sm:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>₦450K</div>
            <div className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
}