import s from "./ProfileInfo.module.css";
import React, { ChangeEvent } from "react";



type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}
type StateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState((state) => ({
      editMode: false,
    }));
    this.props.updateStatus(this.state.status);
  };

  onStatusChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      status: event.target.value,
    });
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {" "}
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || "-----"}
            </span>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}
              autoFocus={true}
              onChange={this.onStatusChange.bind(this)}
            ></input>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
