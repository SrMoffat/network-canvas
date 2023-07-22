import FilesPageContent from './Content';
import { AuthNav, AuthNavDrawer } from '../components';

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
