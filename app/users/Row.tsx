
import Image from 'next/image';
import { UserData } from '@/lib/types';
import { parseISO, formatDistance } from 'date-fns';
import { DarkTheme, LightTheme } from '@/app/components/icons';
import { getRoleBadgeColor } from '@/lib/roles';

const Avatar = ({ username, avatar_url }: { username: string; avatar_url: string }) => (
  <td className="w-22">
    <Image className="rounded-lg" alt={username} src={avatar_url ?? '/images/dark.jpg'} width="40" height="60" />
  </td>
)
const Contact = ({ username, email }: { username: string; email: string }) => (
  <td>
    <div className="flex items-center space-x-3">
      <div>
        <div className="font-bold">{username}</div>
        <div className="text-sm opacity-50">{email}</div>
      </div>
    </div>
  </td>
)
const Role = ({ description, name }: { description: string; name: string }) => (
  <td>
    {description}
    <br />
    <span className={`badge badge-outline badge-sm badge-${getRoleBadgeColor(name)}`}>{name}</span>
  </td>
)
const Theme = ({ isDark }: { isDark: boolean }) => (
  <td>
    {isDark ? <DarkTheme /> : <LightTheme />}
  </td>
)
const Language = ({ code }: { code: string }) => (
  <td>
    {code}
  </td>
)
const Joined = ({ createdAt }: { createdAt: string }) => {
  return  (
    <td>
      {`${formatDistance(parseISO(createdAt), new Date())} ago`}
    </td>
  )
}

const UserEntry = ({ user }: { user: UserData }) => {
  const isDark = user?.theme?.name === 'dark';
  return (
    <tr className="hover">
      <Avatar username={user?.username} avatar_url={user?.avatar_url} />
      <Contact username={user?.username} email={user?.email} />
      <Role name={user?.role?.name} description={user?.role?.description} />
      <Theme isDark={isDark} />
      <Language code={user?.language?.code} />
      <Joined createdAt={user?.createdAt} />
    </tr>
  );
};

export default UserEntry