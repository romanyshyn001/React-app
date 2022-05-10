import { usersAPI } from "../components/api/api"
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initiateState = {
    posts:[
        {id:1, message:'Hi', likesCount:12},
        {id:2, message:'How is going?', likesCount:12},
        {id:3, message:'What the plan', likesCount:15},
        {id:4, message:'Bingo', likesCount:16},
        {id:5, message:'Great Job!', likesCount:2}
    ],
    newPostText:'',
    profile: null
}

const profileReducer = (state = initiateState, action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id:6,
                message: state.newPostText,
                likesCount:1
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
                return stateCopy
        }
        case UPDATE_NEW_POST_TEXT:{ 
            let stateCopy = {...state}
            stateCopy.newPostText = action.updatedNewText
                return stateCopy
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default: 
                return state
        }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, updatedNewText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
         .then(response => {
            dispatch(setUserProfile(response.data))
         }
      )
}
export default profileReducer;