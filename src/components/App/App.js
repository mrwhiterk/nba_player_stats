import React, { Component } from "react";
import "./App.css";
import Players from "../Players/Players";
import Header from "../Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Players />
      </div>
    );
  }
}

export default App;
