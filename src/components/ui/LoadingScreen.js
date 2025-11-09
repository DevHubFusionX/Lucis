'use client';

import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { theme } from '../../lib/theme';
import { BRAND } from '../../lib/constants';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: theme.colors.copper.DEFAULT + '90' }}
    >
      <div className="text-center">
        {/* Animated Camera Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto animate-pulse">
            <Camera className="w-10 h-10 text-white" />
          </div>
          
          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
        </div>
        
        {/* Brand */}
        <h1 className="text-3xl font-bold text-white mb-2">
          {BRAND.name}
        </h1>
        <p className="text-white/80 mb-6">Capturing your perfect moments</p>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-white/60 text-sm mt-4">
          {progress < 30 ? 'Loading...' : 
           progress < 70 ? 'Preparing your experience...' : 
           'Almost ready...'}
        </p>
      </div>
    </div>
  );
}