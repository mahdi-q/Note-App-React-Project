/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useReducer,
  type ActionDispatch,
  type ReactNode,
} from "react";

type Note = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
};

type AddAction = { type: "add"; payload: Note };
type DeleteAction = { type: "delete"; payload: string };
type CompletedAction = { type: "completed"; payload: string };
type Action = AddAction | DeleteAction | CompletedAction;

type NotesContextType = Note[];
type NotesDispatchContextType = ActionDispatch<[Action]>;

const NotesContext = createContext<NotesContextType>({} as NotesContextType);
const NotesDispatchContext = createContext<NotesDispatchContextType>(
  {} as NotesDispatchContextType
);

function noteReducer(notes: Note[], { type, payload }: Action) {
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
