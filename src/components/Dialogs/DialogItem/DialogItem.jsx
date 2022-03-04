import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'
import avaMessage from './avaMessage.png'
import React from 'react';
const ChatItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        
        <div className={s.item}>
            <img className={s.images} src={avaMessage} alt='avatar'></img> 
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export {ChatItem};