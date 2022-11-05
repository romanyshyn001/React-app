import React from "react";

export const createField = (
  id: any,
  name: string,
  type: string,
  handleChange: any,
  handleBlur: any,
  paramValue: any,
  // placeholder: string
) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={paramValue}
        // placeholder={placeholder}
      />
    </div>
  );
};
