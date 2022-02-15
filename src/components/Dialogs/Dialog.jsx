import s from './Dialogs.module.css';
import React from 'react';
import { ChatItem } from './DialogItem/DialogItem';

//Шаблоне повідомленн
const Message = (props) => {
    return (
        <div>
            <div className={s.messages}>{props.message}</div>
        </div>
    )
}

const Dialogs = (props) => {

let state = props.dialogPage
let dialogsElems = state.dialogsData.map((dialog, i) => <ChatItem Key={i} name={dialog.name} id={dialog.id} />)
let messagesElems = state.messageData.map((messageItem, i) => <Message Key={i} message={messageItem.message}/>)


let sendMessageClick = () => {
    props.sendMessageByClick()
}
let updateDialogText = (e) => {  
    let body = e.target.value
    props.updateDialogTextBody(body)
    }

let fixedMessage = state.newDialogPost

    return (    
        <div className={s.chat}>
           <div className={s.chatItems}>
                { dialogsElems }
           </div>      
            <div className={s.messages}>
                { messagesElems }
                <label>
                    <input className={s.inputText} 
                        onChange={ updateDialogText  } 
                        value={ fixedMessage }
                        type='text'></input>
                    <button 
                        onClick={ sendMessageClick }>Send
                    </button>
                </label>
            </div>  
        </div>
    )
}

export default Dialogs;