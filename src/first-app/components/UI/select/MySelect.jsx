import React from "react";

const MySelect = ({ options, defaultValue, value }) => {
  return (
    <select value={value}>
      <option value="" disabled>{defaultValue}</option>
      {options.map((item, index) => {
        return <option value={item.value} key={index}>{item.name}</option>;
      })}
    </select>
  );
};

export default MySelect;
