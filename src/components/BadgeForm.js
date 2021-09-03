import React from "react";

class BadgeForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="firstName"
							value={this.props.formValues.firstName}
						/>
					</div>

					<div className="form-group">
						<label>Last Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="lastName"
							value={this.props.formValues.lastName}
						/>
					</div>

					<br></br>
					<div className="form-group">
						<label>Email</label>
						<br />
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="email"
							name="email"
							value={this.props.formValues.email}
						/>
					</div>

					<br></br>
					<div className="form-group">
						<label>Job Title</label>
						<br />
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="jobTitle"
							value={this.props.formValues.jobTitle}
						/>
					</div>

					<br></br>
					<div className="form-group">
						<label>Twitter</label>
						<br />
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="twitter"
							value={this.props.formValues.twitter}
						/>
					</div>
					<br />

					<button onClick={this.handleClick} className="btn btn-primary">
						Save
					</button>

					{this.props.error && (
						<p className="text-danger mb-3" role="alert">
							{this.props.error.message}
						</p>
					)}
				</form>
			</div>
		);
	}
}

export default BadgeForm;
