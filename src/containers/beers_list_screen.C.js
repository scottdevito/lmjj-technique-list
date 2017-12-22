import { connect } from 'react-redux';
import BeersListScreen from '../screens/beers_list_screen';

const mapStateToProps = state => {
  return {
    beers: state.beers,
  };
};

const mapDispatchToProps = {};

const BeersListScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  BeersListScreen
);

export default BeersListScreenContainer;
