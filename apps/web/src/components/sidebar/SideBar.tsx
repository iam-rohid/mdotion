import AppSideBarHeader from "./header/Header";
import { useQuery } from "@tanstack/react-query";
import { getAllNotebooksAsync } from "@/api/notebookApi";
import { Link } from "@tanstack/react-location";
import { MdFolder, MdMoreHoriz } from "react-icons/md";
import { useState } from "react";

const SideBar = () => {
  const [isFolded, setIsFolded] = useState(false);
  const [title, setTitle] = useState("Notebooks");
  const query = useQuery(["notebooks"], getAllNotebooksAsync, {
    onSuccess(data) {
      console.log(data);
    },
  });

  if (isFolded) {
    return (
      <div className="sidebar folded">
        <button onClick={() => setIsFolded(false)}>
          <h3>{title}</h3>
        </button>
      </div>
    );
  }

  return (
    <aside className="sidebar">
      <AppSideBarHeader onFold={() => setIsFolded(true)} />
      <ul className="notebook-list">
        {(query.data ?? []).map((notebook) => (
          <li key={notebook.id}>
            <Link to={`${notebook.id}`}>
              <MdFolder />
              <p>{notebook.title}</p>
              <span>2</span>
            </Link>
            <button className="options">
              <MdMoreHoriz />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
