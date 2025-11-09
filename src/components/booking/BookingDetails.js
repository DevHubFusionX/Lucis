'use client';

import { useState } from 'react';
import { ArrowLeft, MessageCircle, Star, Calendar, Clock, MapPin, Phone, Mail, CheckCircle, AlertCircle, CreditCard, Download, Share2, Edit3 } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

const MOCK_BOOKING = {
  id: '1',
  professional: {
    name: "Alex Visuals",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 127,
    verified: true,
    specialty: "Wedding Photography",
    phone: "+234 801 234 5678",
    email: "alex@alexvisuals.com",
    portfolio: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=200&fit=crop"
    ]
  },
  date: "2024-12-15",
  startTime: "14:00",
  endTime: "18:00",
  location: "Victoria Island, Lagos",
  address: "1234 Ahmadu Bello Way, Victoria Island, Lagos",
  type: "Wedding Photography",
  status: "confirmed",
  price: 150000,
  deposit: 75000,
  balance: 75000,
  paymentMethod: "Bank Transfer",
  paymentStatus: "deposit_paid",
  notes: "Outdoor ceremony followed by indoor reception. Please bring backup equipment for lighting.",
  createdAt: "2024-12-01",
  timeline: [
    { status: 'requested', label: 'Booking Requested', date: '2024-12-01', completed: true },
    { status: 'confirmed', label: 'Booking Confirmed', date: '2024-12-02', completed: true },
    { status: 'deposit_paid', label: 'Deposit Paid', date: '2024-12-05', completed: true },
    { status: 'in_progress', label: 'Session Day', date: '2024-12-15', completed: false },
    { status: 'completed', label: 'Session Completed', date: null, completed: false }
  ]
};

