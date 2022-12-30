import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className={s.nav}>

      {/* <div className={s.active}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs'>Messages</NavLink>
      </div> */}
      <div className={s.item}>
        <div className={s.item}>
          {/* <NavLink to='/users'>Users</NavLink> */}
        </div>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'>Settings</NavLink>
      </div>

    </nav>
  )
}

export default NavBar;