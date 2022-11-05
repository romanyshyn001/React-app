import { ProfileType } from "./../../types/types";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "bd6741ec-1c9d-4028-a78f-926e77a8cba1",
    "Content-Type": "application/json",
  },
});

export const usersAPI = {
  getUsers: async (currentPage = 1, pageSize = 10) => {
    return await instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow: async (userId: number) => {
    return await instance.delete(`follow/${userId}`);
  },
  follow: async (userId: number) => {
    return await instance.post(`follow/${userId}`);
  },
  getProfile: async (userId: number) => {
    return await profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile: async (userId: number) => {
    return await instance.get(`profile/` + userId);
  },
  getStatus: async (userId: number) => {
    return await instance.get(`profile/status/` + userId);
  },
  updateStatus: async (status: string) => {
    return await instance.put(`profile/status`, { status: status });
  },
  savePhoto: async (photoFile: any) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile: async (profile: ProfileType) => {
    return await instance.put(`profile`, profile);
  },
};

export enum ResultCodeForCaptcha {
  captchaIsRequired = 10,
}
export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
type MeResponceType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type LoginResponceType = {
  data: { userId: number };
  resultCode: ResultCodesEnum | ResultCodeForCaptcha;
  messages: Array<string>;
};
export const authAPI = {
  async me() {
    return await instance
      .get<MeResponceType>(`auth/me`)
      .then((res) => res.data);
  },
  async login(values: any) {
    return await instance
      .post<LoginResponceType>(`auth/login`, values)
      .then((res) => res.data);
  },
  async logout() {
    return await instance.delete(`auth/login`).then((res) => {
      return res.data;
    });
  },
};

export const securityApi = {
  async getCaptchaUrl() {
    return await instance.get(`security/get-captcha-url`);
  },
};
