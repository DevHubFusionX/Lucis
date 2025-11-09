'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from './AuthProvider';
import { isProtectedRoute, routes, getUserDashboard } from '@/lib/routes';

const clientOnlyRoutes = [
  '/dashboard',
  '/bookings',
  '/search',
  '/gallery',
  '/notifications',
  '/profile',
  '/settings'
];

const studioOnlyRoutes = [
  '/studio'
];

function isClientOnlyRoute(pathname) {
  return clientOnlyRoutes.some(route => pathname.startsWith(route));
}

function isStudioOnlyRoute(pathname) {
  return studioOnlyRoutes.some(route => pathname.startsWith(route));
}

function getUserType(user) {
  if (!user) return null;
  return user.userType || (user.skills ? 'photographer' : 'client');
}

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;

    // Check if route requires authentication
    if (isProtectedRoute(pathname) && !user) {
      router.push(routes.signin);
      return;
    }

    if (user) {
      const userType = getUserType(user);
      
      // Redirect professionals trying to access client pages
      if ((userType === 'photographer' || userType === 'videographer') && isClientOnlyRoute(pathname)) {
        router.push(routes.studio);
        return;
      }
      
      // Redirect clients trying to access studio pages
      if (userType === 'client' && isStudioOnlyRoute(pathname)) {
        router.push(routes.dashboard);
        return;
      }
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (isProtectedRoute(pathname) && !user) {
    return null;
  }

  return children;
}