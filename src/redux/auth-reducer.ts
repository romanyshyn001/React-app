import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityApi } from "../components/api/api";

const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA";
const GET_CAPTCH_URL_SUCCESS = "samurai-network/auth/GET_CAPTCH_URL_SUCCESS";

export type initialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};
let initialState: initialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

type ActionAuthType =
  | SetAuthUserDataActionType
  | GetCaptchaUrlSuccessActionType;

const authReducer = (
  state = initialState,
  action: ActionAuthType
): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCH_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type setAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: setAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCH_URL_SUCCESS;
  payload: { captchaUrl: string };
};
export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCH_URL_SUCCESS,
  payload: { captchaUrl },
});

type ThunkAuthType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionAuthType
>;

export const getAuthUserData = (): ThunkAuthType => async (dispatch) => {
  let meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (values: any, setStatus: any): ThunkAuthType => async (
  dispatch
) => {
  console.log('loginData',values)
  let loginData = await authAPI.login(values);
  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptcha.captchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    setStatus(loginData.messages);
  }
};
export const logout = (): ThunkAuthType => async (dispatch) => {
  let responce = await authAPI.logout();
  if (responce.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = (): ThunkAuthType => async (dispatch) => {
  let responce = await securityApi.getCaptchaUrl();
  const captchaUrl = responce.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
