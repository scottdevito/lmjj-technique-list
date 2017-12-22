import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';

import AppBarNavContainer from './containers/app_bar_nav.C';
import LoginRegisterScreenContainer from './containers/login_register_screen.C';
import MainScreenContainer from './containers/main_screen.C';
import ResultsScreenContainer from './containers/results_screen.C';
import RulesScreen from './screens/rules_screen';
import YourBeerScreenContainer from './containers/your_beer_screen.C';
import VoteScreenContainer from './containers/vote_screen.C';
import AccountScreenContainer from './containers/account_screen.C';
import BeersListScreenContainer from './containers/beers_list_screen.C';
import PrivateRouteContainer from './containers/private_route.C';

class App extends Component {
  componentWillMount() {
    // Listen for Auth Changes
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.fbLoginPersist(user);
      } else {
        this.props.fbLogout();
      }
    });
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="app">
            <AppBarNavContainer />

            <Route exact path="/" component={LoginRegisterScreenContainer} />
            <PrivateRouteContainer
              path="/main"
              component={MainScreenContainer}
            />
            <PrivateRouteContainer
              path="/your-beer"
              component={YourBeerScreenContainer}
            />
            <PrivateRouteContainer
              path="/beers-list"
              component={BeersListScreenContainer}
            />
            <PrivateRouteContainer
              path="/vote"
              component={VoteScreenContainer}
            />
            <PrivateRouteContainer
              path="/results"
              component={ResultsScreenContainer}
            />
            <PrivateRouteContainer path="/rules" component={RulesScreen} />
            <PrivateRouteContainer
              path="/account"
              component={AccountScreenContainer}
            />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
