import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Players from '../Players/Players';
import HomePhotos from '../HomePhotos/HomePhotos';
import TeamList from '../TeamList/TeamList';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <nav class='navbar navbar-expand-lg'>
          <Link to='/'>NBA Roster Manager</Link>

          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon' />
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav'>
              <li class='nav-item active'>
                <a class='nav-link'>
                  <Link to='/players'>
                    <h3 className='home'>Browse</h3>
                  </Link>
                  <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link'>
                  <Link to='/new'>
                    <h3 className='home'>MyTeams</h3>
                  </Link>
                </a>
              </li>
              <li class='nav-item active'>
                <a class='nav-link'>
                  <Link to='/new'>
                    <h3 className='home'>MyPlayers</h3>
                  </Link>
                  <span class='sr-only' />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/players' render={() => <Players />} />
        </Switch>
      </div>
    );
  }
}

export default App;
