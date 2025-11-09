import Link from 'next/link';
import { Calendar, Clock, Eye, MapPin, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

export default function UpcomingBookings() {
  const bookings = [
    {
      id: 1,
      photographer: {
        name: "Alex Visuals",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
        verified: true
      },
      date: "Dec 15, 2024",
      time: "2:00 PM",
      status: "confirmed",
      type: "Wedding Photography",
      location: "Victoria Island",
      daysUntil: 3
    },
    {
      id: 2,
      photographer: {
        name: "David Films",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
        verified: false
      },
      date: "Dec 18, 2024",
      time: "10:00 AM",
      status: "pending",
      type: "Event Videography",
      location: "Lagos Island",
      daysUntil: 6
    }
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'confirmed':
        return {
          color: 'bg-green-100 text-green-800 border-green-200',
          icon: CheckCircle,
          iconColor: 'text-green-600'
        };
      case 'pending':
        return {
          color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          icon: AlertCircle,
          iconColor: 'text-yellow-600'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: Clock,
          iconColor: 'text-gray-600'
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg" style={{ border: `1px solid ${theme.colors.border}` }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Upcoming Sessions</h2>
          <p className="mt-1" style={{ color: theme.colors.text.muted }}>{bookings.length} sessions scheduled</p>
        </div>
        <Link 
          href={routes.bookings}
          className="flex items-center space-x-2 font-medium transition-colors hover:opacity-80"
          style={{ color: theme.colors.copper.DEFAULT }}
        >
          <span>View all</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
            style={{ backgroundColor: theme.colors.seaMist[100] }}
          >
            <Calendar className="w-8 h-8" style={{ color: theme.colors.text.muted }} />
          </div>
          <h3 className="text-lg font-medium mb-2" style={{ color: theme.colors.text.primary }}>No upcoming sessions</h3>
          <p className="mb-6" style={{ color: theme.colors.text.muted }}>Book your next photography session</p>
          <Link 
            href={routes.search}
            className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-colors hover:opacity-90"
            style={{ 
              backgroundColor: theme.colors.copper.DEFAULT, 
              color: theme.colors.text.onCopper 
            }}
          >
            Find Professionals
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => {
            const statusConfig = getStatusConfig(booking.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <div 
                key={booking.id} 
                className="group relative rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: `linear-gradient(135deg, white 0%, ${theme.colors.seaMist[25]} 100%)`,
                  border: `1px solid ${theme.colors.border}`
                }}
              >
                <div className="absolute top-4 right-4">
                  <div 
                    className="text-xs font-bold px-3 py-1 rounded-full" 
                    style={{ 
                      backgroundColor: theme.colors.copper[50], 
                      color: theme.colors.copper[700] 
                    }}
                  >
                    {booking.daysUntil} days
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={booking.photographer.photo}
                      alt={booking.photographer.name}
                      className="w-16 h-16 rounded-xl object-cover ring-2 ring-white shadow-md"
                    />
                    {booking.photographer.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 
                          className="text-lg font-bold transition-colors" 
                          style={{ color: theme.colors.text.primary }}
                        >
                          {booking.photographer.name}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>{booking.type}</p>
                      </div>
                      
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full border ${statusConfig.color}`}>
                        <StatusIcon className={`w-3 h-3 ${statusConfig.iconColor}`} />
                        <span className="text-xs font-medium capitalize">{booking.status}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
                        <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
                        <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" style={{ color: theme.colors.text.muted }} />
                        <span className="text-sm" style={{ color: theme.colors.text.secondary }}>{booking.location}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={routes.booking(booking.id)} 
                      className="inline-flex items-center space-x-2 px-4 py-2 font-medium rounded-lg transition-all duration-200 hover:scale-105"
                      style={{ 
                        backgroundColor: theme.colors.copper.DEFAULT, 
                        color: theme.colors.text.onCopper 
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}