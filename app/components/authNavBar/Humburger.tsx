import { UserProfile } from '@/lib/types';
import UploadForm from '@/app/components/authNavBar/FileUploader';

const HumburgerMenu = ({ user }: { user: UserProfile }) => {
  const isAdmin = user?.roleName === 'participant';
  const modalId = 'upload-file';
  return (
    <div className="flex-none">
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <UploadForm modalId={modalId} />
        </div>
      </div>
      <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
      {isAdmin && <label htmlFor={modalId} className="btn modal-button">Upload File</label>}
    </div>
  );
};

export default HumburgerMenu;