'use client';

import { Bell, CheckCircle, CreditCard, Star, MessageCircle, Eye } from 'lucide-react';
import Link from 'next/link';
import { theme } from '../../lib/theme';

const NOTIFICATION_ICONS = {
  booking_confirmed: CheckCircle,
  payment_reminder: CreditCard,
  review_request: Star,
  system_update: Bell,
  message_received: MessageCircle
};

const NOTIFICATION_COLORS = {
  booking: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
  payment: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700' },
  review: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
  system: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
  message: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700' }
};

export default function NotificationItem({ 
  notification, 
  formatTime, 
  markAsRead, 
  deleteNotification 
}) {
  const Icon = NOTIFICATION_ICONS[notification.type] || Bell;
  const colors = NOTIFICATION_COLORS[notification.category] || NOTIFICATION_COLORS.system;
  
  return (
    <div 
      className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-sm ${
        !notification.read ? 'ring-1' : ''
      }`}
      style={{ 
        backgroundColor: !notification.read ? theme.colors.seaMist[25] : 'white',
        borderColor: !notification.read ? theme.colors.copper[200] : theme.colors.border,
        ringColor: !notification.read ? theme.colors.copper[200] : 'transparent'
      }}
    >
      <div className="flex items-center gap-3">
        {notification.avatar ? (
          <img 
            src={notification.avatar} 
            alt="" 
            className="w-10 h-10 rounded-full object-cover" 
          />
        ) : (
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center ${colors.bg}`}
          >
            <Icon className={`w-5 h-5 ${colors.text}`} />
          </div>
        )}
        {!notification.read && (
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }} />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-1">
          <h4 
            className={`font-medium ${!notification.read ? 'font-bold' : ''}`} 
            style={{ color: theme.colors.text.primary }}
          >
            {notification.title}
          </h4>
          <span className="text-xs" style={{ color: theme.colors.text.muted }}>
            {formatTime(notification.timestamp)}
          </span>
        </div>
        <p className="text-sm mb-3" style={{ color: theme.colors.text.secondary }}>
          {notification.message}
        </p>
        
        <div className="flex items-center gap-2">
          {notification.actionUrl && (
            <Link
              href={notification.actionUrl}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
              style={{ 
                backgroundColor: theme.colors.copper.DEFAULT, 
                color: 'white' 
              }}
            >
              <Eye className="w-3 h-3" />
              View
            </Link>
          )}
          {!notification.read && (
            <button
              onClick={() => markAsRead(notification.id)}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors hover:opacity-80"
              style={{ 
                borderColor: theme.colors.border, 
                color: theme.colors.text.secondary 
              }}
            >
              Mark read
            </button>
          )}
          <button
            onClick={() => deleteNotification(notification.id)}
            className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors hover:opacity-80"
            style={{ 
              borderColor: theme.colors.border, 
              color: theme.colors.text.muted 
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}