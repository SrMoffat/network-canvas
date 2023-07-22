import UsersPageContent from './Content';
import { AuthNav, AuthNavDrawer } from '../components';

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
