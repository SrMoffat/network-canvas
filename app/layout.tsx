import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AuthProvider from '@/app/components/providers/auth';
import { ThemeProvider } from '@/app/components/providers';

import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Network Canvas',
  description: 'Archive for JSON research data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
