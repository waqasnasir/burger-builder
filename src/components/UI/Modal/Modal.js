import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop";
const modal = props => {
  return (
    <Fragment>
      <Backdrop show={props.show} onClick={props.closeModal} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default modal;
