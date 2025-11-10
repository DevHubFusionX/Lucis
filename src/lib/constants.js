// Navigation items
export const NAV_ITEMS = [
  { href: '/services', label: 'Services' },
  { href: '/professionals', label: 'Professionals' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

// Brand configuration
export const BRAND = {
  name: 'LUCIS',
  image: '/web-logo.png',
 
};

// Social proof data
export const SOCIAL_PROOF = {
  initialCount: 4800,
  finalCount: 5000,
  message: 'successful bookings completed'
};

// Service types
export const SERVICES = [
  { id: 'photographers', label: 'Book Photographers', primary: true },
  { id: 'videographers', label: 'Book Videographers', primary: false },
  { id: 'portfolio', label: 'Manage Portfolio', primary: false },
  { id: 'notifications', label: 'Notifications', primary: false }
];

// Platform features
export const PLATFORM_FEATURES = [
  { id: 'booking', label: 'Smart Booking System', description: 'Accept/reject bookings with availability management' },
  { id: 'gallery', label: 'Portfolio Gallery', description: 'Showcase up to 5 photos with CDN hosting' },
  { id: 'ratings', label: 'Ratings & Reviews', description: 'Build reputation with client feedback' },
  { id: 'notifications', label: 'Real-time Notifications', description: 'Instant alerts for bookings and schedules' },
  { id: 'search', label: 'Advanced Search', description: 'Find pros by skill, availability, and location' },
  { id: 'cdn', label: 'Personal CDN', description: 'Organized folder-style media hosting' }
];

// Booking statuses
export const BOOKING_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
};