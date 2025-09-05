import { useNotes } from "../../contexts/NotesCotext";
import type { SortByType } from "../../types/SortByType";
import noteHeaderStyles from "./noteHeader.module.css";

type NoteHeaderProps = {
  sortBy: SortByType;
  onSort: React.Dispatch<React.SetStateAction<SortByType>>;
};

function NoteHeader({ sortBy, onSort }: NoteHeaderProps) {
  const notes = useNotes();
  return (
    <div className={noteHeaderStyles.noteHeader}>
      <h1 className={noteHeaderStyles.noteHeading}>
        My Notes ({notes?.length})
      </h1>

      <select
        className={noteHeaderStyles.noteSort}
        value={sortBy}
        onChange={(e) => onSort(e.target.value as SortByType)}
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
