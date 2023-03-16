export const noteReducer = (state, action) => {
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