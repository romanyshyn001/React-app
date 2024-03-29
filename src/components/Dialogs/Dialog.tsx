import s from './Dialogs.module.css';
import React from 'react';
import { ChatItem } from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageForm } from './FormMessage';
import { InitialStateType } from '../../redux/dialogReducer';

type OwnPropsType = {
    dialogPage: InitialStateType;
    sendDialogText: (messageText: string) => void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {

    let state = props.dialogPage
    let dialogsElems = state.dialogsData.map(dialog => <ChatItem name={dialog.name} id={dialog.id}  key={dialog.id}/>)
    let messagesElems = state.messageData.map(messageItem => <Message message={messageItem.message} key={messageItem.id} />)

    return (
        <div className={s.chat}>
            <div className={s.chatItems}>
                {dialogsElems}
            </div>
            <div className={s.messages}>
                {messagesElems}
                <div>
                    <AddMessageForm sendDialogText={props.sendDialogText} />
                </div>
            </div>
        </div>
    )
}


export default Dialogs;