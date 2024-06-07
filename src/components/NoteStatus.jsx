import Message from "./Message";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNote = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <h3 className="empty-note-status-heading">
          ❗ No Notes has already been added .
        </h3>
      </Message>
    );

  return (
    <ul className="note__status">
      <li className="note-tag">
        <span className="text">All</span>
        <span className="number">{allNotes}</span>
      </li>
      <li className="note-tag">
        <span className="text">Completed</span>
        <span className="number">{completedNotes}</span>
      </li>
      <li className="note-tag">
        <span className="text">Open</span>
        <span className="number">{unCompletedNote}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
