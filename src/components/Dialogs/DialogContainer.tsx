import React from "react";
import { actions, } from "../../redux/dialogReducer";
import Dialogs from "./Dialog";
import { connect } from "react-redux";
import { withAuthNavigate } from "../HOC/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogPage: state.dialogPage,
    dialogText: state.dialogPage.newDialogPost,
  };
};

// ADD TO COMPOSE 
//withAuthNavigate
export default compose<React.ComponentType>(
  connect(mapStateToProps, { ...actions },), withAuthNavigate
)(Dialogs);
