import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import YourBeerPreview from '../components/your_beer_preview';

class AccountScreen extends Component {
  onLogoutSubmit = () => {
    this.props.fbLogout().catch(error => {
      console.log(error);
    });
  };

  // If there is beer info set, display it
  // If there isn't beer info set, display "Add your beer button"
  displayBeerInfo = () => {
    let { beers, userDbInfo } = this.props;

    if (beers) {
      return <YourBeerPreview userDbInfo={userDbInfo} beers={beers} />;
    }

    return (
      <Link to="/your-beer">
        <RaisedButton label="Add Your Beer" primary={true} />
      </Link>
    );
  };

  displayLogoutButton = () => {
    if (this.props.userAuthInfo.loggedIn) {
      return (
        <RaisedButton
          label="Logout"
          secondary={true}
          onClick={() => {
            this.onLogoutSubmit();
          }}
        />
      );
    }
  };

  render() {
    return (
      <div className="account-screen">
        <div className="account-info">
          <h2>{this.props.userDbInfo.email}</h2>
          <h3>Your Beer Info:</h3>
          {this.displayBeerInfo()}
        </div>

        {this.displayLogoutButton()}
      </div>
    );
  }
}

export default AccountScreen;
