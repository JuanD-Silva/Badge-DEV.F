<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router-dom";
import master from "../images/master.png";
import "../components/styles/Home.css";
import logo from "../images/logo-devf-negro.png";

class Home extends Component {
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';

export default class Home extends Component {
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
<<<<<<< HEAD
              <img src={logo} alt="logo" className="img-fluid mb-2" />
              <h1>Master´s Managment System</h1>
=======
              <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Badge Management System</h1>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>
<<<<<<< HEAD
            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={master}
                alt="Astronautas"
                className="img-fluid p-4"
              ></img>
=======

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            </div>
          </div>
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD

export default Home;
=======
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
