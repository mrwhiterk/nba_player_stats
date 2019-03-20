import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serverUrl from '../constants';
import axios from 'axios';

import './MyPlayerList.css';
import HomePhotos from '../HomePhotos/HomePhotos';
import PlayerSearchForm from '../PlayerSearchForm/PlayerSearchForm';

class MyPlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerList: [],
      searchTerm: '',
    };

    this.getPlayers = this.getPlayers.bind(this);
    this.searchPlayer = this.searchPlayer.bind(this);
    this.players = [];
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
  searchPlayer(term) {
    this.setState({ searchTerm: term.toLowerCase() });
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    if (this.state.searchTerm) {
      this.players = this.state.playerList.filter(player => {
        return (
          player.lastName.toLowerCase().includes(this.state.searchTerm) ||
          player.firstName.toLowerCase().includes(this.state.searchTerm)
        );
      });
    } else {
      this.players = this.state.playerList;
    }

    return (
      <div className='row'>
        <HomePhotos />
        <div className='col-6'>
          <PlayerSearchForm searchPlayer={this.searchPlayer} />
          {this.players.map((player, i) => {
            return (
              <div className='list-group' key={i}>
                <Link to={`/playerShow/${player.personId}`}>
                  <button className='list-group-item list-group-item-action'>
                    <p>{player.lastName + ', ' + player.firstName}</p>
                    <p>{player.pos[0]}</p>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyPlayerList;
