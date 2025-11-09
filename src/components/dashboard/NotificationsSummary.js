import { Clock, CheckCircle, Bell, ArrowRight, MessageCircle, Calendar, Star } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

export default function NotificationsSummary() {
  const notifications = [
    {
      id: 1,
      type: 'reminder',
      icon: Clock,
      title: 'Session Starting Soon',
      message: 'Your session with Alex Visuals starts in 2 hours',
      time: '2 hours',
      color: 'text-orange-600 bg-orange-100',
      priority: 'high',
      actionable: true
    },
    {
      id: 2,
      type: 'success',
      icon: CheckCircle,
      title: 'Review Approved',
      message: 'Your review for David Films was approved',
      time: '1 day',
      color: 'text-green-600 bg-green-100',
      priority: 'medium',
      actionable: false
    },
    {
      id: 3,
      type: 'info',
      icon: MessageCircle,
      title: 'New Message',
      message: 'Mike Photography sent you a message',
      time: '3 days',
      color: 'text-blue-600 bg-blue-100',
      priority: 'medium',
      actionable: true
    }
  ];

  const unreadCount = notifications.length;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg" style={{ border: `1px solid ${theme.colors.border}` }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Recent Activity</h2>
          <p className="mt-1" style={{ color: theme.colors.text.muted }}>{unreadCount} new notifications</p>
        </div>
        <Link 
          href={routes.notifications}
          className="flex items-center space-x-2 font-medium transition-colors hover:opacity-80"
          style={{ color: theme.colors.copper.DEFAULT }}
        >
          <span>View all</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const IconComponent = notification.icon;
          return (
            <div 
              key={notification.id} 
              className="group relative rounded-xl p-4 hover:shadow-md transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, white 0%, ${theme.colors.seaMist[25]} 100%)`,
                border: `1px solid ${theme.colors.border}`
              }}
            >
              {/* Priority indicator */}
              {notification.priority === 'high' && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
              
              <div className="flex items-start space-x-3">
                <div className={`p-2.5 rounded-xl ${notification.color} group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-sm font-bold transition-colors" 
                    style={{ color: theme.colors.text.primary }}
                  >
                    {notification.title}
                  </h3>
                  <p 
                    className="text-sm mt-1 leading-relaxed" 
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs" style={{ color: theme.colors.text.muted }}>{notification.time} ago</p>
                    {notification.actionable && (
                      <button 
                        className="text-xs font-medium transition-colors hover:opacity-80" 
                        style={{ color: theme.colors.copper.DEFAULT }}
                      >
                        Take Action
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Quick Actions */}
      <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href={routes.notifications}
            className="flex items-center justify-center space-x-2 px-4 py-2.5 font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            style={{ 
              backgroundColor: theme.colors.copper.DEFAULT, 
              color: theme.colors.text.onCopper 
            }}
          >
            <Bell className="w-4 h-4" />
            <span>View All</span>
          </Link>
          <button 
            className="flex items-center justify-center space-x-2 px-4 py-2.5 font-medium rounded-lg transition-colors hover:opacity-80" 
            style={{ 
              backgroundColor: theme.colors.seaMist[100], 
              color: theme.colors.text.secondary 
            }}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Mark Read</span>
          </button>
        </div>
      </div>
    </div>
  );
}