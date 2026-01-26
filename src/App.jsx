import notes from './notes'
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';

function createNote(note) {
  return (
    <Note 
      key={note.key}
      title={note.title} 
      content={note.content}  
    />
  )
}

export default function App() {
  return (
    <>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </>
  )
}
