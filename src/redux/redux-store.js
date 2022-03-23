import { combineReducers, createStore } from 'redux'
import authReducer from './auth-reducer'
import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'
import usersReducers from './usersReducers'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducers,
    auth: authReducer
})

let store = createStore(reducers)
window.store = store
export default store

