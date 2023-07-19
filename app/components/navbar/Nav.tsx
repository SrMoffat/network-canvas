import React from 'react';

import Logo from './Logo';
import UserMenu from './UserMenu';
import Container from '../container';
import Categories from './Categories';

export default function Nav() {
  return (
    // <div className="navbar bg-base-300">
    //   <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    // </div>
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <UserMenu  />
        </div>
      </Container>
    </div>
    <Categories />
  </div>
  );
}


