import React, { Component } from "react";
import { Link } from "react-router-dom";

import master from "../images/master.png";
import "../components/styles/Badges.css";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import MiniLoader from "../components/MiniLoader";

class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div>
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container"></div>
              <img
                className="Badges_conf-logo"
                src={master}
                alt="Conf Logo"
              ></img>
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New master
              </Link>
            </div>

            <div className="Badges__list">
              <div className="Badges__container"></div>
              <BadgesList badges={this.state.data} />

              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
