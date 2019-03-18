import React, { Component } from "react";
import { league } from "../players.json";

const players = league.standard;

class Players extends Component {
  render() {
    let list = players.map(item => {
      return (
        <div className="list">
          <p>{item.firstName + " " + item.lastName}</p>
        </div>
      );
    });

    return <div>{list}</div>;
  }
}

export default Players;
