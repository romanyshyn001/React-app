import { authAPI } from "../components/api/api"

const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  // messageAPI: [],
  // rememberMe: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload 
      }
      default:
        return state
  }
}



export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => async(dispatch) => {
  let responce = await authAPI.me()
        if(responce.data.resultCode === 0){
          let{id, login, email} = responce.data.data
          dispatch(setAuthUserData(id, email, login, true))
        }
}

export const login = (email, password, rememberMe) => async(dispatch) =>   {
     let responce = await authAPI.login(email, password, rememberMe)
      if(responce.data.resultCode === 0){
        dispatch(getAuthUserData())
      } else{
        console.log('error =>' )
      }
}
export const logout = () => async(dispatch) => {
  authAPI.logout().then(responce => {
    if(responce.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
      }
  })
}


export default authReducer
