import React, { Component } from "react";
import "./App.css";
import Players from "../Players/Players";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Players />
      </div>
    );
  }
}

export default App;
