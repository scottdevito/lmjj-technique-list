import {
  FETCH_BEER_INFO,
  ADD_NEW_BEER_SUCCESS,
  ADD_NEW_BEER_FAIL,
} from './types';
import db from '../startup/db_init';

const fetchBeerInfo = () => {
  return dispatch => {
    const beerInfoDocRef = db.collection('beers');

    beerInfoDocRef.onSnapshot(function(querySnapshot) {
      var beers = [];
      querySnapshot.forEach(function(querySnapshot) {
        beers.push(querySnapshot.data());
      });
      dispatch({ type: FETCH_BEER_INFO, payload: beers });
    });
  };
};

// Add a new beer document in Firestore
const addNewBeer = ({ name, description }, { email, uid }) => {
  let newBeeruuid = uuidv4();
  return dispatch => {
    db
      .collection('beers')
      .doc(newBeeruuid)
      .set({
        beerId: newBeeruuid,
        name,
        description,
        bestVotes: 0,
        worstVotes: 0,
        owner: email,
      })
      .then(function() {
        db
          .collection('users')
          .doc(uid)
          .update({
            beerId: newBeeruuid,
          });
      })
      .then(function(userDocRef) {
        dispatch({ type: ADD_NEW_BEER_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: ADD_NEW_BEER_FAIL });
        console.error('Error adding new beer: ', error);
      });
  };
};

const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export { fetchBeerInfo, addNewBeer };
