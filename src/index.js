import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App";
import PlayerData from "./PlayerData/PlayerData";

ReactDOM.render(
  <Router>
    <App />
    <PlayerData />
  </Router>,
  document.getElementById("root")
);
