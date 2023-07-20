import Link from 'next/link';
import Image from 'next/image';

const UserDropdown = () =>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <div className="px-4 py-2 font-bold">Jane Does</div>
    <div className="divider p-0 m-0" />
    <li onClick={() => {}}>
      <a className="justify-between">
          Role
        <div className="badge badge-outline badge-info ">Participant</div>
      </a>
    </li>
    <Link legacyBehavior href="/home"><li><a>Profile</a></li></Link>
    <li onClick={() => {}}><a>Logout</a></li>
  </ul>
  ;

const UserMenuSelector = () =>
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
      <div className="w-10 rounded-full">
        <Image alt="Profile" src="/images/dark.jpg" width="50" height="50" />
      </div>
    </label>
    <UserDropdown />
  </div>
  ;

export default UserMenuSelector;