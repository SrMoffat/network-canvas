import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import { AuthNav, AuthNavDrawer } from '../components';

const Breadcrumbs = () => (
  <div className="text-sm breadcrumbs">
    <ul>
      <li>
        <a>
          <AiOutlineHome size="25" className="pr-2" />
          Home
        </a>
      </li>
      <li>
        <a>
          <AiOutlineUser size="25" className="pr-2" />
          Users
        </a>
      </li>
      <li />
    </ul>
  </div>
);

const UsersPageContent = () => (
  <div className="px-6 border">
    <Breadcrumbs />
  </div>
);
export default function Users() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AuthNav />
        <UsersPageContent />
      </div>
      <AuthNavDrawer />
    </div>
  );
}



