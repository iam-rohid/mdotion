import { getNoteById, updateNoteAsync } from "@/api/noteApi";
import DocumentEditor from "@/components/document-editor/DocumentEditor";
import DocumentHeader from "@/components/document-header/DocumentHeader";
import DocumentPreview from "@/components/document-preview/DocumentPreview";
import { DocView } from "@/types";
import { useMatch } from "@tanstack/react-location";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

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
      <DocumentHeader
        title={title}
        onTitleChange={handleTitleChange}
        docView={docView}
        onDocViewChange={setDocView}
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
