import { Outlet } from "@tanstack/react-location";

const Notes = () => {
  return (
    <div>
      Notes
      <Outlet />
    </div>
  );
};

export default Notes;
