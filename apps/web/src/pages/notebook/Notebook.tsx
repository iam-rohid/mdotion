import NotesList from "@/components/notes-list/NotesList";
import { Outlet } from "@tanstack/react-location";

const Notebook = () => {
  return (
    <div id="notebook">
      <NotesList />
      <div className="notebook-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Notebook;
