function NoteList({ notes, sortBy }) {
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
        <NoteItem key={note.id} />
      ))}
    </ul>
  );
}

export default NoteList;
