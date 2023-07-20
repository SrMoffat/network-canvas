import React from 'react';
import { AuthNav, AuthNavDrawer } from '../components';
import { AiOutlinePaperClip, AiOutlineHome, AiOutlineCloudDownload, AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';

const Breadcrumbs = () => (
  <div className="text-sm breadcrumbs">
    <ul>
      <li>
        <a>
          <AiOutlineHome size="25" className="pr-2" />
          Home
        </a>
      </li>
      <li>
        <a>
          <AiOutlinePaperClip size="25" className="pr-2" />
          Files
        </a>
      </li>
      <li />
    </ul>
  </div>
);

const FilesPageContent = () => (
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
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">sample_stuff.json</div>
                    <div className="text-sm opacity-50">22.5mb</div>
                  </div>
                  <AiOutlineUser size="20" />
                </div>
              </td>
              <td>
                22 July 2023
                <br />
                <span className="badge badge-neutral badge-sm">2 days ago</span>
              </td>
              <td>
                <button className="btn mr-2">
                  <AiOutlineCloudDownload size="20" />
                </button>
                <button className="btn mr-2">
                  <AiOutlineDelete size="20" style={{ color: "red" }} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">sample_stuff.json</div>
                    <div className="text-sm opacity-50">22.5mb</div>
                  </div>
                </div>
              </td>
              <td>
                22 July 2023
                <br />
                <span className="badge badge-neutral badge-sm">2 days ago</span>
              </td>
              <td>
                <button className="btn mr-2">
                  <AiOutlineCloudDownload size="20" />
                </button>
                <button className="btn mr-2">
                  <AiOutlineDelete size="20" style={{ color: "red" }} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">sample_stuff.json</div>
                    <div className="text-sm opacity-50">22.5mb</div>
                  </div>
                </div>
              </td>
              <td>
                22 July 2023
                <br />
                <span className="badge badge-neutral badge-sm">2 days ago</span>
              </td>
              <td>
                <button className="btn mr-2">
                  <AiOutlineCloudDownload size="20" />
                </button>
                <button className="btn mr-2">
                  <AiOutlineDelete size="20" style={{ color: "red" }} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">sample_stuff.json</div>
                    <div className="text-sm opacity-50">22.5mb</div>
                  </div>
                </div>
              </td>
              <td>
                22 July 2023
                <br />
                <span className="badge badge-neutral badge-sm">2 days ago</span>
              </td>
              <td>
                <button className="btn mr-2">
                  <AiOutlineCloudDownload size="20" />
                </button>
                <button className="btn mr-2">
                  <AiOutlineDelete size="20" style={{ color: "red" }} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
);
export default function Files() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AuthNav />
        <FilesPageContent />
      </div>
      <AuthNavDrawer />
    </div>
  );
}


