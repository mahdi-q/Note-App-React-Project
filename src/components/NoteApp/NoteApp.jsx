import NoteForm from "../NoteForm/NoteForm";
import NoteList from "../NoteList/NoteList";
import NoteStatus from "../NoteStatus/NoteStatus";
import noteAppStyles from "./noteApp.module.css";

function NoteApp({ sortBy }) {
  return (
    <div className={noteAppStyles.noteBody}>
      <NoteForm />

      <div className={noteAppStyles.noteContainer}>
        <NoteStatus />

        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}
export default NoteApp;
