import { parseISO, formatDistance, format } from 'date-fns';
import { AiOutlineCloudDownload, AiOutlineDelete } from 'react-icons/ai';

import { File } from '@/lib/types';
import { getReadableFileSize } from '@/lib/roles';
import { deleteFile } from '@/lib/api';

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


const Actions = ({ fileUrl }: { fileUrl: string, fileName: string }) => {
  const handleDelete = async (url: string) => {
    await deleteFile(url)
  }
  return (
    <td>
      <a target="_blank" referrerPolicy="no-referrer" href={fileUrl} className="btn mr-2">
        <AiOutlineCloudDownload size="20" />
      </a>
      {/* <button className="btn mr-2" onClick={() => handleDownload(fileUrl)}>
        <AiOutlineCloudDownload size="20" />
      </button> */}
      <button className="btn mr-2">
        <AiOutlineDelete size="20" style={{ color: 'red' }} onClick={() => handleDelete(fileUrl)} />
      </button>
    </td>
  )
};


const FileEntry = ({ file }: { file: File }) => {
  const { displaySize } = getReadableFileSize(parseFloat(file?.type));
  return (
    <tr className="hover">
      <FileName fileName={file?.name} size={displaySize} />
      <Uploaded uploadedAt={file?.createdAt} />
      <Actions fileUrl={file?.url} fileName={file?.name} />
    </tr>
  );
};

export default FileEntry;