import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  onLoginInputChange = (event, fieldId) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [fieldId]: value };
    });
  };

  onLoginSubmit = () => {
    // Clear error message
    this.setState((prevState, props) => {
      return { error: '' };
    });

    // Fire fbLogin action
    // Display error if there is one
    this.props.fbLogin(this.state).catch(error => {
      this.setState((prevState, props) => {
        return { error: error.code };
      });
    });
  };

  render() {
    return (
      <div className="login">
        <TextField
          floatingLabelText="Email"
          onChange={event => {
            this.onLoginInputChange(event, 'email');
          }}
          errorText={this.state.error ? this.state.error : ''}
        />
        <TextField
          floatingLabelText="Password"
          type="password"
          onChange={event => {
            this.onLoginInputChange(event, 'password');
          }}
        />
        <RaisedButton
          className="login-button"
          label="Login"
          primary={true}
          onClick={() => {
            this.onLoginSubmit();
          }}
        />
      </div>
    );
  }
}

export default Login;
