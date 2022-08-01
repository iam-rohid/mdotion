import { Link } from "@tanstack/react-location";
import "./AppNavBar.scss";

const AppBar = () => {
  return (
    <div className="app-nav-bar">
      <div className="logo-wrapper">
        <Link to="/" className="logo">
          <p>Mdotion</p>
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
