'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { NAV_ITEMS, BRAND } from '../../lib/constants';
import { theme } from '../../lib/theme';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
      style={{ 
        borderBottomColor: isScrolled ? theme.colors.lightBlue[200] : 'transparent',
        zIndex: 50
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-md" 
                style={{ 
                  background: `linear-gradient(135deg, ${theme.colors.ocean.DEFAULT} 0%, ${theme.colors.turquoise.DEFAULT} 100%)`,
                }}
              >
                <span className="text-white font-bold text-xl tracking-tight">{BRAND.logo}</span>
              </div>
              <div 
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: theme.colors.coral.DEFAULT }}
              />
            </div>
            <div className="flex flex-col">
              <span 
                className="font-bold text-2xl leading-none tracking-tight transition-all duration-300" 
                style={{ color: theme.colors.text.primary }}
              >
                {BRAND.name}
              </span>
              <span 
                className="text-xs font-semibold tracking-wider uppercase mt-0.5" 
                style={{ color: theme.colors.ocean.DEFAULT }}
              >
                Premium Booking
              </span>
            </div>
          </Link>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                    isActive ? 'text-white' : ''
                  }`}
                  style={{
                    color: isActive ? 'white' : theme.colors.text.secondary,
                    backgroundColor: isActive ? theme.colors.ocean.DEFAULT : 'transparent',
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!isActive && (
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: theme.colors.lightBlue[100] }}
                    />
                  )}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-xl animate-pulse opacity-20"
                      style={{ backgroundColor: 'white' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Premium Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/signin">
              <button
                className="px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                style={{ 
                  color: theme.colors.text.primary,
                  backgroundColor: 'transparent',
                }}
              >
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button
                className="relative px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg overflow-hidden group"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[600]} 100%)`,
                  color: 'white'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <Sparkles className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </Link>
          </div>

          {/* Premium Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: isOpen ? theme.colors.ocean.DEFAULT : theme.colors.lightBlue[100],
              color: isOpen ? 'white' : theme.colors.text.primary
            }}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>

      {/* Premium Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Premium Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-10"
            style={{ animation: 'fadeIn 0.3s ease-out', zIndex: 9998 }}
            onClick={closeMenu}
          />
          
          {/* Premium Sidebar */}
          <div 
            className="lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
            style={{ animation: 'slideInLeft 0.3s ease-out', zIndex: 9999 }}
          >
            <div className="min-h-full flex flex-col p-6">
              {/* Premium Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md" 
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors.ocean.DEFAULT} 0%, ${theme.colors.turquoise.DEFAULT} 100%)`
                    }}
                  >
                    <span className="text-white font-bold text-lg">{BRAND.logo}</span>
                  </div>
                  <div>
                    <span className="font-bold text-xl block" style={{ color: theme.colors.text.primary }}>
                      {BRAND.name}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: theme.colors.ocean.DEFAULT }}>
                      PREMIUM
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: theme.colors.lightBlue[100],
                    color: theme.colors.text.primary
                  }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Premium Navigation Links */}
              <div className="flex-1 space-y-2 mb-8">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                      style={{
                        color: isActive ? 'white' : theme.colors.text.primary,
                        background: isActive 
                          ? `linear-gradient(135deg, ${theme.colors.ocean.DEFAULT} 0%, ${theme.colors.turquoise.DEFAULT} 100%)`
                          : theme.colors.lightBlue[50],
                        animationDelay: `${index * 50}ms`
                      }}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              
              {/* Premium Action Buttons */}
              <div className="space-y-3 pt-6 border-t" style={{ borderColor: theme.colors.lightBlue[200] }}>
                <Link href="/signin" className="block" onClick={closeMenu}>
                  <button
                    className="w-full py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: theme.colors.lightBlue[100],
                      color: theme.colors.text.primary
                    }}
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/signup" className="block" onClick={closeMenu}>
                  <button
                    className="w-full py-4 text-base font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors.coral.DEFAULT} 0%, ${theme.colors.coral[600]} 100%)`,
                      color: 'white'
                    }}
                  >
                    Get Started
                    <Sparkles className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}