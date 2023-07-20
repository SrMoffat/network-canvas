import Logo from '../navbar/Logo';

// @ts-ignore
const HeaderLogo = ({ classNames }) =>
  <div className={`flex items-center justify-center ${classNames}`}>
    <Logo height="40" width="40" />
    <span className="pl-3 font-bold">Network Canvas</span>
  </div>
  ;

export default HeaderLogo;