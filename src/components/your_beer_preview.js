import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  maxWidth: '60vw',
  padding: 10,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class YourBeerPreview extends Component {
  displayBeerPreview = () => {
    let { beers, userDbInfo } = this.props;
    let userBeer = (beers || []).filter(beer => {
      // eslint-disable-next-line
      return beer.beerId == userDbInfo.beerId;
    });

    if (userBeer[0] !== undefined) {
      return (
        <Paper style={style} zDepth={2}>
          <h2>{userBeer[0].name}</h2>
          <h4 style={{ fontWeight: 400 }}>{userBeer[0].description}</h4>
        </Paper>
      );
    }
  };
  render() {
    return <div>{this.displayBeerPreview()}</div>;
  }
}

export default YourBeerPreview;
