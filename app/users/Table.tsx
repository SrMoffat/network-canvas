
'use client';
import { useEffect, useState } from 'react';

import { fetchUsers } from '@/lib/api';
import Row from './Row';
import TableHeader from './Header';
import { UserData } from '@/lib/types';

const TableRows = ({ users }: { users: UserData[] | undefined }) => {
  return users?.map(user => <Row key={user?.email} user={user} />);
};

const UsersList = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setUsers(users?.data);
    };
    getUsers();
  }, []);
  return (
    <table className="table">
      <TableHeader />
      <tbody>
        <TableRows users={users} />
      </tbody>
    </table>
  );
};

export default UsersList;


