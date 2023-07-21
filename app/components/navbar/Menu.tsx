import Link from 'next/link';

const NavBarMenu = () =>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link href="/signup" className="px-4">
        Sign Up
      </Link>
      <Link href="/login" className="px-4">
        Login
      </Link>
    </ul>
  </div>
;
export default NavBarMenu;