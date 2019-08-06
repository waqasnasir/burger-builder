import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = ({ label, onMore, onLess, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}> {label}</div>
      <button className={classes.Less} onClick={onLess} disabled={disabled}>
        Less
      </button>
      <button className={classes.More} onClick={onMore}>
        More
      </button>
    </div>
  );
};

export default buildControl;
