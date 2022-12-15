import { usersAPI } from "../components/api/usersApi";
import { updateObjectArray } from "../components/utils/object.helper";
import { UsersType } from "../types/types";
import { AppStateType, BaseThunkType } from "./redux-store";
import { Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ResponceTypeApi } from "../components/api/api";

export type ReturnNestedType<T> = T extends {
  [keys: string]: infer U;
}
  ? U
  : T;

function InferLiteral<U, T extends U>(arg: T): T {
  return arg;
}
function InferLiteralFromString<T extends string>(arg: T): T {
  return InferLiteral<string, T>(arg);
}

export type ActionsTypes = ReturnType<ReturnNestedType<typeof actions>>;

type ThunkType = BaseThunkType<ActionsTypes>;
type DispatchType = Dispatch<ActionsTypes>;

const initiateState = {
  users: [] as Array<UsersType>,
  pageSize: 15,
  totalUsersCount: 250,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, // array of user id's
  pageTitle: "SAMURAI",
  filter: {
    term: "",
    friend: null as null | boolean,
  },
};
export type InitialStateType = typeof initiateState;
export type FilterType = typeof initiateState.filter;

export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: InferLiteralFromString("SN/USERS/FOLLOW"),
      userId,
    } as const),

  unfollowSuccess: (userId: number) =>
    ({
      type: InferLiteralFromString("SN/USERS/UNFOLLOW"),
      userId,
    } as const),
  setUsers: (users: Array<UsersType>) =>
    ({
      type: InferLiteralFromString("SN/USERS/SET_USERS"),
      users,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: InferLiteralFromString("SN/USERS/SET_CURRENT_PAGE"),
      currentPage,
    } as const),

  setTotalUsersCount: (count: number) =>
    ({
      type: InferLiteralFromString("SN/USERS/SET_USER_TOTAL_COUNT"),
      count,
    } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: InferLiteralFromString("SN/USERS/TOGGLE_IS_FETCHING"),
    isFetching,
  }),
  toogleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: InferLiteralFromString("SN/USERS/TOOGLE_IS_FOLLOWING_PROGRESS"),
      isFetching,
      userId,
    } as const),
  setFilter: (filter: FilterType) =>
    ({
      type: InferLiteralFromString("SN/USERS/SET_FILTER"),
      payload: filter,
    } as const),
};

const usersReducers = (
  state = initiateState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "SN/USERS/FOLLOW":
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case "SN/USERS/UNFOLLOW":
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case "SN/USERS/SET_USERS": {
      return { ...state, users: action.users };
    }
    case "SN/USERS/SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SN/USERS/TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "SN/USERS/TOOGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    case "SN/USERS/SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export const requestUsers = (
  page: number,
  pageSize: number,
  filter: FilterType
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilter(filter));

    let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};
// Внутрішня функція
const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: (userId: number) => Promise<ResponceTypeApi>,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toogleFollowingProgress(true, userId));

  let responce = await apiMethod(userId);

  if (responce.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toogleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch: DispatchType) => {
    await _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    );
  };
};
export const unfollow = (userId: number): ThunkType => {
  return async (dispatch: DispatchType) => {
    await _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess
    );
  };
};
export default usersReducers;
