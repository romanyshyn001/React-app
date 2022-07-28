import s from './Dialogs.module.css';
import React from 'react';
import { ChatItem } from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageForm } from './FormMessage';

const Dialogs = (props) => {

let state = props.dialogPage
let dialogsElems = state.dialogsData.map(dialog => <ChatItem name={dialog.name} key={dialog.id} />)
let messagesElems = state.messageData.map(messageItem => <Message message={messageItem.message} key={messageItem.id}/>)

// let sendMessageClick = () => {
//     props.sendMessageByClick()
//     console.log('You submit the form')
// }

let updateDialogText = (e) => {  
    props.updateDialogTextBody(e.addDialogPost)
}

    return (    
        <div className={s.chat}>
        <div className={s.chatItems}>
                { dialogsElems }
        </div>      
            <div className={s.messages}>
                { messagesElems }
                <label>
                    <AddMessageForm updateDialogText={updateDialogText}/>
                </label>
            </div>  
        </div>
    )
}


export default Dialogs;