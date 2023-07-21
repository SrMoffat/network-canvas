'use client';
import { useContext } from 'react';

import ThemeToggler from '@/app/components/theme/ThemeToggler';
import RecentUploadContent from '@/app/components/navbar/RecentUpload';

import { ThemeContext } from '@/app/providers';

const NavBarButton = () => {
  const modalId = 'recent-upload';
  // @ts-ignore
  const { toggleTheme } = useContext(ThemeContext);
  const handleDownload = () => {
  };
  return (
    <div className="navbar-end">
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <RecentUploadContent />
          <div className="modal-action">
            <label htmlFor={modalId} className="btn btn-outline" onClick={handleDownload}>Donwload</label>
            <label htmlFor={modalId} className="btn btn-neutral">Cancel</label>
          </div>
        </div>
      </div>
      <ThemeToggler handleChange={() => toggleTheme()} />
      <label htmlFor={modalId} className="btn modal-button">Recent Upload</label>
    </div>
  );
};

export default NavBarButton;