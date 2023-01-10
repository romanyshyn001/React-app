import s from "./ProfileInfo.module.css";
import React  from "react";
import { ContactsType, ProfileType } from "../../../types/types";
import { Button } from "antd";

const ProfileData = ({
  profile,
  isOwner,
  goToEditMode,
}: ProfileDataPropsType) => {


  return (
    <div>
      {isOwner && (
        <div>
          <Button className={s.btn} type="primary" onClick={goToEditMode}>
            Edit
          </Button>
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
            <Contact
              key={key}
              contactTitle={key}
                contactValue={profile.contacts[key as keyof ContactsType]}
            ></Contact>
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }: ContactPropstype) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};
export default ProfileData ;

type ContactPropstype = {
  contactTitle: string;
  contactValue: string;
};
type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMode: () => void;
};
