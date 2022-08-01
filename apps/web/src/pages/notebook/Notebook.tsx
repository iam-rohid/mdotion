import NotesListColumn from "@/components/notes-list-column/NotesListColumn";
import { Outlet } from "@tanstack/react-location";
import "./Notebook.scss";

const Notebook = () => {
  return (
    <div className="notebook-wrapper">
      <NotesListColumn />
      <div className="notebook-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Notebook;
