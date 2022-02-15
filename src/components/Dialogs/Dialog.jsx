import s from './Dialogs.module.css';
import {ChatItem} from './DialogItem/DialogItem';
import React from 'react';

//Шаблоне повідомленн
const Message = (props) => {
    return (
        <div>
            <div className={s.messages}>{props.message}</div>
        </div>
    )
}
let postEl = React.createRef()
const sendMessage = () => {
    let text = postEl.current.value
    alert(text)

}

const Dialogs = (props) => {
let dialogsElems = 
    props.state.dialogsData.map((dialog, i) => 
    <ChatItem Key={i} name={dialog.name} id={dialog.id} />)
//Додати key
let messagesElems = 
    props.state.messageData.map((messageItem, i) => 
    <Message Key={i} message={messageItem.message}/>)    
   
    return (    
        <div className={s.chat}>
           <div className={s.chatItems}>
                { dialogsElems }
           </div>      
            <div className={s.messages}>
                { messagesElems }
                <label>
                    <input className={s.inputText} ref={postEl} ></input>
                    <button onClick={sendMessage}>Send</button>
                </label>
            </div>  
        </div>
    )
}

export default Dialogs

