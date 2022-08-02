import { Notebook } from "@/models/notebook";
import { atom } from "jotai";

export const notebooksAtom = atom<Notebook[]>([]);
