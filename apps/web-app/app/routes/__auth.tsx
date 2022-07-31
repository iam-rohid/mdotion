import { Link, Outlet } from "@remix-run/react";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-14 border-b border-gray-100 dark:border-gray-800 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-full">
          <Link to="/" className="text-lg font-bold uppercase">
            Mdotion
          </Link>
          <div className="flex-1 flex items-center justify-end gap-4">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
