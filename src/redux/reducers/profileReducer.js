const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'

let initiateState = {
    posts:[
        {id:1, message:'Hi', likesCount:12},
        {id:2, message:'How is going?', likesCount:12},
        {id:3, message:'What the plan', likesCount:15},
        {id:4, message:'Bingo', likesCount:16},
        {id:5, message:'Great Job!', likesCount:2}
    ],
    newPostText:'Hello Warrior!'
}

const profileReducer = (state = initiateState, action) => {
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id:6,
                message: state.newPostText,
                likesCount:1
            }
        // let stateCopy = {...state}
        //     stateCopy.posts = [...state.posts]
            state.posts.push(newPost)
            state.newPostText = ''
            
                return state
        //блочна область видимисті, бо два рази обявил stateCopy
        case UPDATE_NEW_POST_TEXT:
        // let stateCopy = {...state}; 
            state.newPostText = action.updatedNewText
                return state
        
        default: 
                return state
        }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, updatedNewText: text})

export default profileReducer;