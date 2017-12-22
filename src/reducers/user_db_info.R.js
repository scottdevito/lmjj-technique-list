import { FETCH_USER_DB_INFO, CLEAR_USER_DB_INFO } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_DB_INFO:
      return Object.assign({}, state, { ...action.payload });
    case CLEAR_USER_DB_INFO:
      return Object.assign(...state, {});
    default:
      return state;
  }
}
