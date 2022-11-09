import { instance } from "./api";

type GetCaptchaUrlResponseType = {
  url: string;
};
export const securityApi = {
  async getCaptchaUrl() {
    return await instance
      .get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
      .then((res) => res.data);
  },
};
