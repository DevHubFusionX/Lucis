'use client';

import { Award, Calendar } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function StudioOverviewTab({ user, studioData }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>About</h3>
        <p className="mb-6 text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>{user.bio}</p>
        
        <h4 className="font-bold mb-3" style={{ color: theme.colors.text.primary }}>Specialties</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {studioData.specialties.map((specialty, index) => (
            <span key={index} className="px-3 py-1 rounded-full text-xs sm:text-sm" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10', color: theme.colors.copper.DEFAULT }}>
              {specialty}
            </span>
          ))}
        </div>
        
        <h4 className="font-bold mb-3" style={{ color: theme.colors.text.primary }}>Equipment</h4>
        <div className="space-y-2">
          {studioData.equipment.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
              <span className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Recent Activity</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: theme.colors.seaMist[50] }}>
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: theme.colors.copper.DEFAULT }} />
              <span className="font-medium text-sm sm:text-base" style={{ color: theme.colors.text.primary }}>New 5-star review</span>
            </div>
            <p className="text-xs sm:text-sm" style={{ color: theme.colors.text.secondary }}>Sarah Johnson left a review for your wedding photography service</p>
            <p className="text-xs mt-1" style={{ color: theme.colors.text.muted }}>2 hours ago</p>
          </div>
          
          <div className="p-4 rounded-xl" style={{ backgroundColor: theme.colors.seaMist[50] }}>
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: theme.colors.copper.DEFAULT }} />
              <span className="font-medium text-sm sm:text-base" style={{ color: theme.colors.text.primary }}>Booking confirmed</span>
            </div>
            <p className="text-xs sm:text-sm" style={{ color: theme.colors.text.secondary }}>Corporate headshot session scheduled for next week</p>
            <p className="text-xs mt-1" style={{ color: theme.colors.text.muted }}>1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}