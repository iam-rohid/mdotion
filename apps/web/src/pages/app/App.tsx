import AppBar from "@/components/navbar/NavBar";
import SideBar from "@/components/sidebar/SideBar";
import { Outlet } from "@tanstack/react-location";

const App = () => {
  return (
    <div id="app">
      <AppBar />
      <SideBar />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
