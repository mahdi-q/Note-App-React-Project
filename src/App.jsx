import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  return (
    <div className="note">
      <NoteHeader />

      <div className="note__body">
        <NoteForm />

        <div className="note__container">
          <NoteStatus />

          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default App;
