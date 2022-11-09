import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  Action,
} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducers from "./usersReducers";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
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
// export type AppDispatch = typeof store.dispatch
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
//@ts-ignore
window._store = store;
export default store;
