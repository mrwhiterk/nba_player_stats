import React, { Component } from 'react';
import serverUrl from '../constants';
import axios from 'axios';

import './Team.css';
import { Link } from 'react-router-dom';

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {},
    };
    this.getTeam = this.getTeam.bind(this);
    this.deleteTeam = this.deleteTeam.bind(this);
  }

  componentDidMount() {
    this.getTeam();
  }

  getTeam() {
    axios
      .get(serverUrl + '/teams/' + this.props.match.params.teamId)
      .then(res => {
        this.setState({ team: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteTeam() {
    axios
      .delete(serverUrl + '/teams/' + this.props.match.params.teamId)
      .then(res => {
        this.props.history.push('/my-teams');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='card w-75 offset-1'>
        <div className='card-body'>
          <div className='row team-show-header'>
            <h1 className='card-title flex-item'>{this.state.team.fullName}</h1>
            <span />
            <Link to={`/editTeam/${this.state.team._id}`}>
              <button className='btn btn-danger flex-item'>Edit</button>
            </Link>
            <button
              onClick={this.deleteTeam}
              className='btn btn-warning flex-item'>
              Delete
            </button>
          </div>

          <h3 className='card-title'>Roster</h3>
          <ul className='card-text'>
            {this.state.team.teamRoster &&
              this.state.team.teamRoster.map((player, i) => (
                <li key={i} className='rosterItem'>
                  <Link to={`/playerShow/${player.personId}/${false}`}>
                    <h5 className='flex-item'>
                      {player.lastName}, {player.firstName}
                    </h5>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <h4 className='flex-item alt-color'>{player.pos[0]}</h4>
                  <span />
                  <Link to={`/playerShow/${player.personId}/${false}`}>
                    <h4 className='flex-item'>🏀</h4>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link
                    to={`/removePlayerFromTeam/${this.state.team._id}/${
                      player._id
                    }`}>
                    <button className='btn btn-warning flex-item'>
                      remove
                    </button>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
