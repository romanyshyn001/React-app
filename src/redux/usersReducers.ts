import { usersAPI } from "../components/api/api";
import { updateObjectArray } from "../components/utils/object.helper";
import { UsersType } from "../types/types";
import { AppStateType,  } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
type InferActionType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
function infeLiteraFromStrings<T extends string>(arg:T ):T {
  return arg
} 
type ActionsType2 = ReturnType<typeof actions>

const initiateState = {
  users: [] as Array<UsersType>,
  pageSize: 15,
  totalUsersCount: 250,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, // array of user id's
};
type InitialStateType = typeof initiateState;
export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: "FOLLOW",
      userId,
    } as const),
  unfollowSuccess: (userId: number) =>
    ({
      type: "UNFOLLOW",
      userId,
    } as const),
  setUsers: (users: Array<UsersType>) =>
    ({
      type: "SET_USERS",
      users,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: "SET_CURRENT_PAGE",
      currentPage,
    } as const),

  setTotalUsersCount: (count: number) =>
    ({
      type: "SET_USER_TOTAL_COUNT",
      count,
    } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: "TOGGLE_IS_FETCHING",
    isFetching,
  }),
  toogleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: "TOOGLE_IS_FOLLOWING_PROGRESS",
      isFetching,
      userId,
    } as const),
};
type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>;

const usersReducers = (
  state = initiateState,
  action: ActionsTypes
): InitialStateType => {
  console.log(action.type);
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case "SET_USERS": {
      return { ...state, users: action.users };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "TOOGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

type DispatchType = Dispatch<ActionsTypes>;

export const requestUsers = (
  page: number,
  pageSize: number
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
  return async (dispatch, getState) => {
    // let a = getState();
    dispatch(actions.toggleIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};
// Внутрішня функція
const _followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toogleFollowingProgress(true, userId));
  let responce = await apiMethod(userId);
  if (responce.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toogleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch: DispatchType) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    );
  };
};
export const unfollow = (userId: number): ThunkType => {
  return async (dispatch: DispatchType) => {
    _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess
    );
  };
};
export default usersReducers;

// type FollowSuccessType = {
//   type: typeof FOLLOW;
//   userId: number;
// };
// type UnfollowSuccessType = {
//   type: typeof UNFOLLOW;
//   userId: number;
// };
// type SetUsersType = {
//   type: typeof SET_USERS;
//   users: Array<UsersType>;
// };
// type SetCurrentPageType = {
//   type: typeof SET_CURRENT_PAGE;
//   currentPage: number;
// };
// type SetTotalUsersCountType = {
//   type: typeof SET_USER_TOTAL_COUNT;
//   count: number;
// };
// type ToggleIsFetchingType = {
//   type: typeof TOGGLE_IS_FETCHING;
//   isFetching: boolean;
// };
// type ToogleFollowingProgressType = {
//   type: typeof TOOGLE_IS_FOLLOWING_PROGRESS;
//   isFetching: boolean;
//   userId: number;
// };

// | FollowSuccessType
// | UnfollowSuccessType
// | SetUsersType
// | SetCurrentPageType
// | ToggleIsFetchingType
// | ToogleFollowingProgressType
// | SetTotalUsersCountType;
// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
// const SET_USERS = "SET_USERS";
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
// const SET_USER_TOTAL_COUNT = "SET-USER-TOTAL-COUNT";
// const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
// const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";
