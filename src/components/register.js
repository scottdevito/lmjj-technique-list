import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  onRegisterInputChange = (event, fieldId) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [fieldId]: value };
    });
  };

  onRegisterSubmit = () => {
    // Clear error message
    this.setState((prevState, props) => {
      return { error: '' };
    });

    // Fire fbRegister action
    // Display error if there is one
    this.props.fbRegister(this.state).catch(error => {
      this.setState((prevState, props) => {
        return { error: error.code };
      });
    });
  };

  render() {
    return (
      <div className="register">
        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={event => {
            this.onRegisterInputChange(event, 'email');
          }}
          errorText={this.state.error ? this.state.error : ''}
        />
        <TextField
          hintText="Create a password"
          floatingLabelText="Password"
          type="password"
          onChange={event => {
            this.onRegisterInputChange(event, 'password');
          }}
        />
        <RaisedButton
          className="register-button"
          label="Register"
          primary={true}
          onClick={() => {
            this.onRegisterSubmit();
          }}
        />
      </div>
    );
  }
}

export default Register;
