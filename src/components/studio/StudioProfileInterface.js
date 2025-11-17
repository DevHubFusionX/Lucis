'use client';

import { useState, useEffect } from 'react';
import { theme } from '../../lib/theme';
import { professionalAuthService } from '../../lib/auth/professionalAuth';
import StudioProfileHeader from './StudioProfileHeader';
import StudioStatsGrid from './StudioStatsGrid';
import StudioTabs from './StudioTabs';

export default function StudioProfileInterface() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [studioData] = useState({
    totalBookings: 127,
    completedBookings: 118,
    upcomingBookings: 9,
    totalEarnings: 2850000,
    activeClients: 45,
    reviewsReceived: 89,
    averageRating: 4.9,
    responseRate: 98,
    portfolioViews: 3420,
    memberSince: '2022',
    specialties: ['Wedding', 'Portrait', 'Event', 'Corporate'],
    equipment: ['Canon EOS R5', 'Sony A7 IV', 'Professional Lighting', 'Drone'],
    portfolio: Array(12).fill('/api/placeholder/300/300')
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await professionalAuthService.getProfile();
        if (response.error === false && response.data) {
          const userData = response.data.user || response.data;
          setUser({
            ...userData,
            name: `${userData.firstName} ${userData.lastName}`,
            avatar: userData.profilePicture?.url || null,
            joinDate: new Date(userData.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            bio: userData.bio || "Professional photographer capturing life's precious moments.",
            skills: userData.skills || studioData.specialties,
            baseCity: userData.baseCity || 'Lagos, Nigeria'
          });
        }
      } catch (error) {
        const storedUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('lucis_user') || 'null') : null;
        if (storedUser) {
          setUser({
            ...storedUser,
            name: `${storedUser.firstName} ${storedUser.lastName}`,
            avatar: storedUser.profilePicture?.url || null,
            joinDate: new Date(storedUser.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            bio: "Professional photographer capturing life's precious moments.",
            skills: studioData.specialties,
            baseCity: 'Lagos, Nigeria'
          });
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, []);
  
  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: theme.colors.copper.DEFAULT }}></div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <StudioProfileHeader user={user} studioData={studioData} />
      <StudioStatsGrid studioData={studioData} />
      <StudioTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        user={user} 
        studioData={studioData} 
      />
    </div>
  );
}

