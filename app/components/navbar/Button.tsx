import { useContext } from 'react';

import ThemeToggler from '@/app/components/theme/ThemeToggler';
import { ThemeContext } from '@/app/providers';

const NavBarButton = () => {
  // @ts-ignore
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbar-end">
      <ThemeToggler handleChange={() => toggleTheme()} />
      <a className="btn">Recent Upload</a>
    </div>
  );
};

export default NavBarButton;