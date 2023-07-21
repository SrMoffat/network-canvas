'use client';
import { useState, useEffect, createContext, ReactNode } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {}
});

export function LanguageProvider({ children }: LanguageProviderProps) {
  // TODO: Set based on DB value
  const [language, setLanguage] = useState('en');
  const updateLanguage = (lang: string) => {
    setLanguage(lang);
  };
  useEffect(() => {
    const html = document?.querySelector('html');
    if (html) {
      html.setAttribute('lang', language);
    }
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>{children}</LanguageContext.Provider>;
}
