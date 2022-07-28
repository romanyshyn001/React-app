import React from 'react';
import { addDialogTextCreator, updateDialogTextCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialog';
import { connect } from 'react-redux';
import { withAuthNavigate } from './../HOC/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        dialogText: state.dialogPage.newDialogPost,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        // sendMessageByClick: () => {
        //     dispatch(addDialogTextCreator())
        // },
        updateDialogTextBody: (body) => {
            dispatch(updateDialogTextCreator(body))
        }
    }
}

// let AuthNavigateComponent = withAuthNavigate(Dialogs) 

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent)


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)




// const DialogsContainer = () => {
//         return  <StoreContext.Consumer>    
//             { (store) => {

//         let state = store.getState().dialogPage;

//         let onSendMessageClick = () => {
//             store.dispatch(addDialogTextCreator())
//         }

//         let onUpdateDialogText = (body) => {
//             store.dispatch(updateDialogTextCreator(body))
//         }
//             return    <Dialogs sendMessageByClick={onSendMessageClick} 
//                                updateDialogTextBody={onUpdateDialogText}
//                                dialogPage={state}/>
//             }}
//             </StoreContext.Consumer>
            
// }