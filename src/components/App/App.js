import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Players from '../Players/Players';
import MyPlayerList from '../MyPlayerList/MyPlayerList';
import MyTeamList from '../MyTeamList/MyTeamList';
import Home from '../Home/Home';
import Team from '../Team/Team';
import NewTeamForm from '../NewTeamForm/NewTeamForm';
import EditTeamForm from '../EditTeamForm/EditTeamForm';
import PlayerShow from '../PlayerShow/PlayerShow';
import LogInForm from '../LogInForm/LogInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import axios from 'axios';
import serverUrl from '../constants';
import TeamTable from '../TeamTable/TeamTable';

import { league } from '../../players.json';
const playerData = league.standard;

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post(serverUrl + '/users/signup', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false,
    });
    localStorage.clear();
    this.props.history.push('/users/login');
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post(serverUrl + '/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

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
              <div className='top-nav'>
                <div className='nav-button'>
                  {this.state.isLoggedIn === true && (
                    <Link to='/players'>
                      <h3 className='nav-link'>Browse</h3>
                    </Link>
                  )}
                </div>
                <div className='nav-button'>
                  {this.state.isLoggedIn === true && (
                    <Link to='/my-players'>
                      <h3 className='nav-link'>MyPlayers</h3>
                    </Link>
                  )}
                </div>

                <div className='nav-button'>
                  {this.state.isLoggedIn === true && (
                    <Link to='/my-teams'>
                      <h3 className='nav-link'>MyTeams</h3>
                    </Link>
                  )}
                </div>
                <div className='nav-button'>
                  {this.state.isLoggedIn === false && (
                    <Link to='/users/signup'>
                      <h3 className='nav-link'> Sign Up </h3>
                    </Link>
                  )}
                </div>
                <div className='nav-button'>
                  {this.state.isLoggedIn === false && (
                    <Link to='/users/login'>
                      <h3 className='nav-link'> Log In </h3>
                    </Link>
                  )}
                </div>
                <div className='nav-button'>
                  {this.state.isLoggedIn === true && (
                    <Link to='/users/login' onClick={this.handleLogOut}>
                      <h3 className='nav-link'> Log Out </h3>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route
            path='/'
            exact
            render={props => (
              <Home {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route
            path='/players'
            render={props => (
              <Players {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route path='/my-players' render={() => <MyPlayerList />} />
          <Route
            path='/my-teams'
            render={props => (
              <MyTeamList {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route path='/team/:teamId' render={props => <Team {...props} />} />
          <Route path='/newTeam' render={props => <NewTeamForm {...props} />} />
          <Route
            path='/playerShow/:personId/:showAddButton'
            render={props => (
              <PlayerShow {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
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
          <Route
            path='/users/signup'
            render={props => (
              <SignUpForm
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleSignUp={this.handleSignUp}
              />
            )}
          />
          <Route
            path='/users/login'
            render={props => (
              <LogInForm
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleLogIn={this.handleLogIn}
              />
            )}
          />
          {/* <Link to={`/makePlayerStarter/${player.personId}/`}>
                    <h4 className='flex-item'>Start</h4>
                  </Link> */}
          <Route
            path='/makePlayerStarter/:teamId/:personId'
            render={props => <StartPlayer {...props} />}
          />
          <Route
            path='/deletePlayerStarter/:teamId/:personId'
            render={props => <RemoveStarterPlayer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const StartPlayer = props => {
  axios
    .put(
      serverUrl +
        '/teams/' +
        props.match.params.teamId +
        '/startPlayer/' +
        props.match.params.personId
    )
    .then(res => {
      props.history.push(`/team/${props.match.params.teamId}`);
    })
    .catch(err => {
      console.log(err);
    });
  return <div />;
};

const RemoveStarterPlayer = props => {
  axios
    .put(
      serverUrl +
        '/teams/' +
        props.match.params.teamId +
        '/removeStarterPlayer/' +
        props.match.params.personId
    )
    .then(res => {
      props.history.push(`/team/${props.match.params.teamId}`);
    })
    .catch(err => {
      console.log(err);
    });
  return <div />;
};

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

  playerMatch.isStarter = '0';

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

export default withRouter(App);
