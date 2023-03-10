import React from 'react'
import NoteForm from './NoteForm'
import { useState } from 'react'



const NoteTaken = (props) => {
  const [note, setNote] = useState([])
  const [noteTitle, setNoteTitle] = useState('')
  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(null)
  return (
    <div className='note-taken'>

      <NoteForm
        note={note}
        setNote={setNote}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        edit={edit}
        setEdit={setEdit}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
      />
    </div>

  );
}

export default NoteTaken;