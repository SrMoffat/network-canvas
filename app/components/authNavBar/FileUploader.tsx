'use client';
import React, { useState } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import { uploadFile } from '@/lib/api';
import { getReadableFileSize } from '@/lib/roles';

// @ts-ignore
function UploadForm({ modalId }) {
  let fileSizeInBytes: number;
  // let fileSizeInKB: number;
  // let fileSizeInMB: number;
  const [file, setFile] = useState<File>();
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileSize, setFileSize] = useState<string>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (!file) return;
    const data = new FormData();
    data.set('file', file);
    const fileDetails = await uploadFile(data);
    if (fileDetails?.data?.id) {
      setUploaded(true);
    }
    setLoading(false);
  };
  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);
    if (file) {
      fileSizeInBytes = file.size;
      // fileSizeInKB = Math.round(fileSizeInBytes / 1024);
      // fileSizeInMB = Math.round(fileSizeInKB / 1024);
      const { displaySize } = getReadableFileSize(fileSizeInBytes);
      setFileSize(displaySize);
    }
  };
  return (
    <form className="flex justify-center w-full py-6 flex-col" onSubmit={onSubmit}>
      {uploaded ?
        <div className="alert shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">File Uploaded!</h3>
            <div className="text-xs">Your file has been succesfully uploaded</div>
          </div>
          {/* <button className="btn btn-sm">See</button> */}
        </div>
        :
        <div className="flex justify-center">
          <AiOutlinePaperClip className="h-12 w-7 pr-1 flex-shrink-0" aria-hidden="true" />
          <input
            type="file"
            name="file"
            accept="application/JSON"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleSetFile}
          />
          {fileSize &&
            <div className="ml-4 mt-2">
              <div className="badge badge-outline">{fileSize}</div>
            </div>
          }
        </div>
      }
      <div className="flex mt-5 justify-center">
        {
          loading
            ?
            <button className="btn btn-outline font-medium rounded-lg text-sm mr-2 text-center">
              <span className="loading loading-spinner"></span>
              loading
            </button>
            : !uploaded && <input className="btn btn-outline mr-4" type="submit" value="Upload" />
        }
        <label htmlFor={modalId} className="btn btn-neutral">{uploaded ? 'Close' : 'Cancel'}</label>
      </div>
    </form>
  );
}

export default UploadForm;
