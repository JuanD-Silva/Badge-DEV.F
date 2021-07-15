import React from "react";

import "./styles/Badge.css";
// import confLogo from "../images/unnamed.png";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img
            src="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-white.svg"
            alt="Logo de la marca"
          />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">#dev.f Staff</div>
      </div>
    );
  }
}

export default Badge;
