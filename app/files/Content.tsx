import FilesList from './Table';
import Breadcrumbs from './Breadcrumbs';

// @ts-ignore
const FilesPageContainer = ({ children }) => {
  return (
    <div className="px-6">
      <Breadcrumbs />
      <div className="flex flex-col w-full py-4">
        <div className="divider"></div>
        <div className="grid h-100 card bg-base-300 rounded-box place-items-center p-2">
          <div className="text-base place-self-start font-bold pl-4 pt-4">Files</div>
          {children}
        </div>
      </div>
    </div>
  );
};

const FilesPageContent = () => {
  return (
    <FilesPageContainer>
      <FilesList />
    </FilesPageContainer>
  )
};

export default FilesPageContent;
