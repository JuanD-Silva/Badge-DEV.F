import React from "react";

import "../components/styles/BadgeDetails.css";
import logo from "../images/master.png";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

export default function BadgeDetails(props) {
	const badge = props.badge;
	return (
		<div>
			<div>
				<div className="BadgeDetails__hero ">
					<div className="container">
						<div className="row">
							<div className="col-6 DivImagen">
								<img className="Master" src={logo} alt="Logo" />
							</div>
							<div className="col-6 BadgeDetails__hero-attendant-name">
								<h1>
									{badge.firstName} {badge.lastName}
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName={badge.firstName}
								lastName={badge.lastName}
								email={badge.email}
								twitter={badge.twitter}
								jobTitle={badge.jobTitle}
							/>
						</div>
						<div className="col">
							<h2>Actions</h2>
							<div>
								<div>
									<Link
										className="btn btn-primary mb-4"
										to={`/badges/${badge.id}/edit`}
									>
										Edit
									</Link>
								</div>

								<div>
									<button
										onClose={props.onCloseModal}
										onClick={props.onOpenModal}
										className="btn btn-danger"
									>
										Delete
									</button>
									<DeleteBadgeModal
										isOpen={props.modalIsOpen}
										onClose={props.onCloseModal}
										onDeleteBadge={props.onDeleteBadge}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
