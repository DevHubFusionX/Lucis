// Route definitions for the application
export const routes = {
  // Public routes
  home: '/',
  landing: '/landing',
  signin: '/signin',
  signup: '/signup',
  
  // Dashboard routes
  dashboard: '/dashboard',
  
  // Booking routes
  booking: (id) => `/booking/${id}`,
  bookings: '/bookings',
  newBooking: '/booking/new',
  
  // Messaging routes
  messages: '/messages',
  message: (id) => `/messages/${id}`,
  
  // Review routes
  reviews: '/reviews',
  writeReview: (bookingId) => `/booking/${bookingId}/review`,
  
  // Search routes
  search: '/search',
  gallery: '/gallery',
  
  // Notification routes
  notifications: '/notifications',
  
  // Profile routes
  profile: '/profile',
  settings: '/settings',
  
  // Studio routes (for photographers/videographers)
  studio: '/studio',
  studioBookings: '/studio/bookings',
  studioGallery: '/studio/gallery',
  studioAvailability: '/studio/availability',
  studioReviews: '/studio/reviews',
  studioNotifications: '/studio/notifications',
  studioProfile: '/studio/profile',
  studioPayments: '/studio/payments',
  
  // Legal routes
  terms: '/terms',
  privacy: '/privacy'
};

// Navigation helper
export const navigate = {
  to: (path) => path,
  booking: (id) => routes.booking(id)
};

// Client navbar items
export const clientNavItems = [
  { label: 'Home', icon: 'Home', route: routes.dashboard },
  { label: 'Search', icon: 'Search', route: routes.search },
  { label: 'Bookings', icon: 'Calendar', route: routes.bookings },
  { label: 'Notifications', icon: 'Bell', route: routes.notifications },
  { label: 'Profile', icon: 'User', route: routes.profile }
];

// Route groups for easier management
export const routeGroups = {
  public: [routes.home, routes.landing, routes.signin, routes.signup, routes.terms, routes.privacy],
  protected: [
    routes.dashboard, routes.profile, routes.settings,
    routes.bookings, routes.newBooking, routes.messages, routes.reviews,
    routes.search, routes.notifications, routes.gallery,
    routes.about, routes.booking, routes.professionals, routes.services,
    routes.studio, routes.studioBookings, routes.studioGallery, 
    routes.studioAvailability, routes.studioReviews, routes.studioNotifications,
    routes.studioProfile, routes.studioPayments
  ]
};

// Check if route requires authentication
export const isProtectedRoute = (pathname) => {
  return routeGroups.protected.some(route => {
    if (typeof route === 'function') return false;
    return pathname.startsWith(route);
  });
};

// Check if route is public
export const isPublicRoute = (pathname) => {
  return routeGroups.public.includes(pathname);
};

// User type redirects
export const getUserDashboard = (userType) => {
  switch (userType) {
    case 'photographer':
    case 'videographer':
      return routes.studio;
    case 'client':
    default:
      return routes.dashboard;
  }
};