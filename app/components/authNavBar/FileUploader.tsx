'use client';
import React, { useState } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import { uploadFile } from '@/lib/api';

// @ts-ignore
function UploadForm({ modalId }) {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const data = new FormData();
    data.set('file', file);
    await uploadFile(data);
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
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <div className="ml-4 mt-2">
          <div className="badge badge-outline">2.4mb</div>
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