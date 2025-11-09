'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { NAV_ITEMS, BRAND } from '../../lib/constants';
import { theme } from '../../lib/theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`} 
      style={{ borderBottom: `1px solid ${theme.colors.border}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105" 
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            >
              <span className="text-white font-bold text-lg">{BRAND.logo}</span>
            </div>
            <div className="flex flex-col">
              <span 
                className="font-bold text-xl leading-none transition-colors duration-200 group-hover:opacity-80" 
                style={{ color: theme.colors.text.primary }}
              >
                {BRAND.name}
              </span>
              <span 
                className="text-xs font-medium" 
                style={{ color: theme.colors.text.muted }}
              >
                Booking Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium transition-all duration-200 pb-1 hover:opacity-80"
                  style={{
                    color: isActive ? theme.colors.copper.DEFAULT : theme.colors.text.secondary,
                  }}
                >
                  {item.label}
                  {isActive && (
                    <div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" 
                      style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/signin">
              <Button 
                variant="ghost" 
                size="sm" 
                className="transition-all duration-200"
                style={{ color: theme.colors.text.secondary }}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                size="sm" 
                className="transition-all duration-200 hover:opacity-90 shadow-sm hover:shadow-md"
                style={{ 
                  backgroundColor: theme.colors.copper.DEFAULT, 
                  color: theme.colors.text.onCopper 
                }}
              >
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-200 hover:opacity-80"
            style={{ 
              color: theme.colors.text.secondary, 
              backgroundColor: isOpen ? theme.colors.seaMist.DEFAULT : 'transparent' 
            }}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />
          
          {/* Sidebar */}
          <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center" 
                    style={{ backgroundColor: theme.colors.copper.DEFAULT }}
                  >
                    <span className="text-white font-bold text-sm">{BRAND.logo}</span>
                  </div>
                  <span className="font-bold text-lg" style={{ color: theme.colors.text.primary }}>
                    {BRAND.name}
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg transition-colors"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-2 mb-8">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200"
                      style={{
                        color: isActive ? theme.colors.copper.DEFAULT : theme.colors.text.secondary,
                        backgroundColor: isActive ? theme.colors.copper[50] : 'transparent'
                      }}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Link href="/signin" className="block" onClick={closeMenu}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center py-3 text-base font-medium rounded-xl" 
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" className="block" onClick={closeMenu}>
                  <Button 
                    className="w-full justify-center py-3 text-base font-medium rounded-xl shadow-sm" 
                    style={{ 
                      backgroundColor: theme.colors.copper.DEFAULT, 
                      color: theme.colors.text.onCopper 
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}