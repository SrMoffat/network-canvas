import { ReactNode } from 'react';

export interface Credentials {
    username?: string;
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
    // eslint-disable-next-line no-unused-vars
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
    // eslint-disable-next-line no-unused-vars
    onChange: (event: any) => void;
}
export interface AvatarProps {
    src: string | null | undefined;
}
export interface UserProfile {
    name: string;
    email: string;
    image: string;
    roleName: string;
    roleDescription: string;
    roleId: number | string;
    languageName: string;
    languageCode: string;
    themeName: string;
    themeId: string;
}

export interface Profile {
    user: UserProfile
}
export interface RequestBody {
    email: string;
    password: string
}

