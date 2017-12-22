import { connect } from 'react-redux';
import AccountScreen from '../screens/account_screen';
import { fbLogout } from '../actions/index';

const mapStateToProps = state => {
  return {
    userAuthInfo: state.userAuthInfo,
    userDbInfo: state.userDbInfo,
    beers: state.beers,
  };
};

const mapDispatchToProps = {
  fbLogout,
};

const AccountScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  AccountScreen
);

export default AccountScreenContainer;
