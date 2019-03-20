import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Players from "../Players/Players";
import HomePhotos from "../HomePhotos/HomePhotos";
import MyPlayerList from "../MyPlayerList/MyPlayerList";
import Home from "../Home/Home";
import PlayerShow from "../PlayerShow/PlayerShow";

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
              <li class="nav-item active">
                <a class="nav-link">
                  <Link to="/teams">
                    <h3 className="home">MyTeams</h3>
                  </Link>
                  <span class="sr-only" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/players" render={() => <Players />} />
          <Route path="/my-players" render={() => <MyPlayerList />} />
          <Route path="/player-card" render={() => <PlayerShow />} />
        </Switch>
      </div>
    );
  }
}

export default App;
