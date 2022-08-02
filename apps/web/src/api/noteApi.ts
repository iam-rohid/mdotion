import { uuid } from "@/libs/uuid";
import { Note } from "@/models/note";

export const getAllNotesAsync = async () => {
  const nData = localStorage.getItem("notes");
  const notes: Note[] = nData ? JSON.parse(nData) : [];
  return notes;
};
export const getNoteById = async (id: string) => {
  const notes = await getAllNotesAsync();
  const note = notes.find((note) => note.id === id);
  if (note) {
    return note;
  } else {
    throw new Error("Note not found!");
  }
};
export const getNotesByNotebookIdAsync = async (notebookId: string) => {
  const notes = await getAllNotesAsync();

  if (notebookId === "all") {
    return notes;
  }

  return notes.filter((note) => note.notebookId === notebookId);
};

export const createNoteAsync = async (
  data: Partial<Note>,
  notebookId?: string
) => {
  const note: Note = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: "Undefiend",
    notebookId,
    ...data,
  };
  const notes = await getAllNotesAsync();
  const newNotesList = [...notes, note];
  localStorage.setItem("notes", JSON.stringify(newNotesList));
  return note;
};

export const updateNoteAsync = async (data: Partial<Note>, noteId: string) => {
  try {
    const note = await getNoteById(noteId);
    const updatedNote: Note = {
      ...note,
      ...data,
    };
    const notes = await getAllNotesAsync();
    const newNotes = notes.map((n) => (n.id === noteId ? updatedNote : n));
    localStorage.setItem("notes", JSON.stringify(newNotes));
    return newNotes;
  } catch (e) {
    throw e;
  }
};
