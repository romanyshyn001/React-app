import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {
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

  onStatusChange(event) {
    this.setState({
      status: event.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
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
