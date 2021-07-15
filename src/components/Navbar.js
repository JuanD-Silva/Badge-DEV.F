import React from "react";

import "./styles/Navbar.css";
// import logo from "../images/unnamed.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img
              className="Navbar__brand-logo"
              src="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-white.svg"
              alt="logo"
            ></img>
            <span className="fw-light">Dev.f</span>
            <span className="fw-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
