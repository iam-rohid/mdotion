import { Outlet } from "@remix-run/react";
import AppBar from "app/components/AppBar";

const App = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 h-14">
        <AppBar />
      </nav>
      <div className="absolute left-0 top-14 bottom-0 w-80 border-r border-gray-100 dark:border-gray-800">
        Notebook List
      </div>
      <div className="absolute left-80 top-14 right-0 bottom-0 bg-white dark:bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
