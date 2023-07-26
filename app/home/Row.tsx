import { parseISO, formatDistance, format } from 'date-fns';
import { AiOutlineCloudDownload, AiOutlineDelete } from 'react-icons/ai';

import { File } from '@/lib/types';
import { getReadableFileSize } from '@/lib/roles';

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


const Actions = ({ fileUrl }: { fileUrl: string }) => {
  const handleDownload = (url: string) => {
    console.log("Download", url)
  }
  const handleDelete = (url: string) => {
    console.log("Delete", url)
  }
  return (
    <td>
      <button className="btn mr-2" onClick={() => handleDownload(fileUrl)}>
        <AiOutlineCloudDownload size="20" />
      </button>
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
      <Actions fileUrl={file?.url} />
    </tr>
  );
};

export default FileEntry;