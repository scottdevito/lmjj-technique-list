import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  marginTop: '2em',
  maxWidth: '60vw',
  padding: 10,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class UserSubmittedVotes extends Component {
  renderWorstAndBest = () => {
    let { beers, worstVote, bestVote } = this.props;

    let worstBeer = beers.filter(beer => {
      return beer.beerId === worstVote;
    });

    let bestBeer = beers.filter(beer => {
      return beer.beerId === bestVote;
    });

    return (
      <div>
        <div>
          <Paper style={style} zDepth={2}>
            <h2>Your Worst Beer Vote</h2>
            <h3 style={{ fontWeight: 500 }}>{worstBeer[0].name}</h3>
          </Paper>
        </div>

        <div>
          <Paper style={style} zDepth={2}>
            <h2>Your Best Beer Vote</h2>
            <h3 style={{ fontWeight: 500 }}>{bestBeer[0].name}</h3>
          </Paper>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderWorstAndBest()}</div>;
  }
}

export default UserSubmittedVotes;
