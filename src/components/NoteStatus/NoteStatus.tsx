import { useNotes } from "../../contexts/NotesCotext";
import Message from "../Message";
import noteStatusStyles from "./noteStatus.module.css";

function NoteStatus() {
  const notes = useNotes();

  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNote = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <h3 className={noteStatusStyles.emptyNoteStatus}>
          ❗ No Notes has already been added .
        </h3>
      </Message>
    );

  return (
    <ul className={noteStatusStyles.noteStatus}>
      <li className={noteStatusStyles.noteTag}>
        <span className={noteStatusStyles.text}>All</span>
        <span className={noteStatusStyles.number}>{allNotes}</span>
      </li>
      <li className={noteStatusStyles.noteTag}>
        <span className={noteStatusStyles.text}>Completed</span>
        <span className={noteStatusStyles.number}>{completedNotes}</span>
      </li>
      <li className={noteStatusStyles.noteTag}>
        <span className={noteStatusStyles.text}>Open</span>
        <span className={noteStatusStyles.number}>{unCompletedNote}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
