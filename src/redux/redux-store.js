import { combineReducers, createStore, applyMiddleware } from 'redux'
import authReducer from './auth-reducer'
import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'
import usersReducers from './usersReducers'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducers,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store

