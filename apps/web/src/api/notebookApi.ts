import { uuid } from "@/libs/uuid";
import { Notebook } from "@/models/notebook";

export const getAllNotebooksAsync = async () => {
  const nbData = localStorage.getItem("notebooks");
  const notebooks: Notebook[] = nbData ? JSON.parse(nbData) : [];
  return notebooks;
};

export const createNewNotebookAsync = async (data: Partial<Notebook>) => {
  const notebook: Notebook = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: "Undefiend",
    ...data,
  };
  const notebooks = await getAllNotebooksAsync();
  localStorage.setItem("notebooks", JSON.stringify([...notebooks, notebook]));
  return notebook;
};

export const deleteNotebookAsync = async (id: string) => {
  const notebooks = await getAllNotebooksAsync();
  const newNotebooks = notebooks.filter((notebook) => notebook.id !== id);
  localStorage.setItem("notebooks", JSON.stringify(newNotebooks));
  return newNotebooks;
};

export const updateNotebookAsync = async (
  id: string,
  data: Partial<Notebook>
) => {
  const notebooks = await getAllNotebooksAsync();
  const newNotebooks = notebooks.map((notebook) => {
    if (notebook.id === id) {
      return {
        ...notebook,
        ...data,
        updatedAt: new Date().toDateString(),
      };
    }
    return notebook;
  });
  localStorage.setItem("notebooks", JSON.stringify(newNotebooks));
  return newNotebooks;
};

export const getNotebookByIdAsync = async (id: string): Promise<Notebook> => {
  const notebooks = await getAllNotebooksAsync();
  const notebook = notebooks.find((notebook) => notebook.id === id);
  if (notebook) {
    return notebook;
  } else {
    throw new Error("Notebook not found");
  }
};
