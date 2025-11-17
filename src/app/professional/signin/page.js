'use client';

import Link from 'next/link';
import { Camera, Award, TrendingUp, Crown, Sparkles, DollarSign, Users } from 'lucide-react';
import SignInForm from '../../../components/auth/SignInForm';
import SocialLogin from '../../../components/auth/SocialLogin';

export default function ProfessionalSignInPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Professional</span>
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white">PRO</span>
                </div>
                <div className="text-xs text-gray-500 font-medium">Creative Studio Dashboard</div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Access your studio and grow your creative business
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <SignInForm userType="professional" />
            <SocialLogin />
          </div>
          
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm font-medium text-gray-600">
              New to LUCIS?{' '}
              <Link 
                href="/professional/signup" 
                className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
              >
                Join as Professional
              </Link>
            </p>
            <div className="flex items-center gap-2 justify-center">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-xs text-gray-500 font-medium px-3">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <Link href="/user/signin" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-lg hover:bg-blue-50">
              <Users className="w-4 h-4" />
              Client Login
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <Sparkles className="absolute top-32 left-32 w-6 h-6 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute bottom-32 right-32 w-4 h-4 text-yellow-200 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-yellow-300" />
              </div>
              <div className="text-sm font-bold text-orange-100 uppercase tracking-wider">Elite Platform</div>
            </div>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200">
                Creative Empire
              </span>
            </h2>
            <p className="text-xl font-medium text-orange-100 mb-12 leading-relaxed">
              Join thousands of photographers and videographers building successful careers on LUCIS.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Camera, text: 'Showcase your portfolio', color: 'text-blue-300' },
                { icon: Award, text: 'Get verified & trusted', color: 'text-green-300' },
                { icon: TrendingUp, text: 'Grow your income', color: 'text-yellow-300' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="font-medium text-orange-50 text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="text-sm font-semibold text-orange-100 mb-2">Join 5,000+ Pro Photographers</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-300" />
                  <span className="text-xs text-orange-200 font-medium">Avg. ₦2.5M+ earned monthly</span>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 border-2 border-white"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}