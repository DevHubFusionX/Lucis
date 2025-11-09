'use client';

import { Users, Camera, Star, Shield } from 'lucide-react';
import { theme } from '../../lib/theme';

const STATS = [
  { icon: Users, value: '5,000+', label: 'Active Professionals', color: 'bg-blue-500' },
  { icon: Camera, value: '15,000+', label: 'Successful Bookings', color: 'bg-green-500' },
  { icon: Star, value: '4.9', label: 'Average Rating', color: 'bg-yellow-500' },
  { icon: Shield, value: '100%', label: 'Verified Profiles', color: 'bg-purple-500' }
];

export default function QuickStats() {
  return (
    <section className="py-12" style={{ backgroundColor: theme.colors.copper.DEFAULT }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}