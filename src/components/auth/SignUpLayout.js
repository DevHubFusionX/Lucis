'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SignUpLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-light">Back</span>
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-light text-gray-900 mb-3">
              Create Account
            </h1>
            <p className="text-base font-light text-gray-600">
              Join our community of creative professionals
            </p>
          </div>
          
          {children}
          
          <div className="mt-8 text-center">
            <p className="text-sm font-light text-gray-600">
              Already have an account?{' '}
              <Link 
                href="/signin" 
                className="text-gray-900 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-1 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="max-w-md">
            <h2 className="text-5xl font-light mb-6 leading-tight">
              Join the Creative Community
            </h2>
            <p className="text-lg font-light text-gray-400 mb-12">
              Connect with clients, showcase your work, and grow your business.
            </p>
            
            <div className="space-y-4">
              {[
                'Free to join and browse',
                'Verified professionals only', 
                'Secure payment protection'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="font-light text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
