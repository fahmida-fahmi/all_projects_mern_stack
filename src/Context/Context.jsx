import React, { createContext } from 'react'
import { useReducer } from 'react'
import { noteReducer } from '../Reducer/Reducer'

export const NoteContext = createContext()
const initialValue = {
    note: [],
    noteTitle: '',
    edit: false,
    editTitle: null
}
const  NoteProvider = ({ children }) => {
    const [state, dispatchNote] = useReducer(noteReducer, initialValue)
    const reducerValue = {state,dispatchNote}
    return (

        <NoteContext.Provider value={reducerValue}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider