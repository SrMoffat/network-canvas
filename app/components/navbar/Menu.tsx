import Link from 'next/link';

const NavBarMenu = () =>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link href="/auth/signup" className="px-4">
        Sign Up
      </Link>
      <Link href="/auth/login" className="px-4">
        Login
      </Link>
    </ul>
  </div>
;
export default NavBarMenu;