import React, { Component } from "react";
import "./NewTeamForm.css";
import axios from "axios";
import serverUrl from "../constants";

export default class NewTeamForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    axios
      .post(serverUrl + "/teams", {
        fullName: this.state.fullName,
        teamRoster: [],
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(_ => this.props.history.push("/my-teams"));
  }

  render() {
    return (
      <div class="container">
        <h1>Add a new team</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="fullName"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.fullName}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
