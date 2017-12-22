import { connect } from 'react-redux';
import ResultsScreen from '../screens/results_screen';

const mapStateToProps = state => {
  return {
    beers: state.beers,
  };
};

const mapDispatchToProps = {};

const ResultsScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  ResultsScreen
);

export default ResultsScreenContainer;
