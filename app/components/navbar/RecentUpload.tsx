import { AiOutlinePaperClip } from 'react-icons/ai';

const RecentUploadContent = () =>
  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dd className="mt-2 text-sm sm:col-span-2 lg:col-span-4 sm:mt-0">
      <ul role="list" className="divide-y rounded-md border">
        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm">
          <div className="flex w-0 flex-1 items-center">
            <AiOutlinePaperClip className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <div className="ml-4 flex min-w-0 flex-1 gap-2">
              <span className="truncate font-medium">socialgraph_data.json</span>
              <span className="flex-shrink-0">2.4mb</span>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a href="#" className="font-medium">
                            Download
            </a>
          </div>
        </li>
      </ul>
    </dd>
  </div>
;

export default RecentUploadContent;