import React from 'react';
import { AiOutlineHome, AiOutlineDelete, AiOutlineCloudDownload } from 'react-icons/ai';
import { AuthNav, AuthNavDrawer } from '../components';

const Breadcrumbs = () => (
  <div className="text-sm breadcrumbs">
    <ul>
      <li>
        <a>
          <AiOutlineHome size="25" className="pr-2" />
          Home
        </a>
      </li>
      <li />
    </ul>
  </div>
);

const HomePageContent = () => (
  <div className="px-6">
    <Breadcrumbs />
    <div className="flex flex-col w-full py-4">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      <div className="divider"></div>
      <div>Uploaded Files</div>
      <div className="grid h-100 card bg-base-300 rounded-box place-items-center">
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
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>
                <button className="btn mr-2">
                  <AiOutlineCloudDownload size="20" />
                </button>
                <button className="btn mr-2">
                  <AiOutlineDelete size="20" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>
                <button className="btn mr-2">
                  <AiOutlineCloudDownload size="20" />
                </button>
                <button className="btn mr-2">
                  <AiOutlineDelete size="20" />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>
                <button className="btn mr-2">
                  <AiOutlineCloudDownload size="20" />
                </button>
                <button className="btn mr-2">
                  <AiOutlineDelete size="20" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <AuthNav />
        <HomePageContent />
      </div>
      <AuthNavDrawer />
    </div>
  );
}

