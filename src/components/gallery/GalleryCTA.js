'use client';

import { ArrowRight, Camera, Users, Star } from 'lucide-react';

export default function GalleryCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Create Something
            <span className="text-amber-400 block">Amazing?</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect creative match. 
            Start your project today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25">
              <Camera className="w-6 h-6" />
              <span>Hire a Creative</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300">
              <Users className="w-6 h-6" />
              <span>Join as Professional</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-300">Verified Creatives</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-slate-300">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10k+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}