import React, { createContext, useState } from 'react'

export const NoteContext = createContext()

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([])
    const [noteTitle, setNoteTitle] = useState('')
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(null)

    const createHandler = (e)=>{
        e.preventDefault()
        if(!noteTitle){
            return alert('Please provide a valid title.')
        }

        const add_note = {
            id: Date.now()+'',
            title: noteTitle
        }
        setNotes([...notes, add_note])
        setNoteTitle('')
    }

    const editHandler =(note_id)=>{
        const edit_note = notes.find(item => item.id === note_id)
        setEdit(true)
        setEditTitle(edit_note)
        setNoteTitle(edit_note.title)
    }
    const removeHandler = (note_id)=>{
        const remove_note = notes.filter(item => item.id !== note_id)
        setNotes(remove_note)
    }

    const updateHandler = (e)=>{
        e.preventDefault()
        if(!noteTitle){
            alert('Please enter a valid title.')
        }

        const update_note = notes.map(item=>{
            if(item.id === editTitle.id){
                item.title = noteTitle
            }
            return item
        })
        setNotes(update_note)
        setNoteTitle('')
        setEdit(false)
        setEditTitle(null)
    }

    const noteCtx = {notes,setNotes, noteTitle, setNoteTitle, edit, setEdit,editTitle,setEditTitle,createHandler,editHandler,removeHandler,updateHandler}
  return (
    <NoteContext.Provider value ={noteCtx}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteProvider