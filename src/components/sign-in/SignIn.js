import React, { Component } from 'react';

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './SignInStyles.scss';

export default class SignIn extends Component {
  // define our state
  state = {
    email: '',
    password: ''
  };
  //define our custom methods
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };
  // handle Change Method
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
