import React, { Component } from 'react';

export default class PlayerSearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
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
    if (this.props.searchPlayer) {
      this.props.searchPlayer(this.state.name);
    } else if (this.props.searchTeam) {
      this.props.searchTeam(this.state.name);
    }
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='md-form active-pink-2 mb-3 mt-0'>
          <input
            className='form-control'
            type='text'
            aria-label='Search'
            name='name'
            placeholder="type name and press 'enter'"
            onChange={this.handleChange}
            value={this.state.author}
          />
        </div>
      </form>
    );
  }
}
