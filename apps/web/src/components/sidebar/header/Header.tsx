import { MdCreateNewFolder } from "react-icons/md";

const AppSideBarHeader = () => {
  return (
    <div className="header">
      <h3>Notebooks</h3>
      <ul role="list" className="tools-list">
        <li>
          <button>
            <MdCreateNewFolder />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AppSideBarHeader;
