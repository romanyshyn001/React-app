import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        {...props}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
