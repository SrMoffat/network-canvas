'use client';
import { useState, useEffect, createContext } from 'react';

import { ThemeContextProps, ThemeProviderProps } from '@/lib/types';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  // TODO: Set based on DB value
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    const html = document?.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', theme);
    }
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
