'use client';
import { useContext } from 'react';
import { useSession } from 'next-auth/react';

import HeaderLogo from '@/app/components/authNavBar/Logo';
import ThemeToggler from '@/app/components/theme/ThemeToggler';
import HumburgerMenu from '@/app/components/authNavBar/Humburger';
import UserMenuSelector from '@/app/components/authNavBar/Profile';
import LanguageSelector from '@/app/components/authNavBar/Localization';

import { UserProfile } from '@/lib/types';
import { ThemeContext } from '@/app/components/providers';

const AuthenticatedNav = () => {
  // @ts-ignore
  const { toggleTheme } = useContext(ThemeContext);
  const { data: session } = useSession();
  return (

    <div className="w-full navbar bg-base-300 shadow-md">
      <HumburgerMenu  user={session?.user as UserProfile}/>
      <HeaderLogo classNames="flex-1 px-2 mx-2" />
      <div className="flex-none lg:block">
        <ul className="menu menu-horizontal">
          <ThemeToggler handleChange={() => toggleTheme()} />
          <div className="flex-none pr-4">
            <LanguageSelector />
            <UserMenuSelector user={session?.user as UserProfile} />
          </div>
        </ul>
      </div>
    </div>

  );
};

export default AuthenticatedNav;