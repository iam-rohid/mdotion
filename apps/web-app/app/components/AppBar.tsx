import { Link } from "@remix-run/react";

function AppBar() {
  return (
    <div className="w-full h-full bg-gray-900 text-gray-50 px-4 md:px-6 lg:px-8">
      <div className="flex items-center gap-4 h-full">
        <Link to="/app/all" className="text-lg font-bold uppercase">
          Mdotion
        </Link>
      </div>
    </div>
  );
}

export default AppBar;
