import React from 'react';
import { addDialogTextCreator, updateDialogTextCreator } from '../../redux/reducers/dialogReducer';
import Dialogs from './Dialog';
// import {ChatItem} from './DialogItem/DialogItem';
// import Message from './Message/Message'


const DialogsContainer = (props) => {
let state = props.store.getState().dialogPage;

let onSendMessageClick = () => {
    props.store.dispatch(addDialogTextCreator())
}

let onUpdateDialogText = (body) => {
    props.store.dispatch(updateDialogTextCreator(body))
}
    return (<Dialogs sendMessageByClick={onSendMessageClick} 
                     updateDialogTextBody={onUpdateDialogText}
                     dialogPage={state}/>)
}

export default DialogsContainer;