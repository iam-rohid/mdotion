import AppBar from "@/components/app-nav-bar/AppNavBar";
import AppSideBar from "@/components/app-side-bar/AppSideBar";
import { Outlet } from "@tanstack/react-location";
import "./App.scss";

const App = () => {
  return (
    <div className="app-wrapper">
      <AppBar />
      <AppSideBar />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
