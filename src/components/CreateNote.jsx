import { useState } from 'react';
import '../styles/CreateNote.css'

export default function CreateArea({ handleAddNote }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (note.title || note.content) {
      handleAddNote(note);
      setNote({ title: "", content: "" })
    }
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={note.title}
          placeholder="Title"
        />
        <textarea onChange={handleChange} name="content" value={note.content}
          placeholder="Take a note..." rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
