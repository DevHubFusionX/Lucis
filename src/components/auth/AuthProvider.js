'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { authStorage } from '@/lib/auth';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = authStorage.getToken();
    const userData = authStorage.getUser();
    
    if (token && userData) {
      setUser(userData);
    }
    setLoading(false);
  }, []);

  const login = (token, userData) => {
    authStorage.setToken(token);
    authStorage.setUser(userData);
    setUser(userData);
  };

  const logout = () => {
    authStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);