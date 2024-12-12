import { useNotes } from "../../contexts/NotesCotext";
import noteHeaderStyles from "./noteHeader.module.css";

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className={noteHeaderStyles.noteHeader}>
      <h1 className={noteHeaderStyles.noteHeading}>
        My Notes ({notes.length})
      </h1>

      <select
        className={noteHeaderStyles.noteSort}
        value={sortBy}
        onChange={onSort}
      >
        <option value="latest" className={noteHeaderStyles.sortOption}>
          sort based on latest notes
        </option>

        <option value="earliest" className={noteHeaderStyles.sortOption}>
          sort based on earliest notes
        </option>

        <option value="completed" className={noteHeaderStyles.sortOption}>
          sort based on completed notes
        </option>
      </select>
    </div>
  );
}

export default NoteHeader;
