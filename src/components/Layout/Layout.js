import React, { Fragment } from "react";

const Layout = props => (
  <Fragment>
    <div>Toolbar, Drawer, Backdrop</div>
    <main>{props.children}</main>
  </Fragment>
);

export default Layout;
