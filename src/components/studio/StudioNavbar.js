'use client';

import { Bell, ChevronDown, Camera, LogOut, Menu, Settings, User, Sparkles, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';
import { BRAND } from '../../lib/constants';
import { professionalAuthService } from '../../lib/auth/professionalAuth';

export default function StudioNavbar({ onMenuClick }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await professionalAuthService.getProfile();
        if (response.error === false && response.data) {
          setUser(response.data.user || response.data);
        }
      } catch (error) {
        const storedUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('lucis_user') || 'null') : null;
        if (storedUser) setUser(storedUser);
      }
    };
    
    fetchProfile();
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('lucis_token');
    localStorage.removeItem('lucis_user');
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b" style={{ borderColor: theme.colors.border }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ backgroundColor: theme.colors.seaMist[50] }}
            >
              <Menu className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
            </button>
            
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div 
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT} 0%, ${theme.colors.copper[600]} 100%)`,
                    boxShadow: `0 4px 20px ${theme.colors.copper.DEFAULT}20`
                  }}
                >
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold tracking-tight" style={{ color: theme.colors.text.primary }}>
                    {BRAND.name}
                  </h1>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    PRO
                  </span>
                </div>
                <p className="text-xs font-medium tracking-wide" style={{ color: theme.colors.text.muted }}>Creative Studio</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Enhanced Notifications */}
            <button 
              onClick={() => router.push(routes.studioNotifications)}
              className="relative p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 group"
              style={{ backgroundColor: theme.colors.seaMist[50] }}
            >
              <Bell className="w-5 h-5 transition-colors group-hover:text-orange-600" style={{ color: theme.colors.text.secondary }} />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                3
              </div>
            </button>

            {/* Enhanced Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-2 pr-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-98"
                style={{ 
                  backgroundColor: showProfileMenu ? theme.colors.seaMist[100] : theme.colors.seaMist[25],
                  border: showProfileMenu ? `1px solid ${theme.colors.copper.DEFAULT}20` : '1px solid transparent'
                }}
              >
                <div className="relative">
                  {user?.profilePicture?.url ? (
                    <img
                      src={user.profilePicture.url}
                      alt="Profile"
                      className="w-9 h-9 rounded-xl object-cover ring-2 ring-offset-1"
                      style={{ ringColor: theme.colors.copper.DEFAULT }}
                    />
                  ) : (
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white ring-2 ring-offset-1"
                      style={{ 
                        background: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT} 0%, ${theme.colors.copper[600]} 100%)`,
                        ringColor: theme.colors.copper.DEFAULT
                      }}
                    >
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </div>
                  )}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-semibold leading-tight" style={{ color: theme.colors.text.primary }}>
                    {user ? `${user.firstName} ${user.lastName}` : 'Professional'}
                  </p>
                  <p className="text-xs font-medium" style={{ color: theme.colors.text.muted }}>Studio Owner</p>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 hidden sm:block transition-transform duration-200 ${
                    showProfileMenu ? 'rotate-180' : 'rotate-0'
                  }`} 
                  style={{ color: theme.colors.text.muted }} 
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-full mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl py-3 border animate-in fade-in slide-in-from-top-2 duration-200" 
                     style={{ border: `1px solid ${theme.colors.border}` }}>
                  <div className="px-4 py-3 border-b" style={{ borderColor: theme.colors.border }}>
                    <p className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>
                      {user ? `${user.firstName} ${user.lastName}` : 'Professional'}
                    </p>
                    <p className="text-xs font-medium" style={{ color: theme.colors.text.muted }}>
                      {user?.email || 'professional@lucis.com'}
                    </p>
                  </div>
                  
                  <div className="py-2">
                    <button 
                      onClick={() => {
                        router.push(routes.studioProfile);
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-50"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      <User className="w-4 h-4" />
                      View Profile
                    </button>
                    <button 
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-50"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                  </div>
                  
                  <div className="border-t pt-2" style={{ borderColor: theme.colors.border }}>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200 rounded-lg mx-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}