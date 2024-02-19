import { useState, useEffect } from 'react';

interface User {
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const signIn = (user: User) => {
    console.log('user', user);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
  };

  return { user, signIn, signOut, isAuthenticated };
}
