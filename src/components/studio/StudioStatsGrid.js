'use client';

import { Calendar, TrendingUp, Users, Eye } from 'lucide-react';
import { theme } from '../../lib/theme';

export default function StudioStatsGrid({ studioData }) {
  const stats = [
    {
      icon: Calendar,
      value: studioData.totalBookings,
      label: 'Total Bookings',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      value: `₦${(studioData.totalEarnings / 1000000).toFixed(1)}M`,
      label: 'Total Earnings',
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      value: studioData.activeClients,
      label: 'Active Clients',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Eye,
      value: studioData.portfolioViews,
      label: 'Portfolio Views',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} p-3 sm:p-4 rounded-xl`}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-2xl font-bold truncate" style={{ color: theme.colors.text.primary }}>{stat.value}</div>
                  <div className="text-xs sm:text-sm" style={{ color: theme.colors.text.muted }}>{stat.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}