import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
// import Divider from 'material-ui/Divider';
// import Timer from 'material-ui/svg-icons/image/timer';
// import { black500 } from 'material-ui/styles/colors';

// import LinearProgressBarTimer from "../components/linear_progress_bar_timer";
// import TimerCount from "../components/timer_count";

// Pass the amount of seconds until the tasting is over into the LinearProgressBarTimer and TimerCount
// let secondsLeft = 50;
// let startSeconds = 600;

const MainScreen = ({ gameInfo }) => {
  if (gameInfo.currentGame !== undefined) {
    switch (gameInfo.currentGame.currentPhase) {
      case 'addBeer':
        return (
          <div className="main-screen">
            <div className="main-info-wrapper">
              <h2>Current Task:</h2>
              <h3>Add your beer</h3>
              <Link to="/your-beer">
                <RaisedButton
                  className="game-button"
                  label="Add Your Beer"
                  primary={true}
                />
              </Link>
            </div>
          </div>
        );

      case 'drinkBeer':
        return (
          <div className="main-screen">
            <div className="main-info-wrapper">
              <h2>Current Task:</h2>
              <h3>Taste all the beers</h3>
            </div>
          </div>
        );

      case 'voteBeer':
        return (
          <div className="main-screen">
            <div className="main-info-wrapper">
              <h2>Current Task:</h2>
              <h3>Vote on best/worst tasting beers</h3>
              <Link to="/vote">
                <RaisedButton
                  className="game-button"
                  label="Vote"
                  primary={true}
                />
              </Link>
            </div>
          </div>
        );

      case 'resultBeer':
        return (
          <div className="main-screen">
            <div className="main-info-wrapper">
              <h2>Current Task:</h2>
              <h3>Check out the results</h3>
              <Link to="/results">
                <RaisedButton
                  className="game-button"
                  label="Results"
                  primary={true}
                />
              </Link>
            </div>
          </div>
        );
      default:
        return (
          <div className="main-screen">
            <h2>Welcome!</h2>
          </div>
        );
    }
  } else {
    return (
      <div className="main-screen">
        <h2>Welcome!</h2>
      </div>
    );
  }
};

export default MainScreen;

// Old timer code
/*<div className="timer-wrapper">
    <Timer color={black500} className="timer-icon" />
    <h2 className="timer-count">
      <TimerCount secondsLeft={secondsLeft} />
    </h2>
    <LinearProgressBarTimer
      startSeconds={startSeconds}
      secondsLeft={secondsLeft}
    />
  </div>

  <Divider />

  {secondsLeft > 0 ? (
    <Link to="your-beer">
      <RaisedButton
        className="game-button"
        label="Add Your Beer"
        primary={true}
      />
    </Link>
  ) : (
    <RaisedButton className="game-button" label="Vote Now" primary={true} />
  )} */
