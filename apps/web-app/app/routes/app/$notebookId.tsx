import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import { faker } from "@faker-js/faker";
import { LoaderFunction } from "@remix-run/node";
import { INote } from "app/models/Note";
import classNames from "classnames";
import { MdCreate, MdDescription } from "react-icons/md";
import moment from "moment";

type LoderData = {
  notes: INote[];
};

export const loader: LoaderFunction = async ({
  params,
}): Promise<LoderData> => {
  const { notebookId } = params;
  const notes: INote[] = Array(10)
    .fill(1)
    .map(() => ({
      id: faker.lorem.slug(2),
      title: faker.lorem.sentence(5),
      body: faker.lorem.paragraphs(10, faker.lorem.sentence(5)),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.past().toISOString(),
    }));
  return { notes };
};

const Notebook = () => {
  const { notes } = useLoaderData<LoderData>();
  const { noteId } = useParams();
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-80 border-r border-gray-100 dark:border-gray-800 overflow-y-auto">
        <div className="h-12 sticky top-0 left-0 right-0 border-b border-gray-100 dark:border-gray-800 flex items-center gap-4 px-4 bg-white dark:bg-gray-900 z-10">
          <p className="uppercase text-lg font-bold flex-1 truncate">Notes</p>
          <button className="w-8 h-8 hover:bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-md">
            <MdCreate className="text-xl" />
          </button>
        </div>
        <div>
          {notes.map((note) => (
            <Link key={note.id} to={note.id}>
              <div
                className={classNames("flex px-4 py-2 overflow-hidden gap-2", {
                  "bg-accent-500 text-white dark:text-white":
                    note.id === noteId,
                })}
              >
                <MdDescription className="text-2xl" />
                <div className="flex-1 overflow-hidden">
                  <p className="truncate leading-4 font-medium">{note.title}</p>
                  <p className="truncate text-sm opacity-70 leading-3 mt-2">
                    <b>{moment(note.updatedAt).format("M/D/YY")}</b>{" "}
                    {note.body.slice(0, 50)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute left-80 top-0 right-0 bottom-0">
        <Outlet />
      </div>
    </>
  );
};

export default Notebook;
