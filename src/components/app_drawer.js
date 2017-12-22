import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionList from 'material-ui/svg-icons/action/list';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import LocalDrink from 'material-ui/svg-icons/maps/local-drink';
import PlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import Poll from 'material-ui/svg-icons/social/poll';

const iconStyle = {
  marginTop: 10,
  marginRight: 0,
  marginLeft: 0,
};

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        {this.props.userAuthInfo.loggedIn === true ? (
          <Menu
            className="nav-menu"
            onClick={this.handleToggle}
            style={iconStyle}
            color={white}
          />
        ) : (
          ''
        )}
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link to="/main">
            <MenuItem onClick={this.handleClose} leftIcon={<ActionHome />}>
              Home
            </MenuItem>
          </Link>
          <Link to="/rules">
            <MenuItem onClick={this.handleClose} leftIcon={<LibraryBooks />}>
              Rules Explained
            </MenuItem>
          </Link>
          <Link to="/your-beer">
            <MenuItem onClick={this.handleClose} leftIcon={<LocalDrink />}>
              Your Beer
            </MenuItem>
          </Link>

          <Link to="/beers-list">
            <MenuItem onClick={this.handleClose} leftIcon={<ActionList />}>
              Beers List
            </MenuItem>
          </Link>

          {this.props.gameInfo.currentGame !== undefined ? (
            this.props.gameInfo.currentGame.currentPhase === 'voteBeer' ? (
              <Link to="/vote">
                <MenuItem
                  onClick={this.handleClose}
                  leftIcon={<PlaylistAddCheck />}
                >
                  Vote
                </MenuItem>
              </Link>
            ) : (
              ''
            )
          ) : (
            ''
          )}

          {this.props.gameInfo.currentGame !== undefined ? (
            this.props.gameInfo.currentGame.currentPhase === 'resultBeer' ? (
              <Link to="/results">
                <MenuItem onClick={this.handleClose} leftIcon={<Poll />}>
                  Results
                </MenuItem>
              </Link>
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </Drawer>
      </div>
    );
  }
}

export default AppDrawer;
