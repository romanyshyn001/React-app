import React from "react";
import { Input } from 'antd';

export const createField = (
  id: any,
  name: string,
  type: string,
  handleChange: any,
  handleBlur: any,
  paramValue: any,
  placeholder?: string,
  style?: any
) => {

  return (
    <div>
      <Input
        id={id}
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={paramValue}
        placeholder={placeholder}
        className={style}
      />
    </div>
  );
};
