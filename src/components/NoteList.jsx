import { useNotes, useNotesDispatch } from "../contexts/NotesCotext";

function NoteList({ sortBy }) {
  const notes = useNotes();

  let sortedNotes = notes;

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <ul className="note__list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();

  return (
    <li
      data-testid="note item"
      className={`note__item ${note.completed ? "completed" : ""}`}
    >
      <div className="note-item__content">
        <div className="note-item__info">
          <span className="title">{note.title}</span>
          <span className="desc">{note.description}</span>
        </div>

        <div className="note-item__btns">
          <button
            data-testid="remove"
            onClick={() => dispatch({ type: "delete", payload: note.id })}
            className="btn remove"
          >
            ❌
          </button>
          <input
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "completed", payload: noteId });
            }}
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            className="check"
          ></input>
        </div>
      </div>

      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </li>
  );
}
