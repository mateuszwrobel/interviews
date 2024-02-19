import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthMethodsContext } from '../contexts/authMethodsContext';
import { UserContext } from '../contexts/userContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, signIn, signOut, isAuthenticated } = useAuth();
  return (
    <AuthMethodsContext.Provider value={{ signIn, signOut, isAuthenticated }}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </AuthMethodsContext.Provider>
  );
}
