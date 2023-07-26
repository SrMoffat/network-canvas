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
export interface Role {
    id: string | number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}
export interface Theme {
    id: string | number;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export interface Language {
    id: string | number;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
}
export interface UserData {
    id: string | number;
    username: string;
    email: string;
    avatar_url: string;
    createdAt: string;
    updatedAt: string;
    language: Language;
    theme: Theme;
    role: Role;
}
export interface UserFiles {
    id: string | number;
    username: string;
    email: string;
    avatar_url: string;
    files: File[];
}

export interface Profile {
    user: UserProfile
}
export interface RequestBody {
    email: string;
    password: string
}
export interface File {
    id: string | number;
    name: string;
    type: string;
    content: string;
    createdAt: string;
    url: string;
    updatedAt: string;
    user: UserData
}
