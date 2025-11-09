import Link from 'next/link';
import { ArrowLeft, LogIn } from 'lucide-react';
import SignInForm from '../../components/auth/SignInForm';
import SocialLogin from '../../components/auth/SocialLogin';
import { theme } from '../../lib/theme';
import { BRAND } from '../../lib/constants';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 mb-8 transition-colors duration-200 hover:opacity-80"
            style={{ color: theme.colors.text.secondary }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>
          
          {/* Brand Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <span className="text-white font-bold text-lg">{BRAND.logo}</span>
              </div>
              <span 
                className="font-bold text-2xl"
                style={{ color: theme.colors.text.primary }}
              >
                {BRAND.name}
              </span>
            </div>
            
            <h1 
              className="text-3xl font-bold mb-3"
              style={{ color: theme.colors.text.primary }}
            >
              Welcome Back
            </h1>
            
            <p style={{ color: theme.colors.text.secondary }}>
              Sign in to access your dashboard and manage bookings
            </p>
          </div>
          
          <SignInForm />
          
          <SocialLogin />
          
          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p style={{ color: theme.colors.text.secondary }}>
              Don't have an account?{' '}
              <Link 
                href="/signup" 
                className="font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: theme.colors.copper.DEFAULT }}
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Hero */}
      <div 
        className="hidden lg:flex lg:flex-1 relative overflow-hidden"
        style={{ backgroundColor: theme.colors.seaMist.DEFAULT }}
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: theme.colors.copper.DEFAULT }} />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-15" style={{ backgroundColor: theme.colors.copper.light }} />
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center p-12">
          <div className="max-w-md space-y-8">
            <div className="space-y-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: theme.colors.copper.DEFAULT }}
              >
                <LogIn className="w-8 h-8 text-white" />
              </div>
              
              <h2 
                className="text-4xl font-bold leading-tight"
                style={{ color: theme.colors.text.primary }}
              >
                Access Your
                <br />
                <span style={{ color: theme.colors.copper.DEFAULT }}>Creative Dashboard</span>
              </h2>
              
              <p 
                className="text-xl leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
              >
                Manage your bookings, showcase your portfolio, and grow your business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: theme.colors.copper.DEFAULT }}
                >
                  5,000+
                </div>
                <div style={{ color: theme.colors.text.secondary }}>Active Users</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: theme.colors.copper.DEFAULT }}
                >
                  4.9★
                </div>
                <div style={{ color: theme.colors.text.secondary }}>Platform Rating</div>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                'Secure login and data protection',
                'Real-time booking notifications', 
                'Professional dashboard tools'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.copper.DEFAULT }} />
                  <span style={{ color: theme.colors.text.secondary }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}