import React, { Component } from 'react';
import { league } from '../../players.json';
import './Players.css';

const players = league.standard;

class Players extends Component {
  render() {
    return (
      <div>
        {players.map(item => {
          return (
            <div class='list-group'>
              <a href='#' class='list-group-item list-group-item-action'>
                <p>{item.lastName + ', ' + item.firstName}</p>
                <p>{item.pos[0]}</p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Players;
