import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PrivateRoute from '../components/private_route';

const mapStateToProps = state => {
  return {
    userAuthInfo: state.userAuthInfo,
  };
};

const mapDispatchToProps = {};

const PrivateRouteContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
);

export default PrivateRouteContainer;
