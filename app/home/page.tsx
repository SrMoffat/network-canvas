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
      <div className="grid h-100 card bg-base-300 rounded-box place-items-center p-2">
        <div className="text-base place-self-start font-bold pl-4 pt-4">Account Details</div>
        <table className="table">
          <thead>
            <tr>
              <th>Contact</th>
              <th>Role</th>
              <th>Theme</th>
              <th>Language</th>
              <th>Joined</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Jane Does</div>
                    <div className="text-sm opacity-50">jane@does.com</div>
                  </div>
                </div>
              </td>
              <td>
                Research pariticpant
                <br />
                <span className="badge badge-outline badge-info badge-sm">Pariticpant</span>
              </td>
              <td>
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              </td>
              <td>
               US
              </td>
              <td>
               2 days ago
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
                  <AiOutlineDelete size="20" style={{ color: "red"}} />
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
                  <AiOutlineDelete size="20" style={{ color: "red"}} />
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
                  <AiOutlineDelete size="20" style={{ color: "red"}} />
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
                  <AiOutlineDelete size="20" style={{ color: "red"}} />
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

