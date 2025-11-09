'use client';

import { useState } from 'react';
import { Camera, Video, Users, Building, Heart, Utensils } from 'lucide-react';

export default function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work', icon: Camera, count: 2847 },
    { id: 'wedding', label: 'Wedding', icon: Heart, count: 892 },
    { id: 'portrait', label: 'Portrait', icon: Users, count: 634 },
    { id: 'event', label: 'Event', icon: Video, count: 456 },
    { id: 'corporate', label: 'Corporate', icon: Building, count: 287 },
    { id: 'fashion', label: 'Fashion', icon: Camera, count: 378 },
    { id: 'food', label: 'Food', icon: Utensils, count: 200 }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-slate-600">
            Discover work across different photography and videography styles
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.label}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}