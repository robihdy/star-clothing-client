import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

export class SignIn extends Component {
  constructor() {
    super();

    this.state = { email: '', password: '' };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="email"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="password"
              name="password"
              label="password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />

            <CustomButton type="submit">Sign in</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
