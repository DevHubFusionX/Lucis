'use client';

import { useState, useEffect } from 'react';
import { Calendar, DollarSign, Star, Clock, Users, Camera, MessageCircle, ArrowUpRight, Eye, TrendingUp, Award, Image } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';
import { authStorage } from '../../lib/auth';
import { apiService } from '../../lib/api';

export default function StudioDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiService.getProfessionalProfile();
        if (response.error === false && response.data) {
          setUser(response.data);
        }
      } catch (error) {
        const storedUser = authStorage.getUser();
        if (storedUser) {
          setUser(storedUser);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, []);
  
  const stats = {
    totalBookings: 24,
    earnings: 850000,
    averageRating: 4.8,
    pendingRequests: 5,
    profileViews: 1240,
    portfolioItems: 156
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: theme.colors.copper.DEFAULT }}></div>
      </div>
    );
  }

  const recentBookings = [
    {
      id: 1,
      client: 'Sarah Johnson',
      type: 'Wedding',
      date: 'Dec 15, 2024',
      status: 'confirmed',
      amount: 150000,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 2,
      client: 'Mike Chen',
      type: 'Portrait',
      date: 'Dec 18, 2024',
      status: 'pending',
      amount: 75000,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 3,
      client: 'Emma Wilson',
      type: 'Event',
      date: 'Dec 20, 2024',
      status: 'confirmed',
      amount: 120000,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div 
        className="relative rounded-3xl p-8 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT}, ${theme.colors.copper[600]})`,
          color: 'white'
        }}
      >
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.firstName || 'Professional'}!</h1>
          <p className="text-lg opacity-90 mb-6">Here's what's happening with your studio today</p>
          
          <div className="flex gap-4">
            <Link
              href={routes.studioProfile}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
            >
              <Eye className="w-4 h-4" />
              View Profile
            </Link>
            <Link
              href={routes.studioGallery}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: theme.colors.copper.DEFAULT }}
            >
              <Camera className="w-4 h-4" />
              Upload Work
            </Link>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Camera className="w-full h-full" />
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
        
        {/* Earnings Card - Large */}
        <div 
          className="col-span-6 md:col-span-2 bg-white rounded-3xl p-6 transition-all hover:shadow-lg"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +12%
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: theme.colors.text.muted }}>Monthly Earnings</p>
            <p className="text-3xl font-bold mt-1" style={{ color: theme.colors.text.primary }}>₦{(stats.earnings / 1000).toFixed(0)}k</p>
            <p className="text-sm mt-2" style={{ color: theme.colors.text.secondary }}>From {stats.totalBookings} bookings</p>
          </div>
        </div>

        {/* Bookings Card */}
        <div 
          className="col-span-3 md:col-span-1 bg-white rounded-3xl p-6 transition-all hover:shadow-lg"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium" style={{ color: theme.colors.text.muted }}>Bookings</p>
          <p className="text-2xl font-bold mt-1" style={{ color: theme.colors.text.primary }}>{stats.totalBookings}</p>
          <p className="text-xs mt-1" style={{ color: theme.colors.text.muted }}>This month</p>
        </div>

        {/* Rating Card */}
        <div 
          className="col-span-3 md:col-span-1 bg-white rounded-3xl p-6 transition-all hover:shadow-lg"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium" style={{ color: theme.colors.text.muted }}>Rating</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{stats.averageRating}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(stats.averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
          <p className="text-xs mt-1" style={{ color: theme.colors.text.muted }}>48 reviews</p>
        </div>

        {/* Profile Views */}
        <div 
          className="col-span-3 md:col-span-1 bg-white rounded-3xl p-6 transition-all hover:shadow-lg"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium" style={{ color: theme.colors.text.muted }}>Profile Views</p>
          <p className="text-2xl font-bold mt-1" style={{ color: theme.colors.text.primary }}>{stats.profileViews}</p>
          <p className="text-xs mt-1" style={{ color: theme.colors.text.muted }}>This week</p>
        </div>

        {/* Portfolio Items */}
        <div 
          className="col-span-3 md:col-span-1 bg-white rounded-3xl p-6 transition-all hover:shadow-lg"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
            <Image className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium" style={{ color: theme.colors.text.muted }}>Portfolio</p>
          <p className="text-2xl font-bold mt-1" style={{ color: theme.colors.text.primary }}>{stats.portfolioItems}</p>
          <p className="text-xs mt-1" style={{ color: theme.colors.text.muted }}>Photos</p>
        </div>

        {/* Recent Bookings - Large */}
        <div 
          className="col-span-6 md:col-span-3 bg-white rounded-3xl p-6 transition-all hover:shadow-lg"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>Recent Bookings</h2>
            <Link
              href={routes.studioBookings}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: theme.colors.copper.DEFAULT }}
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 rounded-2xl transition-all hover:scale-[1.02]" style={{ backgroundColor: theme.colors.seaMist[25] }}>
                <div className="flex items-center gap-4">
                  <img 
                    src={booking.avatar} 
                    alt={booking.client}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold" style={{ color: theme.colors.text.primary }}>{booking.client}</p>
                    <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.type} • {booking.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold" style={{ color: theme.colors.text.primary }}>₦{(booking.amount / 1000).toFixed(0)}k</p>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions - Large */}
        <div 
          className="col-span-6 md:col-span-3 bg-white rounded-3xl p-6 transition-all hover:shadow-lg"
          style={{ border: `1px solid ${theme.colors.border}` }}
        >
          <h2 className="text-xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>Quick Actions</h2>
          
          <div className="grid grid-cols-1 gap-4">
            <Link
              href={routes.studioGallery}
              className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.02] group"
              style={{ backgroundColor: theme.colors.copper[50] }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: theme.colors.text.primary }}>Upload New Work</p>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Add photos to your portfolio</p>
              </div>
            </Link>

            <Link
              href={routes.studioAvailability}
              className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.02] group"
              style={{ backgroundColor: theme.colors.seaMist[50] }}
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: theme.colors.text.primary }}>Update Schedule</p>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Set your availability</p>
              </div>
            </Link>

            <Link
              href={routes.studioNotifications}
              className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.02] group"
              style={{ backgroundColor: theme.colors.seaMist[25] }}
            >
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: theme.colors.text.primary }}>Message Clients</p>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Respond to inquiries</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}