import { useState } from 'react';
import '../styles/CreateNote.css'

export default function CreateArea({ insertNote }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote(prevNote => ({ ...prevNote, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    insertNote(note.title, note.content);
    setNote({ title: "", content: "" })
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
