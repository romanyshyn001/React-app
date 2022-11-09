import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../components/api/profileApi";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { AppStateType } from "./redux-store";

// const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initiateState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "How is going?", likesCount: 12 },
    { id: 3, message: "What the plan", likesCount: 15 },
    { id: 4, message: "Bingo", likesCount: 16 },
    { id: 5, message: "Great Job!", likesCount: 2 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type initiateStateType = typeof initiateState;

type ActionProfileType =
  | UpdateNewPostTextCreatorType
  | SetUserProfileType
  | SetStatusType
  | DeletePostType
  | SavePhotoSuccess;

const profileReducer = (state = initiateState, action: ActionProfileType) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 8, message: action.newPostText, likesCount: 1 },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

type UpdateNewPostTextCreatorType = {
  type: typeof UPDATE_NEW_POST_TEXT;
  newPostText: string;
};
export const updateNewPostTextCreator = (
  newPostText: string
): UpdateNewPostTextCreatorType => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText,
});
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});

type DeletePostType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId,
});

type SavePhotoSuccess = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccess => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type ThunkProfileType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionProfileType
>;
export const getUserProfile = (userId: number): ThunkProfileType => async (
  dispatch
) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response));
  });
};
export const getStatus = (userId: number): ThunkProfileType => async (
  dispatch
) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response));
  });
};
export const updateStatus = (status: string): ThunkProfileType => async (
  dispatch
) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export const savePhoto = (file: any): ThunkProfileType => async (dispatch) => {
  profileAPI.savePhoto(file).then((responce) => {
    if (responce.resultCode === 0) {
      dispatch(savePhotoSuccess(responce.data.photos));
    }
  });
};
export const saveProfile = (profile: ProfileType): ThunkProfileType => async (
  dispatch,
  getState: any
) => {
  const userId = getState().auth.userId;
  profileAPI.saveProfile(profile).then((responce) => {
    if (responce.resultCode === 0) {
      dispatch(getUserProfile(userId));
    }
  });
};
export default profileReducer;
