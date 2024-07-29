import { useNotes } from "../contexts/NotesCotext";

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note__header">
      <h1 className="note-heading">My Notes ({notes.length})</h1>

      <select className="note-sort" value={sortBy} onChange={onSort}>
        <option value="latest" className="sort__option">
          sort based on latest notes
        </option>
        <option value="earliest" className="sort__option">
          sort based on earliest notes
        </option>
        <option value="completed" className="sort__option">
          sort based on completed notes
        </option>
      </select>
    </div>
  );
}

export default NoteHeader;
