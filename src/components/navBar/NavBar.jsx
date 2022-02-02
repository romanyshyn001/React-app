import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>

      <div className={s.active}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs'>Messages</NavLink>
      </div>
      <div className={s.item}>
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