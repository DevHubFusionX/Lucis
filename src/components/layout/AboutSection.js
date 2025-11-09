'use client';

import { Bell, Calendar, CheckCircle, Clock, MapPin } from 'lucide-react';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';
import { useState, useEffect } from 'react';

export default function NotificationSection() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [currentNotification, setCurrentNotification] = useState(0);
  
  const notifications = [
    {
      icon: Bell,
      title: "New Booking Request",
      message: "You have a booking request from Ada in Lagos — starts in 2 hours.",
      time: "2 min ago",
      type: "request"
    },
    {
      icon: CheckCircle,
      title: "Booking Confirmed",
      message: "Your booking for Saturday has been confirmed!",
      time: "5 min ago",
      type: "confirmed"
    },
    {
      icon: Clock,
      title: "Reminder",
      message: "Wedding shoot with James starts in 30 minutes.",
      time: "Just now",
      type: "reminder"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{ backgroundColor: theme.colors.seaMist[25] }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span style={{ color: theme.colors.text.primary }}>Smart</span>{' '}
            <span style={{ color: theme.colors.copper.DEFAULT }}>Notifications</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Stay updated with real-time alerts and automated scheduling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className={`transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: theme.colors.border }}>
                    <div className="flex items-center gap-2">
                      <Bell className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
                      <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Notifications</span>
                    </div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }}></div>
                  </div>
                  
                  {/* Notifications List */}
                  <div className="p-4 space-y-3 h-96">
                    {notifications.map((notification, index) => {
                      const IconComponent = notification.icon;
                      const isActive = index === currentNotification;
                      return (
                        <div 
                          key={index}
                          className={`p-4 rounded-2xl border transition-all duration-500 ${
                            isActive ? 'shadow-lg scale-105' : 'opacity-60'
                          }`}
                          style={{ 
                            backgroundColor: isActive ? theme.colors.copper.DEFAULT + '05' : 'white',
                            borderColor: isActive ? theme.colors.copper.DEFAULT : theme.colors.border
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}
                            >
                              <IconComponent className="w-5 h-5" style={{ color: theme.colors.copper.DEFAULT }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-sm" style={{ color: theme.colors.text.primary }}>
                                  {notification.title}
                                </h4>
                                <span className="text-xs" style={{ color: theme.colors.text.muted }}>
                                  {notification.time}
                                </span>
                              </div>
                              <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                                {notification.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className={`space-y-8 transition-all duration-700 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>
                Never Miss a Beat
              </h3>
              <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                Our intelligent system keeps everyone in sync with automated notifications and smart scheduling.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border" style={{ borderColor: theme.colors.border }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                  <Bell className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: theme.colors.text.primary }}>Real-time Updates</h4>
                  <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Instant notifications for bookings and messages</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border" style={{ borderColor: theme.colors.border }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme.colors.copper.DEFAULT + '10' }}>
                  <Calendar className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: theme.colors.text.primary }}>Smart Scheduling</h4>
                  <p className="text-sm" style={{ color: theme.colors.text.secondary }}>Automated reminders and calendar sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}