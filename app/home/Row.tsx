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
      {/* <UploadedBy avatar={file?.user?.avatar_url} name={file?.user?.username} email={file?.user?.email} /> */}
      <Actions />
    </tr>
  );
};

export default FileEntry;