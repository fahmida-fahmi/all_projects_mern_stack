import React, { useContext } from 'react'
import { NoteContext } from '../Context/Context'

const NoteList = () => {
    const {state,dispatchNote} = useContext(NoteContext)
    return (
        <div>
            <ul>
                {state.note.map(item =>
                    <li>
                        <span>
                            {item.title}
                        </span>
                        <button onClick={() => dispatchNote({ type: 'EDIT_NOTE', payload: { id: item.id } })}>Edit</button>
                        <button onClick={() => dispatchNote({ type: 'REMOVE_NOTE', payload: { id: item.id } })}>Remove</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default NoteList