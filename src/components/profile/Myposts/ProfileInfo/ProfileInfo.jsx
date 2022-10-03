import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHook";

const ProfileInfo = ({ profile, updateStatus, status }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.description}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks updateStatus={updateStatus} status={status} />
      </div>
    </div>
  );
};

export default ProfileInfo;
