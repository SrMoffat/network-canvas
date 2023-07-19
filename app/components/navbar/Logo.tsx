'use client'
import { useContext } from 'react';

import { ThemeContext } from '@/app/providers';


import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  // @ts-ignore
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'
  const logoImage = isDark ? '/images/logoDark.png' : '/images/logoLight.png'

  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer px-4"
      src={logoImage}
      height="100"
      width="100"
      alt="Logo"
    />
  );
};

export default Logo;
