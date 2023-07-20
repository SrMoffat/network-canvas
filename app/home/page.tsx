'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import { HiTranslate, HiChevronDown } from 'react-icons/hi';
import { Logo, ThemeToggler } from '../components';
import { ThemeContext } from '../providers';

// @ts-ignore
const HeaderLogo = ({ classNames }) => (
  <div className={`flex items-center justify-center ${classNames}`}>
    <Logo height="40" width="40" />
    <span className="pl-3 font-bold">Network Canvas</span>
  </div>
);
const HumburgerMenu = () => (
  <div className="flex-none">
    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div>
);

const LocalizationDropdown = () => (
  <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
    <div className="card-body">
      <span className="font-bold text-lg">8 Items</span>
      <span className="text-info">Subtotal: $999</span>
      <div className="card-actions">
        <button className="btn btn-primary btn-block">View cart</button>
      </div>
    </div>
  </div>
);

const UserDropdown = () => (
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <div className="px-4 py-2 font-bold">Jane Does</div>
    <div className="divider p-0 m-0" />
    <li onClick={() => console.log("Clicked Role")}>
      <a className="justify-between">
        Role
        <div className="badge badge-outline badge-info ">Participant</div>
      </a>
    </li>
    <Link legacyBehavior href="/home"><li><a>Profile</a></li></Link>
    <li onClick={() => console.log("Clicked Logout")}><a>Logout</a></li>
  </ul>
);
const SideDrawer = () => (
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200">
      <HeaderLogo classNames="" />
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
);
const LanguageSelector = () => (
  <div className="dropdown dropdown-end">
    <div tabIndex={0} className="cursor-pointer pr-2 flex items-center btn btn-ghost btn-circle indicator">
      <HiTranslate size="38" />
      <HiChevronDown size="25" />
    </div>
    <LocalizationDropdown />
  </div>
);
const UserMenuSelector = () => (
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
      <div className="w-10 rounded-full">
        <img src="/images/dark.jpg" />
      </div>
    </label>
    <UserDropdown />
  </div>
);
const AuthenticatedNav = () => {
  // @ts-ignore
  const { toggleTheme } = useContext(ThemeContext);
  return (
    (
      <div className="w-full navbar bg-base-300">
        <HumburgerMenu />
        <HeaderLogo classNames="flex-1 px-2 mx-2" />
        <div className="flex-none lg:block">
          <ul className="menu menu-horizontal">
            <ThemeToggler handleChange={() => toggleTheme()} />
            <div className="flex-none pr-4">
              <LanguageSelector />
              <UserMenuSelector />
            </div>
          </ul>
        </div>
      </div>
    )
  )
};
const HomePageContent = () => (
  <>
    Content
  </>
);
export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AuthenticatedNav />
        <HomePageContent />
      </div>
      <SideDrawer />
    </div>
  );
}

