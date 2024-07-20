import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompletedNote = (e) => {
    const noteId = Number(e.target.value);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
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
          <NoteStatus notes={notes}/>

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
