import { useState } from "react";
import "./App.css";

import NoteApp from "./components/NoteApp/NoteApp";
import AppProviders from "./Providers/AppProviders";
import NoteHeader from "./components/NoteHeader/NoteHeader";
import type { SortByType } from "./types/SortByType";

function App() {
  const [sortBy, setSortBy] = useState<SortByType>("latest");

  return (
    <AppProviders>
      <div className="note">
        <NoteHeader sortBy={sortBy} onSort={setSortBy} />

        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;
