import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import BeersListModal from '../components/beers_list_modal';

class BeersListScreen extends Component {
  mapBeerButtons = () => {
    return (this.props.beers || []).map(beer => {
      return (
        <div className="beer-buttons" key={beer.beerId}>
          <BeersListModal
            beerName={beer.name}
            beerDescription={beer.description}
          />
          <FlatButton label={beer.name} />
        </div>
      );
    });
  };

  render() {
    return <div className="beers-list">{this.mapBeerButtons()}</div>;
  }
}

export default BeersListScreen;
