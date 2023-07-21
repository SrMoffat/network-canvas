
import Image from 'next/image';

// @ts-ignore
const UserEntry = ({ user }) => {
  const isDark = user?.themeName === 'dark';
  return (
    <tr>
      {/* <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{user?.username}</div>
            <div className="text-sm opacity-50">{user?.email}</div>
          </div>
        </div>
      </td> */}
      {/* <td>
        {user?.roleDescription}
        <br />
        <span className="badge badge-outline badge-info badge-sm">{user?.roleName}</span>
      </td> */}
      {/* <td>
        {isDark ? <DarkTheme /> : <LightTheme />}
      </td>
      <td>
        {user?.languageCode}
      </td>
      <td>
        <Image className="w-10 rounded-full" alt="Profile" src={user?.image ?? '/images/dark.jpg'} width="50" height="50" />
      </td> */}
    </tr>
  );
};