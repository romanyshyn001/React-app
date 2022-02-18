import dialogReducer from "./reducers/dialogReducer"
import profileReducer from "./reducers/profileReducer"

let store = {
    _state: {
        profilePage: {
            posts:[
                {id:1, message:'Hi', likesCount:12},
                {id:2, message:'How is going?', likesCount:12},
                {id:3, message:'What the plan', likesCount:15},
                {id:4, message:'Bingo', likesCount:16},
                {id:5, message:'Great Job!', likesCount:2}
            ],
            newPostText:'Hello Warrior!'
        },
        dialogPage:{
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
      },
    _callSubscriber(){
        console.log('state changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state) 
        
    }
}

export default store;

window.store = store