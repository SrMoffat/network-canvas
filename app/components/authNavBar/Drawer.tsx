import React from 'react';
import Link from 'next/link';

import HeaderLogo from '@/app/components/authNavBar/Logo';

const links = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Files',
    href: '/files',
  },
  {
    label: 'Users',
    href: '/users',
  },
];

const SideDrawer = () =>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200">
      <HeaderLogo classNames="" />
      <div className="mt-5 px-4">
        {links.map(({ label, href }) =>
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        )}
      </div>
    </ul>
  </div>
  ;

export default SideDrawer;