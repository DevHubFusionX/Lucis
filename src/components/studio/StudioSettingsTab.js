'use client';

import { theme } from '../../lib/theme';

export default function StudioSettingsTab({ user }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Profile Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>Display Name</label>
            <input type="text" defaultValue={user.name} className="w-full p-3 border rounded-lg text-sm sm:text-base" style={{ borderColor: theme.colors.border }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>Bio</label>
            <textarea rows="3" defaultValue={user.bio} className="w-full p-3 border rounded-lg text-sm sm:text-base resize-none" style={{ borderColor: theme.colors.border }}></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.text.primary }}>Location</label>
            <input type="text" defaultValue={user.baseCity} className="w-full p-3 border rounded-lg text-sm sm:text-base" style={{ borderColor: theme.colors.border }} />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>Business Settings</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-xl border" style={{ borderColor: theme.colors.border }}>
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base" style={{ color: theme.colors.text.primary }}>Available for bookings</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" style={{ accentColor: theme.colors.copper.DEFAULT }} />
            </div>
          </div>
          <div className="p-4 rounded-xl border" style={{ borderColor: theme.colors.border }}>
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base" style={{ color: theme.colors.text.primary }}>Instant booking</span>
              <input type="checkbox" className="w-5 h-5" style={{ accentColor: theme.colors.copper.DEFAULT }} />
            </div>
          </div>
          <div className="p-4 rounded-xl border" style={{ borderColor: theme.colors.border }}>
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base" style={{ color: theme.colors.text.primary }}>Email notifications</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" style={{ accentColor: theme.colors.copper.DEFAULT }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}