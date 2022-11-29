import React, { SyntheticEvent } from "react";
import { createField } from "../../common/FormsControls/FormsControl";
import { useState } from "react";
import { ProfileType, UserInfoChangeType } from "../../../types/types";
import s from "./ProfileInfo.module.css"

type PropsType = {
  profile: ProfileType
  saveProfile: (profile: UserInfoChangeType) => void
  setEditMode: (editMode: boolean) => void;
  isOwner: boolean
}

const ProfileDataForm: React.FC<PropsType> = ({
  profile,
  saveProfile,
  setEditMode,
}) => {
  const [fullName, setFullName] = useState<string>(profile.fullName);
  const [aboutMe, setAboutMe] = useState<string>(profile.aboutMe);
  const [lookingForAJobDescription, setLookingForAJobDescription] = useState<string>(profile.lookingForAJobDescription);
  const [lookingForAJob, setLookingForAJob] = useState(Boolean);

  const handleChangeLookingForAJob = () => {
    setLookingForAJob(currentStatus => !currentStatus)
  }
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    saveProfile({
      fullName: fullName,
      lookingForAJobDescription: lookingForAJobDescription,
      aboutMe: aboutMe,
      lookingForAJob: lookingForAJob
    });
    setEditMode(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p><b>Full Name</b></p>
        {createField(
          "fullName",
          "fullName",
          "text",
          (event: any) => setFullName(event.target.value),
          null,
          fullName,
        )}
        <p><b>About me:</b></p>

        {createField(
          "aboutMe",
          "aboutMe",
          "text",
          (event: React.FormEvent<HTMLInputElement>) => setAboutMe(event.currentTarget.value),
          null,
          aboutMe,
        )}
        <p><b>My skills:</b></p>

        {createField(
          "lookingForAJobDescription",
          "lookingForAJobDescription",
          "text",
          (event: React.FormEvent<HTMLInputElement>) => setLookingForAJobDescription(event.currentTarget.value),
          null,
          lookingForAJobDescription,
        )}

        <p><b>Are you Looking for a job?</b></p>
        <div style={{ display: "flex" }}>
          <p>Yes</p>
          {createField(
            "lookingForAJobDescription",
            "lookingForAJobDescription",
            "checkbox",
            handleChangeLookingForAJob,
            null,
            lookingForAJob,
            '',
            s.checkbox
          )}

        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileDataForm;
