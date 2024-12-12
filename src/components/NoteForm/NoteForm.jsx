import { useState } from "react";
import { useNotesDispatch } from "../../contexts/NotesCotext";
import noteFormStyles from "./noteForm.module.css";

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
    <div className={noteFormStyles.noteForm}>
      <h2 className={noteFormStyles.noteFormHeading}>Add New Note</h2>

      <form onSubmit={handleSubmit} className={noteFormStyles.noteFormBody}>
        <input
          className={noteFormStyles.noteTitle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note Title ..."
        />
        <input
          className={noteFormStyles.noteDesc}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Note Description ..."
        />
        <button type="submit" className={`btn ${noteFormStyles.noteBtn}`}>
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
