import { profileAPI } from "../components/api/profileApi";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionType } from "./redux-store";

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
};

export const actions = {
  updateNewPostTextCreator: (newPostText: string) =>
    ({
      type: "SN/UPDATE-NEW-POST-TEXT",
      newPostText,
    } as const),
  setUserProfile: (profile: ProfileType) =>
    ({
      type: "SN/SET-USER-PROFILE",
      profile,
    } as const),
  setStatus: (status: string) =>
    ({
      type: "SN/SET_STATUS",
      status,
    } as const),
  deletePost: (postId: number) =>
    ({
      type: "SN/DELETE_POST",
      postId,
    } as const),
  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: "SN/SAVE_PHOTO_SUCCESS",
      photos,
    } as const),
};

const profileReducer = (
  state = initiateState,
  action: ActionsType
): initiateStateType => {
  switch (action.type) {
    case "SN/UPDATE-NEW-POST-TEXT": {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 8, message: action.newPostText, likesCount: 1 },
        ],
      };
    }
    case "SN/SET-USER-PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "SN/SET_STATUS": {
      return { ...state, status: action.status };
    }
    case "SN/DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case "SN/SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

export const getUserProfile = (userId: number): ThunkType => async (
  dispatch
) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(actions.setUserProfile(response));
  });
};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(actions.setStatus(response));
  });
};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  });
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  profileAPI.savePhoto(file).then((responce) => {
    if (responce.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(responce.data.photos));
    }
  });
};
export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch,
  getState
) => {
  const userId = getState().auth.userId;
  profileAPI.saveProfile(profile).then((responce) => {
    if (responce.resultCode === 0) {
      if (userId != null) {
        dispatch(getUserProfile(userId));
      } else {
        throw new Error("User can`t be null");
      }
    }
  });
};
export type initiateStateType = typeof initiateState;

type ActionsType = InferActionType<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;
export default profileReducer;
