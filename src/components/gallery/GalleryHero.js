'use client';

import { Search, Star } from 'lucide-react';

export default function GalleryHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 pt-20 pb-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            Discover Amazing
            <span className="text-amber-400 block">Creative Work</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Browse portfolios from Nigeria's top photographers and videographers. 
            Find the perfect creative for your next project.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
              <input
                type="text"
                placeholder="Search by style, location, or name..."
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-slate-300">Creatives</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span className="text-3xl font-bold">4.9</span>
              </div>
              <div className="text-slate-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10k+</div>
              <div className="text-slate-300">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}