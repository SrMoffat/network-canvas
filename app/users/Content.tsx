import Breadcrumbs from './Breadcrumbs';
import UsersList from './Table';

// @ts-ignore
const UsersPageContainer = ({ children }) => {
  return (
    <div className="px-6">
      <Breadcrumbs />
      <div className="flex flex-col w-full py-4">
        <div className="divider"></div>
        <div className="grid h-100 card bg-base-300 rounded-box place-items-center p-2">
          <div className="text-base place-self-start font-bold pl-4 pt-4">Users</div>
          {children}
        </div>
      </div>
    </div>
  );
};
const UsersPageContent = () => {
  return (
    <UsersPageContainer>
      <UsersList />
    </UsersPageContainer>
  );
};
export default UsersPageContent;
