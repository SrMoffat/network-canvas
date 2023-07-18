'use client'
 
import { createContext } from 'react'
import { useState, useEffect } from 'react';

function MyAwesomeThemeComponent() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    const html = document?.querySelector('html')
    if (html) {
      html.setAttribute('data-theme', theme);
    }
  }, [theme]);
  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">DARKMODE</div>
      <div className="swap-off">LIGHTMODE</div>
    </label>
  );
}
 
export const ThemeContext = createContext({})
 
// @ts-ignore
export function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}