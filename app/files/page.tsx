import React from 'react';
import { AuthNav, AuthNavDrawer } from '../components';
import { AiOutlinePaperClip, AiOutlineHome } from 'react-icons/ai';

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
          <AiOutlinePaperClip size="25" className="pr-2" />
          Files
        </a>
      </li>
      <li />
    </ul>
  </div>
);

const FilesPageContent = () => (
  <div className="px-6 border">
    <Breadcrumbs />
  </div>
);
export default function Files() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AuthNav />
        <FilesPageContent />
      </div>
      <AuthNavDrawer />
    </div>
  );
}


