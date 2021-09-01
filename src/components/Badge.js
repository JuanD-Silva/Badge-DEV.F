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
						className="Badge__avatar m-0"
						email={this.props.email}
						alt="Avatar"
					/>
					<h1 className="m-3">
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
