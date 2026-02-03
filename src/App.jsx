import Header from './components/Header';
import CreateArea from './components/CreateNote';
import Note from './components/Note';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

export default function App() {
  // Initialize notes from localStorage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
