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
import TeamTable from '../TeamTable/TeamTable';

import { league } from '../../players.json';
const playerData = league.standard;

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <nav className='navbar d-flex flex-row justify-content-between navbar-expand-lg navbar-light'>
          <div>
            <Link to='/'>
              <span className='navbar-brand navbar'>NBA Roster Manager</span>
            </Link>
          </div>
          <div>
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
              <ul className='top-nav'>
                <li className='nav-item active'>
                  <Link to='/players'>
                    <h5 className='navLinks nav-link'>Browse</h5>
                  </Link>
                  <span className='sr-only'>(current)</span>
                </li>
                <li className='nav-items'>
                  <Link to='/my-players'>
                    <h5 className='navLinks nav-link'>MyPlayers</h5>
                  </Link>
                </li>

                <li className='nav-item active'>
                  <Link to='/my-teams'>
                    <h5 className='navLinks nav-link'>MyTeams</h5>
                  </Link>
                  <span className='sr-only' />
                </li>
              </ul>
            </div>
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
            path='/playerShow/:personId/:showAddButton'
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
          <Route
            path='/addPlayerToTeam/:personId'
            render={props => <TeamTable {...props} />}
          />
          <Route
            path='/draftPlayerToTeam/:teamId/:id'
            render={props => <AddPlayerToTeam {...props} />}
          />
          <Route
            path='/removePlayerFromTeam/:teamId/:id'
            render={props => <RemovePlayerFromTeam {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const AddPlayerToTeam = props => {
  axios
    .put(
      serverUrl +
        '/teams/' +
        props.match.params.teamId +
        '/add/' +
        props.match.params.id
    )
    .then(res => {
      setTimeout(function() {
        if (res.data.full) {
          alert(res.data.full);
        } else if (res.data.error) {
          alert(res.data.error);
        } else {
          alert(res.data.success);
        }
      }, 500);
      props.history.push('/my-teams');
    })
    .catch(err => {
      console.log(err);
    });
  return <div />;
};

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

const RemovePlayerFromTeam = props => {
  axios
    .put(
      serverUrl +
        '/teams/' +
        props.match.params.teamId +
        '/delete/' +
        props.match.params.id
    )
    .then(res => {
      if (res.data.removedPlayer) {
        alert(res.data.removedPlayer);
      }
      props.history.push('/my-teams');
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
