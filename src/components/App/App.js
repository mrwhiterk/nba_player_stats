import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import Players from "../Players/Players";
import MyPlayerList from "../MyPlayerList/MyPlayerList";
import MyTeamList from "../MyTeamList/MyTeamList";
import Home from "../Home/Home";
import Team from "../Team/Team";
import PlayerShow from "../PlayerShow/PlayerShow";
import NewTeamForm from "../NewTeamForm/NewTeamForm";
import EditTeamForm from "../EditTeamForm/EditTeamForm";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
          <Link to="/">
            <span className="navbar-brand navbar">NBA Roster Manager</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
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
                  <Link to="/my-players">
                    <h3 className="home">MyPlayers</h3>
                  </Link>
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link">
                  <Link to="/my-teams">
                    <h3 className="home">MyTeams</h3>
                  </Link>
                  <span className="sr-only" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/players" render={() => <Players />} />
          <Route path="/my-players" render={() => <MyPlayerList />} />
          <Route path="/my-teams" render={() => <MyTeamList />} />
          <Route path="/team/:teamId" render={props => <Team {...props} />} />
          <Route path="/newTeam" render={props => <NewTeamForm {...props} />} />
          <Route path="/player-card" render={() => <PlayerShow />} />
          <Route
            path="/editTeam/:teamId"
            render={props => <EditTeamForm {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
