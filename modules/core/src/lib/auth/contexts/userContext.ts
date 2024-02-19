import { createContext, useContext } from 'react';
import { User } from '../types/user';

export const UserContext = createContext<User | null>(null);

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context;
}
