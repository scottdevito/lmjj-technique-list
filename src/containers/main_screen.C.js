import { connect } from 'react-redux';
import MainScreen from '../screens/main_screen';

const mapStateToProps = state => {
  return {
    gameInfo: state.gameInfo,
  };
};

const mapDispatchToProps = {};

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  MainScreen
);

export default MainScreenContainer;
