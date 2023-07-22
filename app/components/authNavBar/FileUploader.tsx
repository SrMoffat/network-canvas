'use client';
import React, { useState } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import { uploadFile } from '@/lib/api';

// @ts-ignore
function UploadForm({ modalId }) {
  let fileSizeInBytes: number;
  let fileSizeInKB: number;
  let fileSizeInMB: number;
  const [file, setFile] = useState<File>();
  const [fileSize, setFileSize] = useState<string>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const data = new FormData();
    data.set('file', file);
    await uploadFile(data);
  };
  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFile(file)
    if (file) {
      fileSizeInBytes = file.size;
      fileSizeInKB = Math.round(fileSizeInBytes / 1024);
      fileSizeInMB = Math.round(fileSizeInKB / 1024);
      const displaySize = fileSizeInMB <= 0
        ? `${fileSizeInKB} KB`
        : (fileSizeInKB <= 0
          ? `${fileSizeInBytes} Bytes`
          : `${fileSizeInMB} MB`)
      setFileSize(displaySize)
    }
  };
  return (
    <form className="flex justify-center w-full py-6 flex-col" onSubmit={onSubmit}>
      <div className="flex justify-center">
        <AiOutlinePaperClip className="h-12 w-7 pr-1 flex-shrink-0" aria-hidden="true" />
        <input
          type="file"
          name="file"
          accept="application/JSON"
          className="file-input file-input-bordered w-full max-w-xs"
          onChange={handleSetFile}
        />
        <div className="ml-4 mt-2">
          <div className="badge badge-outline">{fileSize}</div>
        </div>
      </div>
      <div className="flex mt-5 justify-center">
        <input className="btn btn-outline mr-4" type="submit" value="Upload" />
        <label htmlFor={modalId} className="btn btn-neutral">Cancel</label>
      </div>
    </form>
  );
}

export default UploadForm;
