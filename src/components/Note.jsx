import '../styles/Note.css'

export default function Note({key, title, content, deleteNote}) {

  return (
    <div className='note'>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={() => deleteNote(key)}>DELETE</button>
    </div>
  )
}
