import React, { Component } from 'react';
import './App.css';
import Players from '../Players/Players';
import Header from '../Header/Header';
import HomePhotos from '../HomePhotos/HomePhotos';

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
