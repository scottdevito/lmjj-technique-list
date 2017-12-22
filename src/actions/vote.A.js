import { VOTES_SUBMIT_SUCCESS, VOTES_SUBMIT_FAIL } from './types';
import db from '../startup/db_init';

// Add vote to worst beer and best beer vote counts
// Track which beers user voted for
const submitVotes = ({ selectedBeerIds }, { uid }) => {
  let worstBeerId = selectedBeerIds[0];
  let bestBeerId = selectedBeerIds[1];

  return dispatch => {
    let worstVotesDocRef = db.collection('beers').doc(worstBeerId);
    let bestVotesDocRef = db.collection('beers').doc(bestBeerId);

    db
      .runTransaction(function(transaction) {
        return transaction.get(worstVotesDocRef).then(function(doc) {
          let newWorstVotesNumber = doc.data().worstVotes + 1;
          transaction.update(worstVotesDocRef, {
            worstVotes: newWorstVotesNumber,
          });
        });
      })
      .then(function() {
        db.runTransaction(function(transaction) {
          return transaction.get(bestVotesDocRef).then(function(doc) {
            let newBestVotesNumber = doc.data().bestVotes + 1;
            transaction.update(bestVotesDocRef, {
              bestVotes: newBestVotesNumber,
            });
          });
        });
      })
      .then(function() {
        db
          .collection('users')
          .doc(uid)
          .update({
            worstVote: worstBeerId,
            bestVote: bestBeerId,
          });
      })
      .then(function(userDocRef) {
        dispatch({ type: VOTES_SUBMIT_SUCCESS });
      })
      .catch(function(error) {
        dispatch({ type: VOTES_SUBMIT_FAIL });
        console.error('Error submitting votes: ', error);
      });
  };
};

export { submitVotes };
