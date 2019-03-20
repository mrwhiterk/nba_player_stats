import React, { Component } from "react";
import serverUrl from "../constants";
import axios from "axios";
import { league } from "../../players.json";
import "./PlayerShow.js";

const player = league.standard;

class PlayerShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCard: []
    };
    this.getPlayers = this.getPlayers.bind(this);
  }
  getPlayers() {
    axios
      .get(serverUrl + "/players")
      .then(res => {
        this.setState({ playerCard: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getPlayers();
  }
  render() {
    return (
      <div className="row">
        <div class="card w-75 offset</div>-1">
          <div class="card-body">
            <h1 class="card-title">
              {player.firstName + ", " + player.lastName}
            </h1>
            <h1>HelloWorld</h1>;
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerShow;
