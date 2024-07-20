function NoteList({ notes, onDeleteNote, onCompletedNote, sortBy }) {
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
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onCompletedNote={onCompletedNote}
        />
      ))}
    </ul>
  );
}

export default NoteList;

function NoteItem({ note, onDeleteNote, onCompletedNote }) {
  return (
    <li className={`note__item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__content">
        <div className="note-item__info">
          <span className="title">{note.title}</span>
          <span className="desc">{note.description}</span>
        </div>

        <div className="note-item__btns">
          <button onClick={() => onDeleteNote(note.id)} className="btn remove">
            ❌
          </button>
          <input
            onChange={onCompletedNote}
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
