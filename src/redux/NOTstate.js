// import dialogReducer from "./reducers/dialogReducer"
// import profileReducer from "./reducers/profileReducer"

// let store = {
//     _state: {
//         profilePage: {
//             posts:[
//                 {id:1, message:'Hi', likesCount:12},
//                 {id:2, message:'How is going?', likesCount:12},
//                 {id:3, message:'What the plan', likesCount:15},
//                 {id:4, message:'Bingo', likesCount:16},
//                 {id:5, message:'Great Job!', likesCount:2}
//             ],
//             newPostText:'Hello Warriors!'
//         },
//         dialogPage:{
//             dialogsData:[
//                 {id:1, name:'Roman'},
//                 {id:2, name:'Victor'},
//                 {id:3, name:'Vasya'},
//                 {id:4, name:'Ivan'},
//                 {id:5, name:'Sergiy'}
//             ],
//             messageData: [
//                 {id:1, message:'Hi'},
//                 {id:2, message:'How is going?'},
//                 {id:3, message:'What the plan'},
//                 {id:4, message:'Bingo'},
//                 {id:5, message:'Great Job!'}
//             ],
//             newDialogPost: ''  
//         },
        
//       },
//     _callSubscriber(){
//         console.log('state changed')
//     },

//     getState(){
//         return store._state
//     },
//     subscribe(observer){
//         store._callSubscriber = observer
//     },

//     dispatch(action){
//         store._state.profilePage = profileReducer(store.getState().profilePage, action)
//         store._state.dialogPage = dialogReducer(store.getState().dialogPage, action)
//         store._callSubscriber() 
        
//     }
// }

// export default store;

// window.store = store