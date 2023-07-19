'use client';

import React from 'react';

import Logo from './Logo';
import UserMenu from './UserMenu';
import Container from '../container';
import Categories from './Categories';
import ThemeToggler from '../theme/ThemeToggler';

import { useContext } from 'react';

import { ThemeContext } from '@/app/providers';



const NavBarButton = () => {

  // @ts-ignore
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbar-end">
      <ThemeToggler handleChange={() => toggleTheme()} />
      <a className="btn">Recent Upload</a>
    </div>
  );
};
const NavBarMenu = () =>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  ;

const NavBarMobileMenu = () =>
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
  </div>;


const NavBarText = () => <a className="btn btn-ghost normal-case sm:text-sm lg:text-lg">Network Canvas</a>;

const LogoContainer = () =>
  <div className="navbar-start">
    <NavBarMobileMenu />
    <Logo />
    <NavBarText />
  </div>;


export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <LogoContainer />
      <NavBarMenu />
      <NavBarButton />
    </div>
  );
}


