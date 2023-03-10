// import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';
// import NoteForm from './componenets/NoteForm';
// import React, { useState } from 'react'
// import NoteTakin from './componenets/NoteTaken';

function App() {
    const reducerFunc = (currentSate, action)=>{
        switch (action.type){
            case 'increase_button': 
                return currentSate + action.payload
            case 'decrease_button': 
                return currentSate - action.payload
            default : 
                return currentSate 
        }
    }
    const [currentSate, dispatch] = useReducer(reducerFunc, 500)

    return (
        <div className="App">
            <h1>Note Taking App</h1>
            <p>This is a counter app which is started from {currentSate}</p>
            {/* <NoteTakin /> */}
            <button onClick={()=>dispatch({type:'increase_button', payload : 1})}>Increase by 1</button>
            <button onClick={()=>dispatch({type:'decrease_button', payload : 1})}>Decrease by 1</button>
            <button onClick={()=>dispatch({type:'decrease_button', payload : 100})}>Decrease by 100</button>
            <button onClick={()=>dispatch({type:'increase_button', payload : 100})}>Increase by 100</button>

        </div>
    );
}

export default App;
