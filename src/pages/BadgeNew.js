import React from "react";

import "../components/styles/BadgeNew.css";
import header from "../images/master.png";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });

		try {
			await api.badges.create(this.state.form);
			this.setState({ loading: false });

			this.props.history.push("/badges");
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}
		return (
			<React.Fragment>
				<div>
					<div className="BadgeNew__hero">
						<img
							id="header"
							className="BadgeNew__hero-image img-fluid"
							src={header}
							alt="logo"
						/>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-6">
								<Badge
									firstName={this.state.form.firstName || "FIRST   NAME"}
									lastName={this.state.form.lastName || "LAST   NAME"}
									twitter={this.state.form.twitter || "Twitter"}
									jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
									email={this.state.form.email}
									avatarUrl="https://secure.gravatar.com/avatar/02a40743901fd0496253d3e6636c5981?size=80"
								></Badge>
							</div>

							<div className="col-6">
								<h1>New Attendant</h1>
								<BadgeForm
									onChange={this.handleChange}
									onSubmit={this.handleSubmit}
									formValues={this.state.form}
									error={this.state.error}
								/>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
