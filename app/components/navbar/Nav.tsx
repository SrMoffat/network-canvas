'use client';
import NavBarMenu from '@/app/components/navbar/Menu';
import NavBarButton from '@/app/components/navbar/Button';
import LogoContainer from '@/app/components/navbar/Container';

export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <LogoContainer />
      <NavBarMenu />
      <NavBarButton />
    </div>
  );
}
