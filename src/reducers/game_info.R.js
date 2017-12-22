import { FETCH_GAME_INFO, CLEAR_GAME_INFO } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GAME_INFO:
      let gameInfoObj = {
        currentGame: action.payload[0],
      };
      return Object.assign({}, state, { ...gameInfoObj });
    case CLEAR_GAME_INFO:
      return Object.assign(...state, {});
    default:
      return state;
  }
}
