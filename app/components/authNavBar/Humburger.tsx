import { AiOutlinePaperClip } from 'react-icons/ai'

const Content = () => (
  <div className="flex justify-center w-full py-6">
    <AiOutlinePaperClip className="h-12 w-7 pr-1 flex-shrink-0" aria-hidden="true" />
    <input type="file" accept="application/JSON" className="file-input file-input-bordered w-full max-w-xs" />
    <div className="ml-4 mt-2">
      <div className="badge badge-outline">2.4mb</div>
    </div>
  </div>
);

const HumburgerMenu = () => {
  const modalId = 'upload-file';

  const handleUploadFile = () => {
    console.log("Upload file");
  };
  return (
    <div className="flex-none">
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <Content />
          <div className="modal-action">
            <label htmlFor={modalId} className="btn btn-outline" onClick={handleUploadFile}>Upload</label>
            <label htmlFor={modalId} className="btn btn-neutral">Cancel</label>
          </div>
        </div>
      </div>
      <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
      <label htmlFor={modalId} className="btn modal-button">Upload File</label>
    </div>
  )
};

export default HumburgerMenu;