import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const ChatItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        
        <div className={s.item, s.active}>
            <img className={s.images} src='https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png' alt='avatar'></img> 
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export {ChatItem};