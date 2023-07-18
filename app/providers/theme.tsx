'use client';
import { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext({});

// @ts-ignore
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
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
