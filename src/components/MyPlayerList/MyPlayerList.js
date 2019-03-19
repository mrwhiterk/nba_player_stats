import React, { Component } from 'react';
import serverUrl from '../constants';
import axios from 'axios';

import './MyPlayerList.css';
import HomePhotos from '../HomePhotos/HomePhotos';

class MyPlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerList: [],
    };

    this.getPlayers = this.getPlayers.bind(this);
  }

  getPlayers() {
    axios
      .get(serverUrl + '/players')
      .then(res => {
        this.setState({ playerList: res.data });
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
      <div className='row'>
        <HomePhotos />
        <div className='col-6'>
          {this.state.playerList.map((player, i) => {
            return (
              <div className='list-group' key={i}>
                <a href='#' className='list-group-item list-group-item-action'>
                  <p>{player.lastName + ', ' + player.firstName}</p>
                  <p>{player.pos[0]}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyPlayerList;
