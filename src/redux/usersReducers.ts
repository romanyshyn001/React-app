import { usersAPI } from "../components/api/api";
import { updateObjectArray } from "../components/utils/object.helper";
import { UsersType } from "../types/types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USER_TOTAL_COUNT = "SET-USER-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

const initiateState = {
  users: [] as Array<UsersType>,
  pageSize: 15,
  totalUsersCount: 250,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, // array of user id's
};

type InitialStateType = typeof initiateState;

const usersReducers = (
  state = initiateState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
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

type FollowSuccessType = {
  type: typeof FOLLOW;
  userId: number;
};
type UnfollowSuccessType = {
  type: typeof UNFOLLOW;
  userId: number;
};
type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<UsersType>;
};
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
type SetTotalUsersCountType = {
  type: typeof SET_USER_TOTAL_COUNT;
  count: number;
};
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
type ToogleFollowingProgressType = {
  type: typeof TOOGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const followSuccess = (userId: number): FollowSuccessType => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users: Array<UsersType>): SetUsersType => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (count: number): SetTotalUsersCountType => ({
  type: SET_USER_TOTAL_COUNT,
  count,
});
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toogleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToogleFollowingProgressType => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
const followUnfollowFlow = async (
  dispatch: any,
  userId: any,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toogleFollowingProgress(true, userId));

  let responce = await apiMethod(userId);
  if (responce.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toogleFollowingProgress(false, userId));
};
export const follow = async (userId: number) => {
  return (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unfollow = (userId: number) => {
  return (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};
export default usersReducers;
