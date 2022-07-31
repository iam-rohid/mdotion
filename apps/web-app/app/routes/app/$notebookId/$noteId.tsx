import { useParams } from "@remix-run/react";

const Note = () => {
  const params = useParams();
  return <div>Note: {params.noteId}</div>;
};

export default Note;
