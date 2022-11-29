import { BaseThunkType, InferActionType } from "./redux-store";
import { authAPI, Authorize } from "../components/api/authApi";
import {
  ResultCodeForCaptchaEnum,
  ResultCodesEnum,
} from "../components/api/api";
import { securityApi } from "../components/api/securityApi";

export type initialStateType = typeof initialState;
let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SN/auth/SET-USER-DATA",
      payload: { userId, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: "SN/auth/GET_CAPTCHA_URL_SUCCESS",
      payload: { captchaUrl },
    } as const),
};

const authReducer = (
  state = initialState,
  action: ActionAuthType
): initialStateType => {
  switch (action.type) {
    case "SN/auth/SET-USER-DATA":
      return {
        ...state,
        ...action.payload, //need to add payload?
      };
    case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const getAuthUserData = (): ThunkAuthType => async (dispatch) => {
  let meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login = (
  values: Authorize,
  setStatus: any
): ThunkAuthType => async (dispatch) => {
  let loginData = await authAPI.login(values);
  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptchaEnum.captchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    setStatus(loginData.messages);
  }
};
export const logout = (): ThunkAuthType => async (dispatch) => {
  let responce = await authAPI.logout();
  if (responce.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = (): ThunkAuthType => async (dispatch) => {
  let responce = await securityApi.getCaptchaUrl();
  const captchaUrl = responce.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

type ActionAuthType = InferActionType<typeof actions>;
type ThunkAuthType = BaseThunkType<ActionAuthType>;
export default authReducer;
