'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Camera } from 'lucide-react';
import { theme } from '../../lib/theme';
import { BRAND } from '../../lib/constants';

const LoadingContext = createContext();

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
}

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <NavigationLoader />}
    </LoadingContext.Provider>
  );
}

function NavigationLoader() {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
      style={{ backgroundColor: theme.colors.copper.DEFAULT + '90' }}
    >
      <div className="text-center">
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
            <Camera className="w-8 h-8 text-white animate-pulse" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
        </div>
        
        <h2 className="text-xl font-bold text-white mb-2">{BRAND.name}</h2>
        <p className="text-white/80 text-sm">Loading...</p>
      </div>
    </div>
  );
}