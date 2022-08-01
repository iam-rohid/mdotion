import { faker } from "@faker-js/faker";
import type { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import AppBar from "app/components/AppBar";
import CreateNotebookModal from "app/components/CreateNotebookModal";
import type { INotebook } from "app/models/Notebook";
import classNames from "classnames";
import { useState } from "react";
import { MdCreateNewFolder, MdFolder } from "react-icons/md";

type LoaderData = {
  notebooks: INotebook[];
};

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const notebooks: INotebook[] = Array(10)
    .fill(1)
    .map(() => ({
      id: faker.lorem.slug(2),
      title: faker.lorem.words(2),
    }));
  return { notebooks };
};

const App = () => {
  const { notebooks } = useLoaderData<LoaderData>();
  const { notebookId } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed inset-0 overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 h-14">
        <AppBar />
      </nav>
      <div className="absolute left-0 top-14 bottom-0 w-64 border-r border-gray-100 dark:border-gray-800 overflow-y-auto">
        <div className="h-12 sticky top-0 left-0 right-0 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4 px-4 bg-white dark:bg-gray-900 z-10">
          <p className="uppercase text-lg font-bold flex-1 truncate">
            Notebooks
          </p>
          <button
            className="w-8 h-8 hover:bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-md"
            onClick={() => setIsOpen(true)}
          >
            <MdCreateNewFolder className="text-xl" />
          </button>
          <CreateNotebookModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </div>
        {notebooks.map((notebook) => (
          <Link key={notebook.id} to={`${notebook.id}`}>
            <div
              key={notebook.id}
              className={classNames("px-4 py-2 flex items-center gap-2", {
                "bg-accent-500 text-white dark:text-white":
                  notebookId === notebook.id,
              })}
            >
              <MdFolder className="text-2xl" />
              <div className="flex-1">
                <p className="flex-1 truncate">{notebook.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute left-64 top-14 right-0 bottom-0 bg-white dark:bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
