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
      <div className='row'>
        <div className='card w-75 offset-1'>
          <div className='card-body'>
            <div className='row team-show-header'>
              <h1 className='card-title'>{this.state.team.fullName}</h1>
            </div>
            <Link to={`/editTeam/${this.state.team._id}`}>
              <button className='btn btn-danger'>Edit</button>
            </Link>

            <button onClick={this.deleteTeam} className='btn btn-danger'>
              Delete
            </button>

            <h3 className='card-title'>Roster</h3>
            <ul className='card-text'>
              {this.state.team.teamRoster &&
                this.state.team.teamRoster.map((player, i) => (
                  <Link to={`/playerShow/${player.personId}`}>
                    <li key={i} className='rosterItem'>
                      <h5>
                        {player.lastName}, {player.firstName}
                      </h5>
                      <h5>{player.pos[0]}</h5>
                      <Link
                        to={`/removePlayerFromTeam/${this.state.team._id}/${
                          player._id
                        }`}>
                        <button className='btn btn-info'>remove</button>
                      </Link>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
