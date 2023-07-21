'use client';
import { useState, useEffect, createContext } from 'react';

import { LanguageContextProps, LanguageProviderProps } from '@/lib/types';

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
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
