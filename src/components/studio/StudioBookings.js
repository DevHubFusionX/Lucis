'use client';

import { useState } from 'react';
import { Check, X, Eye, Calendar, User, Clock, Filter, MoreVertical } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function StudioBookings() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      client: 'John Doe',
      email: 'john.doe@email.com',
      date: 'Nov 12, 2024',
      time: '10:00 AM',
      type: 'Wedding',
      status: 'pending',
      amount: 150000,
      location: 'Lagos Island'
    },
    {
      id: 2,
      client: 'Chioma B.',
      email: 'chioma.b@email.com',
      date: 'Nov 20, 2024',
      time: '2:00 PM',
      type: 'Portrait',
      status: 'confirmed',
      amount: 75000,
      location: 'Victoria Island'
    },
    {
      id: 3,
      client: 'Michael Chen',
      email: 'michael.chen@email.com',
      date: 'Nov 25, 2024',
      time: '4:00 PM',
      type: 'Event',
      status: 'pending',
      amount: 120000,
      location: 'Ikeja'
    },
    {
      id: 4,
      client: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      date: 'Dec 1, 2024',
      time: '11:00 AM',
      type: 'Corporate',
      status: 'confirmed',
      amount: 200000,
      location: 'Lekki'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const handleAccept = (bookingId) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'confirmed' }
        : booking
    ));
    // In real app: API call to update booking status and send notifications
  };

  const handleReject = (bookingId) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'rejected' }
        : booking
    ));
    // In real app: API call to update booking status and send notifications
  };

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: theme.colors.text.primary }}>Bookings Management</h1>
          <p className="mt-2" style={{ color: theme.colors.text.secondary }}>Manage your client bookings and requests</p>
        </div>
        
        {/* Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5" style={{ color: theme.colors.text.muted }} />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl focus:ring-2 focus:outline-none"
            style={{ 
              border: `1px solid ${theme.colors.border}`,
              backgroundColor: theme.colors.bg.primary,
              color: theme.colors.text.primary,
              focusRingColor: theme.colors.copper.DEFAULT
            }}
          >
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ backgroundColor: theme.colors.copper[100] }}>
              <Calendar className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{bookings.length}</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Total Bookings</p>
            </div>
          </div>
        </div>
        
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-xl">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{bookings.filter(b => b.status === 'pending').length}</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Pending</p>
            </div>
          </div>
        </div>
        
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-xl">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{bookings.filter(b => b.status === 'confirmed').length}</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Confirmed</p>
            </div>
          </div>
        </div>
        
        <div 
          className="p-4 lg:p-6 rounded-2xl"
          style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-xl">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>{new Set(bookings.map(b => b.client)).size}</p>
              <p className="text-xs lg:text-sm" style={{ color: theme.colors.text.secondary }}>Unique Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div 
        className="hidden lg:block rounded-2xl overflow-hidden"
        style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: theme.colors.seaMist[50], borderBottom: `1px solid ${theme.colors.border}` }}>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: theme.colors.text.primary }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ borderColor: theme.colors.border }} className="divide-y">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="transition-colors" style={{ ':hover': { backgroundColor: theme.colors.seaMist[25] } }}>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.text.primary }}>{booking.client}</p>
                      <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.text.primary }}>{booking.date}</p>
                      <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                      {booking.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full capitalize ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold" style={{ color: theme.colors.text.primary }}>₦{(booking.amount / 1000).toFixed(0)}k</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleAccept(booking.id)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                          >
                            <Check className="w-4 h-4" />
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(booking.id)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                            Reject
                          </button>
                        </>
                      )}
                      <button 
                        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors"
                        style={{ backgroundColor: theme.colors.seaMist[100], color: theme.colors.text.secondary }}
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredBookings.map((booking) => (
          <div 
            key={booking.id}
            className="p-4 rounded-2xl"
            style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold" style={{ color: theme.colors.text.primary }}>{booking.client}</h3>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.email}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs font-medium" style={{ color: theme.colors.text.muted }}>Date & Time</p>
                <p className="text-sm" style={{ color: theme.colors.text.primary }}>{booking.date}</p>
                <p className="text-xs" style={{ color: theme.colors.text.secondary }}>{booking.time}</p>
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: theme.colors.text.muted }}>Type & Amount</p>
                <p className="text-sm" style={{ color: theme.colors.text.primary }}>{booking.type}</p>
                <p className="text-sm font-semibold" style={{ color: theme.colors.copper.DEFAULT }}>₦{(booking.amount / 1000).toFixed(0)}k</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {booking.status === 'pending' && (
                <>
                  <button
                    onClick={() => handleAccept(booking.id)}
                    className="flex items-center gap-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(booking.id)}
                    className="flex items-center gap-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Reject
                  </button>
                </>
              )}
              <button 
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ backgroundColor: theme.colors.seaMist[100], color: theme.colors.text.secondary }}
              >
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
          <p className="text-gray-600">
            {filter === 'all' ? 'You have no bookings yet.' : `No ${filter} bookings found.`}
          </p>
        </div>
      )}
    </div>
  );
}