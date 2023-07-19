'use client';
import Image from 'next/image';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { ThemeContext } from '@/app/providers';

const Logo = () => {
  const router = useRouter();
  // @ts-ignore
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const logoImage = isDark ? '/images/logoDark.png' : '/images/logoLight.png';

  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer"
      src={logoImage}
      height="70"
      width="70"
      alt="Logo"
    />
  );
};

export default Logo;


