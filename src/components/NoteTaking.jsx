import React, { useContext } from 'react'
import { NoteContext } from '../context/Note'

const NoteTaking = () => {

  const noteData = useContext(NoteContext)
  return (
    <div>
      <h2>
        Note Taking App
      </h2>

      <form
        onSubmit={(e) => {
          noteData.edit ? noteData.updateHandler(e) : noteData.createHandler(e)
        }}>
        <input
          type="text"
          value={noteData.noteTitle}
          onChange={(e) => noteData.setNoteTitle(e.target.value)}
        />
        <button type='submit'>
          {noteData.edit ? "Update Note" : "Add Note"}
        </button>
      </form>
      <div className="note-list">
        <ul>
          {
            noteData.notes.map(item=>(
              <li>
                <span>
                {item.title}
                </span>
                <button onClick={()=>noteData.editHandler(item.id)}>Edit</button>
                <button onClick={()=>noteData.removeHandler(item.id)}>Remove</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default NoteTaking