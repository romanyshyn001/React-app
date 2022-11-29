export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type ProfileType = {
  userId?: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
  aboutMe: string;
};
export type UsersType = {
  id: number;
  status: string;
  photos: PhotosType;
  followed: boolean;
  name: string;
};
export type UserInfoChangeType = {
  fullName: string;
  lookingForAJobDescription: string;
  aboutMe: string;
  lookingForAJob: boolean;
};
