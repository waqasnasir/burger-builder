import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar";
const Layout = props => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);

export default Layout;
