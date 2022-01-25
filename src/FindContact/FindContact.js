import React from "react";
import style from "./find.module.css";

const FindContact = ({ filter, change }) => (
  <label htmlFor="" className={style.font}>
    {" "}
    Find contact:
    <input
      className={style.find__font}
      type="text"
      value={filter}
      onChange={change}
    />
  </label>
);

export default FindContact;
