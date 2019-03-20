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
      playerCard: []
    };
    this.getCard = this.getCard.bind(this);
    this.players = [];
  }
  componentDidMount() {
    this.getCard();
  }
  getCard() {
    return players.find(player => {
      return player.firstname || player.lastName;
    });
  }

  render() {
    //return players.find((players, i) => {
    return (
      <span>
        {players.map(function(player) {
          return (
            <div className="row">
              <div class="card w-75 offset</div>-1">
                <div class="card-body">
                  <div class="player-title-show">
                    <h1 class="card-title">
                      {player.firstName +
                        " " +
                        player.lastName +
                        " " +
                        player.jersey}
                    </h1>
                  </div>
                  <h2>Position: {player.pos}</h2>
                  <h2>
                    Height:{" "}
                    {player.heightFeet + "'" + player.heightInches + '"'}
                  </h2>
                  <h2>Weight: {player.weightPounds}</h2>
                  <h2>Years Pro: {player.yearsPro}</h2>
                  <h2>College: {player.collegeName}</h2>
                </div>
              </div>
            </div>
          );
        })}
        )
      </span>
    );
  }
}

export default PlayerShow;

/* Rookie Year
Years Pro: (if ({players.yearsPro} === 0){
                        return "rookie"
    })else{players.yearsPro}</p>
    */
