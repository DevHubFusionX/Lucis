'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>
        
        <h1 className="text-3xl font-light tracking-[0.2em] uppercase text-white mb-2">
          LUCIS
        </h1>
        <p className="text-sm font-light text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}
