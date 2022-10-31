import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducers from "./usersReducers";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducers,
  auth: authReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
//@ts-ignore
window._store = store;
export default store;
