import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function noteReducer(notes, { type, payload }) {
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

export function NotesProvider({ children }) {
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
