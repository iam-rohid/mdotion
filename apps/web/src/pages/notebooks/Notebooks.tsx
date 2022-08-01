import AppSideBar from "@/components/app-side-bar/AppSideBar";
import { Outlet } from "@tanstack/react-location";
import "./Notebooks.scss";

const Notebooks = () => {
  return (
    <div className="Notebooks">
      <AppSideBar />
      <Outlet />
    </div>
  );
};

export default Notebooks;
