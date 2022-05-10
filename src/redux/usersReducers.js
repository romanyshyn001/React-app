import { usersAPI } from "../components/api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USER_TOTAL_COUNT = 'SET-USER-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS'


const initiateState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 250,
    currentPage:1,
    isFetching: true,
    followingInProgress: []
}

const usersReducers = (state = initiateState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })}
        case UNFOLLOW: 
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })}
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        // case SET_USER_TOTAL_COUNT:{
        //     return {...state, totalUsersCount: action.count}
        // }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS:{
            return {...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress,  action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: 
        return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (count) => ({type: SET_USER_TOTAL_COUNT, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toogleFollowingProgress = (isFetching, userId) => ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage, pageSize) => { 
    return (dispatch) => {

    dispatch(toggleIsFetching(true))

      usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId))

        usersAPI.follow(userId)
            dispatch(followSuccess(userId))
                dispatch(toogleFollowingProgress(false, userId))
        
    }
}
export const unfollow = (userId) => { 
    
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId))
        
        usersAPI.unfollow(userId)
            dispatch(unfollowSuccess(userId))
                dispatch(toogleFollowingProgress(false, userId))
            
    }
}
export default usersReducers;




















// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'

// let initiateState = {
//     users:[
//         { id:0, 
//           followed: false, 
//           // photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg/800px-Roman_Reigns_Tribute_to_the_Troops_2016.jpg', 
//           fullname:'Hi', 
//           status:'I am developer', 
//           location: {city:'Lviv', country:'Ukraine'}},
//         { id:1, 
//           followed: true, 
//           // photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg/800px-Roman_Reigns_Tribute_to_the_Troops_2016.jpg', 
//           fullname:'Yo', 
//           status:'I am Lawer', 
//           location: {city:'London', country:'UK'}},
//         { id:2, 
//           followed: false, 
//           // photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg/800px-Roman_Reigns_Tribute_to_the_Troops_2016.jpg', 
//           fullname:'Bingo', 
//           status:'I am Dentist', 
//           location: {city:'Larnaka', country:'Cyprus'}},
//     ]
// }

// const usersReducer = (state = initiateState, action) => {
//     switch(action.type){
//         case FOLLOW:
//             return {
//                 ...state,
//                 //users: [...state.users] 
//                  users: state.users.map(u => {
//                     if(u.id === action.userId){
//                         return{...u, followed: true}
//                     } 
//                     return u
//                  })
//             }
//         case UNFOLLOW:
//             return {
//                 ...state,
//                 //users: [...state.users] 
//                  users: state.users.map(u => {
//                     if(u.id === action.userId){
//                         return{...u, followed: false}
//                     } 
//                     return u
//                  })
//             }
//         case SET_USERS:
//             return {...state, users: [...state.users, ...action.users]}
//         default: 
//             return state;
//         }
// }

// export const followAC = (userId) => ({type: FOLLOW, userId})
// export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
// export const setUsersAC = (users) => ({type: SET_USERS, users})
// export default usersReducer;
// window.initiateState = initiateState