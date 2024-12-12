import { useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NoteApp from "./components/NoteApp";
import AppProviders from "./Providers/AppProviders";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <AppProviders>
      <div className="note">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />

        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;
