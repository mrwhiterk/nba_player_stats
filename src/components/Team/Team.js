import React, { Component } from "react";
import serverUrl from "../constants";
import axios from "axios";

import "./Team.css";

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {},
    };
    this.getTeam = this.getTeam.bind(this);
  }

  componentDidMount() {
    this.getTeam();
  }

  getTeam() {
    axios
      .get(serverUrl + "/teams/" + this.props.match.params.teamId)
      .then(res => {
        console.log(res.data);
        this.setState({ team: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const date = new Date(this.state.team.createdAt);
    return (
      <div className="row">
        <div className="card w-75 offset-1">
          <div className="card-body">
            <div class="row team-show-header">
              <h1 className="card-title">{this.state.team.fullName}</h1>
              <h4>Created: {date.toDateString()}</h4>
            </div>
            <h3 className="card-title">Roster</h3>
            <ul className="card-text">
              {this.state.team.teamRoster &&
                this.state.team.teamRoster.map((player, i) => (
                  <li key={i} class="rosterItem">
                    <h5>
                      {player.lastName}, {player.firstName}
                    </h5>
                    <h5>{player.pos[0]}</h5>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
