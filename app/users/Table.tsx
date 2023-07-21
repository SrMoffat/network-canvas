
'use client';
import { useEffect, useState } from 'react';

import { fetchUsers } from '@/lib/api';
import TableHeader from './Header';
import { UserData } from '@/lib/types';

const TableRows = ({ users }: { users: UserData[] | undefined }) => {
    console.log("users", users)
    return users?.map(user => <div key={user?.email}>{user?.username}</div>)
}

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
            <TableRows users={users} />
        </table>
    );
};

export default UsersList;
