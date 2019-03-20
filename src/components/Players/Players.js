import React, { Component } from "react";
import { Link } from "react-router-dom";
import { league } from "../../players.json";
import "./Players.css";
import PlayerSearchForm from "../PlayerSearchForm/PlayerSearchForm";
import HomePhotos from "../HomePhotos/HomePhotos.js";

const players = league.standard;

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.searchPlayer = this.searchPlayer.bind(this);
    this.getPlayers = this.getPlayers.bind(this);
  }

  getPlayers() {
    return players.filter(player => {
      return !this.state.searchTerm
        ? true
        : player.lastName.toLowerCase().includes(this.state.searchTerm) ||
            player.firstName.toLowerCase().includes(this.state.searchTerm);
    });
  }

  searchPlayer(term) {
    this.setState({ searchTerm: term.toLowerCase() });
  }

  render() {
    return (
      <div className="row">
        <HomePhotos />
        <div className="col-6">
          <PlayerSearchForm searchPlayer={this.searchPlayer} />
          {this.getPlayers().map((player, i) => {
            return (
              <Link to={`/playerShow/${player.personId}`}>
                <div className="list-group" key={i}>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    <p>{player.lastName + ", " + player.firstName}</p>
                    <p>{player.pos[0]}</p>
                  </a>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Players;
