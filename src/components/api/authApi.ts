import {
  instance,
  ResponceTypeApi,
  ResultCodeForCaptchaEnum,
  ResultCodesEnum,
} from "./api";

type LoginResponceDataType = {
  userId: number;
};
type MeResponceDataType = {
  id: number;
  email: string;
  login: string;
};
export const authAPI = {
  async me() {
    return await instance
      .get<ResponceTypeApi<MeResponceDataType>>(`auth/me`)
      .then((res) => res.data);
  },
  async login(values: any) {
    return await instance
      .post<
        ResponceTypeApi<
          LoginResponceDataType,
          ResultCodeForCaptchaEnum | ResultCodesEnum
        >
      >(`auth/login`, values)
      .then((res) => res.data);
  },
  async logout() {
    return await instance.delete(`auth/login`).then((res) => {
      return res.data;
    });
  },
};
