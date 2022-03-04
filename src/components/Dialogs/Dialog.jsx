import s from './Dialogs.module.css';
import React from 'react';
import { ChatItem } from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

let state = props.dialogPage
let dialogsElems = state.dialogsData.map(dialog => <ChatItem name={dialog.name} key={dialog.id} />)
let messagesElems = state.messageData.map(messageItem => <Message message={messageItem.message} key={messageItem.id}/>)


let sendMessageClick = () => {
    // debugger;
    props.sendMessageByClick()
    
}

let updateDialogText = (e) => {  
    let body = e.target.value
    props.updateDialogTextBody(body)
    }


    return (    
        <div className={s.chat}>
           <div className={s.chatItems}>
                { dialogsElems }
           </div>      
            <div className={s.messages}>
                { messagesElems }
                <label>
                    <textarea className={s.inputText} 
                            value={ props.dialogText }
                            type='text'
                            onChange={ updateDialogText  }> 
                    </textarea>
                    <button 
                        onClick={ sendMessageClick }>Send
                    </button>
                </label>
            </div>  
        </div>
    )
}

export default Dialogs;