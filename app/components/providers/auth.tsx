'use client';

import { SessionProvider } from 'next-auth/react';

// @ts-ignore
const AuthContext = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;