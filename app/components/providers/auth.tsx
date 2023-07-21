'use client';
import { SessionProvider } from 'next-auth/react';

import { AuthProviderProps } from '@/lib/types';

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
