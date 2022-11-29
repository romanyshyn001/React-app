import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import avaMessage from "./../../../assets/images/avaMessage.png";
import React from "react";

type PropsType = {
  name: string
  id: number
}
const ChatItem = (props: PropsType) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.item}>
      <img className={s.images} src={avaMessage} alt="avatar"></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export { ChatItem };
