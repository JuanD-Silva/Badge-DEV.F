import React from "react";
import "./styles/BadgesList.css";
import tw_logo from "../images/twiter-logo.png";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgeListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem">
				<Gravatar
					className="BadgesListItem__avatar"
					email={this.props.badge.email}
				/>
				<div>
					<strong>
						{this.props.badge.firstName} &nbsp;
						{this.props.badge.lastName}
					</strong>
					<br />
					{this.props.badge.jobTitle}
					<br />
					<img src={tw_logo} className="tw-logo" alt="tw-logo" />
					<span className="twitter__blue-font">{this.props.badge.twitter}</span>
				</div>
			</div>
		);
	}
}

function useSearchBadges(badges) {
	const [query, setQuery] = React.useState("");
	const [filteredBadges, setFilteredBadges] = React.useState(badges);

	React.useMemo(() => {
		const result = badges.filter((badge) => {
			return `${badge.firstName} ${badge.lastName}`
				.toLowerCase()
				.includes(query.toLowerCase());
		});

		setFilteredBadges(result);
	}, [badges, query]);

	return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
	const badges = props.badges;

	const { query, setQuery, filteredBadges } = useSearchBadges(badges);

	if (filteredBadges.length === 0) {
		return (
			<div>
				<div className="form-group">
					<label>Filter Badges </label>
					<input
						type="text"
						className="form-control mt-1 mb-3"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
				</div>
				<h3>No badges were found</h3>
				<Link className="btn btn-primary" to="/badges/new">
					Create new badge
				</Link>
			</div>
		);
	}
	return (
		<div className="BadgesList">
			<div className="form-group">
				<label>Filter Badges </label>
				<input
					type="text"
					className="form-control mt-1 mb-3"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</div>
			<ul className="list-unstyled">
				{filteredBadges.map((badge) => {
					return (
						<li className="Badge__section-name-list" key={badge.id}>
							<Link
								className="text-reset text-decoration-none"
								to={`/badges/${badge.id}`}
							>
								<BadgeListItem badge={badge} />
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default BadgesList;
