import { connect } from 'react-redux';
import YourBeerScreen from '../screens/your_beer_screen';
import { addNewBeer } from '../actions/index';

const mapStateToProps = state => {
  return {
    userDbInfo: state.userDbInfo,
    beers: state.beers,
  };
};

const mapDispatchToProps = {
  addNewBeer,
};

const YourBeerScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  YourBeerScreen
);

export default YourBeerScreenContainer;
