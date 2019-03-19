import React, { Component } from 'react';
import './App.css';
import Players from '../Players/Players';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <img src='https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/s3/2018-08/leaguev3.jpeg?itok=b1Ef6wg9' />
          </div>

          <div className='col-6'>
            <Players />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
