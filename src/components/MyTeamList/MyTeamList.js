import React, { Component } from "react";
import serverUrl from "../constants";
import axios from "axios";

import "./MyTeamList.css";
import HomePhotos from "../HomePhotos/HomePhotos";
import PlayerSearchForm from "../PlayerSearchForm/PlayerSearchForm";
import { Link } from "react-router-dom";

class MyTeamList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamList: [],
      searchTerm: ""
    };

    this.getTeams = this.getTeams.bind(this);
    this.searchTeam = this.searchTeam.bind(this);
    this.teams = [];
  }

  getTeams() {
    axios
      .get(serverUrl + "/teams")
      .then(res => {
        this.setState({ teamList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  searchTeam(term) {
    this.setState({ searchTerm: term.toLowerCase() });
  }

  componentDidMount() {
    this.getTeams();
  }

  render() {
    if (this.state.searchTerm) {
      this.teams = this.state.teamList.filter(team => {
        return team.fullName.toLowerCase().includes(this.state.searchTerm);
      });
    } else {
      this.teams = this.state.teamList;
    }

    return (
      <div className="row">
        <HomePhotos />
        <div className="col-6">
          <PlayerSearchForm searchTeam={this.searchTeam} />
          <Link to="/newTeam">
            <button class="btn btn-info">Create New Team</button>
          </Link>
          {this.teams.map((team, i) => {
            return (
              <Link to={`/team/${team._id}`}>
                <div className="list-group" key={i}>
                  <button className="list-group-item list-group-item-action">
                    <p className="list-group-item-name">{team.fullName}</p>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyTeamList;
