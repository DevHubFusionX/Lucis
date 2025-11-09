'use client';

import { useState, useEffect } from 'react';
import { Search, Camera, Video, Heart, Star, MapPin, Play, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { theme } from '../../lib/theme';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    { src: '/Hero-image2.jpeg', alt: 'Wedding Photography', label: 'Weddings' },
    { src: '/Hero-image1.jpeg', alt: 'Portrait Photography', label: 'Portraits' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'linear-gradient(135deg, #f8fffe 0%, #e8f5f3 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.colors.copper.DEFAULT} 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className={`space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border" style={{ borderColor: theme.colors.copper.DEFAULT + '20' }}>
                <Star className="w-4 h-4" style={{ color: theme.colors.copper.DEFAULT }} />
                <span className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>Trusted by 50,000+ clients</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span style={{ color: theme.colors.text.primary }}>Your Story,</span><br/>
                <span style={{ color: theme.colors.copper.DEFAULT }}>Perfectly Captured</span>
              </h1>
              
              <p className="text-xl leading-relaxed max-w-lg" style={{ color: theme.colors.text.secondary }}>
                Connect with world-class photographers and videographers. From intimate moments to grand celebrations, we bring your vision to life.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-4">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>5K+</div>
                  <div className="text-sm" style={{ color: theme.colors.text.muted }}>Professionals</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>4.9★</div>
                  <div className="text-sm" style={{ color: theme.colors.text.muted }}>Average Rating</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold" style={{ color: theme.colors.copper.DEFAULT }}>24h</div>
                  <div className="text-sm" style={{ color: theme.colors.text.muted }}>Fast Delivery</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.location.href = '/search'}
                  className="px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  style={{ backgroundColor: theme.colors.copper.DEFAULT, color: theme.colors.text.onCopper }}
                >
                  Find Photographers
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-4 font-semibold text-lg rounded-xl border-2 transition-all duration-300 hover:scale-105"
                  style={{ borderColor: theme.colors.copper.DEFAULT, color: theme.colors.copper.DEFAULT }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="lg:col-span-6">
            <div className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Main Image Carousel */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    {heroImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                          index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                          {heroImages[currentImageIndex]?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Camera className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                  <Video className="w-8 h-8" style={{ color: theme.colors.copper.DEFAULT }} />
                </div>

                {/* Video Preview */}
                <div className="absolute top-4 right-4">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <video
                      src="/hero-video.mp4"
                      autoPlay
                      muted
                      loop
                      className="w-24 h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className={`mt-8 transition-all duration-1000 ease-out delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border" style={{ borderColor: theme.colors.border }}>
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: theme.colors.text.muted }} />
                      <input
                        type="text"
                        placeholder="Enter your location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:outline-none focus:border-opacity-100 transition-all duration-200 text-lg"
                        style={{ borderColor: theme.colors.border, focusBorderColor: theme.colors.copper.DEFAULT }}
                      />
                    </div>
                    <Button
                      onClick={() => window.location.href = '/search'}
                      className="px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-200 hover:scale-105"
                      style={{ backgroundColor: theme.colors.copper.DEFAULT, color: theme.colors.text.onCopper }}
                    >
                      <Search className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-sm mt-3" style={{ color: theme.colors.text.muted }}>Find photographers and videographers in your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}