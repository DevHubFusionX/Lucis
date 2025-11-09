'use client';

import { LayoutDashboard, Calendar, Image, Clock, Star, CreditCard, Bell, User, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

export default function StudioSidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const router = useRouter();
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: routes.studio },
    { id: 'bookings', label: 'Bookings', icon: Calendar, path: routes.studioBookings },
    { id: 'gallery', label: 'Gallery', icon: Image, path: routes.studioGallery },
    { id: 'availability', label: 'Availability', icon: Clock, path: routes.studioAvailability },
    { id: 'reviews', label: 'Reviews', icon: Star, path: routes.studioReviews },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: routes.studioNotifications },
    { id: 'profile', label: 'Profile', icon: User, path: routes.studioProfile },
    { id: 'payments', label: 'Payments', icon: CreditCard, path: routes.studioPayments }
  ];

  const getActiveItem = () => {
    const currentItem = menuItems.find(item => item.path === pathname);
    return currentItem ? currentItem.id : 'dashboard';
  };

  const handleNavigation = (path) => {
    router.push(path);
    if (onClose) onClose(); // Close mobile sidebar after navigation
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white overflow-y-auto z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ borderRight: `1px solid ${theme.colors.border}` }}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-xl transition-colors"
            style={{ backgroundColor: theme.colors.seaMist[50] }}
          >
            <X className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
          </button>
        </div>
        
        <div className="p-6 pt-2 lg:pt-6">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = getActiveItem() === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all"
                  style={{
                    backgroundColor: isActive ? theme.colors.copper.DEFAULT : 'transparent',
                    color: isActive ? 'white' : theme.colors.text.secondary
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = theme.colors.seaMist[50];
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}