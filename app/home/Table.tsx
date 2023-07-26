'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { fetchUserFiles } from '@/lib/api';
import Row from './Row';
import TableHeader from './Header';
import { UserFiles } from '@/lib/types';

const emptyState = () => {
  return (
    <tr>
      <td></td>
      <td>
        No files uploaded
        <br />
        <span className="badge badge-neutral badge-sm">0 files</span>
      </td>
      <td></td>
    </tr>
  )
};

const TableRows = () => {
  const { data: session } = useSession();
  const [files, setUserFiles] = useState<UserFiles>();
  useEffect(() => {
    const getUserFiles = async () => {
      const files = await fetchUserFiles(session?.user?.email as string);
      setUserFiles(files?.data);
    };
    getUserFiles();
  }, [session?.user]);
  const data = files?.files;
  const isEmpty = Number(data?.length) <= 0;

  return isEmpty
    ? emptyState()
    : data?.map(file => <Row key={file?.id} file={file} />)
};

const FilesList = () => {
  return (
    <table className="table">
      <TableHeader />
      <tbody>
        <TableRows />
      </tbody>
    </table>
  );
};

export default FilesList;


