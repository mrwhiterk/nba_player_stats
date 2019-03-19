import React, { Component } from 'react';
import serverUrl from '../constants';
import axios from 'axios';

import './TeamList.css';

class TeamList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
    };

    this.getPlayers = this.getPlayers.bind(this);
  }

  getPlayers() {
    axios
      .get(serverUrl + '/players')
      .then(res => {
        this.setState({ teams: res.data });
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
      <div className='container col-6'>
        {this.state.teams.map((item, i) => {
          return (
            <div className='list-group' key={i}>
              <a href='#' className='list-group-item list-group-item-action'>
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

export default TeamList;
