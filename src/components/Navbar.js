<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
// import logo from "../images/unnamed.png";
=======
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/logo.svg';
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
<<<<<<< HEAD
            <img
              className="Navbar__brand-logo"
              src="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-white.svg"
              alt="logo"
            ></img>
            <span className="fw-light">Dev.f</span>
            <span className="fw-bold">Conf</span>
=======
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
