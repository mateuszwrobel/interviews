import { createContext, useContext } from 'react';
import { User } from '../types/user';

export const AuthMethodsContext = createContext<{
  signIn: (user: User) => void;
  signOut: () => void;
  isAuthenticated: () => boolean;
} | null>(null);

export function useAuthMethods() {
  const context = useContext(AuthMethodsContext);
  if (!context) {
    throw new Error('useAuthMethods must be used within an AuthProvider');
  }
  return context;
}
