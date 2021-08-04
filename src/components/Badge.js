<<<<<<< HEAD
import React from "react";

import "./styles/Badge.css";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img
            src="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-white.svg"
            alt="Logo de la marca"
          />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
=======
import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
          </h1>
        </div>

        <div className="Badge__section-info">
<<<<<<< HEAD
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">#dev.f Staff</div>
=======
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
      </div>
    );
  }
}

export default Badge;
