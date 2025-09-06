import { useNotes, useNotesDispatch } from "../../contexts/NotesCotext";
import noteListStyles from "./noteList.module.css";
import type { SortByType } from "../../types/SortByType";

function NoteList({ sortBy }: { sortBy: SortByType }) {
  const notes = useNotes();

  let sortedNotes = notes;

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) =>
        new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
    );
  else if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) =>
        new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate()
    );
  else if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <ul className={noteListStyles.noteList}>
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;

// Note Item component

import noteItemStyles from "./noteItem.module.css";
import type { NoteType } from "../../types/NoteType";

function NoteItem({ note }: { note: NoteType }) {
  const dispatch = useNotesDispatch();

  return (
    <li
      data-testid="note item"
      className={`
          ${noteItemStyles.noteItem} 
          ${note.completed ? noteItemStyles.completed : ""}
        `}
    >
      <div className={noteItemStyles.noteItemContent}>
        <div className={noteItemStyles.noteItemInfo}>
          <span className={noteItemStyles.title}>{note.title}</span>
          <span className={noteItemStyles.desc}>{note.description}</span>
        </div>

        <div className={noteItemStyles.noteItemBtns}>
          <button
            data-testid="remove"
            onClick={() => dispatch({ type: "delete", payload: note.id })}
            className={`btn ${noteItemStyles.remove}`}
          >
            ❌
          </button>
          <input
            className={noteItemStyles.check}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "completed", payload: noteId });
            }}
            type="checkbox"
            name={String(note.id)}
            id={String(note.id)}
            value={note.id}
            checked={note.completed}
          ></input>
        </div>
      </div>

      <div className={noteItemStyles.noteItemFooter}>
        {new Date(note.createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </li>
  );
}
