import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<Link className="Navbar__brand" to="/">
						<img
							className="Navbar__brand-logo"
							src="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-white.svg"
							alt="logo"
						></img>
						<span className="fw-light">Dev.f</span>
						<span className="fw-bold">Conf</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
