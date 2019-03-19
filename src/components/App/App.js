import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import TeamList from '../TeamList/TeamList';
import HomePhotos from '../HomePhotos/HomePhotos';
import Players from '../Players/Players';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <div className='row'>
          <HomePhotos />
          <Players />
        </div>
      </div>
    );
  }
}

export default App;
