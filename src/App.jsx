import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import { NotesProvider } from "./contexts/NotesCotext";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <NotesProvider>
      <div className="note">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />

        <div className="note__body">
          <NoteForm />

          <div className="note__container">
            <NoteStatus />

            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
