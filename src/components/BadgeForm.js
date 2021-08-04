<<<<<<< HEAD
import React from "react";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
=======
import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
    console.log(this.state);
  };

  render() {
    return (
      <div>
<<<<<<< HEAD
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <br />
=======
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

<<<<<<< HEAD
          <br></br>
          <div className="form-group">
            <label>Last Name</label>
            <br />
=======
          <div className="form-group">
            <label>Last Name</label>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

<<<<<<< HEAD
          <br></br>
          <div className="form-group">
            <label>Email</label>
            <br />
=======
          <div className="form-group">
            <label>Email</label>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

<<<<<<< HEAD
          <br></br>
          <div className="form-group">
            <label>Job Title</label>
            <br />
=======
          <div className="form-group">
            <label>Job Title</label>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

<<<<<<< HEAD
          <br></br>
          <div className="form-group">
            <label>Twitter</label>
            <br />
=======
          <div className="form-group">
            <label>Twitter</label>
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
<<<<<<< HEAD
          <br />
=======
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
<<<<<<< HEAD

          {this.props.error && (
            <p className="text-danger mb-3" role="alert">
              {this.props.error.message}
            </p>
          )}
=======
>>>>>>> 7ad536f94341d1cd0e2f9b470b3dee61de11345e
        </form>
      </div>
    );
  }
}

export default BadgeForm;
