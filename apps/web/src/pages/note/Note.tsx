import { getNoteById, updateNoteAsync } from "@/api/noteApi";
import DocumentEditor from "@/components/document-editor/DocumentEditor";
import DocumentPreview from "@/components/document-preview/DocumentPreview";
import { useMatch } from "@tanstack/react-location";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import {
  MdEdit,
  MdMoreVert,
  MdSplitscreen,
  MdVisibility,
} from "react-icons/md";

type DocView = "editor" | "preview" | "side-by-side";

const Note = () => {
  const {
    params: { noteId },
  } = useMatch();
  const [docView, setDocView] = useState<DocView>("editor");
  const [title, setTitle] = useState("");
  const [doc, setDoc] = useState("");
  const noteQuery = useQuery(["note", noteId], ({ queryKey }) =>
    getNoteById(queryKey[1])
  );

  const handleTitleChange = useCallback(
    (newTitle: string) => {
      setTitle(newTitle);
      updateNoteAsync({ title: newTitle }, noteId);
    },
    [noteQuery.data, noteId]
  );

  const handleDocChange = useCallback(
    (newDoc: string) => {
      setDoc(newDoc);
      updateNoteAsync({ body: newDoc }, noteId);
    },
    [noteQuery.data, noteId]
  );

  useEffect(() => {
    setTitle(noteQuery.data?.title ?? "Unknown");
    setDoc(noteQuery.data?.body ?? "");
  }, [noteId, noteQuery.data]);

  if (!noteQuery.data || noteQuery.isLoading) return null;

  return (
    <div id="note">
      <Header
        title={title}
        onTitleChange={handleTitleChange}
        onViewToggle={() =>
          setDocView(
            docView === "editor"
              ? "preview"
              : docView === "preview"
              ? "side-by-side"
              : "editor"
          )
        }
        docView={docView}
      />
      <div className={`note-content ${docView}`}>
        <DocumentEditor
          initValue={noteQuery.data.body ?? ""}
          onChange={handleDocChange}
        />
        <DocumentPreview doc={doc} />
      </div>
    </div>
  );
};

export default Note;

const Header = ({
  title,
  onTitleChange,
  onViewToggle,
  docView,
}: {
  title: string;
  onTitleChange: (value: string) => void;
  docView: DocView;
  onViewToggle: () => void;
}) => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);

  const handleBlur = useCallback(() => {
    setIsTitleEditing(false);
  }, [title]);

  return (
    <div className="header">
      {isTitleEditing ? (
        <input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          autoFocus
          className="title-input"
          onBlur={handleBlur}
          onKeyDown={(e) => {
            console.log(e);
            switch (e.code) {
              case "Enter":
                setIsTitleEditing(false);
              case "Escape":
                setIsTitleEditing(false);
            }
          }}
        />
      ) : (
        <h3 onClick={() => setIsTitleEditing(true)}>{title}</h3>
      )}
      <ul className="tools-list">
        <li>
          <button onClick={onViewToggle}>
            {docView === "preview" ? (
              <MdVisibility />
            ) : docView === "side-by-side" ? (
              <MdSplitscreen
                style={{
                  transform: `rotateZ(90deg)`,
                }}
              />
            ) : (
              <MdEdit />
            )}
          </button>
        </li>
        <li>
          <button>
            <MdMoreVert />
          </button>
        </li>
      </ul>
    </div>
  );
};
