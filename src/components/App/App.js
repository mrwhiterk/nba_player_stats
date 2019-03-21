import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Players from '../Players/Players';
import MyPlayerList from '../MyPlayerList/MyPlayerList';
import MyTeamList from '../MyTeamList/MyTeamList';
import Home from '../Home/Home';
import Team from '../Team/Team';
import NewTeamForm from '../NewTeamForm/NewTeamForm';
import EditTeamForm from '../EditTeamForm/EditTeamForm';
import PlayerShow from '../PlayerShow/PlayerShow';
import axios from 'axios';
import serverUrl from '../constants';

import { league } from '../../players.json';
const playerData = league.standard;

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link to='/'>
            <span className='navbar-brand navbar'>NBA Roster Manager</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <div className='nav-link'>
                  <Link to='/players'>
                    <h3 className='home'>Browse</h3>
                  </Link>
                  <span className='sr-only'>(current)</span>
                </div>
              </li>
              <li className='nav-item'>
                <div className='nav-link'>
                  <Link to='/my-players'>
                    <h3 className='home'>MyPlayers</h3>
                  </Link>
                </div>
              </li>

              <li className='nav-item active'>
                <div className='nav-link'>
                  <Link to='/my-teams'>
                    <h3 className='home'>MyTeams</h3>
                  </Link>
                  <span className='sr-only' />
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/players' render={() => <Players />} />
          <Route path='/my-players' render={() => <MyPlayerList />} />
          <Route path='/my-teams' render={() => <MyTeamList />} />
          <Route path='/team/:teamId' render={props => <Team {...props} />} />
          <Route path='/newTeam' render={props => <NewTeamForm {...props} />} />
          <Route
            path='/playerShow/:personId'
            render={props => <PlayerShow {...props} />}
          />
          <Route
            path='/editTeam/:teamId'
            render={props => <EditTeamForm {...props} />}
          />
          <Route
            path='/deletePlayer/:id'
            render={props => <RemovePlayerFromList {...props} />}
          />
          <Route
            path='/addPlayerToList/:personId'
            render={props => <AddPlayerToList {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const RemovePlayerFromList = props => {
  axios
    .delete(serverUrl + '/players/' + props.match.params.id)
    .then(res => {
      props.history.push('/my-players');
    })
    .catch(err => {
      console.log(err);
    });
  return <div />;
};

const AddPlayerToList = props => {
  let playerMatch = playerData.find(
    player => player.personId === props.match.params.personId
  );

  axios
    .post(serverUrl + '/players/', playerMatch)
    .then(res => {
      setTimeout(() => {
        res.data.data
          ? alert(
              `${playerMatch.firstName} ${
                playerMatch.lastName
              } is already on your list`
            )
          : alert(
              `successfully added ${res.data.firstName} ${
                res.data.lastName
              } to your list`
            );
      }, 500);

      props.history.push('/players');
    })
    .catch(err => {
      console.log(err);
    });

  return <div />;
};

export default App;
