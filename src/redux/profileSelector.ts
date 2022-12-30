import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getProfileSelector = (state: AppStateType) => {
  return state.profilePage.profile;
};