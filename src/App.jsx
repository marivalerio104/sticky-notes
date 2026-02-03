import myNotes from './notes'
import Header from './components/Header';
import CreateArea from './components/CreateNote';
import Note from './components/Note';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [notes, setNotes] = useState(myNotes);

  function handleAddNote(note) {
    setNotes(prevNotes => [...prevNotes, note])
  }

  function handleDeleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index != id))
  }

  return (
    <>
      <Header />
      <CreateArea handleAddNote={handleAddNote} />
      <div>{notes.map((note, index) =>
        <Note key={index} id={index} handleDeleteNote={handleDeleteNote}
          title={note.title} content={note.content}
        />
      )}</div>
      <Footer />
    </>
  )
}
