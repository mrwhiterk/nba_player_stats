import React, { Component } from 'react';
import './EditTeamForm.css';
import axios from 'axios';
import serverUrl from '../constants';

export default class EditTeamForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(serverUrl + '/teams/' + this.props.match.params.teamId)
      .then(res => {
        this.setState({ ...res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateTeam() {
    axios
      .put(serverUrl + '/teams/' + this.state._id, this.state)
      .then(function(response) {})
      .finally(() => {
        this.props.history.push(`/team/${this.state._id}`);
      });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.updateTeam();
  }

  render() {
    return (
      <div className='container'>
        <h1>Edit team</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Name</label>
            <input
              type='text'
              name='fullName'
              onChange={this.handleChange}
              className='form-control'
              value={this.state.fullName}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
