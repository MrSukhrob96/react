import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((item, index) => {
        return (
          <option value={item.value} key={index}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
