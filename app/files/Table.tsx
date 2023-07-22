
'use client';
import { useEffect, useState } from 'react';

import { fetchFiles } from '@/lib/api';
import Row from './Row';
import TableHeader from './Header';
import { File } from '@/lib/types';

const TableRows = ({ files }: { files: File[] | undefined }) => {
    return files?.map(file => <Row key={file?.id} file={file} />)
}

const FilesList = () => {
    const [files, setFiles] = useState<File[]>([]);
    useEffect(() => {
        const getFiles = async () => {
            const files = await fetchFiles();
            setFiles(files?.data);
        };
        getFiles();
    }, []);
    return (
        <table className="table">
            <TableHeader />
            <tbody>
                <TableRows files={files} />
            </tbody>
        </table>
    );
};

export default FilesList;


