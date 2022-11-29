import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/Post/MyPostsContainer";
import React from "react";
import { ProfileType, UserInfoChangeType } from "../../types/types";

type Propstype = {
  profile: ProfileType | null;
  updateStatus: (status: string) => void
  status: string;
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: UserInfoChangeType) => Promise<any>

}
const Profile: React.FC<Propstype> = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus}
        status={props.status}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
