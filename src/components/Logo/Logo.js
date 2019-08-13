import React from "react";
import LogoImage from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";
const Logo = () => (
  <div className={classes.Logo}>
    <img src={LogoImage} alt="Logo" />
  </div>
);

export default Logo;
