import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serverUrl from '../constants';
import axios from 'axios';
import './TeamTable.css';

class TeamTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      teams: [],
    };

    this.getPlayer = this.getPlayer.bind(this);
    this.getTeams = this.getTeams.bind(this);
  }

  getPlayer() {
    axios
      .get(serverUrl + '/players/' + this.props.match.params.personId)
      .then(res => {
        this.setState({ player: res.data[0] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getTeams() {
    axios
      .get(serverUrl + '/teams')
      .then(res => {
        this.setState({ teams: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getPlayer();
    this.getTeams();
  }
  render() {
    return (
      <div className='row'>
        <div className='thiscard w-75 offset</div>-1'>
          <div />
          <div className='card-body'>
            <div className='player-title-show'>
              <h1 className='card-title-new'>
                {this.state.player.firstName + ' ' + this.state.player.lastName}
              </h1>
            </div>
            <div className='row'>
              <div className='col-6 team-table'>
                <h2>Where should {this.state.player.firstName} go? </h2>
                {this.state.teams.map((team, i) => (
                  <Link
                    to={`/draftPlayerToTeam/${team._id}/${
                      this.state.player._id
                    }`}
                  >
                    <h2 className='teamName' key={i}>
                      {team.fullName} &nbsp; {team.teamRoster.length}/12
                    </h2>
                  </Link>
                ))}
              </div>
              <div className='col-6'>
                <img
                  className='playerPhoto'
                  src={`https://nba-players.herokuapp.com/players/${
                    this.state.player.lastName
                  }/${this.state.player.firstName}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamTable;
