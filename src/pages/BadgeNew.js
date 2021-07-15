import React from "react";

import "../components/styles/BadgeNew.css";
import header from "../images/master.png";
import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="BadgeNew__hero">
          <img id="header" className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Juan"
                lastName="Silva"
                twitter="juan_DS"
                jobTitle="Software Developer"
                avatarUrl="https://secure.gravatar.com/avatar/02a40743901fd0496253d3e6636c5981?size=80"
              ></Badge>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
