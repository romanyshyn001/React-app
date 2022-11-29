import s from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

export type MapPropsType = {
  isAuth: boolean;
  login: string | null
}
export type DispatchPropsType = {
  logout: () => void
}
const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  return (
    <header className={`${s.header}` ? `${s.header}` : ""}>
      <img
        src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300"
        alt="img"
      ></img>

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.loginStatus}>
            {props.login} - <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
