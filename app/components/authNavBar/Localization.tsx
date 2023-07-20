import { HiChevronDown, HiTranslate } from "react-icons/hi";

const LocalizationDropdown = () => (
    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
      <div className="card-body">
        <span className="font-bold text-lg">8 Items</span>
        <span className="text-info">Subtotal: $999</span>
        <div className="card-actions">
          <button className="btn btn-primary btn-block">View cart</button>
        </div>
      </div>
    </div>
  );

  const LanguageSelector = () => (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="cursor-pointer pr-2 flex items-center btn btn-ghost btn-circle indicator">
        <HiTranslate size="38" />
        <HiChevronDown size="25" />
      </div>
      <LocalizationDropdown />
    </div>
  );

  export default LanguageSelector