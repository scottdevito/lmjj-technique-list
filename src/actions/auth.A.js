import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  FETCH_USER_DB_INFO,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_USER_AUTH_INFO,
  CLEAR_USER_AUTH_INFO,
  CLEAR_GAME_INFO,
  // CLEAR_BEERS_INFO,
  CLEAR_USER_DB_INFO,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './types';
import firebase from 'firebase';
import db from '../startup/db_init';
import { fetchBeerInfo } from './beer_info.A';
import { fetchGameInfo } from './game_info.A';

const fbRegister = ({ email, password }) => {
  return dispatch => {
    let trimmedEmail = email.trim();
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        // Creates a new user in the Firebase auth system
        .createUserWithEmailAndPassword(trimmedEmail, password)
        .then(user => {
          // Creates a new user in the Firestore db, users collection
          dispatch(createNewUser(user));
          dispatch({ type: REGISTER_SUCCESS, payload: { user } });
          // Uses UID to fetch user info from Firestore db and store in Redux store
          dispatch(fetchUserDbInfo(user));
          // Fetch Beers collection
          dispatch(fetchBeerInfo());
          // Fetch Game Info collection
          dispatch(fetchGameInfo());
          resolve(user);
        })
        .catch(error => {
          dispatch({ type: REGISTER_FAIL, payload: { error } });
          console.error(error);
          reject(error);
        });
    });
  };
};

// Create a new user document in Firestore
const createNewUser = ({ email, uid }) => {
  return dispatch => {
    db
      .collection('users')
      .doc(uid)
      .set({
        email: email.toLowerCase().trim(),
        beerId: null,
        admin: false,
        joinDate: new Date()
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, '/'),
        uid: uid,
        bestVote: '',
        worstVote: '',
      })
      .then(function(userDocRef) {
        dispatch({ type: CREATE_NEW_USER_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: CREATE_NEW_USER_FAIL });
        console.error('Error creating new user: ', error);
      });
  };
};

const fbLogin = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      let trimmedEmail = email.trim();

      firebase
        .auth()
        .signInWithEmailAndPassword(trimmedEmail, password)
        .then(user => {
          // Store user info in the store under auth variable
          dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
          // Uses UID to fetch user info from Firestore db and store in Redux store
          dispatch(fetchUserDbInfo(user));
          // Fetch beers collection
          dispatch(fetchBeerInfo());
          // Fetch Game Info collection
          dispatch(fetchGameInfo());
          // Set store variable loggedIn to true
          dispatch({ type: LOGIN_SUCCESS });
          resolve(user);
        })
        .catch(error => {
          dispatch({ type: LOGIN_FAIL, payload: { error } });
          reject(error);
        });
    });
  };
};

const fbLogout = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: CLEAR_USER_AUTH_INFO });
          dispatch({ type: CLEAR_USER_DB_INFO });
          dispatch({ type: CLEAR_GAME_INFO });
          // Don't clear beers so arrays that call array functions don't become undefined
          // displayBeerInfo in AccountScreen
          // dispatch({ type: CLEAR_BEERS_INFO });
          dispatch({ type: LOGOUT_SUCCESS });
          resolve();
        })
        .catch(error => {
          dispatch({ type: LOGOUT_FAIL, payload: { error } });
          reject(error);
        });
    });
  };
};

const fbLoginPersist = user => {
  return dispatch => {
    dispatch({ type: SET_USER_AUTH_INFO, payload: { user } });
    dispatch(fetchUserDbInfo(user));
    // Fetch beers collection
    dispatch(fetchBeerInfo());
    // Fetch Game Info collection
    dispatch(fetchGameInfo());
    dispatch({ type: LOGIN_SUCCESS, payload: { user } });
  };
};

// Fetch user data from Firestore and set locally in Redux store
// Data is updated in real time
const fetchUserDbInfo = ({ uid }) => {
  return dispatch => {
    const dbInfoDocRef = db.collection('users').doc(uid);

    dbInfoDocRef.onSnapshot(function(doc) {
      dispatch({ type: FETCH_USER_DB_INFO, payload: doc.data() });
    });
  };
};

export {
  fbRegister,
  createNewUser,
  fetchUserDbInfo,
  fbLogin,
  fbLogout,
  fbLoginPersist,
};
