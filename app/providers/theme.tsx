'use client';
import { useState, createContext } from 'react';

export const ThemeContext = createContext({});

// @ts-ignore
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}



// function MyAwesomeThemeComponent() {
//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };
//   // initially set the theme and "listen" for changes to apply them to the HTML tag
//   useEffect(() => {
//     const html = document?.querySelector('html')
//     if (html) {
//       html.setAttribute('data-theme', theme);
//     }
//   }, [theme]);
//   return (
//     <label className="swap swap-rotate">
//       <input onClick={toggleTheme} type="checkbox" />
//       <div className="swap-on">DARKMODE</div>
//       <div className="swap-off">LIGHTMODE</div>
//     </label>
//   );
// }