const STATUS_CONFIG = {
  requested: { color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-200', icon: AlertCircle },
  confirmed: { color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle },
  in_progress: { color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', icon: Clock },
  completed: { color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle },
  cancelled: { color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', icon: AlertCircle }
};

export default function BookingDetails({ bookingId }) {
  const [booking] = useState(MOCK_BOOKING);
  const statusConfig = STATUS_CONFIG[booking.status];
  const StatusIcon = statusConfig.icon;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeStr) => {
    return new Date(`2024-01-01T${timeStr}`).toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  const getDaysUntil = () => {
    const today = new Date();
    const bookingDate = new Date(booking.date);
    const diffTime = bookingDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntil = getDaysUntil();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href={routes.bookings} 
            className="p-2 rounded-lg transition-colors hover:opacity-80" 
            style={{ backgroundColor: theme.colors.seaMist[100] }}
          >
            <ArrowLeft className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Booking Details</h1>
            <p style={{ color: theme.colors.text.muted }}>Booking #{booking.id}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-lg border font-medium transition-colors hover:opacity-80" 
            style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-lg border font-medium transition-colors hover:opacity-80" 
            style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Status Banner */}
      {daysUntil > 0 && booking.status !== 'completed' && (
        <div 
          className="rounded-xl p-4 border" 
          style={{ 
            backgroundColor: theme.colors.copper[50], 
            borderColor: theme.colors.copper[200] 
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold" style={{ color: theme.colors.copper[700] }}>Upcoming Session</h3>
                <p className="text-sm" style={{ color: theme.colors.copper[600] }}>
                  {daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days to go`}
                </p>
              </div>
            </div>
            <div 
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}
            >
              <StatusIcon className="w-4 h-4" />
              <span className="text-sm font-medium capitalize">{booking.status.replace('_', ' ')}</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="xl:col-span-8 space-y-6">
          {/* Professional Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
            <div className="flex items-start gap-4">
              <div className="relative">
                <img 
                  src={booking.professional.avatar} 
                  alt={booking.professional.name} 
                  className="w-20 h-20 rounded-2xl object-cover" 
                />
                {booking.professional.verified && (
                  <div 
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white" 
                    style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>
                      {booking.professional.name}
                    </h2>
                    <p style={{ color: theme.colors.text.secondary }}>{booking.professional.specialty}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>
                          {booking.professional.rating}
                        </span>
                        <span className="text-sm" style={{ color: theme.colors.text.muted }}>
                          ({booking.professional.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="p-2 rounded-lg transition-colors" 
                      style={{ backgroundColor: theme.colors.seaMist[100], color: theme.colors.text.secondary }}
                    >
                      <Phone className="w-4 h-4" />
                    </button>
                    <button 
                      className="p-2 rounded-lg transition-colors" 
                      style={{ backgroundColor: theme.colors.seaMist[100], color: theme.colors.text.secondary }}
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                    <button 
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors" 
                      style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </button>
                  </div>
                </div>
                
                {/* Portfolio Preview */}
                <div className="grid grid-cols-3 gap-2">
                  {booking.professional.portfolio.slice(0, 3).map((img, i) => (
                    <img key={i} src={img} alt="" className="w-full h-20 object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>Session Details</h3>
              <button 
                className="flex items-center gap-2 px-3 py-2 rounded-lg border font-medium transition-colors hover:opacity-80" 
                style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center" 
                    style={{ backgroundColor: theme.colors.seaMist[100] }}
                  >
                    <Calendar className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.text.muted }}>Date</p>
                    <p className="font-medium" style={{ color: theme.colors.text.primary }}>
                      {formatDate(booking.date)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center" 
                    style={{ backgroundColor: theme.colors.seaMist[100] }}
                  >
                    <Clock className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.text.muted }}>Time</p>
                    <p className="font-medium" style={{ color: theme.colors.text.primary }}>
                      {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center" 
                    style={{ backgroundColor: theme.colors.seaMist[100] }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: theme.colors.text.secondary }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: theme.colors.text.muted }}>Location</p>
                    <p className="font-medium" style={{ color: theme.colors.text.primary }}>{booking.location}</p>
                    <p className="text-sm" style={{ color: theme.colors.text.muted }}>{booking.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {booking.notes && (
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: theme.colors.seaMist[50] }}>
                <h4 className="font-medium mb-2" style={{ color: theme.colors.text.primary }}>Special Notes</h4>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.notes}</p>
              </div>
            )}
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
            <h3 className="text-lg font-bold mb-6" style={{ color: theme.colors.text.primary }}>Payment Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.colors.seaMist[50] }}>
                <p className="text-sm" style={{ color: theme.colors.text.muted }}>Total Amount</p>
                <p className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                  ₦{booking.price.toLocaleString()}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.colors.copper[50] }}>
                <p className="text-sm" style={{ color: theme.colors.copper[600] }}>Deposit Paid</p>
                <p className="text-2xl font-bold" style={{ color: theme.colors.copper[700] }}>
                  ₦{booking.deposit.toLocaleString()}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.colors.seaMist[50] }}>
                <p className="text-sm" style={{ color: theme.colors.text.muted }}>Balance Due</p>
                <p className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                  ₦{booking.balance.toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: theme.colors.border }}>
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5" style={{ color: theme.colors.text.muted }} />
                <div>
                  <p className="font-medium" style={{ color: theme.colors.text.primary }}>Payment Method</p>
                  <p className="text-sm" style={{ color: theme.colors.text.muted }}>{booking.paymentMethod}</p>
                </div>
              </div>
              <div 
                className={`px-3 py-1 rounded-full text-sm font-medium ${STATUS_CONFIG.confirmed.bg} ${STATUS_CONFIG.confirmed.color}`}
              >
                Deposit Paid
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="xl:col-span-4 space-y-6">
          {/* Status Timeline */}
          <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
            <h3 className="text-lg font-bold mb-6" style={{ color: theme.colors.text.primary }}>Booking Progress</h3>
            
            <div className="space-y-4">
              {booking.timeline.map((step, index) => (
                <div key={step.status} className="flex items-start gap-3">
                  <div className="relative">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? 'text-white' 
                          : 'border-2'
                      }`}
                      style={{
                        backgroundColor: step.completed ? theme.colors.copper.DEFAULT : 'white',
                        borderColor: step.completed ? theme.colors.copper.DEFAULT : theme.colors.border
                      }}
                    >
                      {step.completed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.border }} />
                      )}
                    </div>
                    {index < booking.timeline.length - 1 && (
                      <div 
                        className="absolute top-8 left-1/2 w-0.5 h-6 -translate-x-1/2" 
                        style={{ backgroundColor: step.completed ? theme.colors.copper.DEFAULT : theme.colors.border }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <p 
                      className="font-medium" 
                      style={{ color: step.completed ? theme.colors.text.primary : theme.colors.text.muted }}
                    >
                      {step.label}
                    </p>
                    {step.date && (
                      <p className="text-sm" style={{ color: theme.colors.text.muted }}>
                        {new Date(step.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.text.primary }}>Quick Actions</h3>
            
            <div className="space-y-3">
              <button 
                className="w-full flex items-center gap-3 p-3 rounded-lg font-medium transition-colors" 
                style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
              >
                <MessageCircle className="w-4 h-4" />
                Message Professional
              </button>
              
              {booking.balance > 0 && (
                <button 
                  className="w-full flex items-center gap-3 p-3 rounded-lg border font-medium transition-colors hover:opacity-80" 
                  style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
                >
                  <CreditCard className="w-4 h-4" />
                  Pay Balance (₦{booking.balance.toLocaleString()})
                </button>
              )}
              
              <button 
                className="w-full flex items-center gap-3 p-3 rounded-lg border font-medium transition-colors hover:opacity-80" 
                style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
              >
                <Edit3 className="w-4 h-4" />
                Modify Booking
              </button>
              
              {booking.status === 'completed' && (
                <button 
                  className="w-full flex items-center gap-3 p-3 rounded-lg border font-medium transition-colors hover:opacity-80" 
                  style={{ borderColor: theme.colors.border, color: theme.colors.text.secondary }}
                >
                  <Star className="w-4 h-4" />
                  Leave Review
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}