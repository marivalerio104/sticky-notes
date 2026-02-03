import myNotes from './notes'
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [notes, setNotes] = useState(myNotes);

  function insertNote(title, content) {
    setNotes(prevNotes => {
      const lastId = prevNotes.length ? prevNotes[prevNotes.length - 1].id : 0;
      return [...prevNotes, {
        id: lastId + 1,
        title: title,
        content: content
      }]
    })
  }

  return (
    <>
      <Header />
      <CreateNote insertNote={insertNote} />
      <div>{notes.map(note =>
        <Note
          title={note.title} content={note.content}
        />
      )}</div>
      <Footer />
    </>
  )
}
