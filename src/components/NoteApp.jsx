import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";

function NoteApp({sortBy}) {
  return (
    <div className="note__body">
      <NoteForm />

      <div className="note__container">
        <NoteStatus />

        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}
export default NoteApp;
