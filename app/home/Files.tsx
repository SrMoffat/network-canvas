// @ts-ignore
export const UserFilesContainer = ({ children }) => {
  return (
    <div className="grid h-100 card bg-base-300 rounded-box place-items-center p-2">
      <div className="text-base place-self-start font-bold pl-4 pt-4">My Files</div>
      {children}
    </div>

  );
};
