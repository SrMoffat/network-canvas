import Logo from '@/app/components/navbar/Logo';
import NavBarText from '@/app/components/navbar/Text';
import NavBarMobileMenu from '@/app/components/navbar/MenuMobile';

const LogoContainer = () =>
  <div className="navbar-start">
    <NavBarMobileMenu />
    <Logo />
    <NavBarText />
  </div>;

export default LogoContainer;