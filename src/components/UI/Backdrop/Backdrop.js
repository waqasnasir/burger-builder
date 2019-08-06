import React from "react";
import classes from "./Backdrop.module.css";

const backrop = ({ show, onClick }) =>
  show && <div className={classes.Backdrop} onClick={onClick} />;

export default backrop;
