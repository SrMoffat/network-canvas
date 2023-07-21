import { AiOutlineDelete, AiOutlineCloudDownload } from 'react-icons/ai';

// @ts-ignore
export const UserFilesContainer = ({ children }) => {
  return (
    <div className="grid h-100 card bg-base-300 rounded-box place-items-center p-2">
      <div className="text-base place-self-start font-bold pl-4 pt-4">Uploaded Files</div>
      {children}
    </div>

  );
};

export const UserFiles = () => {
  return (
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
              <AiOutlineDelete size="20" style={{ color: 'red' }} />
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
              <AiOutlineDelete size="20" style={{ color: 'red' }} />
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
              <AiOutlineDelete size="20" style={{ color: 'red' }} />
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
              <AiOutlineDelete size="20" style={{ color: 'red' }} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};