import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionList from 'material-ui/svg-icons/action/list';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';

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

          <Link to="/belt-list">
            <MenuItem onClick={this.handleClose} leftIcon={<ActionList />}>
              Belt List
            </MenuItem>
          </Link>

          <Link to="/admin-console">
            <MenuItem onClick={this.handleClose} leftIcon={<LibraryBooks />}>
              Admin Console
            </MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default AppDrawer;
