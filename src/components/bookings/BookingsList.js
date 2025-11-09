'use client';

import { useState, useMemo } from 'react';
import { Calendar, Clock, CheckCircle, Plus } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';
import BookingsHeader from './BookingsHeader';
import BookingsControls from './BookingsControls';
import BookingCard from './BookingCard';
import BookingListItem from './BookingListItem';

const MOCK_BOOKINGS = [
  {
    id: 1,
    professional: {
      name: "Alex Visuals",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    date: "2024-12-15",
    time: "14:00",
    endTime: "18:00",
    status: "confirmed",
    type: "Wedding Photography",
    location: "Victoria Island",
    price: 150000,
    duration: 4,
    createdAt: "2024-11-20"
  },
  {
    id: 2,
    professional: {
      name: "David Films",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      verified: false
    },
    date: "2024-12-18",
    time: "10:00",
    endTime: "14:00",
    status: "pending",
    type: "Event Videography",
    location: "Lagos Island",
    price: 200000,
    duration: 4,
    createdAt: "2024-11-25"
  },
  {
    id: 3,
    professional: {
      name: "Mike Photography",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    date: "2024-11-28",
    time: "15:00",
    endTime: "17:00",
    status: "completed",
    type: "Portrait Session",
    location: "Ikeja",
    price: 75000,
    duration: 2,
    createdAt: "2024-11-15",
    hasReview: false
  },
  {
    id: 4,
    professional: {
      name: "Lagos Lens",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      verified: true
    },
    date: "2024-10-20",
    time: "12:00",
    endTime: "16:00",
    status: "completed",
    type: "Corporate Event",
    location: "Lekki",
    price: 180000,
    duration: 4,
    createdAt: "2024-10-10",
    hasReview: true
  }
];

const TABS = [
  { id: 'all', label: 'All', icon: Calendar },
  { id: 'upcoming', label: 'Upcoming', icon: Clock },
  { id: 'completed', label: 'Completed', icon: CheckCircle }
];

export default function BookingsList() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('list');

  const filteredBookings = useMemo(() => {
    let filtered = MOCK_BOOKINGS.filter(booking => {
      const matchesTab = activeTab === 'all' || 
        (activeTab === 'upcoming' && ['confirmed', 'pending'].includes(booking.status)) ||
        (activeTab === 'completed' && booking.status === 'completed');
      
      const matchesSearch = !searchQuery || 
        booking.professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesTab && matchesSearch;
    });

    // Sort bookings
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'price':
          return b.price - a.price;
        case 'status':
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeTab, searchQuery, sortBy]);

  const stats = useMemo(() => {
    const upcoming = MOCK_BOOKINGS.filter(b => ['confirmed', 'pending'].includes(b.status)).length;
    const completed = MOCK_BOOKINGS.filter(b => b.status === 'completed').length;
    const totalSpent = MOCK_BOOKINGS.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.price, 0);
    
    return { upcoming, completed, totalSpent };
  }, []);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const formatTime = (timeStr) => {
    return new Date(`2024-01-01T${timeStr}`).toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  const getDaysUntil = (dateStr) => {
    const today = new Date();
    const bookingDate = new Date(dateStr);
    const diffTime = bookingDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <BookingsHeader stats={stats} />
      <BookingsControls 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        filteredCount={filteredBookings.length}
      />

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
        <div className="flex border-b" style={{ borderColor: theme.colors.border }}>
          {TABS.map(tab => {
            const Icon = tab.icon;
            const count = tab.id === 'all' ? MOCK_BOOKINGS.length : 
              tab.id === 'upcoming' ? stats.upcoming : stats.completed;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-3 px-6 py-4 font-medium transition-colors border-b-2"
                style={{
                  borderColor: activeTab === tab.id ? theme.colors.copper.DEFAULT : 'transparent',
                  color: activeTab === tab.id ? theme.colors.copper.DEFAULT : theme.colors.text.muted
                }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                <span 
                  className="text-xs px-2 py-1 rounded-full" 
                  style={{ 
                    backgroundColor: activeTab === tab.id ? theme.colors.copper[50] : theme.colors.seaMist[100], 
                    color: activeTab === tab.id ? theme.colors.copper[700] : theme.colors.text.muted 
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-16">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: theme.colors.seaMist[100] }}
              >
                <Calendar className="w-8 h-8" style={{ color: theme.colors.text.muted }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                {searchQuery ? 'No matching bookings' : 'No bookings yet'}
              </h3>
              <p className="mb-6" style={{ color: theme.colors.text.secondary }}>
                {searchQuery ? 'Try adjusting your search' : 'Book your first session to get started'}
              </p>
              <Link
                href={routes.search}
                className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-xl transition-colors"
                style={{ 
                  backgroundColor: theme.colors.copper.DEFAULT, 
                  color: theme.colors.text.onCopper 
                }}
              >
                <Plus className="w-4 h-4" />
                Book Session
              </Link>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-4' : 'space-y-4'}>
              {filteredBookings.map(booking => (
                viewMode === 'grid' ? (
                  <BookingCard key={booking.id} booking={booking} formatDate={formatDate} formatTime={formatTime} getDaysUntil={getDaysUntil} />
                ) : (
                  <BookingListItem key={booking.id} booking={booking} formatDate={formatDate} formatTime={formatTime} getDaysUntil={getDaysUntil} />
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}