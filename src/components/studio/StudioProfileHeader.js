'use client';

import { Camera, Star, Edit3, Share2, Upload } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function StudioProfileHeader({ user, studioData }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 sm:h-48 bg-gradient-to-r from-gray-400 to-gray-600 relative">
        <button className="absolute top-4 right-4 p-2 bg-black/20 rounded-lg text-white hover:bg-black/30 transition-colors">
          <Upload className="w-4 h-4" />
        </button>
      </div>
      
      {/* Profile Content */}
      <div className="p-4 sm:p-8 -mt-12 sm:-mt-16 relative">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
          {/* Profile Image */}
          <div className="relative mx-auto lg:mx-0">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-4 border-white shadow-lg object-cover" />
            ) : (
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-4 border-white shadow-lg flex items-center justify-center text-xl sm:text-2xl font-bold text-white" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
                {user.firstName?.[0]}{user.lastName?.[0]}
              </div>
            )}
            <button className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>{user.name}</h1>
                <p className="text-base sm:text-lg mb-2" style={{ color: theme.colors.copper.DEFAULT }}>Professional Photographer</p>
                <p className="text-sm mb-4" style={{ color: theme.colors.text.secondary }}>{user.baseCity} • Member since {studioData.memberSince}</p>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{studioData.averageRating}</span>
                    <span className="text-sm" style={{ color: theme.colors.text.muted }}>({studioData.reviewsReceived} reviews)</span>
                  </div>
                  <div className="text-sm" style={{ color: theme.colors.text.muted }}>
                    {studioData.responseRate}% response rate
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105" style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}>
                  <Edit3 className="w-4 h-4 mr-2 inline" />
                  Edit Profile
                </button>
                <button className="px-4 sm:px-6 py-3 rounded-xl font-semibold border-2 transition-all hover:scale-105" style={{ borderColor: theme.colors.copper.DEFAULT, color: theme.colors.copper.DEFAULT }}>
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}