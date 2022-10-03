import { profileAPI, usersAPI } from "../components/api/api"
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = ': DELETE_POST'


let initiateState = {
    posts:[
        {id:1, message:'Hi', likesCount:12},
        {id:2, message:'How is going?', likesCount:12},
        {id:3, message:'What the plan', likesCount:15},
        {id:4, message:'Bingo', likesCount:16},
        {id:5, message:'Great Job!', likesCount:2}
    ],
    // newPostText:'',
    profile: null,
    status: "",
}

const profileReducer = (state = initiateState, action) => {
    switch(action.type){

        case UPDATE_NEW_POST_TEXT:{ 
                return {...state, posts: [...state.posts, 
                {id:8, message: action.newPostText, likesCount:1}
                ]}
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default: 
                return state
        }
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
         .then(response => {
            dispatch(setUserProfile(response.data))
         }
      )
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            //debugger
            dispatch(setStatus(response.data))
        }
    )        
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        }
    )
}

export default profileReducer;