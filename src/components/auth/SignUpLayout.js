'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles, Camera, Users, Star } from 'lucide-react';
import { theme } from '@/lib/theme';
import { BRAND } from '@/lib/constants';

export default function SignUpLayout({ children }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.seaMist[50] }}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 transition-colors"
            style={{ color: theme.colors.text.secondary }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: theme.colors.copper.DEFAULT }}
            >
              <span className="text-white font-bold text-sm">{BRAND.logo}</span>
            </div>
            <span className="font-bold text-lg" style={{ color: theme.colors.text.primary }}>{BRAND.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4 pt-20">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero */}
          <div className="hidden lg:block">
            <div className="text-center lg:text-left space-y-8">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
                  Join the Leading
                  <br />
                  <span style={{ color: theme.colors.copper.DEFAULT }}>Creative Platform</span>
                </h1>
                <p className="text-xl leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  Connect with clients, showcase your work, and grow your creative business.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div 
                  className="backdrop-blur-sm rounded-2xl p-6 text-center"
                  style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>5,000+</div>
                  <div style={{ color: theme.colors.text.secondary }}>Active Users</div>
                </div>
                <div 
                  className="backdrop-blur-sm rounded-2xl p-6 text-center"
                  style={{ backgroundColor: theme.colors.bg.primary, border: `1px solid ${theme.colors.border}` }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>4.9★</div>
                  <div style={{ color: theme.colors.text.secondary }}>Rating</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Users, text: 'Verified professionals only' },
                  { icon: Star, text: 'Secure payment protection' },
                  { icon: Camera, text: 'Free to join and browse' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: theme.colors.copper[100] }}
                    >
                      <feature.icon className="w-4 h-4" style={{ color: theme.colors.copper.DEFAULT }} />
                    </div>
                    <span style={{ color: theme.colors.text.primary }}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Mobile Header */}
            <div className="text-center mb-8 lg:hidden">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                Join LUCIS
              </h1>
              <p style={{ color: theme.colors.text.secondary }}>
                Connect with amazing photographers and videographers
              </p>
            </div>

            {/* Form Card */}
            <div 
              className="rounded-2xl p-6 sm:p-8"
              style={{ 
                backgroundColor: theme.colors.bg.primary, 
                boxShadow: theme.boxShadow.card,
                border: `1px solid ${theme.colors.border}`
              }}
            >
              {children}
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                Already have an account?{' '}
                <Link 
                  href="/signin" 
                  className="font-semibold transition-colors"
                  style={{ color: theme.colors.copper.DEFAULT }}
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}