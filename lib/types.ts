import { ReactNode } from 'react';

export interface Credentials {
    email: string;
    password: string;
}
export interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}
export interface ThemeProviderProps {
    children: ReactNode;
}
export interface LanguageContextProps {
    language: string;
    setLanguage: (lang: string) => void;
}
export interface LanguageProviderProps {
    children: ReactNode;
}
export interface AuthProviderProps {
    children: ReactNode
  }

  export interface InputProps {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    onChange: (event: any) => void;
}
export interface AvatarProps {
    src: string | null | undefined;
  }
  
  


