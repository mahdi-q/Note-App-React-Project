/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useReducer,
  type ActionDispatch,
  type ReactNode,
} from "react";
import type { NoteType } from "../types/NoteType";

type AddAction = { type: "add"; payload: NoteType };
type DeleteAction = { type: "delete"; payload: number };
type CompletedAction = { type: "completed"; payload: number };
type Action = AddAction | DeleteAction | CompletedAction;

type NotesContextType = NoteType[];
type NotesDispatchContextType = ActionDispatch<[Action]>;

const NotesContext = createContext<NotesContextType>({} as NotesContextType);
const NotesDispatchContext = createContext<NotesDispatchContextType>(
  {} as NotesDispatchContextType
);

function noteReducer(notes: NoteType[], { type, payload }: Action) {
  switch (type) {
    case "add": {
      return [...notes, payload];
    }

    case "delete": {
      return notes.filter((note) => note.id !== payload);
    }

    case "completed": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }

    default:
      throw new Error(`Unknown action ${type}`);
  }
}

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, dispatch] = useReducer(noteReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined)
    throw new Error("NotesContext was used outside of NotesProvider");
  return context;
};

export const useNotesDispatch = () => {
  const context = useContext(NotesDispatchContext);
  if (context === undefined)
    throw new Error("NotesDispatchContext was used outside of NotesProvider");
  return context;
};
