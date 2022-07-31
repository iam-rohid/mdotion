import { Outlet, useParams } from "@remix-run/react";

const Notebook = () => {
  const params = useParams();
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-80 border-r border-gray-100 dark:border-gray-800">
        Notebook: {params.notebookId}
      </div>
      <div className="absolute left-80 top-0 right-0 bottom-0">
        <Outlet />
      </div>
    </>
  );
};

export default Notebook;
