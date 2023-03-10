// import { useState } from 'react'

const NoteForm = (props) => {
    const createHandler = (e) => {
        e.preventDefault()
        const add_note = {
            id: Date.now() + '',
            title: props.noteTitle
        }
        props.setNote([...props.note, add_note])
        props.setNoteTitle('')
    }

    const editHandler = (editId) => {
        const edit_note = props.note.find(item => item.id === editId)
        // setNote()
        props.setEdit(true)   
        props.setEditTitle(edit_note)
        props.setNoteTitle(edit_note.title)
    }

    const removeHandler = (removeId) => {
        const remove_note = props.note.filter(item => item.id !== removeId)
        props.setNote(remove_note)

    }
    const updateHandler = (e) => {
        e.preventDefault()
        const updateNote = props.note.map(item => {
            if (item.id === props.editTitle.id) {
                item.title = props.noteTitle
            }
            return item
        })

        props.setNote(updateNote)
        props.setNoteTitle('')
        props.setEdit(false)
        props.setEditTitle(null)
    }


    return (
        <div className="form">
            <form onSubmit={(e) => { props.edit ? updateHandler(e) : createHandler(e) }}>
                <input type="text" value={props.noteTitle} onChange={(e) => props.setNoteTitle(e.target.value)} />
                <button type='submit'>{props.edit ? "Update Note" : "Create Note"}</button>
            </form>
            <div className="note-list">
                <ul>
                    {props.note.map(item => (
                        <li>
                            <span>
                                {/* {item.id} */}
                                {item.title}
                            </span>
                            <button onClick={() => editHandler(item.id)}>Edit</button>
                            <button onClick={() => removeHandler(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NoteForm