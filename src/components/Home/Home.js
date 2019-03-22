import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="card w-75 offset-1">
          <div className="card-body col-6">
            <h4 className="card-title">Welcome to NBA Roster Manager</h4>
            <p className="card-text">
              Create and manage all your favorite NBA fantasy teams
            </p>
            <p className="card-text">
              View stats, and other info from all your favorite athletes
            </p>
            {this.props.isLoggedIn === true && (
              <div className="quick-actions">
                <Link to="/players">
                  <button className="btn btn-danger">
                    Start Adding Players
                  </button>
                </Link>
                <Link to="/my-players">
                  <button className="btn btn-danger">View Your Players</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
