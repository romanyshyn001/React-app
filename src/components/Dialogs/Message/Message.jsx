import s from './../Dialogs.module.css'
import React from 'react';
//Шаблоне повідомленн
const Message = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}

export default Message;