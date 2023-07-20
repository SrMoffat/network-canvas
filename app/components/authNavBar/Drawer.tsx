import HeaderLogo from "@/app/components/authNavBar/Logo";

const SideDrawer = () => (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-base-200">
        <HeaderLogo classNames="" />
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  );

  export default SideDrawer