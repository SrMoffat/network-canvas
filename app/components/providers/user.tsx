'use client';
import { useBrowserStorage } from '@/hooks';
import { loginUser } from '@/lib/api';
import { useState, useEffect, createContext, ReactNode } from 'react';

interface UserContextProps {
    user?: UserData
    normalLogin: (data: Data) => Promise<void>
}
interface UserProviderProps {
    children: ReactNode;
}
interface Data {
    email: string;
    password: string;
}
interface UserData {
    id: number;
    email: string;
    username: string;
    roleId: string;
    languageId: string;
    themeId: string;
    createdAt: string;
    updatedAt: string;
}
interface LoggedInUserDetails {
    jwt: string;
    user: UserData
}

export type UserStorage = LoggedInUserDetails | null;

export const UserContext = createContext<UserContextProps>({
  normalLogin: (data: Data) => Promise.resolve(),
  user: {
    id: 900,
    email: '',
    username: '',
    createdAt: '',
    updatedAt: '',
    languageId: '',
    roleId: '',
    themeId: ''
  }
});

export function UserProvider({ children }: UserProviderProps) {
  const [sessionUser, setSessionUser, removeSessionUser] = useBrowserStorage<UserStorage>(
    'nc-user',
    'session'
  );

  const [user, setUser] = useState<UserData | undefined>(sessionUser?.user);

  const persistUser = (data: UserStorage) => {
    setSessionUser(data);
    setUser(data?.user);
  };

  const normalLogin = async (data: Data) => {
    try {
      const response = await loginUser(data);
      console.log('response', response);
      persistUser(response);
    } catch (error) {
      throw error;
    }
  };

  return <UserContext.Provider value={{ normalLogin, user }}>{children}</UserContext.Provider>;
}
