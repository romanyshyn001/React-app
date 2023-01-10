import Input from "antd/es/input";
import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props:any) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeMode = () => {
    setEditMode(true);
  };
  const deactivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (event:any) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <b>Status:</b>
          <span onDoubleClick={activeMode}>{props.status || "-----"}</span>
        </div>
      )}
      {editMode && (
        <div><p><b>Status:</b></p>
          <Input
            onChange={onStatusChange}
            onBlur={deactivatedEditMode}
            autoFocus={true}
            value={status}
          ></Input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
