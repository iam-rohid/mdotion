import { MdNoteAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <h3>Notes</h3>
      <ul role="list" className="tools-list">
        <li>
          <button>
            <MdNoteAdd />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
