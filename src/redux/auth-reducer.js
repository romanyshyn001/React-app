import { authAPI } from "../components/api/api"

const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  messageAPI: [],
  rememberMe: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
      default:
        return state
  }
}



export const setAuthUserData = (userId, email, login, isAuth, messageAPI) => ({
  type:SET_USER_DATA, data: {userId, email, login, isAuth, messageAPI}})
export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
      .then(response => {
        if(response.data.resultCode === 0){
          let{id, email, login} = response.data.data
          dispatch(setAuthUserData(id, email, login))
        }
      })
}

export const login = (values) => {
  let email = values.email
  let password = values.password
  let rememberMe = values.rememberMe
    return(dispatch) => {
      //debugger
      authAPI.login(email, password, rememberMe)
        .then(data => {
      if(data.resultCode === 0){
        dispatch(getAuthUserData())
      } else {
        dispatch(setAuthUserData(null, null, null, false, ''))
      }
    }
  )}
}
export default authReducer















// const SET_USER_DATA = 'SET-USER-DATA'

// let initialState = {
//   userId: null,
//   email: null,
//   login: null,
//  }

// const authReducer = (state = initialState, action) => {
//   debugger;   
//   switch(action.type){
//         case SET_USER_DATA:   
//         return {
//               ...state,
//               ...action.data
//             }
        
//         default:
//             return state
//     }
// }

// export const setAuthUserData = (userId, email, login) => ({type:SET_USER_DATA, data:{userId, email, login}})

// export default authReducer;