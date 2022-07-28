import s from './Header.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return ( 
    <header className={s.header}>
      <img src='https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300' alt='img'></img>
      
      <div className={s.loginBlock}>
        {props.isAuth
        ? <span className={s.loginStatus}>{props.login}</span>
        : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}
export default Header;