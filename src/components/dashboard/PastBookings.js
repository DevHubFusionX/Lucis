import { Star, MessageSquare, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';

export default function PastBookings() {
  const pastBookings = [
    {
      id: 1,
      photographer: {
        name: "Mike Photography",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        rating: 4.8
      },
      date: "Nov 28, 2024",
      type: "Portrait Session",
      hasReview: false,
      price: "₦45,000",
      location: "Ikeja"
    },
    {
      id: 2,
      photographer: {
        name: "Lagos Lens",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&h=64&fit=crop&crop=face",
        rating: 4.9
      },
      date: "Nov 15, 2024",
      type: "Corporate Event",
      hasReview: true,
      price: "₦85,000",
      location: "Victoria Island",
      myRating: 5
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg" style={{ border: `1px solid ${theme.colors.border}` }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>Recent Sessions</h2>
          <p className="mt-1 text-sm" style={{ color: theme.colors.text.muted }}>{pastBookings.length} completed</p>
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
      
      {pastBookings.length === 0 ? (
        <div className="text-center py-8">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" 
            style={{ backgroundColor: theme.colors.seaMist[100] }}
          >
            <Calendar className="w-6 h-6" style={{ color: theme.colors.text.muted }} />
          </div>
          <h3 className="text-sm font-medium mb-1" style={{ color: theme.colors.text.primary }}>No sessions yet</h3>
          <p className="text-xs" style={{ color: theme.colors.text.muted }}>Completed bookings appear here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {pastBookings.map((booking, index) => (
            <div 
              key={booking.id} 
              className="group rounded-xl p-4 hover:shadow-md transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, white 0%, ${theme.colors.seaMist[25]} 100%)`,
                border: `1px solid ${theme.colors.border}`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={booking.photographer.photo}
                    alt={booking.photographer.name}
                    className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-sm"
                  />
                  <div>
                    <h3 
                      className="font-bold transition-colors" 
                      style={{ color: theme.colors.text.primary }}
                    >
                      {booking.photographer.name}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: theme.colors.text.secondary }}>{booking.type}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs" style={{ color: theme.colors.text.muted }}>{booking.date}</span>
                      <span className="text-xs" style={{ color: theme.colors.text.muted }}>•</span>
                      <span className="text-xs" style={{ color: theme.colors.text.muted }}>{booking.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {booking.hasReview ? (
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < booking.myRating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Reviewed</span>
                      </div>
                    </div>
                  ) : (
                    <button 
                      className="group/btn inline-flex items-center space-x-2 px-4 py-2 font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                      style={{ 
                        backgroundColor: theme.colors.copper.DEFAULT, 
                        color: theme.colors.text.onCopper 
                      }}
                    >
                      <Star className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                      <span>Review</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}