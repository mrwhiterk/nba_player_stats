import React, { Component } from 'react';
import HomePhotos from '../HomePhotos/HomePhotos';
import { Link } from 'react-router-dom';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='row'>
        <div class='card w-75 offset-1'>
          <div class='card-body'>
            <h4 class='card-title'>Welcome to NBA Roster Manager</h4>
            <p class='card-text'>
              Create and manage all your favorite NBA fantasy teams
            </p>
            <p className='card-text'>
              View stats, and other info from all your favorite athletes
            </p>
            <div className='quick-actions'>
              <Link to='/players'>
                <button class='btn btn-danger'>Start Adding Players</button>
              </Link>
              <Link to='/my-players'>
                <button class='btn btn-danger'>View Your Players</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
