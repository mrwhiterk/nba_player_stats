import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Players from "../Players/Players";
<<<<<<< HEAD
import HomePhotos from "../HomePhotos/HomePhotos";
import MyPlayerList from "../MyPlayerList/MyPlayerList";
import Home from "../Home/Home";
import PlayerShow from "../PlayerShow/PlayerShow";

=======
import MyPlayerList from "../MyPlayerList/MyPlayerList";
import MyTeamList from "../MyTeamList/MyTeamList";
import Home from "../Home/Home";
import Team from "../Team/Team";
import NewTeamForm from "../NewTeamForm/NewTeamForm";
>>>>>>> upstream/master
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
<<<<<<< HEAD
        <nav class="navbar navbar-expand-lg navbar-light">
=======
        <nav className="navbar navbar-expand-lg navbar-light">
>>>>>>> upstream/master
          <Link to="/">
            <span className="navbar-brand navbar">NBA Roster Manager</span>
          </Link>
          <button
<<<<<<< HEAD
            class="navbar-toggler"
=======
            className="navbar-toggler"
>>>>>>> upstream/master
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
<<<<<<< HEAD
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link">
                  <Link to="/players">
                    <h3 className="home">Browse</h3>
                  </Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
=======
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link">
                  <Link to="/players">
                    <h3 className="home">Browse</h3>
                  </Link>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
>>>>>>> upstream/master
                  <Link to="/my-players">
                    <h3 className="home">MyPlayers</h3>
                  </Link>
                </a>
              </li>
<<<<<<< HEAD
              <li class="nav-item active">
                <a class="nav-link">
                  <Link to="/teams">
                    <h3 className="home">MyTeams</h3>
                  </Link>
                  <span class="sr-only" />
=======
              <li className="nav-item active">
                <a className="nav-link">
                  <Link to="/my-teams">
                    <h3 className="home">MyTeams</h3>
                  </Link>
                  <span className="sr-only" />
>>>>>>> upstream/master
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/players" render={() => <Players />} />
          <Route path="/my-players" render={() => <MyPlayerList />} />
<<<<<<< HEAD
          <Route path="/player-card" render={() => <PlayerShow />} />
=======
          <Route path="/my-teams" render={() => <MyTeamList />} />
          <Route path="/team/:teamId" render={props => <Team {...props} />} />
          <Route path="/newTeam" render={props => <NewTeamForm {...props} />} />
>>>>>>> upstream/master
        </Switch>
      </div>
    );
  }
}

export default App;
