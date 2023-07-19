import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Nav } from '@/app/components';
import { ThemeProvider } from '@/app/providers';

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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
