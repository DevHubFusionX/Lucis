'use client';

import { useState } from 'react';
import { Camera, Save, MapPin, Phone, Mail, DollarSign, Palette, Navigation } from 'lucide-react';

export default function StudioProfile() {
  const [profile, setProfile] = useState({
    name: 'Alex Visuals',
    bio: 'Professional photographer specializing in weddings, portraits, and events. With over 5 years of experience, I capture moments that tell your unique story.',
    avatar: '/api/placeholder/120/120',
    email: 'alex@alexvisuals.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    website: 'www.alexvisuals.com',
    styles: ['Wedding', 'Portrait', 'Event', 'Corporate'],
    travelRadius: 50,
    pricing: {
      wedding: 150000,
      portrait: 75000,
      event: 120000,
      corporate: 200000
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handlePricingChange = (type, value) => {
    setProfile(prev => ({
      ...prev,
      pricing: { ...prev.pricing, [type]: parseInt(value) || 0 }
    }));
  };

  const toggleStyle = (style) => {
    setProfile(prev => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter(s => s !== style)
        : [...prev.styles, style]
    }));
  };

  const availableStyles = ['Wedding', 'Portrait', 'Event', 'Corporate', 'Fashion', 'Product', 'Real Estate', 'Food'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-2">Manage your professional profile and business information</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
          
          {isEditing && (
            <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-xl transition-colors">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture & Basic Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Profile Picture</h3>
            
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-2xl object-cover"
                />
                {isEditing && (
                  <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-xl flex items-center justify-center text-white transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              <div className="mt-4">
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="text-xl font-bold text-center w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                ) : (
                  <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                )}
                <p className="text-gray-600 mt-1">Professional Photographer</p>
              </div>
            </div>
          </div>

          {/* Travel Radius */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Navigation className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Travel Radius</h3>
            </div>
            
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={profile.travelRadius}
                  onChange={(e) => handleInputChange('travelRadius', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-900">{profile.travelRadius} km</span>
                  <p className="text-sm text-gray-600">Maximum travel distance</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">{profile.travelRadius} km</span>
                <p className="text-sm text-gray-600">Maximum travel distance</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Bio</h3>
            
            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Tell clients about your experience and style..."
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                  />
                ) : (
                  <span className="text-gray-700">{profile.email}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600" />
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                  />
                ) : (
                  <span className="text-gray-700">{profile.phone}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                  />
                ) : (
                  <span className="text-gray-700">{profile.location}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-gray-600">🌐</span>
                {isEditing ? (
                  <input
                    type="url"
                    value={profile.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                  />
                ) : (
                  <span className="text-gray-700">{profile.website}</span>
                )}
              </div>
            </div>
          </div>

          {/* Photography Styles */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Photography Styles</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {availableStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => isEditing && toggleStyle(style)}
                  disabled={!isEditing}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    profile.styles.includes(style)
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${!isEditing && 'cursor-default'}`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Pricing</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(profile.pricing).map(([type, price]) => (
                <div key={type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900 capitalize">{type}</span>
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">₦</span>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => handlePricingChange(type, e.target.value)}
                        className="w-24 border border-gray-300 rounded px-2 py-1 text-right"
                      />
                    </div>
                  ) : (
                    <span className="font-semibold text-gray-900">₦{price.toLocaleString()}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}