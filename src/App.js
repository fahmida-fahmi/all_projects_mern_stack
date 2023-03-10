// import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';
// import NoteForm from './componenets/NoteForm';
// import React, { useState } from 'react'
// import NoteTakin from './componenets/NoteTaken';

const initialValue = {
    note: [],
    noteTitle: '',
    edit: false,
    editTitle: null
}

const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TITLE':{
            return {
            ...state,
            noteTitle:action.payload.title
            }

        }

        case 'CREATE_NOTE':{
            const add_note = {
                id: Date.now() + '',
                title: action.payload.title

            }
            return {
                ...state,
                note : [...state.note, add_note],
                noteTitle:''
            }
        }

        case 'UPDATE_NOTE':{
            return {
                
                ...state,
                note : state.note.map(item =>{
                    if(item.id===state.editTitle.id){
                        item.title = action.payload.title
                    }
                    return item
                }),
                edit: false,
                editTitle: null,
                noteTitle: ''

                
            }
        }
        case 'EDIT_NOTE':{
            const edit_note = state.note.find(item =>
                item.id === action.payload.id
            )
            return {
                ...state,
                edit : true,
                noteTitle:edit_note.title,
                editTitle : edit_note 
            }
        }
        case 'REMOVE_NOTE':{
            const remove_note = state.note.filter(item => 
                item.id!==action.payload.id
                )

            return{
                ...state,
                note: remove_note
            }
        }
        default:{
            return state
        }
    }
}
function App() {

    const [state, dispatchNote] = useReducer(reducerFunc, initialValue)
    // const [noteTitle, dispatchNoteTitle] = useReducer(reducerFunc, '')

    return (
        <div className="App">
            <h1>Note Taking App</h1>
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
            <div>
                <ul>
                    {state.note.map(item =>
                        <li>
                            <span>
                                {item.title}
                            </span>
                            <button onClick={() => dispatchNote({ type: 'EDIT_NOTE', payload: {id:item.id}})}>Edit</button>
                            <button onClick={() => dispatchNote({ type: 'REMOVE_NOTE', payload: {id:item.id}})}>Remove</button>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default App;
