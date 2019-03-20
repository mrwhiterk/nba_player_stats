import React, { Component } from "react";
import serverUrl from "../constants";
import axios from "axios";
import { league } from "../../players.json";
import "./PlayerShow.css";

const players = league.standard;

class PlayerShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: []
    };
  }

  componentDidMount() {
    this.setState({
      player: players.find(
        player => player.personId === this.props.match.params.personId
      )
    });
  }

  render() {
    return (
      <div className="row">
        <div className="card w-75 offset</div>-1">
          <div className="card-body">
            <div className="player-title-show">
              <h1 className="card-title">
                {this.state.player.firstName + " " + this.state.player.lastName}
                <h1> {this.state.player.jersey} </h1>
              </h1>
            </div>
            <div className="content">
              <h2>Position: {this.state.player.pos}</h2>
              <h2>
                Height:{" "}
                {this.state.player.heightFeet +
                  "'" +
                  this.state.player.heightInches +
                  '"'}
              </h2>
              <h2>Weight: {this.state.player.weightPounds}</h2>
              <h2>Years Pro: {this.state.player.yearsPro}</h2>
              <h2>College: {this.state.player.collegeName}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerShow;
