import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType, InferActionType } from "./redux-store";

let initialState = {
  initialized: false,
};
export type initialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "APP/SN/INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};
export const actions = {
  initializedSuccess: () => ({ type: "APP/SN/INITIALIZED_SUCCESS" } as const),
};
type ActionsType = InferActionType<typeof actions>;

type ThunkAppType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsType
>;

export const initializedApp = (): ThunkAppType => async (dispatch: any) => {
  let promise = await dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
