import React, { Component } from "react";
import { Link } from "react-router-dom";
import master from "../images/master.png";

import "./styles/Home.css";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="container">
					<div className="row">
						<div className="Home__col col-12 col-md-4">
							<h1>Master´s Managment System</h1>
							<Link className="btn btn-primary" to="/badges">
								Start
							</Link>
						</div>
						<div className="Home__col d-none d-md-block col-md-8">
							<img
								src={master}
								alt="Astronautas"
								className="img-fluid p-4 "
							></img>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
