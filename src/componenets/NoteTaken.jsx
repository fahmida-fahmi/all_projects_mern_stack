import React from 'react'

const NoteTaken = () => {
  const reducerFunc = (currentSate,action)=>{
    switch (action.type){
        case 'increase_button': 
            return currentSate + action.payload
        case 'decrease_button': 
            return currentSate - action.payload
        default : 
            return currentSate 
    }
}
  return (
    <div>NoteTaken</div>
  )
}

export default NoteTaken