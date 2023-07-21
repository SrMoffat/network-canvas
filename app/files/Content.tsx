import { AiOutlineCloudDownload, AiOutlineDelete } from 'react-icons/ai';

import Breadcrumbs from './Breadcrumbs';

const files = [
  {
    fileName: 'sample_stuff.json',
    size: '22.5mb',
    uploadedAt: ' 23 July 2023',
    downloadUrl: '',
  },
  {
    fileName: 'research_participants.json',
    size: '30.5mb',
    uploadedAt: ' 22 July 2023',
    downloadUrl: '',
  },
  {
    fileName: 'sample_stuff.json',
    size: '16.5mb',
    uploadedAt: ' 21 July 2023',
    downloadUrl: '',
  },
];

const FilesPageContent = () =>
  <div className="px-6">
    <Breadcrumbs />
    <div className="flex flex-col w-full py-4">
      <div className="divider"></div>
      <div className="grid h-100 card bg-base-300 rounded-box place-items-center p-2">
        <div className="text-base place-self-start font-bold pl-4 pt-4">Uploaded Files</div>
        <table className="table">
          <thead>
            <tr>
              <th>Filename</th>
              <th>Uploaded</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {files?.map(({ fileName, size, uploadedAt }) =>
              <tr key={fileName}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{fileName}</div>
                      <div className="text-sm opacity-50">{size}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {uploadedAt}
                  <br />
                  <span className="badge badge-neutral badge-sm">2 days ago</span>
                </td>
                <td>
                  <button className="btn mr-2">
                    <AiOutlineCloudDownload size="20" />
                  </button>
                  <button className="btn mr-2">
                    <AiOutlineDelete size="20" style={{ color: 'red' }} />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
;

export default FilesPageContent;
