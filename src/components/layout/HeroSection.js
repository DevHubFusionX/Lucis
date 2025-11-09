'use client';

import { useState, useEffect } from 'react';
import { Search, Camera, Video, Heart, Star, MapPin, Play, ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const heroImages = [
    '/Hero-image.jpeg',
    '/Hero-image1.jpeg',
    '/Hero-image3.webp',
    '/Hero-image4.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel with Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Photography Background"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>
      
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-md">
              <Star className="w-3.5 h-3.5 fill-current text-white" />
              <span className="text-xs font-bold tracking-wide uppercase text-white">
                50,000+ Happy Clients
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Capture Your<br/>
              <span 
                className="inline-block bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[400]} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                Perfect Moment
              </span>
            </h1>
              
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
              Connect with <span className="font-semibold text-white">world-class photographers</span> and videographers for any occasion.
            </p>

            {/* Premium Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8">
              {[
                { icon: TrendingUp, value: '5K+', label: 'Professionals' },
                { icon: Star, value: '4.9★', label: 'Rating' },
                { icon: Award, value: '50K+', label: 'Bookings' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => window.location.href = '/search'}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl overflow-hidden w-full sm:w-auto"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[600]} 100%)`,
                  color: 'white'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
              <button
                className="group px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base rounded-2xl border-2 transition-all duration-300 hover:scale-105 bg-white/20 backdrop-blur-sm border-white/30 text-white w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  How it Works
                </span>
              </button>
            </div>
          </div>
            
          {/* Right Column - Search & Stats */}
          <div className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Premium Search Bar */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/20">
              <div className="space-y-3">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.ocean.DEFAULT }} />
                  <input
                    type="text"
                    placeholder="Search location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-0 focus:outline-none text-base font-medium bg-transparent"
                    style={{ color: theme.colors.text.primary }}
                  />
                </div>
                <button
                  onClick={() => window.location.href = '/search'}
                  className="w-full py-4 font-bold text-base rounded-xl transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[600]} 100%)`,
                    color: 'white'
                  }}
                >
                  <Search className="w-5 h-5" />
                  <span>Find Photographers</span>
                </button>
              </div>
            </div>

            {/* Rating Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: theme.colors.coral.DEFAULT }} />
                  ))}
                </div>
                <span className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>4.9</span>
              </div>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                Rated excellent by <span className="font-semibold" style={{ color: theme.colors.ocean.DEFAULT }}>50,000+ clients</span> worldwide
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
                <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.ocean.DEFAULT }}>5K+</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Professionals</div>
              </div>
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
                <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.coral.DEFAULT }}>50K+</div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>Bookings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}