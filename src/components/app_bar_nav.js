import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router-dom';

import AppDrawer from './app_drawer';

class AppBarNav extends Component {
  render() {
    return (
      <AppBar
        title="Bad Beer Tasting"
        iconElementLeft={
          <AppDrawer
            userAuthInfo={this.props.userAuthInfo}
            gameInfo={this.props.gameInfo}
          />
        }
        iconElementRight={
          <FlatButton
            className="rules-explained-button"
            label={<Link to="/account">{this.props.userDbInfo.email}</Link>}
          />
        }
      />
    );
  }
}

export default AppBarNav;
