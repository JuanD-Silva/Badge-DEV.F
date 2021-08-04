<<<<<<< HEAD
import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
=======
import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
