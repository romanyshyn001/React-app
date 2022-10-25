import s from "./ProfileInfo.module.css";
import React, { useState } from "react";
import Preloader from "../../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHook";
import userPhoto from "../../../../assets/images/userPhoto.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
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
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.description}>
        <img
          src={profile.photos.large || userPhoto}
          className={s.userPhoto}
          alt="avatar"
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm
            profile={profile}
            isOwner={isOwner}
            saveProfile={saveProfile}
            setEditMode={setEditMode}
            editMode={editMode}
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
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>FullName</b>: {profile.fullName}
      </div>
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAjob ? "yes" : "no"}
      </div>
      {profile.lookingForAjob && (
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
              contactValue={profile.contacts[key]}
            ></Contact>
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
