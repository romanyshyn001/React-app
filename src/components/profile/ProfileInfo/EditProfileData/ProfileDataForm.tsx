import React, { SyntheticEvent } from "react";
import { createField } from "../../../common/FormsControls/FormsControl";
import { useState } from "react";
import { ProfileType, UserInfoChangeType } from "../../../../types/types";
import s from "../ProfileInfo.module.css";
import { Input } from "antd";
import { Checkbox } from "antd";
import Button from "antd/es/button";

type PropsType = {
  profile: ProfileType;
  saveProfile: (profile: UserInfoChangeType) => void;
  setEditMode: (editMode: boolean) => void;
  isOwner: boolean;
};

const ProfileDataForm: React.FC<PropsType> = ({
  profile,
  saveProfile,
  setEditMode,
}) => {
  const [fullName, setFullName] = useState<string>(profile.fullName);
  const [aboutMe, setAboutMe] = useState<string>(profile.aboutMe);
  const [lookingForAJobDescription, setLookingForAJobDescription] = useState<
    string
  >(profile.lookingForAJobDescription);
  const [lookingForAJob, setLookingForAJob] = useState(Boolean);

  const handleChangeLookingForAJob = () => {
    setLookingForAJob((currentStatus) => !currentStatus);
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    saveProfile({
      fullName: fullName,
      lookingForAJobDescription: lookingForAJobDescription,
      aboutMe: aboutMe,
      lookingForAJob: lookingForAJob,
    });
    setEditMode(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <b>Full Name</b>
        </p>
        {createField(
          "fullName",
          "fullName",
          "text",
          (event: any) => setFullName(event.target.value),
          null,
          fullName,
          "",
          s.inputLabel
        )}
        <p>
          <b>About me:</b>
        </p>
        <Input.TextArea
          showCount
          className={s.aboutMe}
          maxLength={100}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAboutMe(event.currentTarget.value)
          }
          style={{ height: 120, resize: 'none' }}
          placeholder="Tell about yourself"
        />
        <p>
          <b>My skills:</b>
        </p>
        {createField(
          "lookingForAJobDescription",
          "lookingForAJobDescription",
          "text",
          (event: React.FormEvent<HTMLInputElement>) =>
            setLookingForAJobDescription(event.currentTarget.value),
          null,
          lookingForAJobDescription
        )}
        <p>
          <b>Are you Looking for a job?</b>
        </p>
        <div style={{ display: "flex" }}>
          <p>Yes</p>
          <Checkbox onChange={handleChangeLookingForAJob} />
        </div>
        <Button className={s.btn} type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfileDataForm;
