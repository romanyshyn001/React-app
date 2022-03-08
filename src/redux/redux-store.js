import { combineReducers, createStore } from 'redux'
import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'
import usersReducers from './usersReducers'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducers
})

let store = createStore(reducers)
window.store = store
export default store

