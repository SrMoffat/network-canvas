import { AiOutlineDelete, AiOutlineCloudDownload } from 'react-icons/ai';
import TableHeader from './Header';

const files = [
  {
    fileName: 'sample_stuff.json',
    size: '22.5mb',
    uploadedAt: ' 23 July 2023',
    downloadUrl: '',
  },
  {
    fileName: 'research_participants.json',
    size: '30.5mb',
    uploadedAt: ' 22 July 2023',
    downloadUrl: '',
  },
  {
    fileName: 'sample_stuff.json',
    size: '16.5mb',
    uploadedAt: ' 21 July 2023',
    downloadUrl: '',
  },
];

// @ts-ignore
export const UserFilesContainer = ({ children }) => {
  return (
    <div className="grid h-100 card bg-base-300 rounded-box place-items-center p-2">
      <div className="text-base place-self-start font-bold pl-4 pt-4">My Files</div>
      {children}
    </div>

  );
};
