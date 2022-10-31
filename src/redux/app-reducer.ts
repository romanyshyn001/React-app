import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType } from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type initialStateType = {
  initialized: boolean;
  // globalError: null
};
let initialState: initialStateType = {
  initialized: false,
  // globalError: null
};

const appReducer = (
  state = initialState,
  action: initializedSuccessActionType
): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};
export const initializedSuccess = (): initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

type ThunkAppType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  initializedSuccessActionType
>;

export const initializedApp = (): ThunkAppType => async (dispatch) => {
  let promise = await dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
