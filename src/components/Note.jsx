import '../styles/Note.css'

export default function Note({ id, title, content, handleDeleteNote }) {
  return (
    <div className='note'>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={() => handleDeleteNote(id)}>DELETE</button>
    </div>
  )
}
