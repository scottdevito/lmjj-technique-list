import { FETCH_GAME_INFO } from './types';
import db from '../startup/db_init';

const fetchGameInfo = () => {
  return dispatch => {
    const gameInfoDocRef = db.collection('gameInfo');

    gameInfoDocRef.onSnapshot(function(querySnapshot) {
      var gameInfo = [];
      querySnapshot.forEach(function(querySnapshot) {
        gameInfo.push(querySnapshot.data());
      });
      dispatch({ type: FETCH_GAME_INFO, payload: gameInfo });
    });
  };
};

export { fetchGameInfo };
