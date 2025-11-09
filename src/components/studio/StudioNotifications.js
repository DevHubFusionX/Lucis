'use client';

import { Calendar, Star, DollarSign, Bell, CheckCircle, Eye } from 'lucide-react';

export default function StudioNotifications() {
  const notifications = [
    {
      id: 1,
      type: 'booking_request',
      title: 'New Booking Request',
      message: 'Booking request from John (Nov 15, 10 AM)',
      time: '5 minutes ago',
      isRead: false,
      icon: Calendar,
      iconColor: 'text-blue-600 bg-blue-100',
      actionRequired: true
    },
    {
      id: 2,
      type: 'review',
      title: 'New Review Received',
      message: 'Chioma rated you 5 stars!',
      time: '2 hours ago',
      isRead: false,
      icon: Star,
      iconColor: 'text-yellow-600 bg-yellow-100',
      actionRequired: false
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of ₦30,000 sent to your account.',
      time: '1 day ago',
      isRead: false,
      icon: DollarSign,
      iconColor: 'text-green-600 bg-green-100',
      actionRequired: false
    },
    {
      id: 4,
      type: 'booking_confirmed',
      title: 'Booking Confirmed',
      message: 'Sarah Wilson confirmed her wedding photography booking for Dec 20.',
      time: '2 days ago',
      isRead: true,
      icon: CheckCircle,
      iconColor: 'text-green-600 bg-green-100',
      actionRequired: false
    },
    {
      id: 5,
      type: 'booking_request',
      title: 'New Booking Request',
      message: 'Mike Chen wants to book you for portrait session on Dec 18, 2 PM.',
      time: '3 days ago',
      isRead: true,
      icon: Calendar,
      iconColor: 'text-blue-600 bg-blue-100',
      actionRequired: false
    }
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const actionRequiredCount = notifications.filter(n => n.actionRequired).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-2">Stay updated with your studio activities</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-xl transition-colors">
          <CheckCircle className="w-4 h-4" />
          Mark all as read
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-xl">
              <Bell className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
              <p className="text-sm text-gray-600">Unread</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-xl">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{actionRequiredCount}</p>
              <p className="text-sm text-gray-600">Action Required</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-xl">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{notifications.length}</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <div
              key={notification.id}
              className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                notification.isRead 
                  ? 'bg-gray-50 border-gray-200' 
                  : 'bg-white border-yellow-200 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${notification.iconColor}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`font-semibold ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
                        {notification.title}
                      </h3>
                      <p className={`mt-1 ${notification.isRead ? 'text-gray-500' : 'text-gray-600'}`}>
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 ml-4">
                      {notification.actionRequired && (
                        <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                          Action Required
                        </span>
                      )}
                      
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      )}
                      
                      <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-yellow-600 hover:text-yellow-700 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
                        <Eye className="w-3 h-3" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications</h3>
          <p className="text-gray-600">You're all caught up! New notifications will appear here.</p>
        </div>
      )}
    </div>
  );
}