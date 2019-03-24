import React, { Component } from 'react';
import './SignUpForm';

class SignUpForm extends Component {
  render() {
    return (
      <div className='auth'>
        <h2>Sign Up</h2>

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

          <div className='form-group'>
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
            onClick={this.props.handleSignUp}
          />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
