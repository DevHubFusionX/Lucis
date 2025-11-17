export { userAuthService } from './auth/userAuth';
export { professionalAuthService } from './auth/professionalAuth';

export const authStorage = {
  setToken: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lucis_token', token);
    }
  },
  
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lucis_token');
    }
    return null;
  },
  
  setUser: (user) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lucis_user', JSON.stringify(user));
    }
  },
  
  getUser: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('lucis_user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },
  
  clear: () => {
    if (typeof window !== 'undefined') {
      // Clear all user-related data
      localStorage.removeItem('lucis_token');
      localStorage.removeItem('lucis_user');
      
      // Clear any other user-specific data
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('lucis_') || key.includes('user') || key.includes('auth')) {
          localStorage.removeItem(key);
        }
      });
      
      // Clear session storage as well
      sessionStorage.clear();
    }
  }
};