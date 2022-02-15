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
//Перенесли дані BLL на рівень вище до index.js(передали в map через props)
// let dialogsData = [
//     {id:1, name:'Roman'},
//     {id:2, name:'Victor'},
//     {id:3, name:'Vasya'},
//     {id:4, name:'Ivan'},
//     {id:5, name:'Sergiy'}
// ]
// let messageData = [
//     {id:1, message:'Hi'},
//     {id:2, message:'How is going?'},
//     {id:3, message:'What the plan'},
//     {id:4, message:'Bingo'},
//     {id:5, message:'Great Job!'}
// ]

//Додати key
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


export default Dialogs;