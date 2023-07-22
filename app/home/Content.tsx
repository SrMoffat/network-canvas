import Breadcrumbs from './Breadcrumbs';
import { UserFilesContainer } from './Files';
import { AccountDetailsContainer, AccountDetails } from './Account';
import FileList from './Table'

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
          <FileList />
        </UserFilesContainer>
      </div>
    </div>
  );
};

export default HomePageContent;