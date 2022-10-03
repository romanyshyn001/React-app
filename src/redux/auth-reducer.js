import { authAPI } from "../components/api/api";

const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  // messageAPI: [],
  // rememberMe: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  let responce = await authAPI.me();
  if (responce.data.resultCode === 0) {
    let { id, login, email } = responce.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (values, setStatus) => async (dispatch) => {
  let responce = await authAPI.login(values);
  if (responce.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    setStatus(responce.data.messages);
  }
};
export const logout = () => async (dispatch) => {
  let responce = await authAPI.logout();
  if (responce.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
