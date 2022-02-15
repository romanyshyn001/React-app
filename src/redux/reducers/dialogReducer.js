const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT'
const ADD_DIALOG_POST = 'ADD-DIALOG-POST'

let initialState = {
    dialogsData:[
        {id:1, name:'Roman'},
        {id:2, name:'Victor'},
        {id:3, name:'Vasya'},
        {id:4, name:'Ivan'},
        {id:5, name:'Sergiy'}
    ],
    messageData: [
        {id:1, message:'Hi'},
        {id:2, message:'How is going?'},
        {id:3, message:'What the plan'},
        {id:4, message:'Bingo'},
        {id:5, message:'Great Job!'}
    ],
    newDialogPost: '21s'  
}

const dialogReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DIALOG_POST:
            let body = state.newDialogPost
                state.messageData.push({id:6, message:body})
                state.newDialogPost = ''
            return state
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogPost = action.updatedDialogText
            return state
        default:
            return state
    }
}

export const addDialogTextCreator = () => ({type:ADD_DIALOG_POST})
export const updateDialogTextCreator = (dialog) => ({type:UPDATE_NEW_DIALOG_TEXT, updatedDialogText: dialog})

export default dialogReducer;