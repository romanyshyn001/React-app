import { combineReducers, createStore, applyMiddleware, compose} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducers from "./usersReducers";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducers,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
window._store = store;
export default store;
