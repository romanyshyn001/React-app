import React from "react";

export const createField = (
  id,
  name,
  type,
  handleChange,
  handleBlur,
  paramValue,
  placeholder
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
        placeholder={placeholder}
      />
    </div>
  );
};
