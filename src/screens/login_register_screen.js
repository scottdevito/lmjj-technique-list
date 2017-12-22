import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { Redirect } from 'react-router-dom';

import Login from '../components/login';
import Register from '../components/register';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class LoginRegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    if (this.props.userAuthInfo.loggedIn) {
      return <Redirect to="/main" />;
    }
    return (
      <div className="app-title">
        <h1 className="hide-for-mobile">Bad Beer Tasting</h1>
        <img
          className="hide-for-mobile"
          src="https://s3.amazonaws.com/bad-beer-tasting/Trash+Medal.svg"
          alt="logo"
        />
        <div className="login-register">
          <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
            <Tab label="Register" value={0} />
            <Tab label="Login" value={1} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div style={styles.slide}>
              <Register fbRegister={this.props.fbRegister} />
            </div>
            <div style={styles.slide}>
              <Login fbLogin={this.props.fbLogin} />
            </div>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

export default LoginRegisterScreen;
