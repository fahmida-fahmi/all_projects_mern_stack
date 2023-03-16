import React from 'react'
import NoteTakingForm from './NoteTakingForm'
import NoteList from './NoteList'

const AllNoteComponent = () => {
  return (
    <div>
        <h1>Note Taking App</h1>
            <NoteTakingForm/>
            <NoteList/>
    </div>
  )
}

export default AllNoteComponent