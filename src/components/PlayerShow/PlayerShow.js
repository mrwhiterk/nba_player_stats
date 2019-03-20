import React, { Component } from "react";
import serverUrl from "../constants";
import axios from "axios";
import { league } from "../../players.json";
import "./PlayerShow.css";

const players = league.standard;

class PlayerShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      ...players.find(
        player => player.personId === this.props.match.params.personId
      )
    });
  }

  render() {
    return (
      <div className="row">
        <div class="card w-75 offset</div>-1">
          <div class="card-body">
            <div class="player-title-show">
              <h1 class="card-title">
                {this.state.firstName +
                  " " +
                  this.state.lastName +
                  " " +
                  this.state.jersey}
              </h1>
            </div>
            <h2>Position: {this.state.pos}</h2>
            <h2>
              Height:{" "}
              {this.state.heightFeet + "'" + this.state.heightInches + '"'}
            </h2>
            <h2>Weight: {this.state.weightPounds}</h2>
            <h2>Years Pro: {this.state.yearsPro}</h2>
            <h2>College: {this.state.collegeName}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerShow;
