import React, { Component } from 'react';
import './LogInForm.css';

class LogInForm extends Component {
  render() {
    return (
      <div className='auth'>
        <h2>Log In</h2>

        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              id='exampleFormControlInput1'
              type='email'
              name='email'
              onChange={this.props.handleInput}
            />
          </div>
          <div lassName='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              className='form-control'
              id='exampleFormControlInput1'
              type='password'
              name='password'
              onChange={this.props.handleInput}
            />
          </div>
          <input
            class='btn btn-info m-3'
            value='Submit'
            type='submit'
            onClick={this.props.handleLogIn}
          />
        </form>
      </div>
    );
  }
}

export default LogInForm;
