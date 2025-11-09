'use client';

import { User, TrendingUp, Heart, Settings, Calendar, Bell, Mail, Phone, MapPin, Shield, CreditCard, Download, LogOut } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

const TABS = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'activity', label: 'Activity', icon: TrendingUp },
  { id: 'favorites', label: 'Favorites', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export default function ProfileTabs({ activeTab, setActiveTab, user }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
      <div className="flex border-b" style={{ borderColor: theme.colors.border }}>
        {TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-3 px-6 py-4 font-medium transition-colors border-b-2"
              style={{
                borderColor: activeTab === tab.id ? theme.colors.copper.DEFAULT : 'transparent',
                color: activeTab === tab.id ? theme.colors.copper.DEFAULT : theme.colors.text.muted
              }}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
      
      <div className="p-6">
        {activeTab === 'overview' && <OverviewTab user={user} />}
        {activeTab === 'activity' && <ActivityTab user={user} />}
        {activeTab === 'favorites' && <FavoritesTab user={user} />}
        {activeTab === 'settings' && <SettingsTab user={user} />}
      </div>
    </div>
  );
}

function OverviewTab({ user }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>Personal Information</h3>
        
        <div className="space-y-3">
          {[
            { icon: User, label: 'Full Name', value: user.name, color: 'bg-blue-500' },
            { icon: Mail, label: 'Email', value: user.email, color: 'bg-green-500' },
            { icon: Phone, label: 'Phone', value: user.phone || 'Not provided', color: 'bg-purple-500' },
            { icon: MapPin, label: 'Base City', value: user.baseCity, color: 'bg-orange-500' },
            { icon: Shield, label: 'Account Status', value: user.isVerified ? 'Verified' : 'Unverified', color: 'bg-green-500' }
          ].filter(item => item.value).map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 rounded-xl" 
              style={{ backgroundColor: theme.colors.seaMist[50] }}
            >
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm" style={{ color: theme.colors.text.muted }}>{item.label}</p>
                <p className="font-medium" style={{ color: theme.colors.text.primary }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {user.isProfessional && user.skills?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.text.primary }}>Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: theme.colors.copper[50], color: theme.colors.copper[700] }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <h3 className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>Quick Actions</h3>
        
        <div className="space-y-3">
          {[
            { href: routes.bookings, icon: Calendar, title: 'View Bookings', desc: 'Manage sessions', color: 'bg-yellow-500' },
            { href: routes.search, icon: User, title: 'Find Professionals', desc: 'Book new sessions', color: 'bg-blue-500' },
            { href: routes.notifications, icon: Bell, title: 'Notifications', desc: 'Check updates', color: 'bg-green-500' }
          ].map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-sm group"
              style={{ 
                backgroundColor: theme.colors.seaMist[25], 
                borderColor: theme.colors.border 
              }}
            >
              <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium" style={{ color: theme.colors.text.primary }}>{action.title}</p>
                <p className="text-sm" style={{ color: theme.colors.text.muted }}>{action.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityTab({ user }) {
  return (
    <div className="text-center py-16">
      <div 
        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
        style={{ backgroundColor: theme.colors.seaMist[100] }}
      >
        <TrendingUp className="w-8 h-8" style={{ color: theme.colors.text.muted }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>Activity Overview</h3>
      <p style={{ color: theme.colors.text.secondary }}>Track your booking history and engagement</p>
      <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{user.completedBookings}</div>
          <div className="text-sm" style={{ color: theme.colors.text.muted }}>Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{user.upcomingBookings}</div>
          <div className="text-sm" style={{ color: theme.colors.text.muted }}>Upcoming</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{user.reviewsGiven}</div>
          <div className="text-sm" style={{ color: theme.colors.text.muted }}>Reviews</div>
        </div>
      </div>
    </div>
  );
}

function FavoritesTab({ user }) {
  return (
    <div className="text-center py-16">
      <div 
        className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
        style={{ backgroundColor: theme.colors.seaMist[100] }}
      >
        <Heart className="w-8 h-8" style={{ color: theme.colors.text.muted }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>Favorite Professionals</h3>
      <p className="mb-6" style={{ color: theme.colors.text.secondary }}>You have {user.favoritePhotographers} favorite photographers</p>
      <Link
        href={routes.search}
        className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-xl transition-colors"
        style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
      >
        <Heart className="w-4 h-4" />
        Browse Professionals
      </Link>
    </div>
  );
}

function SettingsTab({ user }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>Preferences</h3>
        
        <div className="space-y-3">
          {[
            { icon: Bell, label: 'Push Notifications', checked: user.preferences?.notifications || false },
            { icon: Mail, label: 'Email Updates', checked: user.preferences?.emailUpdates || true },
            { icon: Phone, label: 'SMS Reminders', checked: user.preferences?.smsReminders || false }
          ].map((pref, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 rounded-xl" 
              style={{ backgroundColor: theme.colors.seaMist[50] }}
            >
              <div className="flex items-center gap-3">
                <pref.icon className="w-5 h-5" style={{ color: theme.colors.text.muted }} />
                <span className="font-medium" style={{ color: theme.colors.text.primary }}>{pref.label}</span>
              </div>
              <input 
                type="checkbox" 
                defaultChecked={pref.checked} 
                className="w-5 h-5" 
                style={{ accentColor: theme.colors.copper.DEFAULT }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>Account</h3>
        
        <div className="space-y-3">
          {[
            { icon: Shield, label: 'Change Password', color: 'text-gray-600' },
            { icon: CreditCard, label: 'Payment Methods', color: 'text-gray-600' },
            { icon: Download, label: 'Download Data', color: 'text-gray-600' },
            { icon: LogOut, label: 'Sign Out', color: 'text-red-600' }
          ].map((action, index) => (
            <button 
              key={index} 
              className={`flex items-center gap-3 w-full p-4 rounded-xl transition-colors text-left hover:opacity-80`}
              style={{ 
                backgroundColor: action.label === 'Sign Out' ? '#fef2f2' : theme.colors.seaMist[50] 
              }}
            >
              <action.icon className={`w-5 h-5 ${action.color}`} />
              <span className={`font-medium ${action.color}`}>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}