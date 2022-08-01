import { Link } from "@tanstack/react-location";
import { MdAdd, MdNotifications, MdPerson, MdSearch } from "react-icons/md";

const AppBar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <h3>Mdotion</h3>
      </Link>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <MdSearch />
      </div>
      <ul className="tools-list">
        <li>
          <button>
            <MdAdd />
          </button>
        </li>
        <li>
          <button>
            <MdNotifications />
          </button>
        </li>
        <li>
          <button>
            <MdPerson />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
