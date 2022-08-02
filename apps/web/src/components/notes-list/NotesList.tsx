import { createNoteAsync, getNotesByNotebookIdAsync } from "@/api/noteApi";
import { getNotebookByIdAsync } from "@/api/notebookApi";
import { Link, useMatch } from "@tanstack/react-location";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import Header from "./header/Header";
import moment from "moment";

const NotesList = () => {
  const {
    params: { notebookId },
  } = useMatch();
  const [isFolded, setIsFolded] = useState(false);
  const queryClient = useQueryClient();
  const notebookQuery = useQuery(["notebook", notebookId], ({ queryKey }) =>
    getNotebookByIdAsync(queryKey[1])
  );
  const notesQuery = useQuery(["notes", notebookId], ({ queryKey }) =>
    getNotesByNotebookIdAsync(queryKey[1])
  );
  const title = useMemo(
    () => notebookQuery.data?.title || "Unknown",
    [notebookQuery.data]
  );
  const createNoteMutation = useMutation(["create-note"], createNoteAsync);

  const handleCreateNoteClick = useCallback(() => {
    createNoteMutation.mutate(
      {
        notebookId,
      },
      {
        onSettled: () => {
          queryClient.refetchQueries(["notes", notebookId]);
        },
      }
    );
  }, [notebookId]);

  if (notebookQuery.isLoading || notesQuery.isLoading) {
    return null;
  }

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
    <div className="sidebar">
      <Header
        title={title}
        onCreateNoteClick={handleCreateNoteClick}
        onTitleClick={() => setIsFolded(true)}
      />
      <ul className="notes-list">
        {(notesQuery.data ?? []).map((note) => (
          <li key={note.id}>
            <Link to={note.id}>
              <div>
                <p>{note.title}</p>
                <p>
                  <b>{moment(note.updatedAt).format("M/D/YY")}</b>{" "}
                  <span>
                    {note.body ? note.body.slice(0, 50) : "No aditional text."}
                  </span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
