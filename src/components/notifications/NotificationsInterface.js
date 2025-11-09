'use client';

import { useState, useMemo } from 'react';
import { Bell, Calendar, CheckCircle, MessageCircle, CreditCard } from 'lucide-react';
import { theme } from '../../lib/theme';
import NotificationsHeader from './NotificationsHeader';
import NotificationsControls from './NotificationsControls';
import NotificationItem from './NotificationItem';

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: 'booking_confirmed',
    category: 'booking',
    title: 'Booking Confirmed',
    message: 'Your session with Alex Visuals has been confirmed for Dec 15, 2024',
    timestamp: '2024-12-10T10:30:00Z',
    read: false,
    priority: 'high',
    actionUrl: '/booking/1',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 2,
    type: 'payment_reminder',
    category: 'payment',
    title: 'Payment Due Soon',
    message: 'Balance payment of ₦75,000 is due in 3 days for your upcoming session',
    timestamp: '2024-12-09T14:15:00Z',
    read: false,
    priority: 'high',
    actionUrl: '/booking/1',
    avatar: null
  },
  {
    id: 3,
    type: 'review_request',
    category: 'review',
    title: 'Leave a Review',
    message: 'How was your session with Mike Photography? Share your experience',
    timestamp: '2024-12-08T16:45:00Z',
    read: true,
    priority: 'medium',
    actionUrl: '/booking/3',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 4,
    type: 'system_update',
    category: 'system',
    title: 'New Features Available',
    message: 'Check out our new portfolio sharing and calendar sync features',
    timestamp: '2024-12-07T09:00:00Z',
    read: true,
    priority: 'low',
    actionUrl: null,
    avatar: null
  },
  {
    id: 5,
    type: 'message_received',
    category: 'message',
    title: 'New Message',
    message: 'Lagos Lens sent you a message about your upcoming session',
    timestamp: '2024-12-06T11:20:00Z',
    read: false,
    priority: 'medium',
    actionUrl: '/messages',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
  }
];

const TABS = [
  { id: 'all', label: 'All', icon: Bell },
  { id: 'booking', label: 'Bookings', icon: Calendar },
  { id: 'payment', label: 'Payments', icon: CreditCard },
  { id: 'message', label: 'Messages', icon: MessageCircle }
];

export default function NotificationsInterface() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const isToday = (timestamp) => {
    const today = new Date();
    const date = new Date(timestamp);
    return date.toDateString() === today.toDateString();
  };

  const isThisWeek = (timestamp) => {
    const today = new Date();
    const date = new Date(timestamp);
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return date >= weekAgo;
  };

  const filteredNotifications = useMemo(() => {
    let filtered = notifications.filter(notification => {
      const matchesTab = activeTab === 'all' || notification.category === activeTab;
      const matchesSearch = !searchQuery || 
        notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterType === 'all' || 
        (filterType === 'unread' && !notification.read) ||
        (filterType === 'today' && isToday(notification.timestamp)) ||
        (filterType === 'week' && isThisWeek(notification.timestamp));
      
      return matchesTab && matchesSearch && matchesFilter;
    });

    return filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }, [notifications, activeTab, searchQuery, filterType]);

  const stats = useMemo(() => {
    const unreadCount = notifications.filter(n => !n.read).length;
    const todayCount = notifications.filter(n => isToday(n.timestamp)).length;
    return { unreadCount, todayCount, totalCount: notifications.length };
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${Math.floor(diffInHours)}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <NotificationsHeader stats={stats} markAllAsRead={markAllAsRead} />
      <NotificationsControls 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterType={filterType}
        setFilterType={setFilterType}
        filteredCount={filteredNotifications.length}
      />

      {/* Tabs & Content */}
      <div className="bg-white rounded-2xl shadow-sm" style={{ border: `1px solid ${theme.colors.border}` }}>
        <div className="flex border-b" style={{ borderColor: theme.colors.border }}>
          {TABS.map(tab => {
            const Icon = tab.icon;
            const count = tab.id === 'all' ? notifications.length : 
              notifications.filter(n => n.category === tab.id).length;
            
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
                {count > 0 && (
                  <span 
                    className="text-xs px-2 py-1 rounded-full" 
                    style={{ 
                      backgroundColor: activeTab === tab.id ? theme.colors.copper[50] : theme.colors.seaMist[100], 
                      color: activeTab === tab.id ? theme.colors.copper[700] : theme.colors.text.muted 
                    }}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-16">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: theme.colors.seaMist[100] }}
              >
                <Bell className="w-8 h-8" style={{ color: theme.colors.text.muted }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>No notifications</h3>
              <p style={{ color: theme.colors.text.secondary }}>You're all caught up!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredNotifications.map(notification => (
                <NotificationItem 
                  key={notification.id}
                  notification={notification}
                  formatTime={formatTime}
                  markAsRead={markAsRead}
                  deleteNotification={deleteNotification}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}