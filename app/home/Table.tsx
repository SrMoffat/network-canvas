
'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { fetchUserFiles } from '@/lib/api';
import Row from './Row';
import TableHeader from './Header';
import { UserFiles } from '@/lib/types';

const TableRows = ({ files }: { files: UserFiles | undefined }) => {
  return files?.files?.map(file => <Row key={file?.id} file={file} />);
};

const FilesList = () => {
  const { data: session } = useSession();
  const [userFiles, setUserFiles] = useState<UserFiles>();
  useEffect(() => {
    const getUserFiles = async () => {
      const files = await fetchUserFiles(session?.user?.email as string);
      setUserFiles(files?.data);
    };
    getUserFiles();
  }, [session?.user]);


  return (
    <table className="table">
      <TableHeader />
      <tbody>
        <TableRows files={userFiles} />
      </tbody>
    </table>
  );
};

export default FilesList;


