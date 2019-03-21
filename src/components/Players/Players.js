import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { league } from '../../players.json';
import './Players.css';
import PlayerSearchForm from '../PlayerSearchForm/PlayerSearchForm';
import HomePhotos from '../HomePhotos/HomePhotos.js';
import icons from 'glyphicons';

const players = league.standard;

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
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
      <div className='row'>
        <HomePhotos />
        <div className='col-6'>
          <PlayerSearchForm searchPlayer={this.searchPlayer} />
          {this.getPlayers().map((player, i) => {
            return (
              <div className='list-group' key={i}>
                <div
                  href='#'
                  className='list-group-item list-group-item-action'>
                  <h3>{player.lastName + ', ' + player.firstName}</h3>

                  <Link to={`/playerShow/${player.personId}`}>
                    <p>{icons.magnifyingGlass}</p>
                  </Link>
                  <Link to={`/addPlayerToList/${player.personId}`}>
                    <button className='btn btn-info'>Add to My List</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Players;
