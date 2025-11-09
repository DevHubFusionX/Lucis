'use client';

import { useState, useEffect } from 'react';
import { Search, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import { theme } from '../../lib/theme';
import { authStorage } from '../../lib/auth';

export default function WelcomeHeader() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const userData = authStorage.getUser();
    setUser(userData);
  }, []);
  
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';
  const userName = user ? user.firstName : 'User';

  return (
    <div 
      className="relative rounded-2xl p-8 shadow-lg overflow-hidden" 
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.seaMist.DEFAULT} 0%, white 50%, ${theme.colors.seaMist[100]} 100%)`,
        border: `1px solid ${theme.colors.seaMist[200]}`
      }}
    >
      {/* Background decoration */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl" 
        style={{ backgroundColor: `${theme.colors.copper.DEFAULT}15` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-xl" 
        style={{ backgroundColor: `${theme.colors.seaMist[300]}30` }}
      />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-6 h-6" style={{ color: theme.colors.copper.DEFAULT }} />
              <span 
                className="text-sm font-medium px-3 py-1 rounded-full" 
                style={{ 
                  color: theme.colors.copper[700], 
                  backgroundColor: theme.colors.copper[50] 
                }}
              >
                {greeting}
              </span>
            </div>
            <h1 
              className="text-3xl lg:text-4xl font-black mb-3 leading-tight" 
              style={{ color: theme.colors.text.primary }}
            >
              Welcome back, <span style={{ color: theme.colors.copper.DEFAULT }}>{userName}</span> 👋
            </h1>
            <p 
              className="text-lg mb-4 max-w-md" 
              style={{ color: theme.colors.text.secondary }}
            >
              Ready to capture your next unforgettable moment?
            </p>
            
            {/* Quick stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm" style={{ color: theme.colors.text.muted }}>2 upcoming sessions</span>
              </div>
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.colors.border }} />
              <span className="text-sm" style={{ color: theme.colors.text.muted }}>8 completed bookings</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href={routes.search} 
              className="group inline-flex items-center justify-center px-8 py-4 font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ 
                backgroundColor: theme.colors.copper.DEFAULT, 
                color: theme.colors.text.onCopper,
                boxShadow: `0 10px 25px ${theme.colors.copper.DEFAULT}25`
              }}
            >
              <Search className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>Find Professionals</span>
            </Link>
            
            <Link 
              href={routes.bookings} 
              className="inline-flex items-center justify-center px-6 py-4 bg-white font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105" 
              style={{ 
                color: theme.colors.text.secondary, 
                borderColor: theme.colors.border 
              }}
            >
              View Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}