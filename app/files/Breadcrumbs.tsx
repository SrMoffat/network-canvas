import { AiOutlinePaperClip, AiOutlineHome } from 'react-icons/ai';

const Breadcrumbs = () =>
  <div className="text-sm breadcrumbs">
    <ul>
      <li>
        <a>
          <AiOutlineHome size="25" className="pr-2" />
          Home
        </a>
      </li>
      <li>
        <a>
          <AiOutlinePaperClip size="25" className="pr-2" />
          Files
        </a>
      </li>
      <li />
    </ul>
  </div>
;

export default Breadcrumbs;