import { FETCH_BEER_INFO, CLEAR_BEERS_INFO } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BEER_INFO:
      return Object.assign([], state, [...action.payload]);
    case CLEAR_BEERS_INFO:
      return Object.assign(...state, []);
    default:
      return state;
  }
}
