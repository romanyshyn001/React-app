import s from "./ProfileInfo.module.css";
import React, { ChangeEvent, useState } from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHook";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileDataForm from "./EditProfileData/ProfileDataForm";
import {
  ProfileType,
  UserInfoChangeType,
} from "../../../types/types";

import ProfileData from "./ProfileInfoPure";
import FileInput from "./UserAvararUpdate";

const ProfileInfo: React.FC<PropsType> = ({
  profile,
  updateStatus,
  status,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null)
      if (event.target.files.length) {
        savePhoto(event.target.files[0]);
      }
  };

  return (
    <div>
      <div className={s.description}>
        {isOwner && (
          <>
            <form>
              <FileInput
                userPhoto={userPhoto}
                profilePhoto={profile.photos.large}
                onMainPhotoSelected={onMainPhotoSelected}
              />
            </form>
          </>
        )}
        {editMode ? (
          <ProfileDataForm
            profile={profile}
            isOwner={isOwner}
            saveProfile={saveProfile}
            setEditMode={setEditMode}
            // editMode={editMode}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
        <ProfileStatusWithHooks updateStatus={updateStatus} status={status} />
      </div>
    </div>
  );
};

export default ProfileInfo;

type PropsType = {
  profile: ProfileType | null;
  updateStatus: (status: string) => void;
  status: string;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: UserInfoChangeType) => Promise<any>;
};

