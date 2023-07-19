'use client';
import { useContext } from 'react';

import ThemeToggler from '@/app/components/theme/ThemeToggler';

import { ThemeContext } from '@/app/providers';

const NavBarButton = () => {
  const modalId = 'recent-upload';
  // @ts-ignore
  const { toggleTheme } = useContext(ThemeContext);
  const handleDownload = () => {
    console.log("Handle download")
  };
  return (
    <div className="navbar-end">
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
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