import AppSideBarHeader from "./header/Header";
import { useQuery } from "@tanstack/react-query";
import { getAllNotebooksAsync } from "@/api/notebookApi";
import { Link } from "@tanstack/react-location";
import { MdMoreVert } from "react-icons/md";

const SideBar = () => {
  const query = useQuery(["notebooks"], getAllNotebooksAsync, {
    onSuccess(data) {
      console.log(data);
    },
  });

  return (
    <div className="sidebar">
      <AppSideBarHeader />
      <ul className="notebook-list">
        {(query.data ?? []).map((notebook) => (
          <li key={notebook.id}>
            <Link to={`${notebook.id}`}>{notebook.title}</Link>
            <button className="options">
              <MdMoreVert />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
