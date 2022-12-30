import s from "./ProfileInfo.module.css";
import React, { ChangeEvent, useState } from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHook";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileDataForm from "./ProfileDataForm";
import { ContactsType, ProfileType, UserInfoChangeType } from "../../../types/types";
import { Button, Typography } from "antd";

type PropsType = {
  profile: ProfileType | null;
  updateStatus: (status: string) => void
  status: string;
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: UserInfoChangeType) => Promise<any>
}

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
        <img
          id={'userAvatar'}
          src={profile.photos.large || userPhoto}
          className={s.userPhoto}
          alt="avatar"
        />
        {isOwner && <>
      
        <input type={"file"} onChange={onMainPhotoSelected} />
        </>
       }
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

type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMode: () => void
}
const ProfileData = ({ profile, isOwner, goToEditMode }: ProfileDataPropsType) => {
  const { Text, Link } = Typography;
  return (
    <div>
      {isOwner && (
        <div>
          <Button className={s.btn} type="primary" onClick={goToEditMode}>Edit</Button>
        </div>
      )}
      <div>
        <b>Full Name</b>: {profile.fullName}
      </div>
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as keyof ContactsType]}
            ></Contact>
          );
        })}
      </div>
    </div>
  );
};
type ContactPropstype = {
  contactTitle: string;
  contactValue: string
}
const Contact = ({ contactTitle, contactValue }: ContactPropstype) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
