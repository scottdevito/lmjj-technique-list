import { connect } from 'react-redux';
import App from '../App';
import { fbLoginPersist, fbLogout } from '../actions/index';

const mapStateToProps = state => {
  return { userAuthInfo: state.userAuthInfo };
};

const mapDispatchToProps = {
  fbLoginPersist,
  fbLogout,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
