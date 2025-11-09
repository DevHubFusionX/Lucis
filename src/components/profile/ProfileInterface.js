'use client';

import { useState, useEffect } from 'react';
import { theme } from '../../lib/theme';
import { authStorage } from '../../lib/auth';
import { apiService } from '../../lib/api';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';

export default function ProfileInterface() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    totalBookings: 0,
    completedBookings: 0,
    upcomingBookings: 0,
    totalSpent: 0,
    favoritePhotographers: 0,
    reviewsGiven: 0,
    averageRating: 0,
    membershipTier: 'Bronze'
  });
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Check if we're on studio route to determine which endpoint to use
        const isStudioRoute = window.location.pathname.includes('/studio');
        
        let response;
        if (isStudioRoute) {
          response = await apiService.getProfessionalProfile();
        } else {
          // For regular profile, try professional first, then fallback to stored data
          try {
            response = await apiService.getProfessionalProfile();
          } catch {
            // If professional profile fails, use stored data
            const storedUser = authStorage.getUser();
            if (storedUser) {
              setUser({
                ...storedUser,
                name: `${storedUser.firstName} ${storedUser.lastName}`,
                avatar: storedUser.profilePicture?.url || null,
                joinDate: new Date(storedUser.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
                bio: "Welcome to LUCIS! Update your profile to tell others about yourself."
              });
              setLoading(false);
              return;
            }
            throw new Error('No user data available');
          }
        }
        
        if (response.error === false && response.data) {
          const userData = response.data;
          setUser({
            ...userData,
            name: `${userData.firstName} ${userData.lastName}`,
            avatar: userData.profilePicture?.url || null,
            joinDate: new Date(userData.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            bio: userData.bio || "Welcome to LUCIS! Update your profile to tell others about yourself.",
            isProfessional: !!userData.skills, // Professional users have skills
            skills: userData.skills || [],
            baseCity: userData.baseCity || null,
            gallery: userData.gallery || []
          });
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        // Fallback to stored user data
        const storedUser = authStorage.getUser();
        if (storedUser) {
          setUser({
            ...storedUser,
            name: `${storedUser.firstName} ${storedUser.lastName}`,
            avatar: storedUser.profilePicture?.url || null,
            joinDate: new Date(storedUser.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            bio: "Welcome to LUCIS! Update your profile to tell others about yourself."
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
    <div className="space-y-6">
      <ProfileHeader user={{ ...user, ...profileData }} />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} user={{ ...user, ...profileData }} />
    </div>
  );
}