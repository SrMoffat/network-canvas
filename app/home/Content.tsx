import Breadcrumbs from './Breadcrumbs';
import { UserFilesContainer, UserFiles } from './Files';
import { AccountDetailsContainer, AccountDetails } from './Account';

const HomePageContent = () => {
  return (
    <div className="px-6">
      <Breadcrumbs />
      <div className="flex flex-col w-full py-4">
        <AccountDetailsContainer>
          <AccountDetails />
        </AccountDetailsContainer>
        <div className="divider"></div>
        <UserFilesContainer>
          <UserFiles />
        </UserFilesContainer>
      </div>
    </div>
  );
};

export default HomePageContent;