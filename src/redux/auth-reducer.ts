import { authAPI, securityApi } from "../components/api/api";

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

const authReducer = (state = initialState, action: any): initialStateType => {
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
  isAuth: boolean ;
};
type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: setAuthUserDataActionPayloadType;
};
export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCH_URL_SUCCESS;
  payload: { captchaUrl: string };
};
export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCH_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let responce = await authAPI.me();
  if (responce.data.resultCode === 0) {
    let { id, login, email } = responce.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (values: string, setStatus: any) => async (dispatch: any) => {
    let responce = await authAPI.login(values);
    if (responce.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (responce.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      setStatus(responce.data.messages);
    }
  };
export const logout = () => async (dispatch: any) => {
  let responce = await authAPI.logout();
  if (responce.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch: any) => {
  let responce = await securityApi.getCaptchaUrl();
  const captchaUrl = responce.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
