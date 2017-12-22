import { connect } from 'react-redux';
import VoteScreen from '../screens/vote_screen';
import { submitVotes } from '../actions/index';

const mapStateToProps = state => {
  return {
    beers: state.beers,
    userDbInfo: state.userDbInfo,
  };
};

const mapDispatchToProps = {
  submitVotes,
};

const VoteScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  VoteScreen
);

export default VoteScreenContainer;
