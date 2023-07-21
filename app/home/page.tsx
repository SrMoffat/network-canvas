import React from 'react';
import { AuthNav, AuthNavDrawer } from '../components';

import HomePageContent from './Content';

export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AuthNav />
        <HomePageContent />
      </div>
      <AuthNavDrawer />
    </div>
  );
}

