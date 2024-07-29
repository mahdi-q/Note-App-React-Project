import { useState } from "react";
import { useNotesDispatch } from "../contexts/NotesCotext";

function NoteForm() {
  const dispatch = useNotesDispatch();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="note__form">
      <h2 className="note-form__heading">Add New Note</h2>

      <form onSubmit={handleSubmit} className="note-form__body">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="note-title"
          placeholder="Note Title ..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="note-desc"
          placeholder="Note Description ..."
        />
        <button type="submit" className="btn note-btn">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
