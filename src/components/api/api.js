import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "351871fe-5294-484c-9371-af232b81c222",
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
  unfollow: async (userId) => {
    return await instance.delete(`follow/${userId}`);
  },
  follow: async (userId) => {
    return await instance.post(`follow/${userId}`);
  },
  getProfile: async (userId) => {
    return await profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile: async (userId) => {
    return await instance.get(`profile/` + userId);
  },
  getStatus: async (userId) => {
    return await instance.get(`profile/status/` + userId);
  },
  updateStatus: async (status) => {
    return await instance.put(`profile/status`, { status: status });
  },
  savePhoto: async (photoFile) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile: async (profile) => {
    return await instance.put(`profile`, profile);
  },
};

export const authAPI = {
  async me() {
    return await instance.get(`auth/me`);
  },
  async login(values) {
    return await instance.post(`auth/login`, values);
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
