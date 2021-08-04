import React from "react";

import "../components/styles/BadgeEdit.css";
import header from "../images/master.png";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
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
          <div className="BadgeEdit__hero">
            <img id="header" className="img-fluid" src={header} alt="logo" />
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
                <h1>Edit Attendant</h1>
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

export default BadgeEdit;
