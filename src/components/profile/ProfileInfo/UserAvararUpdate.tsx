import React, { ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";

const FileInput = (props: PropsType) => {
  return (
    <label className={s.avaLabel}>
      <input
        className={s.uploadAva}
        type="file"
        onChange={props.onMainPhotoSelected}
      />
      <img
        src={props.profilePhoto || props.userPhoto}
        alt="Avatar"
        className={s.image}
      />
      {props.children}
    </label>
  );
};
export default FileInput;

type PropsType = {
  userPhoto: string;
  profilePhoto: string | null;
  onMainPhotoSelected: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: JSX.Element;
};
