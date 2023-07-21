'use client';
import Link from 'next/link';
import { useContext } from 'react';

import { ThemeContext } from '@/app/components/providers';

const Hero = () => {
  // @ts-ignore
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const heroImage = isDark ? '/images/dark.jpg' : '/images/light.jpg';
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Network Canvas</h1>
          <p className="mb-5">
            Manage your research data archive.
            Upload and view JSON data from various sources.
            With correct priviledges you can also manage users and permissions
          </p>
          <Link href="/signup" className="px-4">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Hero;