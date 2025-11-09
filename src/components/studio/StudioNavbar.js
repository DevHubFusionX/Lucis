'use client';

import { Bell, ChevronDown, Camera, LogOut, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';
import { BRAND } from '../../lib/constants';
import { authStorage } from '../../lib/auth';
import { apiService } from '../../lib/api';

export default function StudioNavbar({ onMenuClick }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiService.getProfessionalProfile();
        if (response.error === false && response.data) {
          setUser(response.data);
        }
      } catch (error) {
        const storedUser = authStorage.getUser();
        if (storedUser) setUser(storedUser);
      }
    };
    
    fetchProfile();
  }, []);
  
  const handleLogout = () => {
    authStorage.clear();
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50" style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ backgroundColor: theme.colors.seaMist[50] }}
            >
              <Menu className="w-6 h-6" style={{ color: theme.colors.text.secondary }} />
            </button>
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                <span className="text-white font-bold text-lg">{BRAND.logo}</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>{BRAND.name} Studio</h1>
                <p className="text-xs" style={{ color: theme.colors.text.muted }}>Professional Dashboard</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button 
              onClick={() => router.push(routes.studioNotifications)}
              className="relative p-2 rounded-xl transition-colors hover:opacity-80"
              style={{ 
                color: theme.colors.text.muted,
                backgroundColor: theme.colors.seaMist[50]
              }}
            >
              <Bell className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                3
              </div>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-2 rounded-xl transition-colors"
                style={{ 
                  backgroundColor: showProfileMenu ? theme.colors.seaMist[100] : 'transparent'
                }}
              >
                {user?.profilePicture?.url ? (
                  <img
                    src={user.profilePicture.url}
                    alt="Profile"
                    className="w-8 h-8 rounded-full ring-2 object-cover"
                    style={{ ringColor: theme.colors.copper.DEFAULT }}
                  />
                ) : (
                  <div 
                    className="w-8 h-8 rounded-full ring-2 flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: theme.colors.copper.DEFAULT, ringColor: theme.colors.copper.DEFAULT }}
                  >
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </div>
                )}
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>
                    {user ? `${user.firstName} ${user.lastName}` : 'Professional'}
                  </p>
                  <p className="text-xs" style={{ color: theme.colors.text.muted }}>Professional</p>
                </div>
                <ChevronDown className="w-4 h-4 hidden sm:block" style={{ color: theme.colors.text.muted }} />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg py-2" style={{ border: `1px solid ${theme.colors.border}` }}>
                  <button 
                    onClick={() => router.push(routes.studioProfile)}
                    className="block w-full text-left px-4 py-2 text-sm transition-colors"
                    style={{ color: theme.colors.text.secondary }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = theme.colors.seaMist[50]}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Profile
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm transition-colors" style={{ color: theme.colors.text.secondary }}>Settings</button>
                  <hr className="my-2" style={{ borderColor: theme.colors.border }} />
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}