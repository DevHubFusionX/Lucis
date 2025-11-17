'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Camera, Menu, X, Home, Search, Calendar, Bell, User, LogOut } from 'lucide-react';
import { clientNavItems } from '../../lib/routes';
import { authStorage } from '../../lib/auth';
import { theme } from '../../lib/theme';

const iconMap = {
  Home,
  Search,
  Calendar,
  Bell,
  User
};

export default function ClientNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const userData = authStorage.getUser();
    setUser(userData);
  }, []);
  
  const handleLogout = () => {
    authStorage.clear();
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/user/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold text-gray-900">LUCIS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {clientNavItems.map((item) => {
              const isActive = pathname === item.route;
              const IconComponent = iconMap[item.icon];
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  style={isActive ? { backgroundColor: theme.colors.copper.DEFAULT } : {}}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* User Menu */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
              {user && (
                <div className="flex items-center space-x-2">
                  {user.profilePicture?.url ? (
                    <img src={user.profilePicture.url} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                      <span className="text-white text-sm font-medium">{user.firstName?.[0]}</span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">{user.firstName}</span>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="space-y-1">
              {clientNavItems.map((item) => {
                const isActive = pathname === item.route;
                const IconComponent = iconMap[item.icon];
                return (
                  <Link
                    key={item.route}
                    href={item.route}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    style={isActive ? { backgroundColor: theme.colors.copper.DEFAULT } : {}}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile User Section */}
              {user && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center space-x-3 px-4 py-2">
                    {user.profilePicture?.url ? (
                      <img src={user.profilePicture.url} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                        <span className="text-white font-medium">{user.firstName?.[0]}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}