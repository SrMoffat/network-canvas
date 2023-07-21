import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

import { Profile } from '@/lib/types';
import { getRoleBadgeColor } from '@/lib/roles';

const UserDropdown = ({ user }: Profile) =>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <div className="px-4 py-2 font-bold">{user?.name}</div>
    <div className="divider p-0 m-0" />
    <li onClick={() => { }}>
      <a className="justify-between">
        Role
        <div className={`badge badge-outline badge-${getRoleBadgeColor(user?.roleName)}`}>{user?.roleName}</div>
      </a>
    </li>
    <Link legacyBehavior href="/home"><li><a>Profile</a></li></Link>
    <li onClick={() => signOut({
      callbackUrl: '/login',
    })}><a className="text-red-500">Logout</a></li>
  </ul>
  ;

const UserMenuSelector = ({ user }: Profile) =>
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
      <div className="w-10 rounded-full">
        <Image alt="Profile" src={user?.image ?? '/images/dark.jpg'} width="50" height="50" />
      </div>
    </label>
    <UserDropdown user={user} />
  </div>
  ;

export default UserMenuSelector;

