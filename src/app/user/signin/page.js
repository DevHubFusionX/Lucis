'use client';

import Link from 'next/link';
import { User, Camera, Star, Shield, Heart } from 'lucide-react';
import SignInForm from '../../../components/auth/SignInForm';
import SocialLogin from '../../../components/auth/SocialLogin';

export default function UserSignInPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Client Portal</span>
                <div className="text-xs text-gray-500 font-medium">Find Your Perfect Photographer</div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Continue your journey to find amazing photographers
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <SignInForm userType="user" />
            <SocialLogin />
          </div>
          
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm font-medium text-gray-600">
              Don't have an account?{' '}
              <Link 
                href="/user/signup" 
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Create account
              </Link>
            </p>
            <div className="flex items-center gap-2 justify-center">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-xs text-gray-500 font-medium px-3">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <Link href="/signin/professional" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors p-2 rounded-lg hover:bg-orange-50">
              <Camera className="w-4 h-4" />
              Professional Login
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-bold text-blue-100 uppercase tracking-wider">Trusted Platform</div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Discover Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Creative Talent
              </span>
            </h2>
            <p className="text-xl font-medium text-blue-100 mb-12 leading-relaxed">
              Connect with professional photographers and videographers for your most important moments.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Shield, text: 'Verified professionals only', color: 'text-green-300' },
                { icon: Star, text: 'Top-rated photographers', color: 'text-yellow-300' },
                { icon: Heart, text: 'Secure booking & payments', color: 'text-pink-300' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="font-medium text-blue-50 text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="text-sm font-semibold text-blue-100 mb-2">Join 50,000+ Happy Clients</div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-xs text-blue-200 font-medium">and thousands more...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}