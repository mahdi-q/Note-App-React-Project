import { useReducer, useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

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

function App() {
  const [notes, dispatch] = useReducer(noteReducer, []);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleCompletedNote = (e) => {
    const noteId = Number(e.target.value);

    dispatch({ type: "completed", payload: noteId });
  };

  return (
    <div className="note">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />

      <div className="note__body">
        <NoteForm onAddNote={handleAddNote} />

        <div className="note__container">
          <NoteStatus notes={notes} />

          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDeleteNote={handleDeleteNote}
            onCompletedNote={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
