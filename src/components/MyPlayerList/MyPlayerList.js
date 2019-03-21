import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serverUrl from '../constants';
import axios from 'axios';

import './MyPlayerList.css';
import HomePhotos from '../HomePhotos/HomePhotos';
import PlayerSearchForm from '../PlayerSearchForm/PlayerSearchForm';
import icons from 'glyphicons';

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
                <button className='list-group-item list-group-item-action'>
                  <div className='row'>
                    <div className='double-column'>
                      <h3 className='playerName'>
                        {player.lastName + ', ' + player.firstName}
                      </h3>
                    </div>
                    <Link to={`/playerShow/${player.personId}`}>
                      <p>{icons.magnifyingGlass}</p>
                    </Link>
                    <Link to={`/addPlayerToTeam/${player._id}`}>
                      <button className='btn btn-info'>draft player</button>
                    </Link>
                    <Link to={`/deletePlayer/${player._id}`}>
                      <button className='btn btn-info'>remove</button>
                    </Link>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyPlayerList;
