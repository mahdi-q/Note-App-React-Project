import { useState } from "react";
import "./App.css";

import NoteApp from "./components/NoteApp/NoteApp";
import AppProviders from "./Providers/AppProviders";
import NoteHeader from "./components/NoteHeader/NoteHeader";

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
