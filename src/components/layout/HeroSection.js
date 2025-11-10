'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { Search, Camera, Video, Heart, Star, MapPin, Play, ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const heroImages = useMemo(
    () => [
      '/Hero-image.jpeg',
      '/Hero-image1.jpeg',
      '/Hero-image3.webp',
      '/Hero-image4.webp'
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(Math.min(Math.max(y, 0), 600));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = useCallback(() => {
    const q = searchQuery.trim();
    const url = q ? `/search?location=${encodeURIComponent(q)}` : '/search';
    window.location.href = url;
  }, [searchQuery]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Hero section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image Carousel with Parallax */}
      <div
        className="absolute inset-0 will-change-transform transition-transform duration-150 ease-out"
        style={{ transform: `translateY(${(scrollY * 0.25).toFixed(1)}px)` }}
        aria-hidden="true"
      >
        {heroImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt=""
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            radial-gradient(1200px 600px at 20% 20%, ${theme.colors.ocean.light}20, transparent 60%),
            radial-gradient(1200px 600px at 80% 80%, ${theme.colors.coral.light}20, transparent 60%)
          `
        }} />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20 transition-transform duration-150 ease-out w-full"
        style={{ transform: `translateY(${(-scrollY * 0.08).toFixed(1)}px)` }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div
            className={`space-y-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-md"
              aria-label="Trusted by over 50,000 clients"
            >
              <Star className="w-3.5 h-3.5 fill-current text-white" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wide uppercase text-white">
                50,000+ Happy Clients
              </span>
            </div>

            <h1 className="text-white font-bold leading-[1.05] tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Book top photographers & videographers
              </span>
              <span
                className="mt-3 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[400]} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                near you, today.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-xl">
              Vetted pros for weddings, events, brands, and more. Fast booking. Transparent pricing. Stunning results.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-8" aria-label="Key platform stats">
              {[
                { icon: TrendingUp, value: '5K+', label: 'Professionals' },
                { icon: Star, value: '4.9', label: 'Average Rating' },
                { icon: Award, value: '50K+', label: 'Bookings' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white/15 backdrop-blur-sm">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-white/70">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleSearch}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl overflow-hidden w-full sm:w-auto"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[600]} 100%)`,
                  color: 'white',
                }}
                aria-label="Find professionals"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Find professionals
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
              </button>

              <button
                type="button"
                className="group px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base rounded-2xl border-2 transition-all duration-300 hover:scale-105 bg-white/15 backdrop-blur-sm border-white/30 text-white w-full sm:w-auto"
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                aria-label="Learn how it works"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  How it works
                </span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="space-y-3"
                role="search"
                aria-label="Search photographers and videographers by location"
              >
                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: theme.colors.ocean.DEFAULT }}
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    inputMode="text"
                    placeholder="Search by city or area (e.g., London, SoHo)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={onKeyDown}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-0 focus:outline-none text-base font-medium bg-transparent placeholder-gray-400"
                    style={{ color: theme.colors.text.primary }}
                    aria-label="Location"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-bold text-base rounded-xl transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[600]} 100%)`,
                    color: 'white',
                  }}
                >
                  <Search className="w-5 h-5" aria-hidden="true" />
                  <span>Find Photographers</span>
                </button>
              </form>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex" aria-label="Rating 4.9 out of 5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: theme.colors.coral.DEFAULT }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                  4.9
                </span>
              </div>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                Rated excellent by <span className="font-semibold" style={{ color: theme.colors.ocean.DEFAULT }}>50,000+ clients</span> worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
                <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.ocean.DEFAULT }}>
                  5K+
                </div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>
                  Professionals
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
                <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.coral.DEFAULT }}>
                  50K+
                </div>
                <div className="text-sm" style={{ color: theme.colors.text.secondary }}>
                  Bookings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}