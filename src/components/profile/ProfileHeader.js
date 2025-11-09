'use client';

import { Camera, Share2, Edit3, Settings, CheckCircle, Star, Calendar, TrendingUp, Heart } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function ProfileHeader({ user }) {
  return (
    <div className="relative overflow-hidden">
      {/* Cover Image */}
      <div 
        className="relative h-32 sm:h-48 rounded-2xl overflow-hidden" 
        style={{ 
          background: `linear-gradient(135deg, ${theme.colors.copper.DEFAULT} 0%, ${theme.colors.seaMist.DEFAULT} 100%)` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            className="p-2 rounded-xl backdrop-blur-sm text-white transition-all hover:scale-105" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <Camera className="w-4 h-4" />
          </button>
          <button 
            className="p-2 rounded-xl backdrop-blur-sm text-white transition-all hover:scale-105" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Profile Content */}
      <div 
        className="relative rounded-2xl -mt-6 sm:-mt-8 pt-6 sm:pt-8 px-4 sm:px-6 pb-6 shadow-sm" 
        style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
      >
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-1 w-full">
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl border-4 border-white shadow-lg object-cover"
                />
              ) : (
                <div 
                  className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl border-4 border-white shadow-lg flex items-center justify-center text-xl sm:text-2xl font-bold text-white"
                  style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                >
                  {user.firstName?.[0]}{user.lastName?.[0]}
                </div>
              )}
              <button 
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-lg transition-all hover:scale-105" 
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <Camera className="w-4 h-4" />
              </button>
              
              <div 
                className="absolute -top-2 -left-2 px-2 py-1 text-xs font-bold rounded-full shadow-sm" 
                style={{ 
                  backgroundColor: theme.colors.copper.DEFAULT, 
                  color: 'white'
                }}
              >
                {user.membershipTier}
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left w-full">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center sm:justify-start mb-2">
                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{user.name}</h2>
                <div 
                  className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium" 
                  style={{ 
                    backgroundColor: theme.colors.copper[50], 
                    color: theme.colors.copper[700] 
                  }}
                >
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </div>
              </div>
              
              <div className="mb-3 space-y-1">
                <p className="text-sm" style={{ color: theme.colors.text.muted }}>{user.email}</p>
                <p className="text-sm" style={{ color: theme.colors.text.muted }}>Member since {user.joinDate}</p>
              </div>
              <p className="max-w-md text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>{user.bio}</p>
              
              {user.phone && (
                <p className="mb-2 text-sm" style={{ color: theme.colors.text.muted }}>{user.phone}</p>
              )}
              
              {user.averageRating > 0 && (
                <div className="flex items-center gap-2 justify-center sm:justify-start mt-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(user.averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>{user.averageRating}</span>
                  <span className="text-sm" style={{ color: theme.colors.text.muted }}>({user.reviewsGiven} reviews)</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button 
              className="flex items-center justify-center gap-2 px-4 py-2.5 font-medium rounded-xl transition-all hover:scale-105" 
              style={{ 
                backgroundColor: theme.colors.copper.DEFAULT, 
                color: 'white'
              }}
            >
              <Edit3 className="w-4 h-4" />
              <span className="hidden sm:inline">Edit Profile</span>
              <span className="sm:hidden">Edit</span>
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 px-4 py-2.5 border font-medium rounded-xl transition-colors hover:opacity-80" 
              style={{ 
                backgroundColor: theme.colors.bg.primary,
                borderColor: theme.colors.border, 
                color: theme.colors.text.secondary 
              }}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div 
            className="p-3 sm:p-4 rounded-xl" 
            style={{ backgroundColor: theme.colors.seaMist[50], border: `1px solid ${theme.colors.seaMist[200]}` }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div 
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl flex items-center justify-center" 
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold" style={{ color: theme.colors.text.primary }}>{user.totalBookings}</div>
                <div className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>Total Bookings</div>
              </div>
            </div>
          </div>
          
          <div 
            className="p-3 sm:p-4 rounded-xl" 
            style={{ backgroundColor: theme.colors.seaMist[50], border: `1px solid ${theme.colors.seaMist[200]}` }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold" style={{ color: theme.colors.text.primary }}>₦{(user.totalSpent / 1000).toFixed(0)}k</div>
                <div className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>Total Spent</div>
              </div>
            </div>
          </div>
          
          <div 
            className="p-3 sm:p-4 rounded-xl" 
            style={{ backgroundColor: theme.colors.seaMist[50], border: `1px solid ${theme.colors.seaMist[200]}` }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold" style={{ color: theme.colors.text.primary }}>{user.favoritePhotographers}</div>
                <div className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>Favorites</div>
              </div>
            </div>
          </div>
          
          <div 
            className="p-3 sm:p-4 rounded-xl" 
            style={{ backgroundColor: theme.colors.seaMist[50], border: `1px solid ${theme.colors.seaMist[200]}` }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                <Star className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold" style={{ color: theme.colors.text.primary }}>{user.reviewsGiven}</div>
                <div className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}