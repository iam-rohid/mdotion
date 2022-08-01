import { MdMoreVert, MdVisibility } from "react-icons/md";

const Note = () => {
  return (
    <div id="note">
      <div className="header">
        <h3>My First Note</h3>

        <ul className="tools-list">
          <li>
            <button>
              <MdVisibility />
            </button>
          </li>
          <li>
            <button>
              <MdMoreVert />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Note;
