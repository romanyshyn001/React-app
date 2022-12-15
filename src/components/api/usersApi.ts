import { UsersType } from "../../types/types";
import { instance, ResponceTypeApi } from "./api";

export type GetUSersItems = {
  items: Array<UsersType>;
  totalCount: number;
  error: string | null;
};

export const usersAPI = {
  getUsers: async (
    currentPage = 1,
    pageSize = 10,
    term: string = "",
    friend: null | boolean = null
  ) => {
    return await instance
      .get<GetUSersItems>(
        `users?page=${currentPage}&count=${pageSize}&term=${term}` +
          (friend === null ? "" : `&friend=${friend}`)
      )
      .then((res) => res.data);
  },
  unfollow: async (userId: number) => {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    }) as Promise<ResponceTypeApi>;
  },
  follow: async (userId: number) => {
    return await instance
      .post<ResponceTypeApi>(`follow/${userId}`)
      .then((res) => res.data);
  },
};
// getProfile: async (userId: number) => {
//   return await profileAPI.getProfile(userId);
// },
