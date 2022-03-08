const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initiateState = {
    users: []
}

const usersReducers = (state = initiateState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: true}
                    }
                    return u
                })}
        case UNFOLLOW: 
        return {
            ...state, 
            users: state.users.map(u => {
                if(u.id === action.id){
                    return {...u, followed: false}
                }
                return u
            })}
        case SET_USERS:{
            return {...state, users:[ ...action.users]}
        }
        default: 
        return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

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