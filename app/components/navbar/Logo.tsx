'use client';
import Image from 'next/image';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { ThemeContext } from '@/app/components/providers';

// @ts-ignore
const Logo = (props) => {
  const router = useRouter();
  // @ts-ignore
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const logoImage = isDark ? '/images/logoDark.png' : '/images/logoLight.png';

  return (
    <Image
      priority
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer"
      src={logoImage}
      height="70"
      width="70"
      alt="Logo"
      {...props}
    />
  );
};

export default Logo;


