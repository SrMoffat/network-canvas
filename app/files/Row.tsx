import Image from 'next/image';
import { parseISO, formatDistance, format } from 'date-fns';
import { AiOutlineCloudDownload, AiOutlineDelete } from 'react-icons/ai';

import { File } from '@/lib/types';

const FileName = ({ fileName, size }: { fileName: string; size: string }) =>
  <td>
    <div className="flex items-center space-x-3">
      <div>
        <div className="font-bold">{fileName}</div>
        <span className="badge badge-neutral badge-sm">{size}</span>
      </div>
    </div>
  </td>;

const Uploaded = ({ uploadedAt }: { uploadedAt: string; }) =>
  <td>
    {`${format(new Date(uploadedAt), 'PPP')}`}
    <br />
    <span className="badge badge-neutral badge-sm">{`${formatDistance(parseISO(uploadedAt), new Date())} ago`}</span>
  </td>;

const UploadedBy = ({ avatar, name, email }: { avatar: string; name: string, email: string }) =>
  <td className="w-22 flex">
    <Image className="rounded-lg" alt={name} src={avatar ?? '/images/dark.jpg'} width="40" height="60" />
    <div className="flex items-center pl-2">
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm opacity-50">{email}</div>
      </div>
    </div>
  </td>;

const Actions = () =>
  <td>
    <button className="btn mr-2">
      <AiOutlineCloudDownload size="20" />
    </button>
    <button className="btn mr-2">
      <AiOutlineDelete size="20" style={{ color: 'red' }} />
    </button>
  </td>;


const FileEntry = ({ file }: { file: File }) => {
  return (
    <tr className="hover">
      <FileName fileName={file?.name} size={file?.type} />
      <Uploaded uploadedAt={file?.createdAt} />
      <UploadedBy avatar={file?.user?.avatar_url} name={file?.user?.username} email={file?.user?.email} />
      <Actions />
    </tr>
  );
};

export default FileEntry;