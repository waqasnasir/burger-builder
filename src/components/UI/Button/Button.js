import React from "react";
import classes from "./Button.module.css";

const button = ({ btnType, children, onClick }) => (
  <button
    onClick={onClick}
    className={[classes.Button, classes[btnType]].join(" ")}
  >
    {children}
  </button>
);

export default button;
