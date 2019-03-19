import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Players from "../Players/Players";
import Header from "../Header/Header";
import HomePhotos from "../HomePhotos/HomePhotos";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            NBA Roster Manager
          </a>
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
                  <Link to="/new">
                    <h3 className="home">Browse</h3>
                  </Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/new">
                    <h3 className="home">MyTeams</h3>
                  </Link>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link">
                  <Link to="/new">
                    <h3 className="home">MyPlayers</h3>
                  </Link>
                  <span class="sr-only" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <HomePhotos />
          <Players />
        </div>
      </div>
    );
  }
}

export default App;
