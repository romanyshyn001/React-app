import { PhotosType, ProfileType } from "../../types/types";
import { instance, ResponceTypeApi } from "./api";

type SavePhotoResponceType = {
  photos: PhotosType;
};

export const profileAPI = {
  getProfile: async (userId: number) => {
    return await instance
      .get<ProfileType>(`profile/` + userId)
      .then((res) => res.data);
  },
  getStatus: async (userId: number) => {
    return await instance
      .get<string>(`profile/status/` + userId)
      .then((res) => res.data);
  },
  updateStatus: async (status: string) => {
    return await instance
      .put<ResponceTypeApi>(`profile/status`, { status: status })
      .then((res) => res.data);
  },
  savePhoto: async (photoFile: any) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<ResponceTypeApi<SavePhotoResponceType>>("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  saveProfile: async (profile: ProfileType) => {
    return await instance
      .put<ResponceTypeApi>(`profile`, profile)
      .then((res) => res.data);
  },
};
