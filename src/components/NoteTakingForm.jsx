import React, { useContext } from 'react'
import { NoteContext } from '../Context/Context'

const NoteTakingForm = () => {
    const {state,dispatchNote} = useContext(NoteContext)
  return (
    <div>
          <form onSubmit={(e) => {
                e.preventDefault()
                state.edit? 
                dispatchNote({ type:'UPDATE_NOTE', payload:{title: state.noteTitle}})
                :
                dispatchNote({type:'CREATE_NOTE', payload:{title:state.noteTitle}})}}>
                <input type="text" value={state.noteTitle} 
                onChange={(e) => dispatchNote({type:'CHANGE_TITLE',payload:{title:e.target.value}})} />
                <button>{state.edit ? 'Update Note' : 'Create Note'}</button>
            </form>
    </div>
  )
}

export default NoteTakingForm