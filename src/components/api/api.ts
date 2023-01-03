import { ProfileType, UsersType } from "./../../types/types";
import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "d6ae7016-ed8d-4bd8-bc41-26fa3a912655",
    "Content-Type": "application/json",
  },
});

export type ResponceTypeApi<D = {}, RC = ResultCodesEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};

// type MeResponceDataType = {
//   id: number;
//   email: string;
//   login: string;
// };



export enum ResultCodeForCaptchaEnum {
  captchaIsRequired = 10,
}
export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

