'use client';

import { Calendar, Clock, MapPin, Star, Eye, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

const STATUS_CONFIG = {
  confirmed: { color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle },
  pending: { color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-200', icon: Clock },
  completed: { color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', icon: CheckCircle },
  cancelled: { color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', icon: CheckCircle }
};

export default function BookingCard({ booking, formatDate, formatTime, getDaysUntil }) {
  const statusConfig = STATUS_CONFIG[booking.status];
  const StatusIcon = statusConfig.icon;
  const daysUntil = getDaysUntil(booking.date);

  return (
    <div 
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group" 
      style={{ border: `1px solid ${theme.colors.border}` }}
    >
      {/* Status & Days */}
      <div className="flex items-center justify-between mb-4">
        <div 
          className={`flex items-center gap-2 px-3 py-1 rounded-full border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}
        >
          <StatusIcon className="w-3 h-3" />
          <span className="text-xs font-medium capitalize">{booking.status}</span>
        </div>
        {daysUntil > 0 && booking.status !== 'completed' && (
          <div 
            className="text-xs font-medium px-2 py-1 rounded-full" 
            style={{ backgroundColor: theme.colors.copper[50], color: theme.colors.copper[700] }}
          >
            {daysUntil} days
          </div>
        )}
      </div>

      {/* Professional */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img src={booking.professional.avatar} alt={booking.professional.name} className="w-12 h-12 rounded-xl object-cover" />
          {booking.professional.verified && (
            <div 
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" 
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            >
              <CheckCircle className="w-2.5 h-2.5 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold truncate" style={{ color: theme.colors.text.primary }}>{booking.professional.name}</h3>
          <p className="text-sm truncate" style={{ color: theme.colors.text.secondary }}>{booking.type}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <Calendar className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
          {formatDate(booking.date)}
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <Clock className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
          {formatTime(booking.time)} - {formatTime(booking.endTime)}
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
          <MapPin className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
          {booking.location}
        </div>
      </div>

      {/* Price & Actions */}
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold" style={{ color: theme.colors.text.primary }}>₦{booking.price.toLocaleString()}</div>
        <div className="flex gap-2">
          {booking.status === 'completed' && !booking.hasReview && (
            <button 
              className="p-2 rounded-lg border transition-colors hover:opacity-80" 
              style={{ borderColor: theme.colors.border, color: theme.colors.text.muted }}
            >
              <Star className="w-4 h-4" />
            </button>
          )}
          <Link
            href={routes.booking(booking.id)}
            className="p-2 rounded-lg transition-colors"
            style={{ backgroundColor: theme.colors.copper.DEFAULT, color: 'white' }}
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}